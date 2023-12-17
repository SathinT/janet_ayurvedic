import { Component } from "react";
import Img1 from "../../../images/img1.png";
import { Product } from "../Common/Products/Products";
import { data } from "autoprefixer";

export class ProductsPage extends Component {
    constructor(props: {} | Readonly<{}>) {
        super(props);
        this.state = {
            data: [],
        };
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = async () => {
        try {
            const response = await fetch("./product-data.json");
            const jsonData = await response.json();
            this.setState({ data: jsonData });
        } catch (error) {
            console.log("Error Fetching Data");
        }
    };

    render() {
        // @ts-ignore
        const { data } = this.state;

        return (
            <div>
                <img/>
            <div className="flex justify-between pl-64 pr-64 pt-40 pb-44 flex-wrap">
                {data.map((product: any) => (
                    <Product key={product.id} data={product} />
                ))}
            </div>
            </div>
        );
    }
}
