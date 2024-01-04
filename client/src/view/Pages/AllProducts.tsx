 import {Component} from "react";

import ad1 from "../../assests/AD/ad1.jpg";
import ad2 from "../../assests/AD/ad2.jpeg";
import ad3 from "../../assests/AD/ad3.jpeg";
import ad4 from "../../assests/AD/ad4.jpeg";
import ad5 from "../../assests/AD/ad5.jpeg";
import ad6 from "../../assests/AD/ad6.jpeg";
import ad7 from "../../assests/AD/ad7.jpeg";
import ad8 from "../../assests/AD/ad8.jpeg";
import {Link} from "react-router-dom";
import '../../assests/Css/allproduct.css';


export class AllProducts extends Component {
    render() {
        return (
            <>
            <div>
                <div className="flex justify-center mt-1">
                    <Link id='button1' to="/SkinCare"
                          className=" w-[40%] bg-black h-96 my-3 flex items-center justify-center rounded-l-xl cursor-pointer relative overflow-hidden duration-500 shadow-md hover:scale-100 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#5E9D59] before:to-[#A0C49D] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0">
                        <div>
                            <h1 className="text-3xl font-bold text-white">Skin Care</h1>
                            <h2 className="text-xl underline">Explore</h2>
                        </div>
                    </Link>
                    <Link id='button2' to="/Cosmetics"
                          className=" w-[40%] bg-black h-96 my-3 flex items-center justify-center rounded-r-xl cursor-pointer relative overflow-hidden duration-500 shadow-md hover:scale-100 hover:shadow-lg before:absolute before:top-0 before:-right-full before:w-full before:h-full before:bg-gradient-to-l before:from-[#5E9D59] before:to-[#A0C49D] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:right-0">
                        <div>
                            <h1 className="text-3xl font-bold text-white">Cosmetics</h1>
                            <h2 className="text-xl underline">Explore</h2>
                        </div>
                    </Link>
                    {/*<img className="pr-28 pt-10 pb-10 w-1/2 transition-transform transform hover:scale-x-125 origin-right"*/}
                    {/*     src={img2} alt="Image 2"/>*/}
                </div>
                <Link id='button3' to="/SpecialBundles"
                      className=" ml-48 -mt-5 w-[80%] bg-black h-80 my-3 flex items-center justify-center rounded-b-xl cursor-pointer relative overflow-hidden duration-500 shadow-md hover:scale-100 hover:shadow-lg before:absolute before:-bottom-full before:w-full before:h-full before:bg-gradient-to-t before:from-[#5E9D59] before:to-[#A0C49D] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:bottom-0">
                    <div>
                        <h1 className="text-3xl font-bold text-white">Special Bundles</h1>
                        <h2 className="text-xl underline">Explore</h2>
                    </div>
                </Link>
            </div>
        <h1 className="pt-8 text-4xl text-[#004D24] font-bold text-center">Check Out Theese ↓</h1>
        <div
            className="flex justify-between ml-24 mt-5 mb-10 w-[90%] border-2 border-b-emerald-950 overflow-x-scroll">
            <img className="pt-5 pl-3 pb-5" src={ad3} alt="ad1"/>
            <img className="pt-5 pl-3 pb-5" src={ad3} alt="ad2"/>
            <img className="pt-5 pl-3 pb-5" src={ad3} alt="ad3"/>
            <img className="pt-5 pl-3 pb-5" src={ad3} alt="ad4"/>
            <img className="pt-5 pl-3 pb-5" src={ad3} alt="ad5"/>
            <img className="pt-5 pl-3 pb-5" src={ad3} alt="ad6"/>
            <img className="pt-5 pl-3 pb-5" src={ad3} alt="ad7"/>
            <img className="pt-5 pl-3 pb-5" src={ad3} alt="ad8"/>
        </div>
        </>

    )
        ;
    }
}