import {Component} from "react";
import Img1 from "../../../images/img1.png";

interface ProductProps {
    data: any
}

export class Product extends Component<ProductProps> {
    render() {

        const {data} = this.props;
        const image:string = "../../images/" + data.image;

        return (
            <div
                className="mb-8 rounded-xl border-4 border-[#004D24] hover:border-white service-card w-[300px] shadow-xl hover:shadow-green-700  snap-start shrink-0 py-8 px-6 bg-[#A0C49D] flex flex-col items-start gap-3 transition-all duration-300 group hover:bg-[#5E9D59]">
                <img src={image}/>
                <p className="font-bold text-2xl group-hover:text-white text-black/80">{data.name}</p>
                <div className="flex">
                    <h2 className="text-white group-hover:text-black text-center font-bold text-2xl">{data.currency} {data.price}</h2>
                    <button
                        className="border-2 border-emerald-900 bg-[#5E9D59] text-white group-hover:bg-[#A0C49D] group-hover:text-black text-center font-bold rounded-xl w-28 h-8 ml-7 cursor-pointer">Add
                        To Cart
                    </button>
                </div>
            </div>
        );
    }
}