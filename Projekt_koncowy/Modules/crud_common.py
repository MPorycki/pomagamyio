from Projekt_koncowy.models import session_scope


# READ

def convert_to_dict(query_result):
    return query_result.__dict__


def get_object(object_table, object_id: str):
    """
    Gets a single object record from the database
    :param object_table: the table where the requested object resides
    :param object_id: object_id of the user that is supposed to be returned
    :return: Requested object
    """
    with session_scope() as session:
        return (
            session.query.session(object_table)
            .filter(object_table.id == object_id)
            .first()
        )


def fetch_object(object_table, object_id: str ) -> dict:
    """
    Prepares object data to be sent as JSON to the frontend
    :param object_table: the table where the requested object resides
    :param object_id: account_id of the user that is supposed to be returned
    :return: User data as dict
    """
    return convert_to_dict(get_object(object_table, object_id))


def all_objects_from_db(object_table):
    """
    Gets all user objects from the database
    :return: a user object
    """
    with session_scope() as session:
        for _object in session.query(object_table).all():
            yield _object


def fetch_all_objects(object_table) -> dict:
    """
    :return: list of all objects for frontend
    """
    key_name = object_table.__tablename__
    result = {key_name: []}
    for _object in all_objects_from_db(object_table):
        result[key_name].append(convert_to_dict(_object))
    return result


# DELETE

def delete_object(object_table, object_id: str):
    try:
        with session_scope() as session:
            project = get_object(object_table, object_id)
            project.delete()
            session.commit()
        return True
    except Exception as e:
        print(e)
        return False
