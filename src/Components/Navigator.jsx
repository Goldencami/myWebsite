import { Link } from 'react-router-dom';

function Navigator() {
    return(
        <div className='container-fluid' id='nav'>
            <div className='row'>
                <Link to='/' id='logo-anchor'>
                    <img id='logo' src='/images/logo.png' alt='Camila Guzman logo' />
                </Link>
                <div className='col'>
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/projects'>Projects</Link>
                        </li>
                        <li>
                            <Link to='/drawings'>Drawings</Link>
                        </li>
                        <li>
                            <Link to='/taekwondo-application'>App</Link>
                        </li>
                    </ul>
                </div>
                <div className='col' id='profiles-list'>
                    <ul>
                        <li>
                            <a href='https://www.linkedin.com/in/camila-guzman023/'>
                                <img className='profile-logo' src='/linkedIn_logo.svg' alt='LinkedIn profile' />
                            </a>
                        </li>
                        <li>
                            <a href='https://github.com/Goldencami'>
                                <img className='profile-logo' src='/github_logo.svg' alt='gitHub profile' />
                            </a>
                        </li>
                        <li>
                            <a href='https://www.instagram.com/goldencami1/'>
                                <img className='profile-logo' src='/instagram_logo.svg' alt='Instagram profile' />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navigator