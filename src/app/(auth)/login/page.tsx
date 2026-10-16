"use client"
import { authClient } from '@/lib/auth-client';
import { LockKeyhole, Mail } from 'lucide-react';
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
  return (
    <div>
      <form>
        <div>
          <label htmlFor="">Email
            <div className='flex items-center'>
              <Mail /> <input type="email" placeholder='Enter your email' required className='border-none' name='email' />
            </div>
          </label>
        </div>
        <div>
          <label htmlFor="">Password
            <div className='flex items-center '>
              <LockKeyhole className='' />
              <input type="text" placeholder='Enter your password' required name='password' /></div>
          </label>
        </div>


        {/* google singn */}
        <button
          type="button"
          onClick={async()=>{
            const{error}=await authClient.signIn.social({
              provider:"google",
              callbackURL:'/'
            })
            if (error) {
              console.error("Google login error:", error.message);
            }
          }}
          className="flex w-full items-center justify-center gap-3 rounded-xl border px-5 py-3.5"
        >
          <FcGoogle size={21} />
          Continue with Google
        </button>


      </form>
    </div>
  );
};

export default Login;