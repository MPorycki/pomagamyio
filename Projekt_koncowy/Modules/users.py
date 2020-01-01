import datetime
import uuid

from passlib.hash import sha256_crypt
from sqlalchemy.exc import IntegrityError

from Projekt_koncowy.models import Accounts, Sessions, session_scope

# CREATE


def register_user(
    email: str,
    raw_password: str,
    name: str,
    surname: str,
    account_type: str,
    username: str,
) -> bool:
    """
    Registers the user by creating an account record in the database
    :param email: email of the user
    :param raw_password: direct password inputted by the user into the form
    :param name: first name of the user
    :param surname: last name of the user
    :param account_type: user or admin
    :param username: username of the user, has to be unique
    :return: Info about the success of registration
    """
    created_at = datetime.datetime.now()
    account_id = uuid.uuid4().hex
    password = sha256_crypt.hash(raw_password)
    name = name
    surname = surname
    username = username
    _type = account_type
    new_user = Accounts(
        id=account_id,
        email=email,
        hashed_password=password,
        created_at=created_at,
        name=name,
        surname=surname,
        username=username,
        type=_type,
        hearts_raiting=0,
        skills={},
    )
    try:
        with session_scope() as session:
            session.add(new_user)
    except IntegrityError:
        return False
    return True


def user_with_given_email_exists(email: str) -> bool:
    """
    Verifies whether the provided email belongs to an existing user
    :param email: Provided email
    :return: Boolean with the result of the check of email existence
    """
    with session_scope() as session:
        return session.query(Accounts).filter(Accounts.email == email).exists()


# READ


def convert_to_dict(query_result):
    return query_result.__dict__


def get_user(account_id: str) -> Accounts:
    """
    Gets a single user record from the database
    :param account_id: account_id of the user that is supposed to be returned
    :return: Requested user object
    """
    with session_scope() as session:
        return (
            session.query.session(Accounts)
            .filter(Accounts.id == account_id)
            .first()
        )


def fetch_user(account_id: str) -> dict:
    """
    Prepares user data to be sent as JSON to the frontend
    :param account_id: account_id of the user that is supposed to be returned
    :return: User data as dict
    """
    return convert_to_dict(get_user(account_id))


def all_users_from_db() -> Accounts:
    """
    Gets all user objects from the database
    :return: a user object
    """
    with session_scope() as session:
        for user in session.query(Accounts).all():
            yield user


def fetch_all_users() -> dict:
    """
    :return: list of all users for frontend
    """
    result = {"users": []}
    for user in all_users_from_db():
        result["users"].append(convert_to_dict(user))
    return result


# UPDATE


def update_user(user_data: dict) -> bool:
    """
    Update user data
    :param user_data: data of the given user account to be updated
    :return:
    """
    user = get_user(user_data["account_id"])
    try:
        with session_scope() as session:
            user.username = user_data["Username"]
            user.name = user_data["name"]
            user.surname = user_data["surname"]
            user.email = user_data["email"]
            session.commit()
        return True
    except Exception as e:
        print(e)
        return False


def change_password(account_id: str, new_password: str) -> str:
    """
    Changes the password for the user
    :param account_id: user's account_id
    :param new_password: user's new password
    :return:
    """
    with session_scope() as session:
        user = (
            session.query(Accounts).filter(Accounts.id == account_id).first()
        )
        new_password_hash = sha256_crypt.hash(new_password)
        user.hashed_password = new_password_hash
        return "password_changed"
    return "password_not_changed"


def update_profile_pic():
    pass


# DELETE


def delete_user(account_id: str):
    """
    Deleted an user account
    :param account_id: account_id of the user that is supposed to be removed
    :return:
    """
    try:
        with session_scope() as session:
            user = get_user(account_id)
            user.delete()
            session.commit()
        return True
    except Exception as e:
        print(e)
        return False


# AUTHENTICATION


def login(username: str, raw_password: str) -> (str, str):
    """
    Log ins the user based on the username and password they provide
    :param username: username of the customer
    :param raw_password:direct password inputted by the user into the form
    :return: Session_id and the corresponding account_id or None, None if failed
    """
    with session_scope() as session:
        encrypted_from_db = str(
            session.query(Accounts.hashed_password)
            .filter(Accounts.username == username)
            .first()[0]
        )
        account_id = (
            session.query(Accounts.id)
            .filter(Accounts.username == username)
            .first()[0]
        )
    if sha256_crypt.verify(raw_password, encrypted_from_db):
        session_id = create_session_for_user(account_id)
        return session_id, account_id
    return None, None


def create_session_for_user(account_id: str) -> str:
    """
    Creates session for the given user
    :param account_id:
    :return: newly created session_id
    """
    session_id = uuid.uuid4().hex
    created_at = str(datetime.datetime.now())
    new_session = Sessions(
        um_accounts_id=account_id, session_id=session_id, created_at=created_at
    )
    with session_scope() as session:
        session.add(new_session)
    return session_id


def session_exists(session_id: str, account_id: str) -> bool:
    """
    Verifies whether a particular session exists for a particular user
    :return: Boolean value confirming whether the session exists or not
    """
    with session_scope() as session:
        exists_object = (
            session.query(Sessions)
            .filter(
                Sessions.session_id == session_id,
                Sessions.um_accounts_id == account_id,
            )
            .exists()
        )
        return session.query(exists_object).scalar()


def logout(session_id: str, account_id: str) -> str:
    """
    Logouts the user based on session_id and account_id
    :return: string with the information about the logout status
    """
    if session_exists(session_id, account_id):
        with session_scope() as session:
            session.query(Sessions).filter(
                Sessions.session_id == session_id
            ).delete()
            return "logout_successful"
    return "logout_unsuccessful"
