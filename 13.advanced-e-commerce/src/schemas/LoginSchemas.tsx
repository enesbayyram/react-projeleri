import * as yup from 'yup';

export const loginSchemas = yup.object().shape({
    username: yup.string().required('Kullanıcı adı zorunlu'),
    password: yup.string().required('Şifre alanı zorunlu')
})