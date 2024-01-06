import React, {Component} from "react";
import {Link} from "react-router-dom";
import searchIcon from '../../assests/search.png';
import cartIcon from '../../assests/Shopping Cart.png';
import deliverIcon from '../../assests/In Transit.png';

import Account from '@mui/icons-material/PersonOutlineTwoTone';

import Select, { SelectChangeEvent } from '@mui/material/Select';

export class Navbar extends Component {
    render() {
        return (
            <div>
                <div className="h-16 flex bg-[#A0C49D] justify-between">
                    <h1 className="text-3xl font-bold p-3 pl-3 text-[#004D24]">Janet Ayurveda</h1>
                    <ul className="flex text-[#004D24] text-3xl ml-40 mt-1">
                        <li className="p-3 hover:p-2">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="p-3 hover:p-2">
                            <Link to="AllProducts">Products</Link>
                        </li>
                        <li className="p-3 hover:p-2">
                            <Link to="FAQsPage">FAQs</Link>
                        </li>
                        <li className="p-3 hover:p-2">
                            <Link to="Contact">Contact</Link>
                        </li>
                    </ul>
                    <div className="flex justify-between mr-3">
                            <div className=" p-2 mt-2 flex">
                                <input
                                    type="text"
                                    placeholder="Search"
                                    className="w-52 rounded-xl border border-[#004D24] bg-green-50 pl-6 pr-20 text-base/6 text-neutral-950 ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5"
                                />
                                <button
                                    type="submit"
                                    aria-label="Submit"
                                    className="w-10 absolute flex h-full items-center justify-center rounded-3xl bg-green-100 text-white transition hover:bg-[#5E9D59]"
                                >
                                    <img src={searchIcon}/>
                                </button>
                            </div>
                        <div className="flex">

                            <div className="text-green-900">
                                <Select IconComponent={Account}>
                                    <option>LogIn</option>
                                    <option>Register</option>
                                </Select>
                            </div>
                            <button className="hover:bg-green-100">
                                <Link to="/cart"><img className="h-16 p-3" src={cartIcon} alt=""/></Link>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="bg-[#5E9D59] h-10 flex justify-center">
                    <img className="h-11 p-1 " src={deliverIcon} alt=""/>
                    <h1 className="text-center text-white text-xl p-1">We Offer Island-Wide Delivery</h1>
                </div>

            </div>
        );
    }
}