import { useContext } from 'react';
import { AuthContext } from './Providers/AuthProvider';

const SignUp = () => {
    const  {createUser }=useContext(AuthContext);
    const handleSignUp = e=>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
        createUser(email,password)
        .then(res =>{
            console.log(res.user);
            const createdAt = res.user?.metadata?.creationTime;
            const user = {email, createdAt: createdAt};
            fetch('https://coffee-store-server-phi-red.vercel.app/users',{
                method:'POST',
                headers:{
                    'content-type':'application/json'
                },
                body: JSON.stringify(user)
            })
        })
        .catch((error) => {
            console.log(error);
            // ..
          });
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">SignUp now!</h1>

                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">SignUp</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignUp;