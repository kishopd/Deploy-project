import left from '../assets/Left.png';
import ball from '../assets/ball.svg';
import curve from '../assets/curve.svg';

import github from '../assets/Gothub.svg';
import x from '../assets/x.svg';
import linkedin from '../assets/linkedin.svg';
import discord from '../assets/discord.svg';

import google from '../assets/google.svg';
import apple from '../assets/apple 1.svg';

// Define the component
function First() {
    // Your component logic goes here
    return (
        <>
        <div className="flex h-screen">
      <div className="flex items-center justify-center">
        <img className="w-fit " src={left} alt="" />
        <div className='absolute top-10 left-10'>
        <img src={ball} alt="" className='' />
        <img src={curve} alt="" className='fixed top-14' />
        </div>
        <h1 className='text-white md:text-5xl absolute font-bold left-52 mons'>BASE</h1>

        <div className='flex flex-row absolute bottom-10 left-40 '>
        <img src={github} alt="" className='' />
        <img src={x} alt="" className='pl-7'/>
        <img src={linkedin} alt="" className='pl-6' />
        <img src={discord} alt="" className='pl-6' />
        </div>

        {/* second half */}
      </div>
      <div className="w-1/2 p-10">
        <div className="max-w-md mx-auto bg-color rounded ">
          <h2 className="text-4xl font-semibold mb-2 mons">Sign In </h2>
          <p className='text-2xl lato'>Sign in to your account</p>

          <div className='flex py-4 '>
              <div className='flex px-8 whitespace-nowrap py-3 rounded-lg bg-white'>
                <img src={google} alt="" className='pr-2' />
                <p className='opacity-40'>sign in with Google</p>
              </div>

              <div className='flex ml-8 px-8 py-3 whitespace-nowrap rounded-lg bg-white'>
                <img src={apple} alt=""  className='' />
                <p className='px-2 opacity-40'>Sign in with apple</p>
              </div>
          </div>


     <div className='bg-white rounded-lg pb-4 px-3 mt-1'>
            <p className='pt-3 px-3  '>Email address </p>
            <input type="text " className='email-color py-3 px-12 rounded-lg ml-5 mt-3' placeholder='johndoe@gmail.com'/>
            <p className='pt-3 px-3'>
              Password
            </p>
            <input type="password"  className="password-color py-3   px-12 rounded-lg ml-5 my-3"placeholder='*********' />
        {/* change to link */}
            <p className='pt-3 px-3 forget-color '>
              Forgot password ?
            </p>
          
            <button className='button-color mt-3 ml-5 rounded-lg text-white font-bold mons text-xl py-3'>
              sign in
            </button>
            </div>
      </div>

        
        <div>
          <p className='ml-24 mt-5'>
          Dont have an account ? <span className='register-color'>Register here</span>
          </p>
        </div>


      </div>
    </div>
        </>
    );
}

// Export the component
export default First;
