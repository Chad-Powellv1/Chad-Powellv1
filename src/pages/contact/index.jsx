import React, { useState, useEffect } from 'react';
import AnimatedLetters from '../../services/AnimatedLetters';
import { Animate } from 'react-simple-animate';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './styles.scss';

export const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const form = useRef();

    // Handles the emailjs send email function
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_6tkkhi8",
                "outlook_template",
                form.current,
                "DSCTEq0RaemfOIDE8"
            )
            .then(
                (result) => {
                    alert('Email sent!');
                    window.location.reload(true)
                },
                () => {
                    alert('Failed to send, please try again.');

                }
            );


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


                <div className="contact-form">
                    <form ref={form} onSubmit={sendEmail}>
                        <ul>
                            <li className="half">
                                <input placeholder="Name" type="text" name="name" required />
                            </li>
                            <li className="half">
                                <input
                                    placeholder="Email"
                                    type="email"
                                    name="email"
                                    required
                                />
                            </li>
                            <li>
                                <input
                                    placeholder="Subject"
                                    type="text"
                                    name="subject"
                                    required
                                />
                            </li>
                            <li>
                                <textarea
                                    placeholder="Message"
                                    name="message"
                                    required
                                ></textarea>
                            </li>
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
                                <li>
                                    <input type="submit" className="flat-button" value="SEND" />
                                </li>
                            </Animate>
                        </ul>
                    </form>
                </div>
            </div>
        </section>
    );
}