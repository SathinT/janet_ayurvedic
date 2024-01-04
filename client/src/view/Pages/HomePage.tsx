import {Component} from "react";
// Leaves & Logo
import herb1 from '../../assests/herb1.png';
import herb2 from '../../assests/herb2.png';
import herb3 from '../../assests/herb3.png';
import herb4 from '../../assests/herb4.png';
import herb5 from '../../assests/herb5.png';
import logo from '../../assests/Janet_Logos.png';
//about
import aboutImg from '../../assests/aboutImg.png';
export class HomePage extends Component {
    render() {
        return (
            <div className="">
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

                        <div className="justify-between text-[#004D24] text-4xl mt-32 ml-16 font-mono">
                            <h1>More About Us</h1>
                            <button
                                className="bg-[#A0C49D] w-32 rounded-xl ml-16 mt-4 text-[#004D24] shadow hover:shadow-emerald-950">
                                ↓
                            </button>
                            {/*<button*/}
                            {/*    className="relative border hover:border-emerald-600 duration-500 group cursor-pointer text-sky-50  overflow-hidden h-10 w-32 rounded-md bg-emerald-800 p-2 flex justify-center items-center font-extrabold shadow hover:shadow-emerald-950 mt-4 ml-4">*/}
                            {/*    <div*/}
                            {/*        className="absolute z-10 w-24 h-24 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-emerald-600 delay-150 group-hover:delay-200"></div>*/}
                            {/*    <div*/}
                            {/*        className="absolute z-10 w-16 h-16 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-emerald-500 delay-150 group-hover:delay-300"></div>*/}
                            {/*    <p className="z-10">↓</p>*/}
                            {/*</button>*/}
                        </div>
                    </div>
                </div>
                <div className="flex justify-between">
                    <div id="about">
                        <h1 className="text-3xl font-bold pl-16 pt-6 text-[#00A24A] ">Your Personal Glowing Partner</h1>
                        <h2 className="pl-16 pr-28 pt-6 text-xl font-semibold">Welcome to Janet Ayurvedics, where beauty
                            transcends time, and wellness is an art form perfected since 1961. Imagine a journey through
                            the lush landscapes of ancient Ayurveda, where secrets of timeless beauty unfold like the
                            petals of a lotus. Our story is woven into the fabric of tradition, each chapter revealing
                            the alchemy of nature's ingredients and the elegance they bestow. Janet Ayurvedics is not
                            just a cosmetic brand; it's a celebration of heritage, a dance between modernity and ancient
                            wisdom.<br/>
                            <br/>

                            In our about page, step into the heart of our legacy, where the echoes of generations past
                            resonate in every jar and bottle. We invite you to explore the essence of Janet Ayurvedics—a
                            harmonious symphony of tradition and innovation. Here, authenticity isn't a trend; it's a
                            way of life. We're more than a cosmetic company; we're custodians of the timeless pursuit of
                            beauty, where each product tells a tale of rejuvenation and self-love.<br/>
                            <br/>

                            Our journey is shared with you, our cherished patrons and seekers of genuine beauty. Join us
                            in rediscovering the magic of Ayurveda, where every drop of elixir is a nod to the legacy
                            that started in 1961. Welcome to a sanctuary of beauty, where past and present intertwine,
                            and where the journey to self-love is as timeless as the beauty we help you unveil. Embrace
                            the Janet Ayurvedics experience, where beauty knows no bounds, and wellness is an art handed
                            down through the ages.</h2>
                    </div>
                    <img className="w-[40%] pb-10 rounded-tl-xl" src={aboutImg}/>
                </div>
            </div>
        );
    }
}