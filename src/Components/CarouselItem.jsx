function CarouselItem({ src, alt }) {
    return(
        <div className='multi-carousel-item'>
            <img 
                src={src}
                alt={alt}
                class='w-100'
            />
        </div>
    )
}

export default CarouselItem