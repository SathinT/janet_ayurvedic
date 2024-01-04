import {Component} from "react";

export class Contact extends Component {
    render() {
        return (
            <div className="flex flex-col items-center justify-center p-16 pt-24">
                <div className="w-[70%] bg-[#A0C49D] rounded-lg shadow-md p-6">
                    <h2 className="text-2xl font-bold text-[#004D24] mb-4">Contact Us</h2>

                    <form className="flex flex-wrap">
                        <input
                            type="text"
                            className="bg-[#5E9D59] placeholder:text-teal-900 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%] mr-[2%]"
                            placeholder="Full Name"
                        />
                        <input
                            type="email"
                            className="bg-[#5E9D59] placeholder:text-teal-900 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%] ml-[2%]"
                            placeholder="Email"
                        />
                        <input
                            type="number"
                            className="bg-[#5E9D59] placeholder:text-teal-900 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%] mr-[2%]"
                            placeholder="Phone Number"
                        />
                        <input
                            type="text"
                            className="bg-[#5E9D59] placeholder:text-teal-900 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%] ml-[2%]"
                            placeholder="Company Name"
                        />
                        <input
                            type="text"
                            className="bg-[#5E9D59] placeholder:text-teal-900 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%] mr-[2%]"
                            placeholder="Job Title"
                        />
                        <input
                            type="date"
                            className="bg-[#5E9D59] placeholder:text-teal-900 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%] ml-[2%]"
                            placeholder="Date of Birth"
                        />
                        <textarea
                            name="message"
                            className="bg-[#5E9D59] placeholder:text-teal-900 text-gray-200 border-0 rounded-md p-2 mb-auto md:mb-auto md:w-full md:h-auto md:min-h-[100px] md:max-h-[100px] md:flex-grow md:flex-shrink md:flex-auto focus:bg-gray-md:focus:outline-none:focus:ring-blue-md:focus:border-transparent transition ease-in-out duration-fastest"
                            placeholder="Message"
                        ></textarea>

                        <button
                            type="submit"
                            className="bg-gradient-to-r from-green-950 to-teal-900 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-teal-500 hover:to-green-700 transition ease-in-out duration-150"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>

        );
    }
}