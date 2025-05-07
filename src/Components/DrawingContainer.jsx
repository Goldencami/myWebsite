import Modal from './Modal.jsx'

function DrawingContainer({ src, alt }) {
    function popImage(e) {
        console.log('image clicked!!')
        console.log(e.target.attributes)
        return <Modal src={e.target.attributes.src} alt={e.target.attributes.alt} />
    }

    return(
        <div className='container-fluid drawing-container' onClick={popImage}>
            <img className='drawing' src={src} alt={alt} onClick={(e) => popImage(e)} />
        </div>
    )
}

export default DrawingContainer