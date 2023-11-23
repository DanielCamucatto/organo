import React from 'react'
import './Banner.css'

type BannerProps = {
    src: string
    alt: string
}

const Banner = ({src, alt}:BannerProps) => {
    return (
        <header className="banner">
            <img src={src} alt={alt}/>
        </header>
    )
}

export default Banner
