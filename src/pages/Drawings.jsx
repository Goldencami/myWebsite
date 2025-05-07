import Navigator from '../Components/Navigator.jsx'
import DrawingContainer from '../Components/DrawingContainer.jsx'
import Modal from '../Components/Modal.jsx'
import '../assets/drawings.css'

function Drawings() {

    return(
        <>
        <Navigator />

        <section id='drawings-gallery'>
            <h1>Drawings</h1>

            <div className='container'>
                <div className='row'>
                    <div className='col' id='first-col'>
                        <DrawingContainer src='./drawings/karate_kid.jpg' alt='karate kid drawing' />
                        <DrawingContainer src='./drawings/husky.jpg' alt='white husky drawing' />
                        <DrawingContainer src='./drawings/MGS.jpg' alt='Metal Gear Solid Snake drawing' />
                        <DrawingContainer src='./drawings/University_Graduate.JPG' alt='University Graduate drawing' />
                        <DrawingContainer src='./drawings/COMP232_teacher.JPG' alt='COMP232 teacher drawing' />
                    </div>

                    <div className='col' id='second-col'>
                        <DrawingContainer src='./drawings/Assassins_Creed_Valhalla.jpg' alt='Assassins Creed Valhalla drawing' />
                        <DrawingContainer src='./drawings/Detroit_Become_Human.jpg' alt='Detroit Become Human drawing' />
                        <DrawingContainer src='./drawings/crashout.jpg' alt='Crashout drawing' />
                        <DrawingContainer src='./drawings/sweet_Vanilla.JPG' alt='sketch of a boy' />
                        <DrawingContainer src='./drawings/TaekDog.jpg' alt='Taekwondo Dog drawing' />
                    </div>

                    <div className='col' id='third-col'>
                        <DrawingContainer src='./drawings/shiba_inu.jpg' alt='Shibu Inu drawing' />
                        <DrawingContainer src='./drawings/oc.jpg' alt='Original Character drawing' />
                        <DrawingContainer src='./drawings/timcanpy.jpg' alt='timcanpy drawing' />
                        <DrawingContainer src='./drawings/avatar_student.JPG' alt='avatar student drawing' />
                        <DrawingContainer src='./drawings/friend.JPG' alt='friend drawing' />
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Drawings