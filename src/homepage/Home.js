import React from 'react'
import girlstand from "./girlstand.jpg"
import girlsitting from "./girlsitting.jpg"
import snowyhills from "./snowyhills.jpeg"
import fransisco from "./fransisco.jpeg"
import maldives from "./maldives.jpeg"
import switzerland from "./switzerland.jpeg"
import { NavLink } from 'react-router-dom'

export default function Home() {
    return (
        <>
            <div className="homemain ">
                <div className="container py-4  ">
                    <div className="row d-flex justify-content-center">
                        <div className=" col-5 col-sm-4 col-md-3 d-flex flex-column align-items-center   justify-content-center ">
                            <p className='mtxt'>Lets Explore The <b className='world'>World</b></p>
                            <NavLink to='/booking' className="btn btn-sm btn-lg-md  mainbtn">Book Now</NavLink>
                        </div>
                        <div className=" col-7 col-sm-5 col-md-3  "><img className='img-fluid main object-fit-cover ' src={girlsitting} alt="" /></div>
                        <div className="d-none d-md-block  col-md-3  col-sm-4  "><img className='img-fluid main object-fit-cover' src={snowyhills} alt="" /></div>
                        <div className=" d-none d-lg-block col-md-3 "><img className='img-fluid main object-fit-cover' src={girlstand} alt="" /></div>
                    </div>
                </div>
            </div>
            <div className="home2 my-5">
                <div className="container py-5">
                    <div className="row text-center">
                        <div className="icon col-md-4 d-flex flex-column justify-content-center align-items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-plane" width="110" height="110" viewBox="0 0 24 24" stroke-width="1" stroke="#fc2d2d" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M16 10h4a2 2 0 0 1 0 4h-4l-4 7h-3l2 -7h-4l-2 2h-3l2 -4l-2 -4h3l2 2h4l-2 -7h3z" />
                            </svg>
                            <h1 className='iconb'>Pleasant Journey</h1>
                            <p className='iconsm'>A wonderful serenity has taken to the possession of my entire soul.</p>
                        </div>
                        <div className="icon col-md-4 d-flex flex-column justify-content-center align-items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-building-skyscraper" width="100" height="100" viewBox="0 0 24 24" stroke-width="1" stroke="#fc2d2d" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M3 21l18 0" />
                                <path d="M5 21v-14l8 -4v18" />
                                <path d="M19 21v-10l-6 -4" />
                                <path d="M9 9l0 .01" />
                                <path d="M9 12l0 .01" />
                                <path d="M9 15l0 .01" />
                                <path d="M9 18l0 .01" />
                            </svg>
                            <h1 className='iconb'>Luxuries Hotel</h1>
                            <p className='iconsm'>A wonderful serenity has taken to the possession of my entire soul.</p>
                        </div>
                        <div className="icon col-md-4 d-flex flex-column justify-content-center align-items-center ">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-map-check" width="100" height="100" viewBox="0 0 24 24" stroke-width="1" stroke="#fc2d2d" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M11 18l-2 -1l-6 3v-13l6 -3l6 3l6 -3v9" />
                                <path d="M9 4v13" />
                                <path d="M15 7v8" />
                                <path d="M15 19l2 2l4 -4" />
                            </svg>
                            <h1 className='iconb'>Travel Guide</h1>
                            <p className='iconsm'>A wonderful serenity has taken to the possession of my entire soul.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="home3">
                <div className="container">
                    <div className="col-12"><h1 className='rt mb-4'>Recent Tours</h1></div>
                    <div className="row text-center">
                        <div className="col-md-4 d-flex flex-column justify-content-center">
                            <img className='rtimg shadow-lg' src={fransisco} alt="" />
                            <p className="rtdate mt-3 mb-0">Aug 02, 2017</p>
                            <p className="rtxt">Fransisco</p>
                        </div>
                        <div className="col-md-4">
                            <img className='rtimg shadow-lg' src={maldives} alt="" />
                            <p className="rtdate mt-3 mb-0">Oct 12, 2013</p>
                            <p className="rtxt">Maldives</p>
                        </div>
                        <div className="col-md-4">
                            <img className='rtimg shadow-lg' src={switzerland} alt="" />
                            <p className="rtdate mt-3 mb-0">Sep 04, 2019</p>
                            <p className="rtxt ">Switzerland</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
