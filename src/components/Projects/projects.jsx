import './projects.css'
import Project1 from '../../assets/images/project1.svg'
import Project2 from '../../assets/images/project2.svg'
import Project3 from '../../assets/images/project3.svg'

const Projects = () => {
    return (
        <div className='projects' id="projects">
            <div className="projects-content">
                <span className='projects-text'>Projetos</span>
                <div className='project-wrapper'>
                    <div className="project-separator">
                        <div className="project-container">
                            <img className='project-img' src={Project1} alt='project1' />

                            <div className="project-details">
                                <h1 className='project-name'>WeFashion - Escola de Moda</h1>
                                <p className='project-description'>Este é um projeto desenvolvido pelos alunos do curso TECH da Escola DNC. O objetivo do projeto é criar uma página web moderna, utilizando as tecnologias aprendidas para fornecer para a cliente um site onde ela consiga mostrar mais sobre a empresa dela, exibir quais cursos ela oferta e para captar o interesse dos alunos para a equipe comercial dela entrar em contato. Para isso desenvolvemos utilizando a biblioteca JavaScripy React.JS onde também utilizamos o framework Vite para todo o desenvolvimento do projeto.</p>
                            </div>

                        </div>
                        <hr />
                    </div>


                    <div className="project-separator">
                        <div className="project-container">
                            <img className='project-img' src={Project2} alt='project2' />
                            <div className="project-details">
                                <h1 className='project-name'>DNC Store e-commerce 🛍️</h1>
                                <p className='project-description'>Este é um projeto de e-commerce desenvolvido pelos alunos do grupo 07 do curso TECH 1 da Escola DNC. O objetivo do projeto é criar uma loja online para venda de produtos, relacionados à área de game, criado em React.JS utilizando o framework Vite. Criamos o design da aplicação seguindo o Figma fornecido pela DNC.</p>
                            </div>
                        </div>
                    </div>
                    <hr />

                    <div className="project-separator">
                        <div className="project-container">
                            <img className='project-img' src={Project3} alt='project3' />
                            <div className="project-details">
                                <h1 className='project-name'>Biscoito da Sorte</h1>
                                <p className='project-description'>Criei um jogo chamado Fortune Cookie, onde os usuários podem revelar a sorte do dia clicando ou entrando.</p>
                            </div>
                        </div>
                    </div>
                    <hr />


                </div>


            </div>
        </div>
    )
}

export default Projects