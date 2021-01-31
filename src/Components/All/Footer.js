import React from "react";
import CopyrightIcon from '@material-ui/icons/Copyright';
import './Footer.css';

export default function Footer(props) {
    return (
            <div className={"footer"}>
                <CopyrightIcon className={'copy-right'}/>
            <span>InstaRent</span>
        </div>
    );
}
