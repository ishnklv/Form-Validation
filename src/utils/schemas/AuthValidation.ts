import * as yup from 'yup'

export const LoginFormSchema = yup.object().shape({
    email: yup.string().email('Wrong Email').required('Email required'),
    password: yup.string().min(6, 'Password must be at least 6 lines long').required('Password required')
})

export const RegisterFormSchema = yup.object().shape({
    fullName: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match').required()
})