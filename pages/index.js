import Head from 'next/head'
import NavBar from '../components/homePage/navbar'
import MainSlider from '../components/homePage/mainSlider'

export default function Home() {
    return (
        <div className="container">
            <Head>
                <title>CINE APP</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="page-container">
                <MainSlider title="Latest Movies" filterBy="year" />
                <MainSlider title="Most Loved" filterBy="like_count" />
                <MainSlider title="Recent Uploads" filterBy="date_uploaded" />
                <MainSlider title="Most Downloaded" filterBy="download_count" />
            </div>
        </div>
    )
}
