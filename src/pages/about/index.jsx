import React, { useEffect, useState } from 'react'
import {
    faPython,
    faCss3,
    faGitAlt,
    faHtml5,
    faJsSquare,
    faReact,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AnimatedLetters from '../../services/AnimatedLetters';
import "./styles.scss";


export const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate');



    useEffect(() => {
        const time = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
        return () => clearTimeout(time);
    }, [])

    return (
        <>
            <div className='container about-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['A', 'b', 'o', 'u', 't', '  ', 'm', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        After retiring from a 20-year Law Enforcement career, I knew I
                        wanted to continue my calling as a problem-solver and
                        facilitator. Throughout my career, I specialized in digital
                        forensics and enjoyed working with computers which lead me to
                        research computer coding.
                    </p><br />
                    <p> The experience of solving problems through code allows me
                        to continue achieving my goal of continuing my education while,
                        still, helping my community. Each problem brings its own unique
                        set of challenges, making this career a perfect match. Every
                        challenge allows me to hone my skills to become a more
                        proficient member of the problem-solving community.
                    </p>
                </div>

                <div className="stage-cube-cont">
                    <div className="cubespinner">
                        <div className="face1">
                            <FontAwesomeIcon icon={faPython} color="#3776ab" />
                        </div>
                        <div className="face2">
                            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                        </div>
                        <div className="face3">
                            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                        </div>
                        <div className="face4">
                            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                        </div>
                        <div className="face5">
                            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                        </div>
                        <div className="face6">
                            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};