import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'
import Title from '../components/title'

export default function DeInteres(){
    return(
        <>
            <div>
                <Navbar/>
            </div>
            <Title>Publicaciones de interes</Title>
        </>
    )
}