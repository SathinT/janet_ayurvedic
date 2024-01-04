import {Component} from "react";

export class LogIn extends Component {
    render() {
        return (
                <div className="w-96 ml-[40%] mt-12 mb-12 pt-12 pb-12 pl-10 pr-10 relative flex flex-col rounded-md text-black bg-[#A0C49D]">
                    <div className="text-4xl font-bold mb-2 text-[#1e0e4b] text-center">Welcome <span className="text-green-900">Back!</span></div>
                    <div className="text-xl font-normal mb-4 text-center text-[#1e0e4b]">Log in to your account</div>
                    <form className="flex flex-col gap-3">
                        <div className="block relative">
                            <label htmlFor="email"
                                   className="block text-gray-600 cursor-text text-lg leading-[140%] font-normal mb-2">Email</label>
                            <input type="text" id="email"
                                   className="rounded border border-gray-200 text-lg w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0"/>

                        </div>
                        <div className="block relative">
                            <label htmlFor="password"
                                   className="block text-gray-600 cursor-text text-lg leading-[140%] font-normal mb-2">Password</label>
                            <input type="text" id="password"
                                   className="rounded border border-gray-200 text-lg w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"/>

                        </div>
                        <div>
                            <a className="text-sm text-green-700" href="#">Forgot your password?
                            </a></div>
                        <button type="submit"
                                className="bg-green-700 w-max m-auto px-6 py-2 rounded text-white text-lg font-normal">Submit
                        </button>

                    </form>
                    <div className="text-lg text-center mt-[1.6rem]">Don’t have an account yet? <a
                        className="text-lg text-green-700" href="#">Sign up for free!</a></div>



                </div>
        );
    }
}