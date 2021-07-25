import Navbar from "./navbar";
export default function Layout({ children }){
    return(
        <div>
            <Navbar/>
            <main> {children} </main>
            <style jsx>
            {`
                    main{
                        color: #86BC25;
                        background: #012169;
                    }
            `}
            </style>
        </div>
    )
}