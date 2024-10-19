import img3 from '../Image/img3.jpg';

import { useNavigate } from "react-router-dom";

const Midbar = () =>{

    const navigate = useNavigate();

    const handleEDUpro = () => {
        navigate('/EDU-pro');
    }

    const handlesocio = () => {
        navigate('/socio');
    }

    return(
        <div className='fullwork'>
            <div className='midbar'>
                <button id="button1" onClick={handleEDUpro}>EDUPro</button>
                <button id="button2" onClick={handlesocio}>socio</button>
                <h3>My Future</h3>
                <button id='top'>Assessment</button>
                <button id='top1'>My Checklist</button>
                <button id='top1'>My Career</button>
                <button id='top1'>My Scholarship</button>
                <div className="Video">video coming up</div>
                <div className="bottomdiv" >
                    <a><img id='img3' src={img3} /></a>
                    <span>Take your sample test now</span>
                    <p><button id="Start">Start Now... </button></p>
                </div>
                <span id="why">Why?</span>
            </div>
        </div>
    )
}

export default Midbar;