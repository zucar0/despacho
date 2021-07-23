import Link from 'next/link'

//Exportación dle componente funcional
export default function Navbar(){
    return(
        <nav>
            <Link href="/">
                <a>Home</a>
            </Link>
            <Link href="/nosotros">
                <a>Nosotros</a>
            </Link>
            <Link href="/servicios">
                <a>Servicios</a>
            </Link>
            <Link href="/boletines">
                <a>Boletines</a>
            </Link>
            <Link href="/publicaciones-de-interes">
                <a>De interes</a>
            </Link>
            <Link href="/cursos">
                <a>Cursos</a>
            </Link>
            <Link href="/contacto">
                <a>Contacto</a>
            </Link>
        </nav>
    )
}