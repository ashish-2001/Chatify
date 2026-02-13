import { useState } from "react";

function Auth(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleLogin = async() => {

    }

    const handleSignup = async() => {

    }

    return(
        <div className="h-screen w-screen flex items-center justify-center">
            <div className="h-[80vh] bg-white border-2 border-white text-opacity-60 shadow-2xl w-[80vw] md:w-[90vw] lg:w-[70vw] xl:w-[60vw] rounded-3xl xl:grid-cols-2 ">
                <div className="flex flex-col gap-10 items-center justify-center">
                    <div className="flex items-center justify-center flex-col">
                        <div className="flex justify-center items-center">
                            <h1 className="text-3xl font-bold md:text-6xl">Welcome</h1>
                        </div>
                        <p className="font-medium text-center">Fill in the details to get started with the best chat app!</p>
                    </div>
                    <div className="flex items-center justify-center w-full gap-4">
                        <button className="bg-transparent text-opacity-90 border-black border-b-2 rounded-none hover:border-b-purple-300 p-3 transition-all duration-300">Login</button>
                        <button className="bg-transparent text-opacity-90 border-black border-b-2 rounded-none hover:border-b-purple-300 p-3 transition-all duration-300">Signup</button>
                    </div>
                    <div>
                        <input type="email" placeholder="Email" className="border-2 border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-300" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <input type="password" placeholder="Password" className="border-2 border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-300" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <input type="password" placeholder="confirmPassword" className="border-2 border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-300" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                        <button onClick={handleSignup} className="bg-black text-white w-full rounded-full">
                            Signup
                        </button>
                    </div>
                    <div>
                        <input type="email" placeholder="Email" className="border-2 border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-300" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <input type="email" placeholder="Password" className="border-2 border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-300" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <button onClick={handleLogin} className="bg-black text-white w-full rounded-full">Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export {
    Auth
}