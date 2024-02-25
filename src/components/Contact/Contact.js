import React from 'react';
import { useRef, useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import { Link } from 'react-router-dom';
import './Contact.css';
import 'leaflet/dist/leaflet.css'

const Contact = () => {
    const [center, setCenter] = useState({ lat: 21.433920, lng: 91.987030 });
    const ZOOM_LEVEL = 9;
    const mapRef = useRef();

    const formSubmit = (e) => {
        e.preventDefault();
        const userInfo = {
            name: e.target.name?.value,
            email: e.target.email?.value,
            subject: e.target.subject?.value,
            message: e.target.message?.value,
        }
        console.log(userInfo)
    }
    return (
        <div>
            {/* about banner section */}
            <section id='about_contact_banner'>
                <div className='bg-[#003580] opacity-90'>
                    <div className='py-24'>
                        <h1 className='text-center text-[50px] text-white font-bold'>Contact Us</h1>
                        <h3 className='text-center text-[18px] font-medium '><span className='text-white'><Link to='/'>Home</Link></span> | <span className='text-[#ffa903]'>Contact Us</span></h3>
                    </div>
                </div>
            </section>
            {/* about banner section END*/}

            {/* contact form */}
            <section className='mt-20 mx-4 md:mx-10 lg:mx-32 contact__form'>
                <h4 className='text-[#ffa903] text-[14px] font-semibold tracking-[2px] mb-[5px] text-center'>CONTACT US NOW</h4>
                <h1 className='text-[#21283f] font-bold text-center text-[36px] mt-0'>Write a Message</h1>

                <form onSubmit={formSubmit} className='mt-8 mb-8'>
                    <div className='lg:flex gap-[30px] '>
                        <input className='mb-4' type="text" name="name" id="Name" placeholder='Your Name ' required autocomplete="off" />
                        <input className='mb-4' type="email" name="email" id="Email" placeholder='Your Email' required autocomplete="off" />
                    </div>
                    <div className='lg:flex gap-[30px] '>
                        <input className='mb-4' type="text" name="subject" id="Subject" placeholder='Subject' autocomplete="off" />
                        <input className='mb-4' type="tel" name="tel" id="Tel" placeholder='Your Mobile' autocomplete="off" />
                    </div>
                    <textarea name="message" id="Message" placeholder='Message'></textarea>

                    <div className='flex justify-center contact_submitBTN'>
                        <input type="submit" className='bg-[#ffa902] hover:bg-[#622243] rounder-[5px] text-[#2a2a2a] hover:text-white text-[18px] font-semibold py-[18px] px-[23px] items-center leading-none trackin-[0] mt-4 min-w-[160px]' value="SUBMIT" />
                    </div>

                </form>
            </section>
            {/* contact form END*/}

            {/* location map */}
            <section>
                <MapContainer
                    center={center}
                    zoom={ZOOM_LEVEL}
                    ref={mapRef}
                >
                    <TileLayer url='https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=faK1ATyjCuczKTtRYubd' attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>' />
                </MapContainer>
            </section>
            {/* location map End*/}
        </div>
    );
};

export default Contact;