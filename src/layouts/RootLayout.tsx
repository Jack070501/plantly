import { NavLink, Outlet } from "react-router-dom"

export const RootLayout = () => {
    return (
        <>
            <header>
                <nav>
                    <h1>Plantly</h1>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="products">Products</NavLink>
                    <NavLink to="your-details">Your Details</NavLink>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </>
    )
}