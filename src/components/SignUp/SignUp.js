import React from "react";
import { Link } from "react-router-dom";
import img from "./../../images/login.png";
import fb from "./../../images/fb.svg";
import gl from "./../../images/google.svg";
import { useForm } from "react-hook-form";
import { AiOutlineMail } from "react-icons/ai";
import { signUpForm } from "../../configs/forms.config";
import { FaUserCircle } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";

const SignUp = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
  };

  return (
    <div
      className={`w-full min-h-screen bg-no-repeat bg-cover bg-center`}
      style={{ backgroundImage: `url('/assets/img/signBg.jpg')` }}
    >
      <div
        className="bg-gray-600/50 min-h-screen flex justify-center items-center"
        style={{ "backdrop-filter": "blur(5px)" }}
      >
        <div className="lg:flex rounded-xl max-w-[90%] overflow-hidden animtry my-10">
          <div className="w-full flex justify-center items-center bg-white/50">
            <img
              src={img}
              alt=""
              className="my-10 rounded-xl w-1/2 lg:w-full"
            />
          </div>
          <div className="w-full flex justify-center bg-white flex-col px-5 md:px-10 py-10">
            <div className="flex flex-col max-w-[400px] mx-auto w-full">
              <div className="flex flex-col">
                <h2 className="text-xl md:text-2xl font-bold">Get Started</h2>
                <p className="text-gray-400 mt-2">
                  Already have an account?&nbsp;
                  <Link
                    to="/signin"
                    className="text-blue-400 font-medium relative left-0 duration-300 hover:left-2"
                  >
                    Log in
                  </Link>
                </p>
              </div>
              <div className="flex social-logins mt-4 gap-2">
                <div className="group duration-300 border rounded-lg flex gap-2 px-4 py-2 w-1/2 cursor-pointer hover:bg-gray-100/70 hover:border-blue-300">
                  <img
                    src={gl}
                    alt=""
                    className="w-6 group-hover:rotate-[360deg] duration-700"
                  />
                  <p className="font-medium text-gray-500 relative left-0 duration-300 group-hover:left-1">
                    Google
                  </p>
                </div>
                <div className="group duration-300 border rounded-lg flex gap-2 px-4 py-2 w-1/2 cursor-pointer hover:bg-gray-100/70 hover:border-blue-300">
                  <img
                    src={fb}
                    alt=""
                    className="w-6 group-hover:rotate-[360deg] duration-700"
                  />
                  <p className="font-medium text-gray-500 relative left-0 duration-300 group-hover:left-1">
                    Facebook
                  </p>
                </div>
              </div>
              <div className="my-7 flex justify-center items-center relative">
                <hr className="w-full" />
                <p className="absolute top-[-16px] bg-white px-4 text-lg">or</p>
              </div>
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full max-w-[400px] mx-auto"
            >
              <p className="text-gray-500 font-medium text-sm">Your Name</p>
              <div className="relative">
                <input
                  type="text"
                  className="peer w-full border rounded-md py-2 px-10 outline-none text-gray-500 focus:border-blue-400 focus:outline-blue-200 duration-300 outline-offset-0"
                  placeholder="Enter your name"
                  {...register("name", {
                    required: {
                      value: signUpForm.name.required,
                      message: signUpForm.name.requiredMsg,
                    },
                  })}
                />
                <FaUserCircle className="absolute top-[13px] text-lg left-3 text-gray-500 duration-700 peer-focus:rotate-[360deg]" />
                <p className="text-xs text-red-400 mt-0">
                  {errors.name?.message}
                </p>
              </div>

              <p className="text-gray-500 font-medium text-sm mt-2">
                Your Email
              </p>
              <div className="relative">
                <input
                  type="text"
                  className="peer w-full border rounded-md py-2 px-10 outline-none text-gray-500 focus:border-blue-400 focus:outline-blue-200 duration-300 outline-offset-0"
                  placeholder="Enter your email"
                  {...register("email", {
                    required: {
                      value: signUpForm.email.required,
                      message: signUpForm.email.requiredMsg,
                    },
                  })}
                />
                <AiOutlineMail className="absolute top-[13px] text-lg left-3 text-gray-500 duration-700 peer-focus:rotate-[360deg]" />
                <p className="text-xs text-red-400 mt-0">
                  {errors.email?.message}
                </p>
              </div>

              <p className="text-gray-500 font-medium text-sm mt-2">Password</p>
              <div className="relative">
                <input
                  type="password"
                  className="peer w-full border rounded-md py-2 px-10 outline-none text-gray-500 focus:border-blue-400 focus:outline-blue-200 duration-300 outline-offset-0"
                  placeholder="Enter a password"
                  {...register("password", {
                    required: {
                      value: signUpForm.password.required,
                      message: signUpForm.password.requiredMsg,
                    },
                    minLength: {
                      value: signUpForm.password.minLength,
                      message: signUpForm.password.minLengthMsg,
                    },
                  })}
                />
                <RiLockPasswordLine className="absolute top-[13px] text-lg left-3 text-gray-500 duration-700 peer-focus:rotate-[360deg]" />
                <p className="text-xs text-red-400 mt-0">
                  {errors.password?.message}
                </p>
              </div>

              <div className="relative mt-2">
                <input
                  type="checkbox"
                  className="outline-none duration-300 text-2xl cursor-pointer"
                  {...register("tos", {
                    required: {
                      value: signUpForm.tos.required,
                      message: signUpForm.tos.requiredMsg,
                    },
                  })}
                />
                <p className="inline-block ml-2 text-gray-500">
                  Agree to&nbsp;
                  <Link to="/tos" className="text-blue-400 hover:underline">
                    Terms of Service
                  </Link>{" "}
                  and&nbsp;
                  <Link to="/privacy" className="text-blue-400 hover:underline">
                    Privacy Policy
                  </Link>
                </p>
                <p className="text-xs text-red-400 mt-0">
                  {errors.tos?.message}
                </p>
              </div>

              <input
                type="submit"
                value="Register"
                className="bg-[#ff0078] duration-300 hover:bg-[#dd047a] text-white w-full mt-7 py-2 rounded-md shadow shadow-[#00000060] cursor-pointer outline-none active-outline-none"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
