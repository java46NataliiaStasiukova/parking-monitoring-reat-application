import { useDispatch } from "react-redux";
import CarForm from "../forms/CarForm"
import { addCar } from "../../redux/actions";
import { CarModel } from "../../models/CarModel";


const AddCarPage: React.FC = () => {
    const dispatch = useDispatch();
    function onSubmit(car: CarModel){
        console.log(`adding car: ${car}`);
        dispatch(addCar(car));
    }
    return <>
        <CarForm submitFn={onSubmit}></CarForm>
    </>
    
}

export default AddCarPage;