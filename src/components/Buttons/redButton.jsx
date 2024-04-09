
import { useEffect, useState } from 'react'
import './redButton.css'
import CV from '../../assets/files/elias-cv.pdf'

import Swal from 'sweetalert2'

const RedButton = () => {

    const [isDownloaded, setIsDownloaded] = useState(false)

    useEffect(() => {

        if (isDownloaded) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Seu download começará em breve!",
                showConfirmButton: false,
                timer: 1500
            });

            setIsDownloaded(false);

        }
    }, [isDownloaded]);


    return (
        <>
            <a href={CV} download onClick={() => setIsDownloaded(true)} className='btn-red'>Download CV</a>

        </>
    )
}

export default RedButton