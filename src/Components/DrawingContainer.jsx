function DrawingContainer({ src, alt }) {
    return(
        <div className='container-fluid drawing-container'>
            <img className='drawing' src={src} alt={alt} />
        </div>
    )
}

export default DrawingContainer