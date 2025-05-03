import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';

function Navigator() {
    return(
        <div className='container-fluid'>
            <div className='row'>
                <div className='col'>
                    <Link to='/'>
                        <img src={logo} alt='Camila Guzman logo' />
                    </Link>
                    <ul>
                        <li>Home</li>
                        <li>Drawing</li>
                        <li>3D Projects</li>
                        <li>App Demo</li>
                    </ul>
                </div>
                <div className='col' />
                <div className='col'>
                    <ul>
                        <li>LinkedIn</li>
                        <li>GitHub</li>
                        <li>Instagram</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navigator