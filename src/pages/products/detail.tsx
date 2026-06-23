import { useLoaderData } from "react-router-dom";
import type { TPlant } from "../../types/plant";

export const ProductDetail = () => {
    const plant:TPlant = useLoaderData();

    return (
        <>
            <h1>{plant.name}</h1>
            <img src={plant.imageUrl} alt={plant.name} />
            <p>{plant.description}</p>
            <h2>It will cost you &pound;{plant.price.toFixed(2)}</h2>
        </>
    )
}