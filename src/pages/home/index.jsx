import React, { useState, useEffect } from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import AnimatedLetters from '../../services/AnimatedLetters';
import { useNavigate } from 'react-router-dom';
import { Animate } from 'react-simple-animate';
import './styles.scss';


export const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const navigate = useNavigate();

    const nameArray = [' ', 'C', 'h', 'a', 'd'];

    // Controls navigation to the Contact page
    const handleNavigate = () => {
        navigate('/contact');
    }

    // Controls the typewriter animation
    const { text } = useTypewriter({
        words: ["A Full Stack Web Developer",
            "An Experienced Leader",
            "A Proficient Instructor",
        ],
        loop: true,
        delay: 600,
        typeSpeed: 150,
        deleteSpeed: 85,
        delaySpeed: 3000,
    });

    // Controls the animated letters on hover
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

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
                    <Animate
                        play
                        duration={1.5}
                        delay={1.2}
                        start={{
                            opacity: 0,
                            transform: 'translateY(550px)'

                        }}
                        end={{
                            opacity: 1,
                            transform: 'translateX(0px)'
                        }}
                        ease="easeInOut"
                    >
                        <div className="home-contact">
                            <button onClick={handleNavigate}>Contact Me</button>
                        </div>
                    </Animate>
                </div>
            </div>
        </section >
    );
};