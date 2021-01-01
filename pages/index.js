import Head from 'next/head'
import NavBar from '../components/homePage/navbar'

export default function Home() {
    return (
        <div className="container">
            <Head>
                <title>CINE APP</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar/>

        </div>
    )
}
