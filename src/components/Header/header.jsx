import { useState } from 'react'
import RedButton from '../Buttons/redButton'
import "./header.css"


const Header = () => {
    const [name, setName] = useState('Elias');
    return (
        <div className='header'>
            <h1 className='greetings'>Olá, eu sou {name} <br />
                Desenvolvedor Full-stack
            </h1>
            <p className='greetings-subtitle'>Analista e Desenvolvedor de Sistemas Web e Mobile, Fundador do blog Clube dos Geeks e UX/UI Designer.</p>
            <RedButton text="Download resumo" />
        </div>
    )
}

export default Header