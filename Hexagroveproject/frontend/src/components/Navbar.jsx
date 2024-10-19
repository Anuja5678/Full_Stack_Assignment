import img12 from '../Image/img12.jpg';
import img13 from '../Image/img13.jpg';
import img1 from '../Image/img1.jpg';

function Navbar(){
    return(
        <div className='fullwork'>
            <nav className='navbar'>
                <div className='header'>
                    <span className="leftnav" >
                        <a><img id='img1' src={img1} /></a>
                        <a>Home</a>
                        <a>Video Profiling</a>
                        <a>Resume Builder</a>
                        <a>Events</a>
                        <a>Certifications</a>
                        <a>Planner</a>
                    </span>
                    <span className="rightnav" >
                        <a><img id='img12' src={img12} /></a>
                        <a><img id='img13' src={img13} /></a>
                        <a>Greeshma</a>
                    </span>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;