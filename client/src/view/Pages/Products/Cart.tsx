import {Component} from "react";
import {CartItem} from "../../../model/CartItem";

interface shoppingCartProps {
    itemList: CartItem[];
}

export class ShoppingCart extends Component<shoppingCartProps> {
    render() {
        return (
            <>
                <div className="flex pl-[10%] pt-[3%] pb-[4%]">

                    <table className="w-[90%]">
                        <tr className="bg-[#A0C49D]">
                            <th className="text-[#004D24] text-2xl font-bold border-black border-[0.5px] px-1">ID</th>
                            <th className="text-[#004D24] text-2xl font-bold border-black border-[0.5px] px-1">Name</th>
                            <th className="text-[#004D24] text-2xl font-bold border-black border-[0.5px] px-1">Unit Price</th>
                            <th className="text-[#004D24] text-2xl font-bold border-black border-[0.5px] px-1">Quantity</th>
                            <th className="text-[#004D24] text-2xl font-bold border-black border-[0.5px] px-1">Total</th>
                        </tr>

                        {
                            this.props.itemList.length == 0 ?
                                <tr>
                                    <td colSpan={5} className="border-black border-[0.5px]">
                                        <p className="text-center text-xl pt-6 pb-6">No Content to Show</p>
                                    </td>
                                </tr> :
                                this.props.itemList.map((item) => (
                                    <tr>
                                        <td className="border-black border-[0.5px] text-xl px-1">{item.product.id}</td>
                                        <td className="border-black border-[0.5px] text-xl px-1">{item.product.name}</td>
                                        <td className="border-black border-[0.5px] text-xl px-1">{item.product.price + ' ' + item.product.currency}</td>
                                        <td className="border-black border-[0.5px] text-xl px-1">{item.itemCount}</td>
                                        <td className="border-black border-[0.5px] text-xl px-1">{item.itemCount * item.product.price}</td>
                                    </tr>
                                ))
                        }

                    </table>

                </div>
            </>
        );
    }
}