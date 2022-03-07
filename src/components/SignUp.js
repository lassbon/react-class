import { useState } from "react"

const SignUp = () => {

    let [firstname, setFirstname] = useState("")
    let [lastname, setLastname] = useState("")
 


    function handleSubmitForm(e) {
        e.preventDefault()
        alert(`Welcome ${firstname}, ${lastname}`)


     
    }


    return (

    <div className="mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
                    <h2 className="text-center text-4xl text-indigo-900 font-display font-semibold lg:text-left xl:text-5xl
                    xl:text-bold">Log in</h2>
                    <div className="mt-12">
                        <form onSubmit={handleSubmitForm}>
                            <div>
                                <div className="text-sm font-bold text-gray-700 tracking-wide">Email Address</div>
                        <input className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" type="text"
                            placeholder="mike@gmail.com" onChange={(e)=>setFirstname(e.target.value)} /> 
                            </div>
                            <div className="mt-8">
                                <div className="flex justify-between items-center">
                                    <div className="text-sm font-bold text-gray-700 tracking-wide">
                                        Password
                                    </div>
                                </div>
                        <input className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" type="text"
                            placeholder="Enter your password" onChange={(e) => setLastname(e.target.value)} />
                            </div>
                            <div className="mt-10">
                                <button className="bg-indigo-500 text-gray-100 p-4 w-full rounded-full tracking-wide
                                font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600
                                shadow-lg">
                                    Log In
                                </button>
                    </div>
                </form>
            </div>
        </div>
    )

}
export default SignUp;