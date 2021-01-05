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
        typeof window !== 'undefined' && window.addEventListener('resize', updateDimensions)
    }, [])

    return (
        <>
            <Head>
                <title>{movie.title_english} | CINE APP</title>
                <meta property="og:image" content={movie.large_cover_image} />
                <meta
                    property="og:description"
                    content={movie.description_full}
                />
                <meta property="og:image:width" content="500" />
                <meta property="og:image:height" content="750" />
            </Head>
            <div className="page-container">
                <div style={{ padding: '10px' }}>
                    <h1 style={{ color: '#FFBB00' }}>{movie.title_english}</h1>
                    <div style={{ display: 'flex', flexDirection: dimensions.width > 680 ? 'row' : 'column' }}>
                        <img
                            src={movie.large_cover_image}
                            style={{
                                width: '300px',
                                borderRadius: '10px',
                                height: '450px',
                            }}
                        />
                        <div style={{ margin: dimensions.width > 680 ? '0 10px' : '10px 0'}}>
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
