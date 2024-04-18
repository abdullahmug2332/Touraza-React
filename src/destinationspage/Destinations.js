import React from 'react'
import planeview from './planeview.webp'
import pondstreet from './pondstreet.jpeg'
import beachplane from './beachplane.jpg'
import maldives from './maldives.jpeg'
import paris from './paris.jpeg'
import bali from './bali.jpg'
import banff from './banff.jpeg'
import london from './london.jpeg'
import Cappadocia from './Cappadocia.jpeg'
import Colosseum from './Colosseum.jpg'
import pakistan from './pakistan.jpeg'
import Dubai from './Dubai.webp'
import { NavLink } from 'react-router-dom'
import { useEffect } from 'react'


export default function Destinations() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <>
            <div className="homemain ">
                <div className="container py-4  ">
                    <div className="row d-flex justify-content-center">
                        <div className=" col-5 col-sm-4 col-md-3 d-flex flex-column align-items-center   justify-content-center ">
                            <p className='mtxt'>Lets Know About <b className='world'>Places</b></p>
                            <NavLink to='/booking' className="btn btn-sm btn-lg-md  mainbtn">Book Now</NavLink>
                        </div>
                        <div className=" col-7 col-sm-5 col-md-3  "><img className='img-fluid main object-fit-cover ' src={planeview} alt="" /></div>
                        <div className="d-none d-md-block  col-md-3  col-sm-4  "><img className='img-fluid main object-fit-cover' src={pondstreet} alt="" /></div>
                        <div className=" d-none d-lg-block col-md-3 "><img className='img-fluid main object-fit-cover' src={beachplane} alt="" /></div>
                    </div>
                </div>
            </div>

            <div className="home3">
                <div className="container">
                <div className="col-12 my-5 pt-5"><h1 className='rt my-md-5 pt-md-5'>Destinations</h1></div>
                    <div className="row text-center ">
                        <div className="col-md-4 ">
                            <div className="card shadow-lg mb-5" >
                                <img src={paris} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text">Paris</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card shadow-lg mb-5" >
                                <img src={maldives} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text">Maldives</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card shadow-lg mb-5" >
                                <img src={banff} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text">Banff</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row text-center ">
                        <div className="col-md-4 ">
                            <div className="card shadow-lg mb-5" >
                                <img src={Cappadocia} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text">Cappadocia</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card shadow-lg mb-5" >
                                <img src={london} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text">London</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card shadow-lg mb-5" >
                                <img src={bali} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text">Bali</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row text-center ">
                        <div className="col-md-4 ">
                            <div className="card shadow-lg mb-5" >
                                <img src={Colosseum} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text">Colosseum</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card shadow-lg mb-5" >
                                <img src={pakistan} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text">Pakistan</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card shadow-lg mb-5" >
                                <img src={Dubai} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text">Dubai</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
