function Cards({ src, title, text }) {
    return(
        <div className='col-lg-4'>
            <div className='card'>
                <img
                    src={src}
                    className='card-img-top'
                    alt={title}
                />
                <div className='card-body'>
                    <h5 className='card-title'>{title}</h5>
                    <p className='card-text'>{text}</p>
                    <a href='#!' data-mdb-ripple-init className='btn btn-primary'>Preview</a>
                </div>
            </div>
        </div>
    )
}

export default Cards