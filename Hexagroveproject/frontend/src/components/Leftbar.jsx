import img2 from '../Image/img2.jpg';
import img4 from '../Image/img4.jpg';
import img5 from '../Image/img5.jpg';

const Leftbar = () =>{

    return(
        <div className='fullwork'>
            <div className='leftsidebar' >
                <div className='leftbar' >
                    <center>
                        <h4>Virtual ID</h4>
                        <img id='profileimage' src={img2} />
                    </center>
                    <p>Full Name: <span>Greeshma Meda</span></p>
                    <p>University: <span>Lorem lpsum</span></p>
                    <p>Course: <span>Lorem lpsum</span></p>
                    <p>Year: <span>2024</span></p>
                    <p>ID Number: <span>16AD3018</span></p>
                </div>
                <div className='leftbar1' >
                    <h3 id='header3' >Create</h3>
                    <input className='content' placeholder='Write your post here...'/>
                    <a><img id='img4' src={img4} />media</a>
                    <a><img id='img5' src={img5} />Attach Files</a>
                    <button>Post</button>
                    <p id='add'>Add Cluster</p>
                    <label>
                        <input id='toggleinput' type="checkbox"/>
                        <span id='togglespan'/>
                    </label>
                </div>
            </div>
        </div>
    )
}

export default Leftbar;