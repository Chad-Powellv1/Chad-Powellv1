import React, { useState, useEffect } from 'react'
import './styles.scss'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import AnimatedLetters from '../../services/AnimatedLetters'
import { Link } from 'react-router-dom'



export const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    const { text } = useTypewriter({
        words: ["A Full Stack Web Developer",
            "An Experienced Leader",
            "A Proficient Instructor",
        ],
        loop: true,
        delay: 200,
        typeSpeed: 150,
        deleteSpeed: 85,
        delaySpeed: 3000,
    });

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    const nameArray = [' ', 'C', 'h', 'a', 'd']


    return (
        <section id="home" className='home'>
            <div className="home-text-wrapper">
                <div className="text-zone">
                    <h1>
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass} _12`}>i,</span>
                        <br />
                        <span className={`${letterClass} _13`}>I</span>
                        <span className={`${letterClass} _14`}>'m</span>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={nameArray}
                            idx={15}
                        />
                    </h1>
                    <br />

                    <p>
                        <span className='typed'>
                            {text}
                        </span>
                        <Cursor />
                    </p>
                    <Link to="/contact" className="flat-button">
                        CONTACT ME
                    </Link>
                </div>
            </div>
        </section>
    )
}