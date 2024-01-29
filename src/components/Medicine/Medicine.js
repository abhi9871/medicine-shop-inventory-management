import { Fragment } from "react";
import MedicineForm from "./MedicineForm";
import MedicineAvailable from "./MedicineAvailable";

const Medicine = () => {
    return (
        <Fragment>
            <MedicineForm />
            <MedicineAvailable />
        </Fragment>
    )
}

export default Medicine;