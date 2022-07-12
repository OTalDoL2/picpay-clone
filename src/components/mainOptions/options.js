
import React, { useState, useEffect, useRef } from "react";
import './style.css';
import {FiBox, FiCreditCard, FiSmartphone, FiUsers} from "react-icons/fi";
import { IoBarcodeOutline, IoBusOutline, IoBusinessOutline, IoPeopleOutline } from "react-icons/io5";
import {motion} from "framer-motion";
import { MdQrCodeScanner } from "react-icons/md"; 

const Options = () => {
    const [width, setWidth] = useState(0)
    const carousel = useRef();

    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth); //Limite Máximo, para não criar um carousel infinito...
    }, []);
    
    return(
        <motion.div ref={carousel} className="carousel">
            <motion.div drag="x" dragConstraints={{right:0, left: -width}} className="inner-carousel">
                <motion.div className="item"> 
                    <b> <FiBox className="icon-item"/> 
                    <span className="text-item"> Pix </span> </b> 
                </motion.div>
                
                <motion.div className="item"> 
                    <b> <MdQrCodeScanner className="icon-item"/> 
                    <span className="text-item"> QR Code </span> </b>
                </motion.div>
                
                <motion.div className="item"> 
                    <b> <IoBarcodeOutline className="icon-item"/> 
                    <span className="text-item"> Pagar Boleto </span> </b>
                </motion.div>
                
                <motion.div className="item"> 
                    <b> <FiCreditCard className="icon-item"/> 
                    <span className="text-item"> PicPay Card </span> </b>
                </motion.div>
                
                <motion.div className="item"> 
                    <b> <FiUsers className="icon-item"/> 
                    <span className="text-item"> Pagar Pessoas </span> </b>
                </motion.div>
                
                <motion.div className="item"> 
                    <b> <FiSmartphone className="icon-item"/> 
                    <span className="text-item"> Recarga Celular </span> </b>
                </motion.div>
                
                <motion.div className="item"> 
                    <b> <IoBusOutline className="icon-item"/> 
                    <span className="text-item"> Cartão Transporte </span> </b> 
                </motion.div>
                
                <motion.div className="item"> 
                    <b> <IoBusinessOutline className="icon-item"/> 
                    <span className="text-item"> Pagar Locais </span> </b>
                </motion.div>
                
                <motion.div className="item"> 
                    <b> <IoPeopleOutline className="icon-item"/> 
                    <span className="text-item"> Cobrar Pessoas </span> </b>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default Options;