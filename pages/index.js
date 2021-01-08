import Head from 'next/head'
import NavBar from '../components/homePage/navbar'
import MainSlider from '../components/homePage/mainSlider'

export default function Home() {
    return (
        <div className="container">
            <Head>
                <title>CINE APP</title>
                <link rel="icon" href="/favicon.ico" />
                <script data-ad-client="ca-pub-2228533750363168" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
            </Head>
            <div className="page-container">
                {/* <!-- add format one --> */}
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
                <ins class="adsbygoogle"
                    style="display:block"
                    data-ad-client="ca-pub-2228533750363168"
                    data-ad-slot="5147353463"
                    data-ad-format="auto"
                    data-full-width-responsive="true"></ins>
                <script>
                    (adsbygoogle = window.adsbygoogle || []).push({});
                </script>
                {/* <!-- add format one --> */}
                <MainSlider title="Latest Movies" filterBy="year" />
                <MainSlider title="Most Loved" filterBy="like_count" />
                <MainSlider title="Recent Uploads" filterBy="date_uploaded" />
                <MainSlider title="Most Downloaded" filterBy="download_count" />
            </div>
        </div>
    )
}
