import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Products } from "./pages/products";
import { YourDetails } from "./pages/your-details";
import { NotFound } from "./pages/not-found";

export const router = createBrowserRouter (
    createRoutesFromElements(
        <Route path="/">
            <Route index element={<Home/> } />
            <Route path="products" element={<Products/> } />
            <Route path="your-details" element={<YourDetails/> } />
            <Route path="*" element= {<NotFound/> } />
        </Route>
    )
)