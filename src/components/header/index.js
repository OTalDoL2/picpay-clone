import React, { useState } from "react";
import './style.css';
import imagemPerfil from '../../img/LucasMatheus.png';
import {FiMessageCircle} from "react-icons/fi";
import { IoChatbubblesOutline } from "react-icons/io5";

const Header = () => {
    return(
        <div className="barTop">
            <div className="content">
                <img src={imagemPerfil} />
                <div className="idName">
                    <p>Olá, <br/>
                    <b>@lucas.matheus2696 > </b> </p>
                </div>
                <IoChatbubblesOutline className="messageBox" />
            </div>
        </div>
    );
};

export default Header;