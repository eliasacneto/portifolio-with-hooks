import { useState } from 'react'
import RedButton from '../Buttons/redButton'
import "./header.css"


const Header = () => {
    const [name, setName] = useState('João');
    return (
        <div className='header'>
            <h1 className='greetings'>Olá, eu sou {name} <br />
                Desenvolvedor Full-stack
            </h1>
            <p className='greetings-subtitle'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            <RedButton text="Download resumo" />
        </div>
    )
}

export default Header