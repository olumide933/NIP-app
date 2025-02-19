import Button from "../../assets/components/reuseable/Button";
import { increament } from "../../Services/Action";
import "./Features.css"
import {useState} from 'react';
import { useSelector,useDispatch } from "react-redux";


const features =() => {
    const dispatch =useDispatch();
    
    const useNumber = useSelector((state) => state.myReducer.myValue);
   
    const increamentState =() =>{
        dispatch(increament());
        alert(`50 added to the state and the value is ${useNumber +50}`);
    };
   

    const stateUserName = useSelector((state) => state.myReducer.userName)
const [myName, setState] =useState('Olumide');
const [counter, setCounter] =useState(0)


console.log(stateUserName)

const increaseCount= () => {
    setCounter(counter *3);
};
const decreaseCount =() =>{
    setCounter(counter -100)
};

    return(
        <div className="featureContainer">
            <button onClick={increamentState}>Add 5 to state value</button>
            <h1>My Name is {stateUserName}</h1>
            <h2>This is {stateUserName} counter Application {useNumber}</h2>
            <h1>{stateUserName} Current Count: {counter}</h1>
            <Button title="increase" btnClick={increaseCount} />
            {/* <button onClick={increaseCount}>Increase</button>  */}
            <br />
            {/* <Button title="increase" bgColor ="blue" /> */}
            <br />
            <button onClick={decreaseCount}>Decrease</button>

        </div>
    );
};

export default features