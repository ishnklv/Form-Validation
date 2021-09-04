import React from 'react'
import {Dialog, DialogContent, Typography} from "@material-ui/core";
import {Authentication} from "../Authentication";
import styles from './Dialog.module.scss'
import {Login} from "../Forms/Login";
import BackIcon from '@material-ui/icons/KeyboardBackspace';
import {Register} from "../Forms/Register";

interface DialogMenuProps {
    openDialog: boolean,
    handleClose: () => void;
}

export const DialogMenu: React.FC<DialogMenuProps> = ({openDialog, handleClose}) => {
    const [type, setType] = React.useState<'main' | 'login' | 'register'>('main')
    return (
        <Dialog fullWidth maxWidth="xs" open={openDialog} onClose={handleClose} className={styles.dialog}>
            <DialogContent className={styles.wrapper}>
                <Typography style={{cursor: 'pointer'}} onClick={() => setType('main')} className={styles.title} variant="h6">{type === 'login' ? (<span style={{display: 'flex', alignItems: 'center'}}><BackIcon /> Back to Auth</span>) : type === 'main' ? 'Authorization' : type === 'register' ? (<span style={{display: 'flex', alignItems: 'center'}}><BackIcon /> Back to Auth</span>) : ''}</Typography>
                {type === 'main' && <Authentication onOpenLogin={() => setType('login')} />}
                {type === 'login' && <Login onOpenRegister={() => setType('register')} />}
                {type === 'register' && <Register onOpenLogin={() => setType('login')} />}
            </DialogContent>
        </Dialog>
    )
}