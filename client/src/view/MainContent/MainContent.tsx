import {Component, Fragment} from "react";
import {Route, Routes} from "react-router-dom";
import {HomePage} from "../Pages/HomePage";
import {AllProducts} from "../Pages/AllProducts";
import {Contact} from "../Pages/Contact";
import {FAQsPage} from "../Pages/FAQsPage";

import {SkinCareProducts} from "../Pages/Products/SkinCareProducts";
import {CosmeticProducts} from "../Pages/Products/CosmeticProducts";
import {SpecialBundles} from "../Pages/Products/SpecialBundles";
import {ShoppingCart} from "../Pages/Products/Cart";
import {ModifyCart} from "../Common/ModifyCart/ModifyCart";
import {LogIn} from "../Pages/Account/LogIn"


export class MainContent extends Component {
    render() {
        return (
            <>
                <Routes>
                    <Route path="/" Component={HomePage}></Route>
                    <Route path="/AllProducts" Component={AllProducts}></Route>
                    <Route path="/Contact" Component={Contact}></Route>
                    <Route path="/FAQsPage" Component={FAQsPage}></Route>
                    <Route path="/SkinCare" Component={SkinCareProducts}></Route>
                    <Route path="/Cosmetics" Component={CosmeticProducts}></Route>
                    <Route path="/SpecialBundles" Component={SpecialBundles}></Route>

                    <Route path="/cart" element={<ShoppingCart itemList={ModifyCart.itemList}/>}></Route>
                    <Route path="/account" Component={LogIn}></Route>
                </Routes>
            </>
        );
    }
}