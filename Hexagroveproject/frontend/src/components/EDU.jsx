import img10 from '../Image/img10.jpg';
import img7 from '../Image/img7.jpg';
import img9 from '../Image/img9.jpg';
import img11 from '../Image/img11.jpg';
import img4 from '../Image/img4.jpg';
import img15 from '../Image/img15.jpg';
import { useNavigate } from "react-router-dom";

function EDU(){
    const navigate = useNavigate();

    const handlesocio = () => {
        navigate('/socio');
    }

    return(
        <div className="completepro" >
            <button id="button3" onClick={handlesocio}>socio</button>
            <h2 id="heading1">EDU Pro</h2>
            <div className="card"><span id="tribes">Tribes</span><button>Cardboard</button>
            <span id="other">other</span></div>
            <div className="empty">empty</div>
            <div className="logo">
                <span><img id='eduimg' src={img10} /></span>
                <span><img id='eduimg' src={img7} /></span>
                <span><img id='eduimg' src={img9} /></span>
                <span><img id='eduimg' src={img11} /></span>
                <span><img id='eduimg' src={img4} /></span>
                <span><img id='eduimg' src={img7} /></span>
            </div>
            <input id="title" placeholder="Title"/>
            <button id="save">Save</button>
            <a href="#" id="invite">Invite</a>
            <h3 id="notepad">Your Notepads</h3>
            <div className="list">
                <h4>To do List</h4>
                <p>Date:2024-09-30</p>
                <span><img id='img15' src={img15} /></span>
            </div>
            <a href="/" id="future1" >My Future</a>
        </div>
    )
}
export default EDU;