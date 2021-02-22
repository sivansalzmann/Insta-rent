import React from 'react';
import './PopUp.css';
import {ButtonBase, Modal} from "@material-ui/core";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";

export default function PopUp(props) {
    const sendBtn = () => {
        return (
            <ButtonBase className={'okBtn'} centerRipple={true} onClick={props.onSubmit}>
                <p>Send</p>
            </ButtonBase>
        )
    }
    const okBtn = () => {
        return (
            <ButtonBase className={'okBtn'} centerRipple={true} onClick={props.onSubmit}>
                <p>Ok</p>
            </ButtonBase>
        )
    }
    const showBt = () => {
        if(props.showBt === true) {
            return (
                <div className={'divBtn'}>
                    {props.sendBtn ? sendBtn() : okBtn()}
                </div>
            )
        }
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
               {showBt()}
            </div>
        )
    }
    return (
        <Modal open={props.open} onClose={props.closePopup} style={{overflow:'scroll'}}>
            {renderModal()}
        </Modal>
    )
}

