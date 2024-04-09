import './blog.css'

const Blog = () => {
    return (
        <div className='blog'>
            <div className="blog-content">
                <span className='blog-text'>Blog</span>
                <div className='post-cards'>
                    <div className="card">
                        <h2 className='card-title'>Making a desing system from scratch</h2>
                        <div className="card-subtitle">
                            <span>12 Feb 2030</span>
                            <span>Design, Pattern</span>
                        </div>
                        <p className='card-text'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    </div>
                    <div className="card">
                        <h2 className='card-title'>Making a desing system from scratch</h2>
                        <div className="card-subtitle">
                            <span>12 Feb 2030</span>
                            <span>Figma, Icon Design</span>
                        </div>
                        <p className='card-text'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Blog