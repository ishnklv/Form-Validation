import React from 'react'
import styles from './Navbar.module.scss'
import LogoIcon from '@material-ui/icons/Android';
import {Container, IconButton} from '@material-ui/core'
import AccountIcon from '@material-ui/icons/AccountCircle';
import {DialogMenu} from "../Dialog";

interface NavbarProps {

}

export const Navbar: React.FC<NavbarProps> = () => {
    const [openDialog, setOpenDialog] = React.useState<boolean>(false)

    const handleOpenDialog = () => {
        setOpenDialog(true)
    }

    const handleCloseDialog = () => {
        setOpenDialog(false)
    }

    return (
        <header className={styles.header}>
            <Container maxWidth="md">
                <nav className={styles.nav}>
                    <div className={styles.logo}>
                        <LogoIcon />
                    </div>
                    <IconButton onClick={handleOpenDialog}>
                        <AccountIcon />
                    </IconButton>
                </nav>
            </Container>
            <DialogMenu handleClose={handleCloseDialog} openDialog={openDialog} />
        </header>
    )
}