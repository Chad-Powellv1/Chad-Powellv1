import React from "react";
import { BsLink45Deg, BsPlus } from "react-icons/bs";
import restaurant from "../../assets/restaurant.jpg";
import tictactoe from "../../assets/tictactoe.jpg";
import weather from "../../assets/weather.jpg";
import todo from "../../assets/todo.jpg";
import {
    WEATHER_APP,
    TIC_TAC_TOE,
    TODO_APP,
    RESTAURANT_APP,
} from "../../services/constants";
import "./styles.scss";

export const Portfolio = () => {

    return (
        <>
            <div className='container'>
                <div
                    className='row project-container'
                    data-aos='fade-up'
                    data-aos-delay='100'
                >
                    <div className='col-md-6 project-item filter-app'>
                        <div className='project-wrap'>
                            <img src={weather} className='img-fluid' alt='Weather App' />
                            <div className='project-links'>
                                <a
                                    href={weather}
                                    data-gallery='projectGallery'
                                    className='project-lightbox'
                                >
                                    <i className='bx '>
                                        <BsPlus />
                                    </i>
                                </a>
                                <a href={WEATHER_APP} title='More Details'>
                                    <i className='bx'>
                                        <BsLink45Deg />
                                    </i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-6 project-item filter-web'>
                        <div className='project-wrap'>
                            <img src={tictactoe} className='img-fluid' alt='Tic Tac Toe' />
                            <div className='project-links'>
                                <a
                                    href={tictactoe}
                                    data-gallery='projectGallery'
                                    className='project-lightbox'
                                >
                                    <i className='bx'>
                                        <BsPlus />
                                    </i>
                                </a>
                                <a href={TIC_TAC_TOE} title='More Details'>
                                    <i className='bx'>
                                        <BsLink45Deg />
                                    </i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 project-item filter-app'>
                        <div className='project-wrap'>
                            <img src={todo} className='img-fluid' alt='Todo App' />
                            <div className='project-links'>
                                <a
                                    href={todo}
                                    data-gallery='projectGallery'
                                    className='project-lightbox'
                                >
                                    <i className='bx'>
                                        <BsPlus />
                                    </i>
                                </a>
                                <a href={TODO_APP} title='More Details'>
                                    <i className='bx'>
                                        <BsLink45Deg />
                                    </i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-6 project-item filter-card'>
                        <div className='project-wrap'>
                            <img
                                src={restaurant}
                                className='img-fluid'
                                alt='Restaurant App'
                            />
                            <div className='project-links'>
                                <a
                                    href={restaurant}
                                    data-gallery='projectGallery'
                                    className='project-lightbox'
                                >
                                    <i className='bx'>
                                        <BsPlus />
                                    </i>
                                </a>
                                <a href={RESTAURANT_APP} title='More Details'>
                                    <i className='bx'>
                                        <BsLink45Deg />
                                    </i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};