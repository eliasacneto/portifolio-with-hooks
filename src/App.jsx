
import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/navbar'
import Header from './components/Header/header'
import Blog from './components/Blog/blog'
import Projects from './components/Projects/projects'
import Footer from './components/Footer/footer'

// const [name, setName] = useState('João')

function App() {

    return (
        <div className='app'>
            <Navbar />
            <Header />
            <Blog />
            <Projects />
            <Footer />


        </div>
    )
}

export default App
