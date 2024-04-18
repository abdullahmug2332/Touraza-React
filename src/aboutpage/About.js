import React from 'react'
import climber from './climber.jpeg'
import girlrunning from './girl running.jpeg'
import effeltower2 from './effeltower2.jpeg'
import effelnight from './effelnight.webp'
import ceo from './ceo.jpg'
import mapping from './maping.jpg'
import main from './main.jpg'
import { NavLink } from 'react-router-dom'
import { useEffect } from 'react'


export default function About() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <>
            <div className="homemain ">
                <div className="container py-4  ">
                    <div className="row d-flex justify-content-center">
                        <div className=" col-5 col-sm-4 col-md-3 d-flex flex-column align-items-center   justify-content-center ">
                            <p className='mtxt'>Lets Know About <b className='world'>Us</b></p>
                            <NavLink to='/booking' className="btn btn-sm btn-lg-md  mainbtn">Book Now</NavLink>
                        </div>
                        <div className=" col-7 col-sm-5 col-md-3  "><img className='img-fluid main object-fit-cover ' src={climber} alt="" /></div>
                        <div className="d-none d-md-block  col-md-3  col-sm-4  "><img className='img-fluid main object-fit-cover' src={girlrunning} alt="" /></div>
                        <div className=" d-none d-lg-block col-md-3 "><img className='img-fluid main object-fit-cover' src={effeltower2} alt="" /></div>
                    </div>
                </div>
            </div>
            <div className="about2 my-5">
                <div className="container mp-5">
                    <div className="row my-5">
                        <div className="col-md-5 d-flex flex-column align-items-center text-center">
                            <img className='ceoimg' src={ceo} alt="" />
                            <p className="ceoname">Isabella James</p>
                            <p className="ceorank">CEO & Founder of Touraza Co.</p>
                        </div>
                        <div className="col-md-7">
                            <p className="aij">About Isabella James</p>
                            <p className="aboutdata">Meet Isabella James, the driving force behind Touraza's success as the CEO. With a deep passion for travel, Isabella has curated unique and unforgettable experiences for every explorer. Her commitment to excellence and a keen eye for innovation have shaped Touraza into a leading name in the travel industry. Isabella's leadership is marked by a dedication to responsible tourism, ensuring that each journey leaves a positive impact. As a storyteller and advocate for immersive exploration, she continues to redefine travel, inviting you to embark on journeys that go beyond the ordinary. With Isabella's vision, Touraza is not just a travel company; it's a gateway to extraordinary adventures.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about3">
                <div className="container">
                    <div className="col-12"><p className="os">Our Story</p></div>
                    <p className="aboutdata">Welcome to Touraza, your gateway to unparalleled travel experiences! At Touraza, we transcend the conventional boundaries of exploration, crafting journeys that unfold as unique stories. Our narrative is woven with a passion for wanderlust and a commitment to curate extraordinary adventures. Born from the vision of a team deeply rooted in the love for travel, Touraza stands as a testament to the belief that every voyage should be an immersive tale waiting to be told. With a blend of expertise and a genuine enthusiasm for discovery, we embark on a mission to redefine the art of travel. Join us on a journey where each destination becomes a chapter, and every moment is an opportunity to create memories that last a lifetime. This is our story, and we invite you to be an integral part of it—because at Touraza, your adventure is not just a trip; it's a narrative waiting to unfold. Born from the vision of a team deeply rooted in the love for travel, Touraza stands as a testament to the belief that every voyage should be an immersive tale waiting to be told. With a blend of expertise and a genuine enthusiasm for discovery, we embark on a mission to redefine the art of travel. Join us on a journey where each destination becomes a chapter, and every moment is an opportunity to create memories that last a lifetime. This is our story, and we invite you to be an integral part of it—because at Touraza, your adventure is not just a trip; it's a narrative waiting to unfold.</p>
                    <img src={main} className='w-100 px-2 my-2 rounded  ' alt="" />
                    <p className="aboutdata">Embark on a transformative journey with Touraza, a distinguished name in the realm of travel and exploration. Our story is a captivating narrative that unfolds as a testament to our unwavering commitment to providing unparalleled tour and travel experiences. Founded by a passionate team of travel enthusiasts, Touraza is more than just a company; it's a collective vision to redefine the very essence of wanderlust. Our roots lie in a profound love for exploration, a love that has propelled us to curate journeys that go beyond the ordinary. Each adventure we offer is a carefully crafted chapter in a larger-than-life story, a story that is uniquely yours to tell. Founded by a passionate team of travel enthusiasts, Touraza is more than just a company; it's a collective vision to redefine the very essence of wanderlust. Our roots lie in a profound love for exploration, a love that has propelled us to curate journeys that go beyond the ordinary. Each adventure we offer is a carefully crafted chapter in a larger-than-life story, a story that is uniquely yours to tell.</p>
                    <img src={mapping} className='w-100 px-2 my-2 rounded  ' alt="" />
                    <p className="aboutdata">At Touraza, we believe that travel is not merely a journey from one destination to another; it is a transformative experience, an opportunity to discover the world and oneself. Our team of seasoned experts brings together a wealth of knowledge, a keen eye for detail, and a genuine passion for creating memories. From the moment you embark on a Touraza adventure, you're not just a traveler; you're an integral part of a grand narrative waiting to unfold.</p>
                    <p className="aboutdata"> we traverse the globe, we strive to provide not just trips, but immersive tales that leave an indelible mark on your heart. Whether you're seeking the thrill of exotic locales, the serenity of cultural retreats, or the adrenaline of adventure, Touraza has a story crafted just for you. So, come join us and be a protagonist in your own extraordinary journey. With Touraza, your story is not just a travel itinerary; it's a captivating saga of exploration, discovery, and the joy of the journey itself. Welcome to Touraza—where every adventure is a story waiting to be lived.</p>
                </div>
            </div>
            <div className="about4 py-5 my-5">
                <div className="container">
                    <div className="row a4c shadow-lg ">
                        <div className="col-md-6 d-none d-md-block ">
                            <img className='atimg h-100' src={effelnight} alt="" />
                        </div>
                        <div className="col-md-6 px-5 pb-4 pb-lg-0 px-md-3">
                            <p className="at mt-5">About Touraza</p>
                            <p className="atxt">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                            <p className="atxt">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth</p>
                            <div className="row text-center mt-xl-5 pt-xl-5 ">
                                <div className="col-6 text-center">
                                    <p className="bigt">50+</p>
                                    <p className="smallt">Years of Experience</p>
                                </div>
                                <div className="col-5 text-center">
                                    <p className="bigt">250+</p>
                                    <p className="smallt">Total Tours</p>
                                </div>
                            </div>
                            <div className="row ">
                                <div className="col-6 text-center">
                                    <p className="bigt">130+</p>
                                    <p className="smallt">Number of Staff</p>
                                </div>
                                <div className="col-5 text-center">
                                    <p className="bigt">5000+</p>
                                    <p className="smallt">happy Coustomers</p>
                                </div>
                            </div>
                        </div>
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

        </>
    )
}
