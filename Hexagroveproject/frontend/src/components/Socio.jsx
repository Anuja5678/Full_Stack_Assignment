import img3 from '../Image/img3.jpg';
import { useNavigate } from "react-router-dom";

function Socio(){

    const navigate = useNavigate();

    const handleEDUpro = () => {
        navigate('/EDU-pro');
    }

    return(
        <div className="completesocio" >
            <button id="button4" onClick={handleEDUpro}>EDUPro</button>
            <h2>Socio</h2>
            <p id="para1" >Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Voluptates quasi earum minus nam! Eum et aperiam consectetur 
                illum excepturi eaque impedit enim, expedita, facere,
                 recusandae vitae earum nemo accusamus inventore!
            </p>
            <div className="para2div" ><p id="para2" >Socio illustration</p></div>
            <p id="para3" >Create your Tribe</p>
            <label id="toggle1">
                <input id='toggleinput1' type="checkbox"/>
                <span id='togglespan1'/>
            </label>
            <span id="span1" >Ready to unleash your journey??.....</span>
            <button id="sociobutton" >Start Now <img id='socioimg' src={img3} /></button>
            <a href="/" id="future" >My Future</a>
        </div>
    )
}

export default Socio;