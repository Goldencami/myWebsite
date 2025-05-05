function Cards({ src, title, text }) {
    return(
        <div class='col-lg-4'>
            <div class='card'>
                <img
                    src={src}
                    class='card-img-top'
                    alt={title}
                />
                <div class='card-body'>
                    <h5 class='card-title'>{title}</h5>
                    <p class='card-text'>{text}</p>
                    <a href='#!' data-mdb-ripple-init class='btn btn-primary'>View</a>
                </div>
            </div>
        </div>
    )
}

export default Cards