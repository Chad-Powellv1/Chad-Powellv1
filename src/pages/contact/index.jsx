import React, { useState, useEffect } from 'react';
import AnimatedLetters from '../../services/AnimatedLetters';
import { Animate } from 'react-simple-animate';
import { useNavigate } from 'react-router-dom';
import './styles.scss';

export const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const navigate = useNavigate();

    // Used to navigate to the contact page
    const handleNavigate = () => {
        navigate('/contact');
    }

    // Used to animate the letters on hover
    useEffect(() => {
        const time = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
        return () => clearTimeout(time);
    }, [])

    return (
        <section className='contact'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', ' ', 'm', 'e']}
                        idx={15}
                    />
                </h1>
                <Animate
                    play
                    duration={1}
                    delay={1.5}
                    start={{
                        transform: 'translateX(-500px)',
                    }}
                    end={{
                        transform: 'translateX(0px)',
                    }}
                >
                    <h3 className='text-zone-text'>Let's Chat</h3>
                    <br />
                </Animate>
                <div className='text-zone-form'>
                    <div className='text-zone-form-controlswrapper'>
                        <div>
                            <input required name='name' className='inputName' type={'text'} placeholder={'Name'} />
                        </div>
                        <div>
                            <input required name='email' className='inputEmail' type={'text'} placeholder={'Email'} />
                        </div>
                        <div>
                            <input
                                required
                                name='description'
                                className='inputDescription'
                                type={'text'} placeholder={'Description'}
                            />
                        </div>
                    </div>
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
                        <div className="contact-me">
                            <button onClick={handleNavigate}>Send</button>
                        </div>
                    </Animate>
                </div>
            </div>
        </section>
    )
}