import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import styles from './MainSlider.module.css'
import axios from 'axios'
import Link from 'next/link'

export default function MainSlider({ title, filterBy }) {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 2,
        // autoplay: true,
        autoplaySpeed: 10000,
        responsive: [
            {
                breakpoint: 925,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 770,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 630,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 465,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
        nextArrow: <></>,
        prevArrow: <></>,
    }

    const [movies, setMovies] = useState([])

    useEffect(() => {
        axios
            .get(
                `https://yts.mx/api/v2/list_movies.json?sort_by=${filterBy}`
            )
            .then((res) => {
                setMovies(res.data.data.movies)
            })
    }, [])

    const sliderRef = React.createRef()

    const gotoNext = () => {
        sliderRef.current.slickNext()
    }

    const gotoPrev = () => {
        sliderRef.current.slickPrev()
    }

    return (
        <div className={styles['main-slider-container']}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h2 style={{ marginLeft: '15px' }}>{title}</h2>
                <div>
                    <img
                        src="/left-arrow.svg"
                        className={styles.arrows}
                        onClick={gotoPrev}
                    />
                    <img
                        src="/right-arrow.svg"
                        className={styles.arrows}
                        onClick={gotoNext}
                    />
                </div>
            </div>
            <Slider {...settings} ref={sliderRef}>
                {movies &&
                    movies.map((movie) => (
                        <Link href={`/movie/${movie.id}`}>
                        <div
                            className={styles['slider-item']}
                            style={{
                                alignItems: 'center',
                                // marginBottom: '200px',
                                userSelect: 'none',
                            }}
                        >
                            <img
                                className={styles['movie-cover']}
                                src={movie.large_cover_image}
                                style={{
                                    maxWidth: '150px',
                                    textAlign: 'center',
                                    borderRadius: '10px',
                                    userSelect: 'none',
                                }}
                                alt={movie.title}
                            />
                        </div>
                        </Link>
                    ))}
            </Slider>
        </div>
    )
}
