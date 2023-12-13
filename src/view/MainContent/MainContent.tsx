import {Component, Fragment} from "react";
// Leaves & Logo
import herb1 from '../../assests/herb1.png';
import herb2 from '../../assests/herb2.png';
import herb3 from '../../assests/herb3.png';
import herb4 from '../../assests/herb4.png';
import herb5 from '../../assests/herb5.png';
import logo from '../../assests/Janet_Logos.png';
// Banner
import banner1 from '../../assests/banner1.png';


export class MainContent extends Component {
    render() {
        return (
            <div className="bg-[#DFE3D6]">
            <div className="flex">
                <div className="w-[60%] ml-10">
                <div className="ml-48 animate-pulse">
                    <img className="h-40 ml-44" src={herb4} alt=""/>
                </div>
                <div className="flex justify-between -mt-20 animate-pulse">
                    <img className="h-40" src={herb2} alt=""/>
                    <img className="h-36 mr-56" src={herb5} alt=""/>
                </div>

                    <div>
                        <img className="h-80 ml-56 -mt-20 hover:animate-bounce" src={logo} alt=""/>
                    </div>

                    <div className="flex justify-between -mt-36 animate-pulse">
                        <img className="h-36 invisible" src={herb2} alt=""/>
                        <img className="h-36 mr-56" src={herb2} alt=""/>
                    </div>

                    <div className="flex animate-pulse">
                    <img className="h-36 rotate-45 -mt-12" src={herb3} alt=""/>
                    <img className="h-36 ml-44 mt-9" src={herb1} alt=""/>
                </div>

                    <div className="flex justify-between ml-36 animate-pulse">
                        <img className="h-36 mt-5" src={herb4} alt=""/>
                        <img className="h-36 ml-72 rotate-90 -mt-12" src={herb3} alt=""/>
                        <img className="h-36 invisible" src={herb3} alt=""/>
                    </div>
                </div>
                <div className="text-8xl font-serif mt-20 ml-24">
                    <h1 className="-ml-24">Harmony of</h1>
                    <h1 className="text-[#00A24A]">HERBS.</h1>
                    <h1 className="-ml-24">Symphony of</h1>
                    <h1 className="text-[#00A24A]">BEAUTY.</h1>

                    <div className="justify-between text-[#004D24] text-4xl mt-32 font-mono">
                        <h1>Explore Our Products</h1>
                        <button className="bg-[#A0C49D] w-32 rounded-xl ml-32 mt-4 text-[#004D24] shadow hover:shadow-emerald-950">↓</button>
                    </div>
                </div>
            </div>
                <div>
                    <img className="w-full p-20" src={banner1}/>
                </div>
            </div>
        );
    }
}