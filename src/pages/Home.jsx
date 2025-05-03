import { Link } from 'react-router-dom';
import Navigator from '../Components/Navigator.jsx'
import avatar from '../assets/images/avatar.jpeg';
import '../assets/homepage.css'

function Home() {
    return(
        <>
        <header>
            <Navigator />

            <div className='container-fluid text-center'>
                <h2>Hello Everyone!</h2>
                <h1>I'm Camila Guzman</h1>
                <h4 id='occupation'>| <span>Programmer & Artist</span> |</h4>
            </div>
        </header>

        <div className='container' id='headline'>
            <div className='row'>
                <div className='col-2'>
                    <img id='avatar' src={avatar} alt='Camila Guzman photo' />
                </div>

                <div className='col'>
                    <h2>CAMILA GUZMAN</h2>
                </div>

                <div className='col'>
                    <p>GitHub | <a href="https://github.com/Goldencami">https://github.com/Goldencami</a></p>
                </div>
            </div>
        </div>

        <div className='container' id=''>

        </div>
        </>
    )
}

export default Home