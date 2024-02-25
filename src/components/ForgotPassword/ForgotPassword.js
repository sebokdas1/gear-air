import { Link, useNavigate } from 'react-router-dom';
import img from './../../images/forgot.png';
import { useForm } from 'react-hook-form';
import { AiOutlineMail } from 'react-icons/ai';
import { signUpForm } from '../../configs/forms.config';
import sendConfirmCode from './sendConfirmCode';

const ForgotPassword = () => {

    const navigate = useNavigate();
    const { handleSubmit, register, formState: { errors } } = useForm();

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
                                <h2 className="text-xl md:text-2xl font-bold">Recover account password</h2>
                                <p className="text-gray-400 mt-2">Return to&nbsp;
                                    <Link to='/signin' className='text-blue-400 font-medium relative left-0 duration-300 hover:left-2'>Login</Link>
                                </p>
                            </div>
                            <hr className='w-full mt-2' />
                        </div>
                        <form onSubmit={handleSubmit(async ({ email }) => sendConfirmCode(navigate, email))} className='w-full max-w-[400px] mx-auto'>

                            <p className='text-gray-500 font-medium text-sm mt-2'>Your Email</p>
                            <div className='relative'>
                                <input type="email"
                                    className='peer w-full border rounded-md py-2 px-10 outline-none text-gray-500 focus:border-blue-400 focus:outline-blue-200 duration-300 outline-offset-0'
                                    placeholder='Enter your email'
                                    {...register('email', {
                                        required: { value: signUpForm.email.required, message: signUpForm.email.requiredMsg },
                                        minLength: { value: signUpForm.email.minLength, message: signUpForm.email.minLengthMsg },
                                        maxLength: { value: signUpForm.email.maxLength, message: signUpForm.email.maxLengthMsg }
                                    })}
                                />
                                <AiOutlineMail className='absolute top-[13px] text-lg left-3 text-gray-500 duration-700 peer-focus:rotate-[360deg]' />
                                <p className='text-xs text-red-400 mt-0'>{errors.email?.message}</p>
                            </div>

                            <input type='submit' value='Send Code'
                                className='bg-[#ff0078] duration-300 hover:bg-[#dd047a] text-white w-full mt-7 py-2 rounded-md shadow shadow-[#00000060] cursor-pointer outline-none active-outline-none'
                            />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;