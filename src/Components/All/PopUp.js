import React, {useState} from 'react';
import './PopUp.css';
import {ButtonBase, Modal} from "@material-ui/core";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";

const PopUp = (props) => {

    const wantAsset = () => {
        return (
            <ButtonBase className={'okBtn'} centerRipple={true} onClick={props.onSubmit}>
                <p style={{width: '200px'}}>CONTACT OWNER</p>
            </ButtonBase>
        )
    }


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
                    {props.WantAsset ? wantAsset() : okBtn()}
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