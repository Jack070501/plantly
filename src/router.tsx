import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Products } from "./pages/products";
import { YourDetails } from "./pages/your-details";
import { NotFound } from "./pages/not-found";
import { RootLayout } from "./layouts/RootLayout";
import { ProductDetail } from "./pages/products/detail";
import { loadProductData } from "./pages/products/plant";

export const router = createBrowserRouter (
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route index element={<Home/> } />
            <Route path="products" >
                <Route index element={<Products/>} loader={loadProductData} />
                <Route path=":id" element={<ProductDetail/>} loader={loadProductData} />
            </Route>
            <Route path="your-details" element={<YourDetails/>} />
            <Route path="*" element= {<NotFound/> } />
        </Route>
    )
)