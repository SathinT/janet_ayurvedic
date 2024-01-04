import {Component} from "react";
import {Product} from "../../Common/ProductsTemplate/ProductTemplate";

export class CosmeticProducts extends Component {

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
            const response = await fetch("./cosmetic-data.json");
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
                <div className="flex justify-between pl-40 pr-40 pt-20 pb-10 flex-wrap">
                    {data.map((product: any) => (
                        <Product key={product.id} data={product} />
                    ))}
                </div>
            </div>
        );
    }
}
