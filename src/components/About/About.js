import React from 'react';
import Img1 from './Assets/about_img01.jpg';
import Img2 from './Assets/about_img02.jpg';
import Service1 from './Assets/service_icon01.png';
import Service2 from './Assets/service_icon02.png';
import Service3 from './Assets/service_icon03.png';
import Faqimg from './Assets/faq_img.jpg';
import { AiFillCheckCircle } from 'react-icons/ai';
import { BsFillRecordCircleFill } from 'react-icons/bs';
import { FaCheck } from 'react-icons/fa';
import './About.css';
import { Link } from 'react-router-dom';
import DestinationArea from '../Home/DestinationArea/DestinationArea';

const About = () => {

    return (
        <div className='mt-0 pt-0'>
            {/* about banner section */}
            <section id='about_contact_banner'>
                <div className='bg-[#003580] opacity-90'>
                    <div className='py-24'>
                        <h1 className='text-center text-[50px] text-white font-bold'>About Us</h1>
                        <h3 className='text-center text-[18px] font-medium '><span className='text-white'><Link to='/'>Home</Link></span> | <span className='text-[#ffa903]'>About Us</span></h3>
                    </div>
                </div>
            </section>
            {/* about banner section END*/}

            {/* who we are! magical singapore */}
            <section className='flex flex-col-reverse mb-0 lg:flex-row mt-28 mx-4 md:mx-10 lg:mx-28'>
                <div className='mt-8 lg:mt-0'>
                    <h5 className='text-[14px] text-[#ffa903] font-semibold tracking-[2px]'>WHO WE ARE</h5>

                    <h1 className='text-[36px] text-[#21283f] font-bold font-[barlow]'>Magical Singapore now <br /> even more amazing!</h1>

                    <h3 className='text-[#606575] mt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elitIn interdum imperdiet ipsum. denounce with rieous indiation and dislike men who beguiled demor.</h3>
                    <ul className='mt-4 mb-12'>
                        <li className='text-[#571336] font-medium mb-[10px] flex items-center gap-1'><AiFillCheckCircle />Pre-Book Your Baggage Donating</li>
                        <li className='text-[#571336] font-medium mb-[10px] flex items-center gap-1'><AiFillCheckCircle />Accusamus Iusto Odio Dignissimos Ducimus</li>
                        <li className='text-[#571336] font-medium mb-[10px] flex items-center gap-1'><AiFillCheckCircle />Dislike Men Who are so Beguiled</li>
                    </ul>


                    <Link to='/contact' className='bg-[#ffa902] hover:bg-[#622243] rounder-[5px] text-[#2a2a2a] hover:text-white text-[18px] font-semibold py-[18px] px-[23px] items-center leading-none trackin-[0] mt-8'>Contact Us</Link>
                </div>

                <div>
                    <div id='about_img'>
                        <img className='img_one' src={Img1} alt="" />
                        <img className='img_two' src={Img2} alt="" />
                    </div>
                </div>
            </section>
            {/* who we are! magical singapore END*/}

            {/* Your great destination */}
            <DestinationArea />
            {/* Your great destination END*/}

            {/* why air geair */}
            <section className='mt-20'>
                <h4 className='text-[#ffa903] text-[14px] font-semibold tracking-[2px] mb-[5px] text-center'>WHY AIR GEAIR</h4>
                <h1 className='text-[#21283f] font-bold text-center text-[36px] mt-0'>Our Great Flight Options</h1>

                <div className='lg:flex justify-evenly mx-4 md:mx-10 lg:mx-28 mt-8'>
                    <div className='p-[30px] rounded-[6px] bg-[#fff] services mt-4 lg:mt-0 services_container'>
                        <div className='services_img'>
                            <img src={Service1} alt="" />
                        </div>
                        <h2 className='text-[#ca96b1] text-medium mb-[15px] mt-5'>Service 01</h2>
                        <h1 className='text-[#571336] text-[24px] font-semibold mb-[30px]'>Pre-Book Your Baggage</h1>
                        <ul>
                            <li className='text-[#606575] items-baseline flex justify-between mb-[15px]'>Pre-book your baggage <span className='text-[#571336]'><FaCheck /></span></li>
                            <li className='text-[#606575] items-baseline flex justify-between mb-[15px]'>Allowance now and save up <span className='text-[#571336]'><FaCheck /></span></li>
                            <li className='text-[#606575] items-baseline flex justify-between mb-[15px]'>90% of baggage charges <span className='text-[#571336]'><FaCheck /></span></li>
                        </ul>
                    </div>

                    <div className='p-[30px] rounded-[6px] bg-[#fff] services mt-4 lg:mt-0 services_container'>
                        <div className='services_img'>
                            <img src={Service2} alt="" />
                        </div>
                        <h2 className='text-[#ca96b1] text-medium mb-[15px] mt-5'>Service 02</h2>
                        <h1 className='text-[#571336] text-[24px] font-semibold mb-[30px]'>Reserve preferred seat!</h1>
                        <ul>
                            <li className='text-[#606575] items-baseline flex justify-between mb-[15px]'>What will it be, window or aisle? <span className='text-[#571336]'><FaCheck /></span></li>
                            <li className='text-[#606575] items-baseline flex justify-between mb-[15px]'>Select your preferred seat prior <span className='text-[#571336]'><FaCheck /></span></li>
                            <li className='text-[#606575] items-baseline flex justify-between mb-[15px]'>Reserved for you. <span className='text-[#571336]'><FaCheck /></span></li>
                        </ul>
                    </div>

                    <div className='p-[30px] rounded-[6px] bg-[#fff] services mt-4 lg:mt-0 services_container'>
                        <div className='services_img'>
                            <img src={Service3} alt="" />
                        </div>
                        <h2 className='text-[#ca96b1] text-medium mb-[15px] mt-5'>Service 03</h2>
                        <h1 className='text-[#571336] text-[24px] font-semibold mb-[30px]'>Enjoy stress-free travel</h1>
                        <ul>
                            <li className='text-[#606575] items-baseline flex justify-between mb-[15px]'>Travel stress-free by getting <span className='text-[#571336]'><FaCheck /></span></li>
                            <li className='text-[#606575] items-baseline flex justify-between mb-[15px]'>Covered for flight modification <span className='text-[#571336]'><FaCheck /></span></li>
                            <li className='text-[#606575] items-baseline flex justify-between mb-[15px]'>Cancellation, accident & <br /> medical <span className='text-[#571336]'><FaCheck /></span></li>
                        </ul>
                    </div>
                </div>
            </section>
            {/* why air geair END*/}

            {/* Flight Asked Questions */}
            <section className='lg:flex mb-10 mt-28 mx-4 md:mx-10 lg:mx-28'>
                <div>
                    <h5 className='text-[14px] text-[#ffa903] font-semibold tracking-[2px]'>ASKED QUESTIONS</h5>
                    <h1 className='text-[36px] text-[#21283f] font-bold font-[barlow]'>Flight Asked Questions</h1>
                    <h4 className='text-[#606575] mt-5 mb-[35px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elitIn imperdiet interdum imperdiet ipsum</h4>

                    <ul className='flex flex-col gap-4'>
                        <li tabIndex={0} className="collapse flight_qa collapse-plus">
                            <input type="checkbox" className="peer" />
                            <div className="collapse-title flight_qa_inactivehead bg-[#ebebee] peer-checked:bg-[#500d30] text-[#571336] peer-checked:text-white">
                                <span className='flex gap-[10px] items-center'><BsFillRecordCircleFill /> Pre-Book Your Baggage Donating a Small</span>
                            </div>
                            <div className="collapse-content">
                                <p className='text-[#d7d5d5] mb-0 text-[16px] leading-normal'>Lorem ipsum dolor sit amet, consectetur adiping elitIn imperdiet interdum imperdiet ipsum generators on the Internet tend to repeat predefined chunks as necessary</p>
                            </div>
                        </li>

                        <li tabIndex={0} className="collapse flight_qa collapse-plus">
                            <input type="checkbox" className="peer" />
                            <div className="collapse-title flight_qa_inactivehead bg-[#ebebee] peer-checked:bg-[#500d30] text-[#571336] peer-checked:text-white">
                                <span className='flex gap-[10px] items-center'><BsFillRecordCircleFill /> Search and Save on Cheap Car Rentals</span>
                            </div>
                            <div className="collapse-content">
                                <p className='text-[#d7d5d5] mb-0 text-[16px] leading-normal'>Lorem ipsum dolor sit amet, consectetur adiping elitIn imperdiet interdum imperdiet ipsum generators on the Internet tend to repeat predefined chunks as necessary</p>
                            </div>
                        </li>

                        <li tabIndex={0} className="collapse flight_qa collapse-plus">
                            <input type="checkbox" className="peer" />
                            <div className="collapse-title flight_qa_inactivehead bg-[#ebebee] peer-checked:bg-[#500d30] text-[#571336] peer-checked:text-white">
                                <span className='flex gap-[10px] items-center'><BsFillRecordCircleFill /> Leave it to us when it comes to finding you</span>
                            </div>
                            <div className="collapse-content">
                                <p className='text-[#d7d5d5] mb-0 text-[16px] leading-normal'>Lorem ipsum dolor sit amet, consectetur adiping elitIn imperdiet interdum imperdiet ipsum generators on the Internet tend to repeat predefined chunks as necessary</p>
                            </div>
                        </li>

                    </ul>
                </div>

                <div className='faq_img mt-4 lg:mt-0'>
                    <img src={Faqimg} alt="" />
                </div>

            </section>
            {/* Flight Asked Questions END*/}
        </div>
    );
};

export default About;