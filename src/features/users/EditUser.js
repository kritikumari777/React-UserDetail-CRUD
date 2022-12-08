import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../../components/AButton'
import TextField from '../../components/BTextField'
import { editUser } from './userSlice';


const EditUser = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const users = useSelector(store => store.users);
    const navigate = useNavigate();
    const existingUser = users.filter(user => user.id === params.id);
    const { name, email } = existingUser;
    const [values, setValues] = useState({
        name: name,
        email: email
    });

    const HandleEditUser = () => {
        setValues({ name: '', email: '' })
        dispatch(editUser({
            id: params.id,
            name: values.name,
            email: values.email
        }, []))
        navigate('/');
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

            <Button onClick={HandleEditUser}> Save Edit</Button>
        </div>
    )
}

export default EditUser
