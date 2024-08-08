import React, { useState } from 'react'
import '../css/LoginPage.css'
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import Button from '@mui/material/Button';
import { toast } from 'react-toastify';
import { useFormik } from 'formik';
import { loginSchemas } from '../schemas/LoginSchemas';
import { LoginResponse } from '../types/Types';
import registerPageService from '../services/RegisterPageService';
import { useNavigate } from 'react-router-dom';

function RegisterPage() {

    const navigate = useNavigate();

    const submit = async (values: any, action: any) => {
        const payload: LoginResponse = {
            balance: 1000,
            username: values.username,
            password: values.password
        }
        const response: LoginResponse = await registerPageService.register(payload)
        toast.success(response.username + " kullanıcısı başarıyla oluşturuldu")
        clear();
        navigate('/login')
    }

    const { values, errors, handleSubmit, handleChange, resetForm } = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        onSubmit: submit,
        validationSchema: loginSchemas,

    });

    const clear = () => {
        resetForm();
    }

    return (
        <div className='login'>
            <form onSubmit={handleSubmit}>
                <div style={{ width: '400px', padding: '40px 10px', boxShadow: '1px 2px 3px grey', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>

                    < TextField
                        value={values.username}
                        onChange={handleChange}
                        sx={{ width: '300px', marginBottom: '15px' }
                        }
                        id="username"
                        label="Kullanıcı Adı"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <FaUser />
                                </InputAdornment>
                            ),
                        }}
                        helperText={errors.username && <span style={{ color: 'red', fontSize: '11px' }}>{errors.username}</span>}
                        variant="standard"
                    />

                    <TextField
                        id="password"
                        label="Şifre"
                        value={values.password}
                        onChange={handleChange}
                        sx={{ width: '300px', marginBottom: '15px', fontSize: '5px' }}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <RiLockPasswordFill />
                                </InputAdornment>
                            ),
                        }}
                        helperText={errors.password && <span style={{ color: 'red', fontSize: '11px' }}>{errors.password}</span>}
                        variant="standard"
                    />

                    <div className='button-div'>
                        <Button type='submit' size='small' color='info' variant="contained" sx={{ textTransform: 'none', marginRight: '10px' }}>Kaydol</Button>
                        <Button onClick={clear} size='small' color='inherit' variant="contained" sx={{ textTransform: 'none' }}>Temizle</Button>
                    </div>

                </div >
            </form>
        </div >
    )
}

export default RegisterPage