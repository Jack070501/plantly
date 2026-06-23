import { useEffect, useState } from "react";
import type { Plant } from "./plant";
import { Link } from "react-router-dom";

export const Products = () => {
    const [plants, setPlants] = useState<Plant[]>([]);  

    useEffect(() => {
        async function fetchPlants() {
            try {
                const res = await fetch("http://localhost:3000/plants");
                const data = await res.json();
                console.log("PLANTS DATA:", data);
                setPlants(data);
            } catch (error) {
                console.error("Error fetching plants data:", error);
            }
        }
        fetchPlants();
    }, []);
    
    return(
        <>
            <h2>Plants like</h2>
            {plants.length > 0 && (
                <article className="plant-list">
                {plants.map((plant) => (
                        <Link to="/products/${plant.id}" key={plant.id}>Trainer 
                            <h3>{plant.name}</h3>
                            <p>{plant.description}</p>
                            <p>Price: &pound;{plant.price.toFixed(2)}</p>
                        </Link>
                    ))}
                </article>
            )}
        </>
    )
}