import React from 'react'
import manonbike from './manonbike.jpeg'
import waterfall from './waterfall.jpeg'
import aeroplane from './aeroplane.webp'
import manupwater from './manupwater.jpeg'
import { NavLink } from 'react-router-dom'
import { useEffect } from 'react'

export default function Booking() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <>
            <div className="homemain ">
                <div className="container py-4  ">
                    <div className="row d-flex justify-content-center">
                        <div className=" col-5 col-sm-4 col-md-3 d-flex flex-column align-items-center   justify-content-center ">
                            <p className='mtxt'>Lets Explore The <b className='world'>World</b></p>
                            <NavLink to='/booking' className="btn btn-sm btn-lg-md  mainbtn">Book Now</NavLink>
                        </div>
                        <div className=" col-7 col-sm-5 col-md-3  "><img className='img-fluid main object-fit-cover ' src={manonbike} alt="" /></div>
                        <div className="d-none d-md-block  col-md-3  col-sm-4  "><img className='img-fluid main object-fit-cover' src={manupwater} alt="" /></div>
                        <div className=" d-none d-lg-block col-md-3 "><img className='img-fluid main object-fit-cover' src={aeroplane} alt="" /></div>
                    </div>
                </div>
            </div>
            <div className="about4  my-5">
                <div className="container">
                    <div className="row b4c shadow-lg ">
                        <div className="col-md-4 px-5 pb-4 pb-lg-0 px-md-3">
                            <div className="col-12 px-3 mt-5 ">
                                <p className='labels my-0 mt-2 mt-xl-3 d-block ms-1'>Name:</p>
                                <input className='w-100 inputs' type="text" />
                            </div>
                            <div className="col-12 px-3">
                                <p className='labels my-0 mt-2 mt-xl-3 d-block ms-1'>Phone:</p>
                                <input className='w-100 inputs' type="number" />
                            </div>
                            <div className="col-12 px-3">
                                <p className='labels my-0 mt-2 mt-xl-3 d-block ms-1'>Destinations:</p>
                                <select className='w-100 inputs text-center' type="text" >
                                    <option value=""></option>
                                    <option value="">Maldives</option>
                                    <option value="">Paris</option>
                                    <option value="">Banff</option>
                                    <option value="">Bali</option>
                                    <option value="">London</option>
                                    <option value="">Cappadocia</option>
                                    <option value="">Colosseum</option>
                                    <option value="">Pakistan</option>
                                    <option value="">London</option>
                                </select>
                            </div>
                            <div className="col-12 px-3">
                                <p className='labels my-0 mt-2 mt-xl-3 d-block ms-1'>Num of Persons:</p>
                                <select className='w-100 inputs text-center' type="text" >
                                    <option value=""></option>
                                    <option value="">1</option>
                                    <option value="">2</option>
                                    <option value="">3</option>
                                    <option value="">4</option>
                                    <option value="">5</option>
                                    <option value="">6</option>
                                    <option value="">7</option>
                                    <option value="">8</option>
                                    <option value="">8+</option>
                                </select>
                            </div>
                            <div className="col-12 px-3">
                                <p className='labels my-0 mt-2 mt-xl-3 d-block ms-1'>Date:</p>
                                <input className='w-100 inputs text-center' type="Date" />
                            </div>
                            <div className="col-12 px-3">
                                <p className='labels my-0 mt-2 mt-xl-3 d-block ms-1'>Additional Information:</p>
                                <textarea className='w-100 inputs' id="" cols="30" rows="7"></textarea>
                            </div>
                            <div className="col-12 px-3">
                                <p className='labels my-0 mt-2 mt-xl-3 d-block ms-1'>Class:</p>
                                <select className='w-100 inputs text-center' type="text" >
                                    <option value=""></option>
                                    <option value="">Economy</option>
                                    <option value="">VIP</option>
                                    <option value="">Business</option>
                                </select>
                            </div>
                            <div className="col-12 px-3">
                                <p className='labels my-0 mt-2 mt-xl-3 d-block ms-1'>Card:</p>
                                <select className='w-100 inputs text-center' type="text" >
                                    <option value=""></option>
                                    <option value="">VISA</option>
                                    <option value="">PayPak</option>
                                    <option value="">Jazzcash</option>
                                </select>    
                            </div>
                            <div className="col-12 bbtndiv">
                                    <button className="btn btn-md bbtn ">Book Now</button>
                                </div>
                        </div>
                        <div className="col-md-8 d-none d-md-block ">
                            <img className='bimg h-100' src={waterfall} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
