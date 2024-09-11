// fetching data using this file 

import { User } from "./models"
import { Product } from "./models";
import { connectToDB } from "./utils";

 export const fetchUsers = async (q, page) => {
    // console.log(q)
    
    const regex = new RegExp(q,"i") //case sensitive
    const ITEM_PER_PAGE = 2
    try {
        //("Connecting to the database...");
        await connectToDB(); // Ensure the database connection is established
        const count = await User.find({username: { $regex:regex }}).count();
        // console.log("Connected to the database. Fetching users...");
        const users = await User.find({username: { $regex:regex }}).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page-1)); // Fetch users from the database
        return {count, users};
    } catch (err) {
        // console.error("Error fetching users:", err);
        throw new Error("Failed to fetch users!");
    }
};

export const fetchUser = async (id) => {
    console.log(id)
    try {
        //("Connecting to the database...");
        await connectToDB(); // Ensure the database connection is established
        const user = await User.findById(id);
        return user;
    } catch (err) {
        // console.error("Error fetching users:", err);
        throw new Error("Failed to fetch users!");
    }
};



export const fetchProducts = async (q, page) => {
    const regex = new RegExp(q, "i");
    const ITEM_PER_PAGE = 2;
    try {
        await connectToDB(); // Ensure this function is correctly defined and works
        const count = await Product.find({ title: { $regex: regex } }).count();
        // Use a different variable name for the query results to avoid conflicts
        const productResults = await Product.find({ title: { $regex: regex } })
            .limit(ITEM_PER_PAGE)
            .skip(ITEM_PER_PAGE * (page - 1));
        return { count, products: productResults };
    } catch (err) {
        // console.error('Error fetching products:', err); 
        throw new Error("Failed to fetch Products!");
    }
};

export const fetchProduct = async (id) => {
    
    try {
        //("Connecting to the database...");
        await connectToDB(); // Ensure the database connection is established
        const product =await Product.findById(id);
        return product;
    } catch (err) {
        // console.error("Error fetching users:", err);
        throw new Error("Failed to fetch product!");
    }
};