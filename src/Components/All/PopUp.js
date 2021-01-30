import React, {useState} from 'react';
import './PopUp.css';
import {ButtonBase, Modal} from "@material-ui/core";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";

const PopUp = (props) => {

    const okBtn = () => {
        return (
            <ButtonBase className={'okBtn'} centerRipple={true} onClick={props.onSubmit}>
                <p style={{width: '30px'}}>OK</p>
            </ButtonBase>
        )
    }

    const renderModal = () => {
        return (
            <div className={'popup'}>
                <div className={'title'}>
                    <h1>
                        {props.title}
                    </h1>
                    <ButtonBase className={'closeBtn'} onClick={props.closePopup}>
                        <CloseRoundedIcon/>
                    </ButtonBase>
                </div>
                <div className={'deatils'}>
                    {props.children}
                </div>
                <div className={'divBtn'}>
                    {okBtn()}
                </div>
            </div>
        )
    }

    return (
        <Modal open={props.open} onClose={props.closePopup}>
            {renderModal()}
        </Modal>
    )
}

export default PopUp;