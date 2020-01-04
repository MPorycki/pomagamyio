import datetime
import uuid

from sqlalchemy.exc import IntegrityError

from Projekt_koncowy.models import InitiativesParticipants, session_scope
from .crud_common import get_object, all_objects_from_db, convert_to_dict


# CREATE

def add_participant(account_id: str, project_id: str, role: str):
    id = uuid.uuid4().hex
    participant = InitiativesParticipants(
        id=id,
        id_participant=account_id,
        id_project=project_id,
        joined_at=datetime.datetime.now(),
        role=role,
        contributed=False
    )
    try:
        with session_scope() as session:
            session.add(participant)
    except IntegrityError:
        return False
    return True # TODO tuple with bool and uuid?


# READ
def get_all_participants(project_id: str):
    all_participants = all_objects_from_db(InitiativesParticipants)
    project_participants = [x for x in all_participants if x.id_project == project_id]
    return project_participants


def fetch_all_participants(project_id):
    """
        :return: list of all objects for frontend
        """
    key_name = "participants"
    result = {key_name: []}
    for _object in get_all_participants(project_id):
        result[key_name].append(convert_to_dict(_object))
    return result


# UPDATE

def update_participant(participant_id: str, new_role: str ):
    participant = get_object(InitiativesParticipants, participant_id)
    try:
        with session_scope():
            participant.role = new_role
    except IntegrityError:
        return False
    return True  # TODO tuple with bool and uuid?
