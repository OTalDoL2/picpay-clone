import React, { useState } from "react";
import './style.css';
import {FiEyeOff, FiEye, FiMinus} from "react-icons/fi";
import Options from "./options";

const MainOptions = () => {
    const [toggleState, setToggleState] = useState(false);
    const toggle = () => {  setToggleState(!toggleState); }

    return(
        <div className="main">
            <div className="cashSpace">
                <div className="saldo">
                    <p className="saldo-cash"> Saldo PicPay
                        <br/> <b>R$</b>
                        <button className="icon" onClick={toggle}>
                            {toggleState ? [ <b>1198 <FiEyeOff /> </b>] : [ <b> <FiMinus /> <FiEye /> </b>]}
                        </button>                        
                    </p> 
                </div>
                <button className="extract"><b>EXTRATO</b></button>
            </div> 
            <Options />
        </div>
    );
};

export default MainOptions;