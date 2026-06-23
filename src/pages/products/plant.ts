import type { LoaderFunctionArgs } from "react-router-dom";

const PLANTS_API_URL = "http://localhost:3000/plants";

export type Plant = {
    id?: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
};

export async function loadProductData({ params }: LoaderFunctionArgs) {
    console.log("URL:", `${PLANTS_API_URL}/${params.id}`);
    const response = await fetch(`${PLANTS_API_URL}/${params.id ? params.id : ""}`);
    const data = await response.json();
    console.log(data);
    return data;
}
