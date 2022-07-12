import React from "react"; 
import './style.css';
import { IoChatboxOutline, IoHeartOutline, IoLockClosedOutline, IoLockOpenOutline } from "react-icons/io5";
import profile from '../../img/LucasMatheus.png'

const BoxMov = (props) => {
    return(
        <div className="box-mov">
            <div className="line-one">
                <img src={profile} />
                <p><b>Você</b> {props.pr ? [ 'enviou' ] : [ 'recebeu' ]} um <b>Pix</b></p>
            </div>
            <div className="line-two">
                {props.pr ? [ <p className="is-pay">R${props.value},00 </p> ] : [ <p className="is-recieve">R${props.value},00 </p> ]}
                <p className="details-pay" > | {props.lock ? [<IoLockClosedOutline />] : [<IoLockOpenOutline />]} {props.time} semanas atrás</p>
                <IoChatboxOutline className="details-icon" />
                <IoHeartOutline className="details-icon" />
            </div>
        </div>
    );
};
export default BoxMov;