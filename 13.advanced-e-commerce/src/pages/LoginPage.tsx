import React, { useState } from 'react'
import '../css/LoginPage.css'
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import Button from '@mui/material/Button';
import loginPageService from '../services/LoginPageService';
import { toast } from 'react-toastify';
import { useFormik } from 'formik';
import { loginSchemas } from '../schemas/LoginSchemas';
import { LoginResponse } from '../types/Types';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCurrentUser, setLoading } from '../redux/appSlice';
import storageService from '../services/StorageService';

function LoginPage() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    interface CheckType {
        result: boolean,
        user: LoginResponse | null
    }

    const checkUser = (response: Array<LoginResponse>, username: string, password: string): CheckType => {
        const checkResponse: CheckType = {
            result: false,
            user: null
        }
        response.forEach((user: LoginResponse) => {
            if (user.username === username && user.password === password) {
                checkResponse.result = true;
                checkResponse.user = user;
            }
        })
        return checkResponse;
    }


    const login = async (username: string, password: string) => {
        if (!username || !password) {
            toast.warn("Bütün alanları doldurunuz");
            return;
        }
        try {
            dispatch(setLoading(true));
            const response = await loginPageService.login();
            if (response) {
                const checkTypeResponse: CheckType = checkUser(response, username, password);
                if (checkTypeResponse.result) {
                    dispatch(setCurrentUser(checkTypeResponse.user))
                    storageService.write("currentUser", checkTypeResponse.user);
                    navigate('/');
                } else {
                    toast.warn("Kullanıcı adı veya şifre hatalı")
                }
                dispatch(setLoading(false));
            }

        } catch (error: any) {
            toast.error("Login servisi hata", error)
        }
    }

    const submit = (values: any, action: any) => {
        login(values.username, values.password);
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

                        <div >
                            <Button type='submit' size='small' color='info' variant="contained" sx={{ textTransform: 'none', marginRight: '10px' }}>Giriş Yap</Button>

                            <Button onClick={() => navigate("/register")} size='small' variant="contained" sx={{ textTransform: 'none', backgroundColor: '#CA964C', marginRight: '10px' }}>Kaydol</Button>

                            <Button onClick={clear} size='small' color='inherit' variant="contained" sx={{ textTransform: 'none' }}>Temizle</Button>


                        </div>

                    </div>

                </div >
            </form>
        </div >
    )
}

export default LoginPage