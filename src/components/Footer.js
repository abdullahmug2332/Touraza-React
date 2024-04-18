import React from 'react'
import logo from './logo.png'
import tour from "./tour.jpg"
import boat from "./boat.jpg"
import girlrunning from "./girl running.jpeg"
import main from "./main.jpg"
import seabike from "./seabike.jpg"
import snowyhills from "./snowyhills.jpeg"

const Footer = () => {
    return (
        <>
            <footer>
                <div className="container-fluid px-5 pt-5">
                    <div className="row">
                        <div className="col-4">
                            <div className="col-12 d-flex fb">
                                <img src={logo} alt="" className='footerlogo' />
                                <h1 className='ftouraza'>Touraza</h1>
                            </div>
                            <div className="finfo">
                                <p className='faddress fsm'>5th floor,700/D kings road,green lane New York-1782</p>
                                <p className='fsm'>+10 367 826 2567</p>
                                <p className='fsm'>contact@touraza.com</p>
                            </div>
                            <div className="d-flex justify-content-start">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler ms-2 icon-tabler-brand-facebook facebook" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="#aab1b7" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler ms-2  icon-tabler-brand-twitter-filled" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="#aab1b7" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M14.058 3.41c-1.807 .767 -2.995 2.453 -3.056 4.38l-.002 .182l-.243 -.023c-2.392 -.269 -4.498 -1.512 -5.944 -3.531a1 1 0 0 0 -1.685 .092l-.097 .186l-.049 .099c-.719 1.485 -1.19 3.29 -1.017 5.203l.03 .273c.283 2.263 1.5 4.215 3.779 5.679l.173 .107l-.081 .043c-1.315 .663 -2.518 .952 -3.827 .9c-1.056 -.04 -1.446 1.372 -.518 1.878c3.598 1.961 7.461 2.566 10.792 1.6c4.06 -1.18 7.152 -4.223 8.335 -8.433l.127 -.495c.238 -.993 .372 -2.006 .401 -3.024l.003 -.332l.393 -.779l.44 -.862l.214 -.434l.118 -.247c.265 -.565 .456 -1.033 .574 -1.43l.014 -.056l.008 -.018c.22 -.593 -.166 -1.358 -.941 -1.358l-.122 .007a.997 .997 0 0 0 -.231 .057l-.086 .038a7.46 7.46 0 0 1 -.88 .36l-.356 .115l-.271 .08l-.772 .214c-1.336 -1.118 -3.144 -1.254 -5.012 -.554l-.211 .084z" stroke-width="0" fill="currentColor" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler ms-2  icon-tabler-brand-instagram" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="#aab1b7" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                                    <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                                    <path d="M16.5 7.5l0 .01" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler ms-2  icon-tabler-brand-pinterest" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="#aab1b7" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M8 20l4 -9" />
                                    <path d="M10.7 14c.437 1.263 1.43 2 2.55 2c2.071 0 3.75 -1.554 3.75 -4a5 5 0 1 0 -9.7 1.7" />
                                    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler ms-2  icon-tabler-brand-youtube-filled" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="#aab1b7" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M18 3a5 5 0 0 1 5 5v8a5 5 0 0 1 -5 5h-12a5 5 0 0 1 -5 -5v-8a5 5 0 0 1 5 -5zm-9 6v6a1 1 0 0 0 1.514 .857l5 -3a1 1 0 0 0 0 -1.714l-5 -3a1 1 0 0 0 -1.514 .857z" stroke-width="0" fill="currentColor" />
                                </svg>
                            </div>
                        </div>
                        <div className="col-4 col-md-2 mt-4 fc">
                            <h4 className='flg'>Pages</h4>
                            <p className='fsm'>Home</p>
                            <p className='fsm'>About</p>
                            <p className='fsm'>Destinations</p>
                            <p className='fsm'>Booking</p>
                        </div>
                        <div className="col-4 col-md-2 mt-4 fc">
                            <h4 className='flg'>Popular Places</h4>
                            <p className='fsm'>Switzerland</p>
                            <p className='fsm'>Maldives</p>
                            <p className='fsm'>Bora Bora</p>
                            <p className='fsm'>Dubai</p>
                        </div>
                        <div className="col-12 col-md-3 d-none d-lg-block mt-4">
                            <div className="row">
                                <div className="col-4"><img className='fimg' src={tour} alt="" /></div>
                                <div className="col-4"><img className='fimg' src={boat} alt="" /></div>
                                <div className="col-4"><img className='fimg' src={girlrunning} alt="" /></div>
                            </div>
                            <div className="row">
                                <div className="col-4"><img className='fimg' src={main} alt="" /></div>
                                <div className="col-4"><img className='fimg' src={seabike} alt="" /></div>
                                <div className="col-4"><img className='fimg' src={snowyhills} alt="" /></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                       <hr />
                        <p className="copyright text-center mb-0 pb-2">Copyright © 2023, all right reserved | This template is made by Abdullah Sajjad</p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
