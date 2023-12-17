import {Component, Fragment} from "react";
import {Route, Routes} from "react-router-dom";
import {HomePage} from "../Pages/HomePage";
import {ProductsPage} from "../Pages/ProductsPage";


export class MainContent extends Component {
    render() {
        return (
            <>
                <Routes>
                    <Route path="/" Component={HomePage}></Route>
                    <Route path="/Products" Component={ProductsPage}></Route>
                </Routes>
            </>
        );
    }
}