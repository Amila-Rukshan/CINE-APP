import React, { useEffect, useState } from 'react'
import styles from './NavBar.module.css'
import axios from 'axios'
import Link from 'next/link'

export default function NavBar() {
    const [movies, setMovies] = useState([])
    const [serachTerm, setSerachTerm] = useState('')
    const [show, setShow] = useState(false)

    useEffect(() => {
        if (serachTerm === '') {
            setMovies([])
        } else {
            axios
                .get(
                    `https://yts.mx/api/v2/list_movies.json?query_term=${serachTerm}`
                )
                .then((res) => {
                    setMovies(res.data.data.movies)
                })
        }
    }, [serachTerm])

    console.log(serachTerm)

    return (
        <div className={styles['navbar-wrapper']}>
            <div className={styles.container}>
                <Link href="/">
                    <img
                        src="/logo.svg"
                        height={60}
                        className={styles['app-logo']}
                    />
                </Link>
                <div className={styles['search-container']}>
                    <input
                        placeholder="Movie Search"
                        className={styles.search}
                        spellCheck={false}
                        value={serachTerm}
                        onChange={(e) => {
                            setSerachTerm(e.target.value)
                        }}
                        onFocus={() => setShow(true)}
                        // onBlur={() => setShow(false)}
                    />
                    <img
                        src="/search-icon.svg"
                        className={styles['search-icon']}
                    />
                    {show && (
                        <div className={styles['search-results']}>
                            {movies &&
                                movies.map((movie) => (
                                    <Link href={`/movie/${movie.id}`}>
                                        <div
                                            className={styles['search-item']}
                                            style={{ display: 'flex' }}
                                            onClick={() =>
                                                setTimeout(() => {
                                                    setShow(false)
                                                    setSerachTerm('')
                                                }, 1000)
                                            }
                                        >
                                            <img
                                                src={movie.small_cover_image}
                                                style={{
                                                    borderRadius: '3px',
                                                    minWidth: '45px',
                                                }}
                                            />
                                            <div
                                                style={{
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                }}
                                            >
                                                <div
                                                    style={{
                                                        fontSize: '16px',
                                                        marginLeft: '5px',
                                                        color: '#FFBB00',
                                                    }}
                                                >
                                                    {movie.title_english}
                                                </div>
                                                <div
                                                    style={{
                                                        fontSize: '14px',
                                                        marginLeft: '5px',
                                                        marginTop: '5px',
                                                    }}
                                                >
                                                    {movie.year}
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
