import { useState } from "react";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import Modal from "../UI/Modal/Modal";
import style from './AddUser.module.css'

function AddUser(props) {
    const [ inputs, setInputs ] = useState({
        name: '',
        age: '',
    });

    const [error, setError] = useState(false);

    const [errorMessage, setErrorMessage] = useState({
        title: '',
        message: ''
    })

    const inputNameHandler = (event) => {
        setInputs((prevState) => {
           return {...prevState, name: event.target.value}
        })
    }

    const inputAgeHandler = (event) => {
        setInputs((prevState) => {
           return {...prevState, age: event.target.value}
        })
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const inputData = {...inputs, id: Math.random().toString()}

        if(inputs.name === "" || inputs.age === ""){
            setError(true);

            setErrorMessage({
                title: 'Invalid Input',
                message: 'Field cannot be empty. Please enter a value before submitting.'
            })
        }else if (inputs.age <= 0){
            setError(true);

            setErrorMessage({
                title: 'Invalid Age',
                message: 'Age cannot be equal or less than 0.'
            })
        }
        else{
            props.userData(inputData)
            setInputs({
                name: '',
                age: '',
            })
        }
    }


    
    const confirmHandler = () => {
        setError(null);
    }

    return (
       <div>
        {error && <Modal title={errorMessage.title} message={errorMessage.message} onConfirm={confirmHandler}></Modal>}
        <Card>
            <form onSubmit={submitHandler}>
                <div className={style.input}>
                    <label>Name</label>
                    <input value={inputs.name} type='text' onChange={inputNameHandler} />
                    <label>Age</label>
                    <input value={inputs.age} type='number' onChange={inputAgeHandler} />
                </div>
                <Button type='submit'>Add User</Button>
            </form>
        </Card>
       </div>
        
    )
}

export default AddUser;