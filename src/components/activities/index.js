import React from "react"; 
import './style.css';
import { IoSearch} from "react-icons/io5";
import BoxMov from "./boxMov";

const Activities = () => {
    return(
        <div className="content-act">
            <div className="search"> 
                <IoSearch className="icon-search" />
                <input className="input-act" type="text" placeholder="O que você quer encontrar?" />
            </div>

            <BoxMov time={1} value={120} lock={true} pr={true} />
            <BoxMov time={3} value={1250} lock={false} pr={false} />
            <BoxMov time={7} value={200} lock={true} pr={true}/>
            <BoxMov time={8} value={12} lock={false} pr={true}/>
            <BoxMov time={8} value={144} lock={true} pr={false}/>
        </div>
    );
};

export default Activities;