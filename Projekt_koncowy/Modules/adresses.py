import uuid

from sqlalchemy.exc import IntegrityError

from Projekt_koncowy.models import Adresses, session_scope
from .crud_common import get_object


# CREATE


def create_adress(
    adress_id: str,
    city: str,
    zip_code: str,
    street: str,
    building_no: int,
    flat_no: int,
    is_exact_location: bool,
) -> str:
    adress_id = uuid.uuid4().hex
    new_adress = Adresses(
        id=adress_id,
        id_initiative=adress_id,
        city=city,
        zip_code=zip_code,
        street=street,
        building_no=building_no,
        flat_no=flat_no,
        exact_location=is_exact_location,
    )
    try:
        with session_scope() as session:
            session.add(new_adress)
    except IntegrityError:
        return False
    return True  # TODO tuple with bool and uuid?


def update_adress(adress_data: dict) -> str:
    adress = get_object(Adresses, adress_data["adress_id"])
    try:
        with session_scope():
            adress.city = adress_data["city"]
            adress.zip_code = adress_data["zip_code"]
            adress.street = adress_data["street"]
            adress.building_no = adress_data["building_no"]
            adress.flat_no = adress_data["flat_no"]
            adress.exact_location = adress_data["is_exact_location"]
    except IntegrityError:
        return False
    return True  # TODO tuple with bool and uuid?
