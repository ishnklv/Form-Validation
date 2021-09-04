import React from 'react'
import {InputField} from "../../TextField";
import {Button, TextField} from "@material-ui/core";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {RegisterFormSchema} from "../../../utils/schemas/AuthValidation";

import styles from './Register.module.scss'

interface RegisterProps {
    onOpenLogin: () => void;
}

export const Register: React.FC<RegisterProps> = ({onOpenLogin}) => {
    const form = useForm({
        mode: 'onSubmit',
        resolver: yupResolver(RegisterFormSchema),
    })

    const onSubmit = (data: any) => console.log(data)

    return (
        <form onSubmit={form.handleSubmit(onSubmit)} className={styles.form}>
            <TextField
                {...form.register('fullName')}
                name="fullName"
                label="Full name"
                type="text"
                helperText={form.formState.errors.fullName?.message}
                error={!!form.formState.errors.fullName?.message}
                className="mb-20"
                variant="outlined"
                fullWidth
            />
            <TextField
                {...form.register('email')}
                name="email"
                className="mb-20"
                variant="outlined"
                error={!!form.formState.errors.email?.message}
                helperText={form.formState.errors.email?.message}
                label="Email"
                type="text"
                fullWidth
            />
            <TextField
                {...form.register('password')}
                name="password"
                label="Password"
                className="mb-20"
                helperText={form.formState.errors.password?.message}
                error={!!form.formState.errors.password?.message}
                variant="outlined"
                type="password"
                fullWidth
            />
            <TextField
                {...form.register('confirmPassword')}
                name="confirmPassword"
                label="Confirm password"
                type="password"
                helperText={form.formState.errors.confirmPassword?.message}
                error={!!form.formState.errors.confirmPassword?.message}
                className="mb-20"
                variant="outlined"
                fullWidth
            />
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <Button variant="contained" type="submit" color="primary">Register</Button>
                <Button variant="text" onClick={() => onOpenLogin()}>Log In</Button>
            </div>
        </form>
    )
}