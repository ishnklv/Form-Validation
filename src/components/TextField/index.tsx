import React from 'react'
import {TextField} from '@material-ui/core'
import styles from './TextField.module.scss'

interface InputFieldProps {
    placeholder: string,
    fullWidth: boolean,
    name: string,
    type: string,
}

export const InputField: React.FC<InputFieldProps> = ({placeholder, fullWidth, name, type}) => {
    return (
        <TextField className={styles.input} type={type} fullWidth={fullWidth} name={name} variant="outlined" label={placeholder}/>
    )
}