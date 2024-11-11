import styles from './Post.module.css';

export function Post() {
    return (
        <>
            <article className={styles.post}>
                <header>
                    <div className={styles.author}>
                        <img
                            className={styles.avatar}
                            src="https://github.com/FuliXts.png" />
                        <div className={styles.authorInfo}>
                            <strong>Gabriel Fuli</strong>
                            <span>Software Engineer</span>
                        </div>
                    </div>
                    <time title='11 de Novembro de 2024 às 00:47h' dateTime='2024-11-11 00:47:35'>Publicado há 1h                                                                             </time>
                </header>
                <div className={styles.content}>
                    <p>Fala galeraa 👋</p>

                    <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

                    <p><a href=""> gfuli.design/doctorcare</a></p>

                    <p>
                        <a href=''>#novoprojeto {' '}</a>
                        <a href=''>#nlw{" "}</a>
                        <a href=''>#rocketseat</a>
                    </p>
                </div>

                <form className={styles.commentForm}>
                    <strong>Deixe seu feedback</strong>
                    <textarea placeholder='Deixe seu comentário' />
                    <footer>
                    <button type='submit'>Publicar</button>
                    </footer>
                </form>
            </article>
        </>
    );
}