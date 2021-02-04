import React from 'react';
import './PopUp.css';
import {ButtonBase, Modal} from "@material-ui/core";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";

const PopUp = (props) => {

    const sendBtn = () => {
        return (
            <ButtonBase className={'okBtn'} centerRipple={true} onClick={props.onSubmit}>
                <p>SEND</p>
            </ButtonBase>
        )
    }


    const okBtn = () => {
        return (
            <ButtonBase className={'okBtn'} centerRipple={true} onClick={props.onSubmit}>
                <p>OK</p>
            </ButtonBase>
        )
    }

    const contactOwnerBtn = () => {
        return (
            <ButtonBase className={'okBtn'} centerRipple={true} onClick={props.onSubmit}>
                <p>CONTECT OWNER</p>
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
                    {props.sendBtn ? sendBtn() : okBtn()}
                </div>
            </div>
        )
    }

    return (
        <Modal open={props.open} onClose={props.closePopup} style={{overflow:'scroll'}}>
            {renderModal()}
        </Modal>
    )
}

export default PopUp;