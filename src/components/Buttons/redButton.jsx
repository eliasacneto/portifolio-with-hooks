
import { useEffect, useState } from 'react'
import './redButton.css'
import CV from '../../assets/files/elias-cv.pdf'

const RedButton = () => {

    const [isDownloaded, setIsDownloaded] = useState(false)

    useEffect(() => {

        if (isDownloaded) {
            window.alert('Seu download começará em breve!');

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