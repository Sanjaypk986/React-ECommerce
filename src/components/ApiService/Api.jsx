import axios from "axios";

const BASE_URL = 'https://fakestoreapi.com';

export const getAllProducts = async()=>{

    const response = await axios.get(`${BASE_URL}/products`)

    return response.data;
}

export const getProductByID = async (productId) => {
    try {
        const response = await axios.get(`${BASE_URL}/products/${productId}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching product with ID ${productId}:`, error);
        throw error; // Re-throw the error if needed
    }
}

export const getProductsByMen = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/products/category/men's%20clothing`);
        return response.data;
    } catch (error) {
        console.error('Error fetching product with ID $', error);
        throw error; // Re-throw the error if needed
    }
}

export const getProductsByWomen = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/products/category/women's%20clothing`);
        console.log("women"+ response);
        return response.data;
    } catch (error) {
        console.error('Error fetching product with ID $', error);
        throw error; // Re-throw the error if needed
    }
}
console.log('conneted');
