import { useLoaderData } from "react-router-dom";
import type { Plant } from "./plant";

export const ProductDetail = () => {
    const plant:Plant = useLoaderData();

    return (
        <>
            <h1>{plant.name}</h1>
            <img src={plant.imageUrl} alt={plant.name} />
            <p>{plant.description}</p>
            <h2>It will cost you &pound;{plant.price.toFixed(2)}</h2>
        </>
    )
}