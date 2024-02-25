import { Link, useNavigate } from 'react-router-dom';
import img from './../../images/forgot.png';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { recoveryForm, signUpForm } from '../../configs/forms.config';
import { RiLockPasswordLine } from 'react-icons/ri';
import { MdOutlineConfirmationNumber } from 'react-icons/md';
import sendConfirmCode from './sendConfirmCode';

const ConfirmPassword = () => {

    const navigate = useNavigate();
    const { handleSubmit, register, formState: { errors } } = useForm();
    const [email, setEmail] = useState(null);
    const [time, setTime] = useState(59);
    const [timer, setTimer] = useState("59");

    useEffect(() => {
        const localObj = localStorage.getItem("recovery");
        if (!localObj) return navigate('/recovery');
        try {
            const json = JSON.parse(localObj);
            if (!json?.email || !json?.retryTime) return navigate('/recovery');
            setEmail(json.email);
            setTime(json.retryTime - parseInt(Date.now() / 1000));
        }
        catch (e) { localStorage.removeItem('recovery'); navigate('/recovery'); }
    }, [navigate]);
    useEffect(() => {
        console.log('time', time);
        time >= 0 && setTimeout(() => {
            const d = new Date(time * 1000);
            const second = d.getUTCSeconds();
            setTimer(second < 10 ? '0' + second : second);
            setTime(time - 1);
        }, 1000);
    }, [time]);

    const onSubmit = async data => {
        console.log(data);
    }

    return (
        <div className={`w-full min-h-screen bg-no-repeat bg-cover bg-center`} style={{ backgroundImage: `url('/assets/img/signBg.jpg')` }}>
            <div className='bg-gray-600/50 min-h-screen flex justify-center items-center' style={{ 'backdrop-filter': 'blur(5px)' }}>
                <div className='lg:flex rounded-xl max-w-[90%] overflow-hidden my-10'>
                    <div className='w-full flex justify-center items-center bg-white/50 px-5'>
                        <img src={img} alt="" className='my-10 rounded-xl w-1/2 lg:w-full' />
                    </div>
                    <div className='w-full flex justify-center bg-white flex-col px-5 md:px-10 py-10'>
                        <div className='flex flex-col max-w-[400px] mx-auto w-full'>
                            <div className='flex flex-col'>
                                <h2 className="text-xl md:text-2xl font-bold">Confirm your email</h2>
                                <p className="text-gray-400 mt-2">Return to&nbsp;
                                    <Link to='/signin' className='text-blue-400 font-medium relative left-0 duration-300 hover:left-2'>Login</Link>
                                </p>
                            </div>
                            <hr className='w-full mt-2' />
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)} className='w-full max-w-[400px] mx-auto'>

                            <div className='mt-2 text-gray-500'>
                                Email not received?
                                {time > 0 ? <p>Resend in: {timer}</p> : <p className='text-blue-400 hover:underline cursor-pointer' onClick={() => sendConfirmCode(navigate, email)}>Resend</p>}
                            </div>

                            <p className='text-gray-500 font-medium text-sm mt-2'>Code from email</p>
                            <div className='relative'>
                                <input type="text" inputMode='numeric'
                                    className='peer w-full border rounded-md py-2 px-10 outline-none text-gray-500 focus:border-blue-400 focus:outline-blue-200 duration-300 outline-offset-0'
                                    placeholder='Enter code from email'
                                    {...register('code', {
                                        required: { value: recoveryForm.code.required, message: recoveryForm.code.requiredMsg },
                                        minLength: { value: recoveryForm.code.minLength, message: recoveryForm.code.minLengthMsg },
                                        maxLength: { value: recoveryForm.code.maxLength, message: recoveryForm.code.maxLengthMsg }
                                    })}
                                />
                                <MdOutlineConfirmationNumber className='absolute top-[13px] text-lg left-3 text-gray-500 duration-700 peer-focus:rotate-[360deg]' />
                                <p className='text-xs text-red-400 mt-0'>{errors.code?.message}</p>
                            </div>

                            <p className='text-gray-500 font-medium text-sm mt-2'>New Password</p>
                            <div className='relative'>
                                <input type="text"
                                    className='peer w-full border rounded-md py-2 px-10 outline-none text-gray-500 focus:border-blue-400 focus:outline-blue-200 duration-300 outline-offset-0'
                                    placeholder='Enter a password'
                                    {...register('password', {
                                        required: { value: signUpForm.password.required, message: signUpForm.password.requiredMsg },
                                        minLength: { value: signUpForm.password.minLength, message: signUpForm.password.minLengthMsg },
                                        maxLength: { value: signUpForm.password.maxLength, message: signUpForm.password.maxLengthMsg }
                                    })}
                                />
                                <RiLockPasswordLine className='absolute top-[13px] text-lg left-3 text-gray-500 duration-700 peer-focus:rotate-[360deg]' />
                                <p className='text-xs text-red-400 mt-0'>{errors.password?.message}</p>
                            </div>

                            <input type='submit' value='Submit'
                                className='bg-[#ff0078] duration-300 hover:bg-[#dd047a] text-white w-full mt-7 py-2 rounded-md shadow shadow-[#00000060] cursor-pointer outline-none active-outline-none'
                            />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmPassword;