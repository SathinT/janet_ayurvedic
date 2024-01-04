import {Component} from "react";
import {data} from "autoprefixer";
import {CartItem} from "../../../model/CartItem";

interface ModifyCartProps{
    data:any
}

interface ModifyCartState{
    itemCount:number
}

export class ModifyCart extends Component<ModifyCartProps,ModifyCartState> {

    public static  itemList:CartItem[] = [];

    constructor(props:ModifyCartProps) {
        super(props);
        this.state={
            itemCount:1
        }

    }

    componentDidMount(){
        const {itemCount} = this.state

        if (this.props.data.isAdded){
            if (ModifyCart.itemList.find(item =>item.product.id === this.props.data.product.id)){
                ModifyCart.itemList.push(
                    {
                        product: this.props.data.product,
                        itemCount: itemCount
                    }
                )
            }
        }
        console.log(ModifyCart.itemList);
    }

    componentDidUpdate(prevProps: Readonly<ModifyCartProps>, prevState: Readonly<ModifyCartState>, snapshot?: any) {

        let {itemCount} = this.state;

        let item = ModifyCart.itemList.find(
            item => item.product.id === this.props.data.product.id
        );

        // @ts-ignore
        let index = ModifyCart.itemList.indexOf(item);

        ModifyCart.itemList.slice(index, 1);

        ModifyCart.itemList.push({
            product:this.props.data.product,
            itemCount: itemCount
        })

    }

    render() {

        let {itemCount} =this.state

        let onDecreaseItemCount = ()=>{
            if (this.state.itemCount > 1){
                this.setState({itemCount: --itemCount})
            }else {}
        }

        let onIncreaseItemCount = ()=>{
            this.setState({itemCount: ++itemCount})
        }

        return (
            <div
                className="justify-between ml-11 rounded-lg  relative w-28 h-10 cursor-pointer flex items-center border border-green-500 bg-green-500 group hover:bg-green-500 active:bg-green-500 active:border-green-500">
                <button className="pl-3 text-xl font-extrabold -mt-1 hover:text-white"
                        onClick={onDecreaseItemCount}>-</button>
                <small className="font-bold text-xl text-white">{itemCount}</small>
                <button className="pr-3 text-2xl -mt-1 hover:text-white"
                        onClick={onIncreaseItemCount}>+</button>
            </div>
        );
    }
}