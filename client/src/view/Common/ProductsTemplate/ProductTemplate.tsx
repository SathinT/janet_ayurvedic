import {Component} from "react";
import {ModifyCart} from "../ModifyCart/ModifyCart";

interface ProductProps {
    data: any
}

interface ProductState{
    isActive:boolean
}

export class Product extends Component<ProductProps,ProductState> {

    constructor(props: ProductProps) {
        super(props);
        this.state={
            isActive:false
        }
    }

    render() {

        const {data} = this.props;
        const image = require("../../../assests/Products/" + data.image);
        return (
            <div
                className="mb-8 rounded-xl border-4 border-[#004D24] hover:border-white service-card w-[300px] shadow-xl hover:shadow-green-700  snap-start shrink-0 py-8 px-6 bg-green-100 flex flex-col items-start gap-3 transition-all duration-300 group hover:bg-[#5E9D59]">
                <img src={image} alt="Skin Care Product"/>
                <p className="font-bold text-2xl group-hover:text-white text-black/80">{data.name}</p>
                <div className="flex justify-between">
                    <h2 className="text-[#004D24] text- group-hover:text-green-50 text-center font-bold text-xl">{data.currency} {data.price}</h2>

                    {
                        this.state.isActive ?
                            <ModifyCart data={{product:data, isAdded:this.state.isActive}}/> :
                            <button
                                className="ml-11 rounded-lg  relative w-28 h-10 cursor-pointer flex items-center border border-green-500 bg-green-500 group hover:bg-green-500 active:bg-green-500 active:border-green-500"
                            onClick={this.addToCartOnClick}>
                                <span className="text-gray-200 font-semibold ml-4 transform group-hover:translate-x-10 group-hover:opacity-0  transition-all duration-300">Add Item</span>
                                <span className="absolute right-0 h-full w-10 rounded-lg bg-green-500 flex items-center justify-center transform group-hover:translate-x-0 group-hover:w-full transition-all duration-300">
    <svg className="svg w-8 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
      <line x1="12" x2="12" y1="5" y2="19"></line>
      <line x1="5" x2="19" y1="12" y2="12"></line>
      </svg>
  </span>
                            </button>
                    }
                </div>
            </div>
        );
    }
    addToCartOnClick = () => {
        // alert("Item Added To Cart")
        this.setState({isActive: true}, () => {
            console.log(this.state.isActive)
        })
    }
}