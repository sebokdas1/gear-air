import React, { useEffect, useState } from 'react';
import { HiOutlineUser, HiOutlineUserAdd, HiOutlineUserCircle } from 'react-icons/hi';
import { TfiWorld } from 'react-icons/tfi';
import { BiPhoneCall } from 'react-icons/bi';
import { SlCalender } from 'react-icons/sl';
import { FiHome } from 'react-icons/fi';
import { TbDiscount2 } from 'react-icons/tb';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { AiOutlineStar, AiFillCheckCircle } from 'react-icons/ai';
// import FlightIcon from '../About/Assets/sidebar_flight_icon.jpg';
import Paypal from '../About/Assets/paypel.png'
import Visa from '../About/Assets/visa.png'
import Mastercard from '../About/Assets/mastercard.png'
import Hsbc from '../About/Assets/hsbc.png'
import Ebay from '../About/Assets/ebey.png'
import Western from '../About/Assets/western.png'
import CustomerDet from '../About/Assets/customer_det_icon.jpg'
import './BookingDetails.css';
import { Link } from 'react-router-dom';
// import { coolGray } from 'tailwindcss/colors';

const BookingDetails = () => {
    const [bookingInfo, setBookingInfo] = useState({})
    const [totalPassanger, setTotalPassanger] = useState(1)
    const [discount, setDiscount] = useState(0)
    const [code, setCode] = useState('')
    const [message, setMessage] = useState()

    const handlechange = (e) => {
        setTotalPassanger(e.target?.value)
    }
    useEffect(() => {
        fetch('bookingInfo.json')
            .then(res => res.json())
            .then(data => setBookingInfo(data))
    }, [])



    const getCode = (e) => {
        setCode(e.target?.value)
    }
    const [coupons, setCoupons] = useState()
    useEffect(() => {
        fetch('discountCode.json')
            .then(res => res.json())
            .then(data => setCoupons(data))
    }, [])
    const handleDiscount = () => {
        if (code in coupons) {
            setDiscount(`${coupons[code]}`)
            setMessage(true)
        } else {
            setDiscount(0)
            setMessage(false)
        }
    }

    const totalTicketPrice = bookingInfo?.ticketPrice * totalPassanger;
    const totalTax = Math.floor(totalTicketPrice * bookingInfo?.tax / 100);
    const totalAirFace = totalTicketPrice + totalTax;
    const totalPayable = totalAirFace - discount;


    const payNowbtn = (e) => {
        e.preventDefault();
        const primaryInfo = {
            totalPassanger: e.target?.totalPassanger?.value,
            firstName: e.target?.firstName?.value,
            giveName: e.target?.giveName?.value,
            surName: e.target?.surName?.value,
            country: e.target?.country?.value,
            mobile: e.target?.mobileNumber?.value,
            date: e.target?.date?.value,
            postCode: e.target?.postCode?.value,
            email: e.target?.email?.value,
            flyNumber: e.target?.flyNumber?.value,
            optionalMeal1: e.target?.fistMeal?.value,
            optionalMeal2: e.target?.secondMeal?.value,
            quickPick: e.target?.quickPick?.checked,
        }
        console.log(primaryInfo)
    }
    return (
        <div>
            {/*  banner section */}
            <section id='about_contact_banner'>
                <div className='bg-[#003580] opacity-90'>
                    <div className='py-24'>
                        <h1 className='text-center text-[26px] lg:text-[50px] text-white font-bold'>Booking Details</h1>
                        <h3 className='text-center text-[18px] font-medium '><span className='text-white'><Link to='/'>Home</Link></span> | <span className='text-[#ffa903]'>Booking Detailss</span></h3>
                    </div>
                </div>
            </section>
            {/*  banner section END*/}
            <section className='lg:flex gap-4 mt-12 mx-4 md:mx-10 lg:mx-28'>
                <div>
                    <img src={CustomerDet} alt="" />
                </div>
                <div>
                    <h1 className='text-[#571336] text-[18px] lg:text-[26px] font-semibold mb-[10px]'>Customer Details: Please fill in with valid information.</h1>
                    <ul className="steps w-[100%]">
                        <li className="step step-warning">Guest Information</li>
                        <li className="step step-warning">Payment</li>
                        <li className="step">Confirmation</li>

                    </ul>
                </div>
            </section>

            <form onSubmit={payNowbtn}>
                <div className='lg:flex gap-8 mt-28 mx-4 md:mx-10 lg:mx-28'>
                    {/* passanger primary contact */}
                    <section className='bg-[#fff] shadow-sm'>
                        <h1 className='flex items-center bg-[#57112f] py-[15px] px-[15px] lg:px-[30px] text-[#fff] text-[20px] rounded-tl-[5px] rounded-tr-[5px]'><span className='font-normal mr-[10px] '><HiOutlineUser /></span> <span className='font-semibold'>Passenger 1: Ms (Primary Contact)</span></h1>
                        <div className='pt-[50px] pb-[80px] px-[20px] lg:px-[40px]'>


                            <div className='contact__form'>

                                <div className='flex items-center gap-2'>
                                    <span className='text-[26px] text-[#5b1734]'><HiOutlineUserAdd /></span>

                                    <select onChange={handlechange} id='totalPassanger' className='cursor-pointer'>
                                        <option value="1">Select One..</option>
                                        <option value="2">Select Two..</option>
                                        <option value="3">Select Three..</option>
                                        <option value="4">Select Four..</option>
                                        <option value="5">Select Five..</option>
                                    </select>
                                </div>

                                <div className='lg:flex items-center justify-between gap-3'>

                                    <div className='flex items-center gap-2 mr_selction mt-4'>
                                        <span className='text-[26px] text-[#5b1734]'><HiOutlineUserCircle /></span>
                                        <select id='firstName' className='cursor-pointer'>
                                            <option value="Mr">Mr.</option>
                                            <option value="Mrs">Mrs.</option>
                                            <option value="Others">Others..</option>
                                        </select>
                                    </div>
                                    <input className=' mt-4' type="text" name='giveName' id='giveName' placeholder='Give Name' />
                                    <input className=' mt-4' type="text" name='surName' id='surName' placeholder='Sur Name' />

                                </div>
                                {/* gender will add here */}
                                <div className='lg:grid grid-cols-2 gap-4'>
                                    <div className='flex items-center gap-2 mt-4'>
                                        <span className='text-[26px] text-[#5b1734]'><TfiWorld /></span>
                                        <select id='country' className='cursor-pointer'>
                                            <option value="Bangladesh">Bangladesh</option>
                                            <option value="United States">United States</option>
                                            <option value="Dubai">Dubai</option>
                                            <option value="Saudi Arabia">Saudi Arabia</option>
                                            <option value="Australia">Australia</option>
                                        </select>
                                    </div>

                                    <div className='flex items-center gap-2 mt-4'>
                                        <span className='text-[26px] text-[#5b1734]'><BiPhoneCall /></span>
                                        <input type="tel" name="mobileNumber" id="mobileNumber" placeholder='Mobile Number' />
                                    </div>
                                </div>

                                <div className='lg:grid grid-cols-2 gap-4'>
                                    <div className='flex items-center gap-2 mt-4'>
                                        <span className='text-[26px] text-[#5b1734]'><SlCalender /></span>
                                        <input type="date" name="date" id="date" />
                                    </div>

                                    <div className='flex items-center gap-2 mt-4'>
                                        <span className='text-[26px] text-[#5b1734]'><FiHome /></span>
                                        <input type="number" name="postCode" id="postCode" placeholder='Post Code' />
                                    </div>
                                </div>

                                <div className='lg:grid grid-cols-2 gap-4'>
                                    <div className='flex items-center gap-2 mt-4'>
                                        <span className='text-[26px] text-[#5b1734]'><MdOutlineAlternateEmail /></span>
                                        <input type="email" name="email" id="email" placeholder='youinfo@gmail.com' />
                                    </div>

                                    <div className='flex items-center gap-2 mt-4'>
                                        <span className='text-[26px] text-[#5b1734]'><AiOutlineStar /></span>
                                        <input type="text" name="flyNumber" id="flyNumber" placeholder='FlyerNumber: 98265' />
                                    </div>
                                </div>

                                <div className='meal_select'>
                                    <select id='fistMeal' className='cursor-pointer mt-4'>
                                        <option value="optional 1">Select meal type (optional 1)</option>
                                        <option value="optional 2">Select meal type (optional 2)</option>
                                        <option value="optional 3">Select meal type (optional 3)</option>
                                        <option value="optional 4">Select meal type (optional 4)</option>
                                    </select>
                                    <select id='secondMeal' className='cursor-pointer mt-4'>
                                        <option value="optional 1">Select meal type (optional 1)</option>
                                        <option value="optional 2">Select meal type (optional 2)</option>
                                        <option value="optional 3">Select meal type (optional 3)</option>
                                        <option value="optional 4">Select meal type (optional 4)</option>
                                    </select>
                                </div>

                                <div className='relative flex gap-2 quick__pick mt-4'>
                                    <input type="checkbox" name="quickPick" id="quickPick" value="true" />
                                    <p className='text-[#6a2e4] text-[16px] font-medium'>Add this person to passenger quick pick list</p>
                                </div>

                            </div>

                        </div>
                    </section>
                    {/* passanger primary contact END*/}

                    {/* booking info */}
                    <section className='bg-[#fff] shadow-sm'>
                        <h1 className='bg-[#57112f] py-[15px] px-[15px] lg:px-[30px] font-semibold text-[#fff] text-[20px] rounded-tl-[5px] rounded-tr-[5px]'>Booking Info</h1>
                        <div className='pt-[50px] pb-[40px] px-[20px] lg:px-[40px]'>

                            <div className='flex items-center gap-2 border-b-[1px] border-solid border-[#e8e8e8] pb-[30px]'>
                                <img src={bookingInfo?.airlineLogo} alt="" />
                                <div className='text-[14px] text-[#571336] font-semibold leading-tight flex items-center gap-8'>
                                    <div>
                                        <h3>{bookingInfo?.takeOff} (DEK)</h3>
                                        <h4 className='text-[#606575]'>{bookingInfo?.from}</h4>
                                    </div>
                                    <div>
                                        <h3>{bookingInfo?.landing} (DEK)</h3>
                                        <h4 className='text-[#606575]'>{bookingInfo?.to}</h4>
                                    </div>
                                </div>
                            </div>

                            <div className='pt-[35px] pb-[30px] border-b-[1px] border-solid border-[#e8e8e8]'>
                                <h1 className='text-[#571336] font-bold text-[18px] mb-[30px] pb-[15px] border-b-[1px] border-dashed border-[#d2d2d2]'>Select Discount Option</h1>
                                <div className='coupon_code flex items-center gap-2'>
                                    <span className='text-2xl'><TbDiscount2 /></span>
                                    <input onChange={getCode} type="text" name='couponCode' id='couponCode' placeholder='Enter Code' />
                                    <button onClick={handleDiscount} className='w-[50px] h-[50px]  right-[0] top=[50%] bg-[#ffa903] border-none text-[19px] rounded-[3px] leading-[0] flex items-center justify-center'><AiFillCheckCircle /></button>
                                </div>
                                {message === true && <p className='text-center text-success'>You got ${discount} discount</p>}
                                {message === false && <p className='text-center text-red-500'>Invalid coupon code</p>}
                            </div>

                            <div className='pt-[35px] pb-[30px] border-b-[1px] border-solid border-[#e8e8e8]'>
                                <h1 className='text-[#571336] font-bold text-[18px] mb-[30px] pb-[15px] border-b-[1px] border-dashed border-[#d2d2d2]'>Your Preferred Bank</h1>
                                <div>
                                    <ul className='grid grid-cols-2 gap-6'>
                                        <li className='w-[100%] h-[60px] flex items-center justify-center bg-[#ebebee] rounded-[4px] border-[2px] border-solid border-[#ebebee] hover:border-[#ffa903] cursor-pointer'><img src={Paypal} alt="" /></li>
                                        <li className='w-[100%] h-[60px] flex items-center justify-center bg-[#ebebee] rounded-[4px] border-[2px] border-solid border-[#ebebee] hover:border-[#ffa903] cursor-pointer'><img src={Visa} alt="" /></li>
                                        <li className='w-[100%] h-[60px] flex items-center justify-center bg-[#ebebee] rounded-[4px] border-[2px] border-solid border-[#ebebee] hover:border-[#ffa903] cursor-pointer'><img src={Mastercard} alt="" /></li>
                                        <li className='w-[100%] h-[60px] flex items-center justify-center bg-[#ebebee] rounded-[4px] border-[2px] border-solid border-[#ebebee] hover:border-[#ffa903] cursor-pointer'><img src={Hsbc} alt="" /></li>
                                        <li className='w-[100%] h-[60px] flex items-center justify-center bg-[#ebebee] rounded-[4px] border-[2px] border-solid border-[#ebebee] hover:border-[#ffa903] cursor-pointer'><img src={Ebay} alt="" /></li>
                                        <li className='w-[100%] h-[60px] flex items-center justify-center bg-[#ebebee] rounded-[4px] border-[2px] border-solid border-[#ebebee] hover:border-[#ffa903] cursor-pointer'><img src={Western} alt="" /></li>
                                    </ul>
                                </div>
                            </div>

                            <div className='pt-[35px] pb-[30px] border-b-[1px] border-solid border-[#e8e8e8]'>
                                <h1 className='text-[#571336] font-bold text-[18px] mb-[30px] pb-[15px] border-b-[1px] border-dashed border-[#d2d2d2]'>Your price summary</h1>
                                <div>
                                    <ul className='flex items-center justify-between bg-[#ebebee] py-[13px] px-[20px] mb-[20px]'>
                                        <li className='font-medium text-[16px] text-[#6a2e4d]'>Details</li>
                                        <li className='font-medium text-[16px] text-[#6a2e4d]'>Amount</li>
                                    </ul>

                                    <div className='border-b-[1px] border-solid border-[#e8e8e8] pb-[30px] mb-[8px]'>
                                        <ul className='flex items-center justify-between'>
                                            <li className='text-[#6a2e4d] text-[16px] font-medium mb-[8px] '>Adult x {totalPassanger}</li>
                                            <li className='text-[#6a2e4d] text-[18px] font-semibold'>${totalTicketPrice}</li>
                                        </ul>
                                        <ul className='flex items-center justify-between'>
                                            <li className='text-[#6a2e4d] text-[16px] font-medium mb-[8px] '>Tax x {totalPassanger}</li>
                                            <li className='text-[#6a2e4d] text-[18px] font-semibold'>${totalTax}</li>
                                        </ul>
                                    </div>

                                    <div className='border-b-[1px] border-solid border-[#e8e8e8] pb-[30px] mb-[8px]'>
                                        <ul className='flex items-center justify-between'>
                                            <li className='text-[#6a2e4d] text-[16px] font-medium mb-[8px] '>Total Airfare:</li>
                                            <li className='text-[#6a2e4d] text-[18px] font-semibold'>${totalAirFace}</li>
                                        </ul>
                                        <ul className='flex items-center justify-between'>
                                            <li className='text-[#6a2e4d] text-[16px] font-medium mb-[8px] '>Discount</li>
                                            <li className='text-[#6a2e4d] text-[18px] font-semibold'>- ${discount}</li>
                                        </ul>
                                    </div>

                                    <div className=' pb-[30px] mb-[8px]'>
                                        <ul className='flex items-center justify-between'>
                                            <li className='text-[#6a2e4d] text-[16px] font-medium mb-[8px] '>Total Payable</li>
                                            <li className='text-[#6a2e4d] text-[18px] font-semibold'>${totalPayable}</li>
                                        </ul>
                                    </div>

                                    <input type="submit" className='text-[16px] font-bold bg-[#57112f] rounded-[0] text-[#fff] w-[100%] text-center py-[18px]' value="PAY NOW" />
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </form>
        </div>
    );
};

export default BookingDetails;