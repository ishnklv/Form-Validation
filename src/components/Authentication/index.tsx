import React from 'react'
import styles from './Authentication.module.scss'
import {Button} from '@material-ui/core'
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';

interface AuthenticationProps {
    onOpenLogin: () => void;
}

export const Authentication: React.FC<AuthenticationProps> = ({onOpenLogin}) => {
    return (
        <div className={styles.wrapper}>
            <Button fullWidth variant="contained" className={styles.btn}>
                <FacebookIcon className={styles.icon}/>
                Facebook
            </Button>
            <Button fullWidth variant="contained" className={styles.btn}>
                <GitHubIcon className={styles.icon}/>
                Github
            </Button><Button onClick={() => onOpenLogin()} fullWidth variant="contained" className={styles.btn}>
                <EmailIcon className={styles.icon}/>
                Email
            </Button>
        </div>
    )
}