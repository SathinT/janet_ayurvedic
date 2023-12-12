import React, {Component} from "react";
import searchIcon from '../../assests/search.png';
import cartIcon from '../../assests/Shopping Cart.png';
import userIcon from '../../assests/Customer.png';
import deliverIcon from '../../assests/In Transit.png';

export class Navbar extends Component {
    render() {
        return (
            <div>
                <div className="h-16 flex bg-[#A0C49D] justify-between">
                    <h1 className="text-3xl font-bold p-3 pl-3 text-[#004D24]">Janet Ayurveda</h1>
                    <ul className="flex text-[#004D24] text-3xl ml-40">
                        <li className="p-3">Home</li>
                        <li className="p-3">Products</li>
                        <li className="p-3">FAQs</li>
                        <li className="p-3">Contact</li>
                    </ul>
                    <div className="flex justify-between mr-3">
                        <div className="h-9 w-60 flex bg-white rounded-xl mt-4">
                            <h1 className="mt-1 ml-1 text-xl text-[#004D24] font-light">Search</h1>
                            <button>
                            <img className="h-7 mt-1 mx-36" src={searchIcon} alt=""/>
                            </button>
                        </div>
                        <div className="flex">
                            <img className="h-16 p-3" src={userIcon} alt=""/>
                            <img className="h-16 p-3" src={cartIcon} alt=""/>
                        </div>
                    </div>
                </div>

                <div className="bg-[#5E9D59] h-10 flex justify-center">
                    <img className="h-11 p-1" src={deliverIcon} alt=""/>
                    <h1 className="text-center text-white text-xl p-1">We Offer Island-Wide Delivery</h1>
                </div>

            </div>
        );
    }
}