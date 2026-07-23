'use client'
import { ClientSegmentRoot } from 'next/dist/client/components/client-segment';
import Link from 'next/link';
import { useForm } from 'react-hook-form';


const LoginPage = () => {
    const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

    const handleLoginFunc = (data) => {
        // e.preventDefault();
        // const email = e.target.email.value;
        // const password = e.target.password.value;4
        // console.log(email, password, 'email and passwrod')
        console.log(data);
    }
    return (
        <div className='w-11/12 mx-auto flex justify-center items-center min-h-[80vh] bg-slate-200'>
            <div className='p-4 rounded-xl bg-white'>
                <h2 className='font-bold text-2xl text-center'>Login your Account</h2>
                <form  onSubmit={handleSubmit(handleLoginFunc)} className='space-y-4'>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Enter address</legend>
                        <input  {...register("email", { required: true })} type="email"  className="input" placeholder="Enter Your email address" />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Enter password</legend>
                        <input type="password"  {...register("password", { required: true })}name='password' className="input" placeholder="Enter Your password" />
                    </fieldset>
                    <button className="btn w-full bg-slate-800 text-white">Login</button>
                </form>
                <p className='mt-3 text-sm'>Don't have an account?<Link className='text-blue-600' href={"/register"}>Register</Link></p>
            </div>

        </div>
    );
};

export default LoginPage;