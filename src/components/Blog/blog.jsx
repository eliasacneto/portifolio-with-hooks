import './blog.css'

const Blog = () => {
    return (
        <div className='blog' id='blog'>
            <div className="blog-content">
                <span className='blog-text'>Blog</span>
                <div className='post-cards'>
                    <div className="card">
                        <h2 className='card-title'> <a className='project-link' href='https://clubedosgeeks.com.br/programacao/java/android-studio-como-inserir-links-na-textview' target='_blank'>Android Studio: Como inserir links na TextView</a></h2>
                        <div className="card-subtitle">
                            <span>13 Março 2019</span>
                            <span>Android, Mobile</span>
                        </div>
                        <p className='card-text'>É muito comum programadores iniciantes no desenvolvimento em Android terem essa dúvida. Pois bem, vamos ao que interessa...</p>
                    </div>
                    <div className="card">
                        <h2 className='card-title'> <a className='project-link' href='https://clubedosgeeks.com.br/programacao/java/android-studio-como-criar-botao-de-avaliar-aplicativo-na-playstore' target='_blank'>Como criar botão de Avaliar aplicativo na PlayStore</a></h2>
                        <div className="card-subtitle">
                            <span>13 Feb 2019</span>
                            <span>Java, Play Store</span>
                        </div>
                        <p className='card-text'>Se você está com dificuldades de como colocar um botão de avaliação de aplicativos (Estrelinhas) que ao clicar já redireciona para o aplicativo na PlayStore esse tutorial é para você 🙂</p>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Blog