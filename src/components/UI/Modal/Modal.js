import React, {Fragment} from 'react';
import styles from './Modal.css';
import Backdop from '../Backdrop/Backdrop';

const modal = (props) => (
    <Fragment>
        <Backdop show={props.show} clicked={props.modalClosed}/>
        <div className={styles.Modal}
             style={{
                 transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                 opacity: props.show ? '1' : '0'
             }}>
            {props.children}
        </div>
    </Fragment>
);

export default modal;