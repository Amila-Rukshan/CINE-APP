import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Head from 'next/head'

const BASE_URL = 'https://yts.mx/api/v2/movie_details.json?movie_id='

const MovieView = ({ movie }) => {
    const [dimensions, setDimensions] = useState({
        width: typeof window !== 'undefined' && window.innerWidth,
        height: typeof window !== 'undefined' && window.innerHeight,
    })

    const updateDimensions = () => {
        setDimensions({ width: window.innerWidth, height: window.innerHeight })
    }

    useEffect(() => {
        typeof window !== 'undefined' &&
            window.addEventListener('resize', updateDimensions)
    }, [])

    return (
        <>
            <Head>
                <title>{movie.title_english} | CINE APP</title>
                <meta property="og:type" content={"movie"} />
                <meta property="og:title" content={`${movie.title_english} | CINE APP`} />
                <meta property="og:image" content={movie.large_cover_image} />
                <meta
                    property="og:description"
                    content={movie.description_full}
                />
                <meta property="og:image:width" content="500" />
                <meta property="og:image:height" content="750" />
                <script
                    data-ad-client="ca-pub-2228533750363168"
                    async
                    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
                ></script>
            </Head>
            <div className="page-container">
                <div style={{ padding: '10px' }}>
                    {/* <!-- add format one --> */}
                    <script
                        async
                        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
                    ></script>
                    <ins
                        className="adsbygoogle"
                        style={{ display: 'block' }}
                        data-ad-client="ca-pub-2228533750363168"
                        data-ad-slot="5147353463"
                        data-ad-format="auto"
                        data-full-width-responsive="true"
                    ></ins>
                    <script>
                        (adsbygoogle = window.adsbygoogle || []).push({});
                    </script>
                    {/* <!-- add format one --> */}
                    <a
                        href={`https://www.imdb.com/title/${movie.imdb_code}`}
                        target="_blank"
                    >
                        <img
                            style={{
                                cursor: 'pointer',
                                padding: '10px',
                                marginLeft: '-10px',
                                height: '30px',
                            }}
                            src="/imdb.svg"
                        />
                    </a>
                    <a
                        href={`https://www.youtube.com/watch?v=${movie.yt_trailer_code}`}
                        target="_blank"
                    >
                        <img
                            style={{
                                cursor: 'pointer',
                                padding: '10px',
                                height: '30px',
                                marginLeft: '-10px',
                            }}
                            src="/youtube.png"
                        />
                    </a>
                    <h1 style={{ color: '#FFBB00', margin: '0' }}>
                        {movie.title_english}{' '}
                        <span
                            style={{ color: '#FFF' }}
                        >{`- ${movie.year}`}</span>
                    </h1>
                    <div style={{ marginTop: '10px', marginBottom: '15px' }}>
                        {movie?.genres &&
                            movie?.genres.map((genre) => (
                                <span
                                    style={{
                                        padding: '3px 10px',
                                        backgroundColor: '#FFF',
                                        color: '#020916',
                                        marginRight: '5px',
                                        borderRadius: '5px',
                                    }}
                                >
                                    {genre}
                                </span>
                            ))}
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection:
                                dimensions.width > 680 ? 'row' : 'column',
                        }}
                    >
                        <img
                            src={movie.large_cover_image}
                            style={{
                                width: '300px',
                                borderRadius: '10px',
                                height: '450px',
                            }}
                        />
                        <div
                            style={{
                                margin:
                                    dimensions.width > 680
                                        ? '0 10px'
                                        : '10px 0',
                                textAlign: 'justify',
                                textJustify: 'inter-word',
                            }}
                        >
                            {movie.description_full}
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    flexWrap: 'wrap',
                                }}
                            >
                                {movie.torrents.map((torrent) => (
                                    <a
                                        className="button glow-button"
                                        href={torrent.url}
                                    >
                                        {torrent.quality} | {torrent.type} |{' '}
                                        {torrent.size}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MovieView

export async function getServerSideProps({ params }) {
    const res = await axios.get(`${BASE_URL}${params.movieID}`)
    const {
        data: {
            data: { movie },
        },
    } = res

    return { props: { movie } }
}
