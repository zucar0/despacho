import {useRouter} from 'next/router';

export default function User({user}){

    const router = useRouter();

    if(router.isFallback ){
        return <div>CARGANDO...</div>
    }

    return(
        <div>
            <h2>
                User Details {user.id}
            </h2>
            <div className='card'>
                <h3>User</h3>
                <p>Name: {user.name}</p>
                <p>Email: {user.email}</p>
                <p>Phone: {user.phone}</p>
                <p>Website: {user.website}</p>
            </div>
            
            <style jsx>
            {`
            .card {
                margin: 1rem;
                flex-basis: 45%;
                padding: 1.5rem;
                text-align: left;
                color: inherit;
                text-decoration: none;
                border: 1px solid #eaeaea;
                border-radius: 10px;
                transition: color 0.15s ease, border-color 0.15s ease;
            }
    
            .card:hover,
            .card:focus,
            .card:active {
                color: #0070f3;
                border-color: #0070f3;
            }
    
            .card h3 {
                margin: 0 0 1rem 0;
                font-size: 1.5rem;
            }
    
            .card p {
                margin: 0;
                font-size: 1.25rem;
                line-height: 1.5;
            }
            `}
        </style>
        </div>
        
    )

}
export async function getStaticPaths(){
    const res = await fetch('https://api.jsonbin.io/b/60fdc373a917050205d0233f/')
    const users = await res.json();
    const paths = users.map(user=>{
        return{
            params: {id: `${user.id}`}
        }
    })
    return{
        paths, 
        fallback: true
    }
}

export async function getStaticProps({params}){
    //context.params.id
    const res = await fetch(`https://api.jsonbin.io/b/60fdc373a917050205d0233f/${params.id}`);
    const user = await res.json();

    return{
        props: {
             user
        }
    }
}