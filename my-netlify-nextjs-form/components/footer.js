import Link from 'next/link'
import styles from '../styles/Home.module.css'


//Exportación dle componente funcional
export default function Footer(){
    return(
         <footer className={styles.footer}>
            <a
            href="https://github.com/zucar0"
            target="_blank"
            rel="author"
            >
            Powered by{''}
            <span className={styles.logo}>Antonio Enríquez</span>
            </a>
            <style>
                {`
                    span:hover{
                        color: #86BC25;
                    }
                `}
            </style>
        </footer>
    )
}
