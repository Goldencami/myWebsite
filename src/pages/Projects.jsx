import Navigator from '../Components/Navigator.jsx'
import Carousel from '../Components/Carousel.jsx'
import Cards from '../Components/Cards.jsx'
import '../assets/projects.css'

function Projects() {
    return(
        <>
        <Navigator />

        <section id='software-projects'>
            <h1>My Projects</h1>

        </section>
        
        <section id='models-3d'>
            <h1>3D Models</h1>
            <div className='container-fluid'>
                <div className='row card-row'>
                    <Cards 
                        src='/projects/3d/chess.png'
                        title='Chess Board'
                        text='Chess scene unfolds as opposing pieces face off 
                            on a beautifully crafted and intricately designed chessboard.'
                    />
                    <Cards 
                        src='/projects/3d/donut.jpg'
                        title='Donut'
                        text='A 3D drawing featuring two glowing donuts on a plate, 
                            accompanied by a background mug, creating a delightful and 
                            mesmerizing scene.'
                    />
                    <Cards 
                        src='/projects/3d/glowing_donut.jpg'
                        title='Glowing Donut'
                        text='Glowing donut exudes an otherworldly radiance, 
                            encircled by a mesmerizing ring of light.'
                    />
                </div>
            </div>
        </section>
        </>
    )
}

export default Projects