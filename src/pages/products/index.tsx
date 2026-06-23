import { useEffect, useState } from "react";
import type { Plant } from "./plant";
import { Link, useLoaderData } from "react-router-dom";

export const Products = () => {

    const plants:Plant[] = useLoaderData();

    return (
        <>
            <h2>Plants like</h2>
            {plants.length > 0 && (
                <section className="plant-list">
                    {plants.map((plant) => (
                        <article className="plant-item">
                            <Link to={`/products/${plant.id}`} key={plant.id} className="plant-link">Trainer
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