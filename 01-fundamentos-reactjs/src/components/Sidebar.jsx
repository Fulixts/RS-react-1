import styles from './Sidebar.module.css'

import {PencilLine} from '@phosphor-icons/react'

export function Sidebar() {
return (
        <>
        <aside className={styles.sidebar}>
            <img
            className={styles.cover} 
            src='https://images.unsplash.com/photo-1730703156610-6e5f7d320086?q=40&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />

            <div className={styles.profile}>
                <img
                className={styles.avatar} 
                src='https://github.com/FuliXts.png'/>
                <strong>Gabriel Fuli</strong>
                <span>Software Engineer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Edit Profile
                </a>
            </footer>
        </aside>
        </>
    );
}