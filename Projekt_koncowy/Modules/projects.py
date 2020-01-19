import datetime
import uuid

from sqlalchemy.exc import IntegrityError

from .adresses import create_adress, update_adress
from Projekt_koncowy.models import Projects, session_scope
from .crud_common import *


# CREATE


def create_project(
    name: str,
    owner_id: str,
    descr: str,
    start_date: datetime,
    end_date: datetime,
    adress: dict,
    requested_participants: int,
):
    project_id = uuid.uuid4().hex
    adress_id = create_adress(adress)
    new_project = Projects(
        id=project_id,
        id_owner=owner_id,
        name=name,
        Description=descr,
        start_date=start_date,
        end_date=end_date,
        created_at=datetime.datetime.now(),
        id_adress=adress_id,
        requested_participants=requested_participants,
        is_active=True,
    )
    try:
        with session_scope() as session:
            session.add(new_project)
    except IntegrityError:
        return False
    return True # TODO tuple with bool and uuid?


# UPDATE

def update_project(project_data:dict):
    project = get_object(Projects, project_data["project_id"])
    try:
        with session_scope():
            project.name = project_data["name"]
            project.Description = project_data["description"]
            project.requested_participants = project_data["requested_participants"]
            project.name = project_data["name"]
            project.id_adress = update_adress(project_data["adress"])
    except IntegrityError:
        return False
    return True  # TODO tuple with bool and uuid?

