import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Button from '../../components/AButton'
import TextField from '../../components/BTextField'
import { addUser } from './userSlice'

const AddUser = () => {

    const dispatch = useDispatch();
    const Navigate = useNavigate();
    const [values, setValues] = useState({
        name: '',
        email: ''
    });

    const HandleAddUser = () => {
        setValues({ name: '', email: '' })
        dispatch(addUser({
            id: uuidv4(),
            name: values.name,
            email: values.email
        }))
        Navigate('/');
    }
    return (
        <div className='mt-10 max-w-xl mx-auto'>
            <TextField
                lable='Name'
                value={values.name}
                onChange={(e) => setValues({ ...values, name: e.target.value })}
                inputProps={{ type: 'text', placeholder: 'enter name' }}>
            </TextField>
            <br></br>
            <TextField
                lable="Email"
                value={values.email}
                onChange={(event) => setValues({ ...values, email: event.target.value })}
                inputProps={{ type: 'email', placeholder: 'enter email' }}>
            </TextField>

            <Button onClick={HandleAddUser} >Submit</Button>
        </div>
    )
}

export default AddUser
