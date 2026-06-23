import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Products } from "./pages/products";
import { YourDetails } from "./pages/your-details";
import { NotFound } from "./pages/not-found";
import { RootLayout } from "./layouts/RootLayout";
import { detailsLoader } from "./pages/your-details/loader";

export const router = createBrowserRouter (
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route index element={<Home/> } />
            <Route path="products" element={<Products/> } />
            <Route path="your-details" element={<YourDetails/> } loader={detailsLoader} />
            <Route path="*" element= {<NotFound/> } />
        </Route>
    )
)