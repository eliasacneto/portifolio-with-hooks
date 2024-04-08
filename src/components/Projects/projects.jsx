import './projects.css'
import Project1 from '../../assets/images/project1.svg'
import Project2 from '../../assets/images/project2.svg'
import Project3 from '../../assets/images/project3.svg'

const Projects = () => {
    return (
        <div className='projects'>
            <div className="projects-content">
                <span className='projects-text'>Projetos</span>
                <div className='project-wrapper'>
                    <div className="project-separator">
                        <div className="project-container">
                            <img className='project-img' src={Project1} alt='project1' />

                            <div className="project-details">
                                <h1 className='project-name'>Designing Dashboards</h1>
                                <p className='project-description'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                            </div>

                        </div>
                        <hr />
                    </div>


                    <div className="project-separator">
                        <div className="project-container">
                            <img className='project-img' src={Project2} alt='project2' />
                            <div className="project-details">
                                <h1 className='project-name'>Vibrant Portraits of 2020</h1>
                                <p className='project-description'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                            </div>
                        </div>
                    </div>
                    <hr />

                    <div className="project-separator">
                        <div className="project-container">
                            <img className='project-img' src={Project3} alt='project3' />
                            <div className="project-details">
                                <h1 className='project-name'>36 Days of Malayalam type</h1>
                                <p className='project-description'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
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