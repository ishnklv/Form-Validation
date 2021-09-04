import React from 'react'
import {Button, TextField} from "@material-ui/core";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {LoginFormSchema} from "../../../utils/schemas/AuthValidation";
import styles from './Login.module.scss'
interface LoginProps {
    onOpenRegister: () => void;
}

export const Login: React.FC<LoginProps> = ({onOpenRegister}) => {
    const form = useForm({
        mode: 'onSubmit',
        resolver: yupResolver(LoginFormSchema)
    })

    const onSubmit = (data: any) => console.log(data)

    console.log(form.formState.errors)

    return (
        <form onSubmit={form.handleSubmit(onSubmit)} className={styles.form}>
                <TextField
                    {...form.register('email')}
                    name="email"
                    label="Email"
                    type="text"
                    error={!!form.formState.errors.email?.message}
                    className="mb-20"
                    fullWidth
                    helperText={form.formState.errors.email?.message}
                    variant="outlined"
                />
                <TextField
                    {...form.register('password')}
                    name="password"
                    label="Password"
                    type="password"
                    error={!!form.formState.errors.password?.message}
                    className="mb-20"
                    variant="outlined"
                    helperText={form.formState.errors.password?.message}
                    fullWidth
                />
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <Button variant="contained" type="submit" color="primary">Log In</Button>
                <Button onClick={() => onOpenRegister()} variant="text">Register</Button>
            </div>
        </form>
    )
}