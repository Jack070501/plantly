import { useEffect, useState } from "react";
import type { TPlant } from "../../types/plant";
import { Link } from "react-router-dom";

export const Products = () => {
    const [plants, setPlants] = useState<TPlant[]>([]);  

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

    return (
        <>
            <h2>Plants like</h2>
            {plants.length > 0 && (
                <section className="plant-list">
                    {plants.map((plant) => (
                        <article className="plant-item">
                            <Link to={`/products/${plant.id}`} key={plant.id}>Trainer
                                <h3>{plant.name}</h3>
                                <img src={plant.imageUrl} alt={plant.name} />
                                <p>{plant.description}</p>
                                <p>Price: &pound;{plant.price.toFixed(2)}</p>
                            </Link>
                        </article>
                    ))}
                </section>
            )}
        </>
    )
}