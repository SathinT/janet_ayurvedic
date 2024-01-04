import {Component} from "react";
import logoWhite from '../../assests/logoWhite.png'
import facebookLogo from '../../assests/Facebook.png'
import instaLogo from '../../assests/Instagram.png'
import youtubeLogo from '../../assests/YouTube.png'


export class Footer extends Component {
    render() {
        return (
            <>
                <div>
                    <div className="bg-[#5E9D59] w-[90%] h-40 rounded-t-xl flex justify-between mx-auto">
                        <div>
                        <img className="p-8" src={logoWhite}/>
                        </div>
                        <div>
                            <h1 className="font-bold text-[#004D24] text-2xl mt-3">Coperate Office :</h1>
                            <h2 className="text-xl text-white p-2">The Janet Group Level #1, No 269,<br/>
                                Galle Road, Mount Lavinia,<br/>
                                Sri Lanka.</h2>
                        </div>
                        <div><h1 className="font-bold text-[#004D24] text-2xl mt-3">Contact Details :</h1>
                            <h2 className="text-xl text-white p-2">
                                Mobile: +94 777 684 684<br/>
                                Tel: +94 114 200022<br/>
                                Email: info@janet.lk</h2>
                        </div>
                        <div>
                            <h1 className="font-bold text-[#004D24] text-2xl mt-3 pr-12">Social Media :</h1>
                            <div className="flex pl-3">
                                <img src={facebookLogo}/>
                                <img src={instaLogo}/>
                                <img src={youtubeLogo}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-2 bg-[#A0C49D] text-xl text-[#004D24] text-center font-bold">
                    <h1 className=""> Designed and Developed by Sathin Thenuja®  2023©</h1>
                </div>
            </>
        );
    }
}