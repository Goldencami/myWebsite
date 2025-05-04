import Navigator from '../Components/Navigator.jsx'
import CareerBlock from '../Components/CareerBlock.jsx'
import '../assets/homepage.css'

function Home() {
    const software_app_intern = `Contributed to the maintenance and enhancement of an 
        application to improve the judicial system, utilizing C# and React. Collaborated 
        with the development team to implement new features, optimize performance, and 
        ensure a user-friendly interface.`

    return(
        <>
        <header>
            <Navigator />

            <div className='container-fluid text-center'>
                <h2>Hello Everyone!</h2>
                <h1>I'm Camila Guzman</h1>
                <h4 id='occupation'>| <span>Programmer</span> |</h4>
            </div>
        </header>

        <div className='container' id='headline'>
            <div className='row'>
                <div className='col-2'>
                    <img id='avatar' src='/images/avatar.jpeg' alt='Camila Guzman photo' />
                </div>

                <div className='col'>
                    <h2>CAMILA GUZMAN</h2>
                </div>

                <div className='col'>
                    <p>GitHub | <a href="https://github.com/Goldencami">https://github.com/Goldencami</a></p>
                </div>
            </div>
        </div>

        <div className='container resume-block'>
            <h3>EXPERIENCE</h3>
            <CareerBlock 
                title='Software Development Intern | Cyberjustice Laboratory, UdeM' 
                year={'Sept 2024 – Dec 2024'} 
                description={software_app_intern} />
        </div>

        </>
    )
}

export default Home