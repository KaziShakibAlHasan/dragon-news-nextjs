'use client'
import { authClient } from '@/lib/auth-client';

import { ClientSegmentRoot } from 'next/dist/client/components/client-segment';
import Link from 'next/link';
import { useForm } from 'react-hook-form';


const RegistarPage = () => {
    const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

    const handleRegsitarFuc = async (data) => {
        // e.preventDefault();
        // const email = e.target.email.value;
        // const password = e.target.password.value;4
        // console.log(email, password, 'email and passwrod')
        const { name, email, password}= data;
        const {data:res, error} = await authClient.signUp.email({
            name:name,
            email:email,
            password: password,
            callbackURL: '/'
        })
        if(error){
            alert(error.server)
        }
        else{
            alert('Successful')
        }
        console.log(res , error)
    }
    return (
        <div className='w-11/12 mx-auto flex justify-center items-center min-h-[80vh] bg-slate-200'>
            <div className='p-4 mt-6 rounded-xl bg-white'>
                <h2 className='font-bold text-2xl   text-center'>Register your Account</h2>
                <form  onSubmit={handleSubmit(handleRegsitarFuc)} className='space-y-4 '>
                     <fieldset className="fieldset">
                        <legend className="fieldset-legend">Name</legend>
                        <input  {...register("name", { required: true })} type="text"  className="input" placeholder="Enter Your Name" />
                    </fieldset>
                     <fieldset className="fieldset">
                        <legend className="fieldset-legend">Photo URL</legend>
                        <input  {...register("text", { required: true })} type="text"  className="input" placeholder="Enter Your photo url" />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Enter Email address</legend>
                        <input  {...register("email", { required: true })} type="email"  className="input" placeholder="Enter Your email address" />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Enter password</legend>
                        <input type="password"  {...register("password", { required: true })}name='password' className="input" placeholder="Enter Your password" />
                    </fieldset>
                    <button className="btn w-full bg-slate-800 text-white">Login</button>
                </form>
            </div>

        </div>
    );
};

export default RegistarPage;