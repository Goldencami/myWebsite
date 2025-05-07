import React, { useState } from 'react'

function Modal({ src, alt }) {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal)
    }

    return(
        <div className='modal' >
            <img src={src} alt={alt} />
            <div className='description'>{alt}</div>
        </div>
    )
}

export default Modal