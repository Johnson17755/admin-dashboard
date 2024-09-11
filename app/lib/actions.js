"use server"
import { revalidatePath } from "next/cache";
import { User, Product} from "./models";
import { connectToDB } from "./utils";
import { redirect } from "next/navigation";
import bcrpt from "bcrypt";
import { signIn } from "../auth";

export const addUser = async (formData) =>{
    const {username, email, password, phone, address, isAdmin, isActive} =
    Object.fromEntries(formData)

    try{
        connectToDB();
        const salt = await bcrpt.genSalt(10)
        const hashedPassword =await bcrpt.hash(password, salt)
        const newUser = new User({
            username, 
            email, 
            password: hashedPassword, 
            phone, 
            address, 
            isAdmin, 
            isActive,
        });

         await newUser.save();  //save to database
    } catch(err){
        console.log(err)
        throw new Error("Failed to create user!")
    }

    revalidatePath("/dashboard/users")
    redirect("/dashboard/users")
};

// update userName functions 
export const updateUser = async (formData) =>{
    const { id, username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData)

    try{
        connectToDB();
        // toupdate entry users
        const updateFields = {
            username,
            email,
            password,
            phone,
            address,
            isAdmin,
            isActive,
          };

         Object.keys(updateFields).forEach(
        (key) => 
        (updateFields[key] === "" || undefined) && delete updateFields[key]);

         await User.findByIdAndUpdate(id, updateFields);
    } catch(err){
        console.log(err)
        throw new Error("Failed to create user!")
    }

    revalidatePath("/dashboard/users")
    redirect("/dashboard/users")
};

export const addProduct = async (formData) =>{ 
    const { title, desc, price, stock, color, size } =
     console.log(Object.fromEntries(formData))

    try{
        connectToDB();

        const newProduct = new Product({
            title, 
            desc, 
            price, 
            stock, 
            color, 
            size,
        });

         await newProduct.save();  //save to database
    } catch(err){
        console.log(err)
        throw new Error("Failed to create Product!")
    }

    revalidatePath("/dashboard/products")
    redirect("/dashboard/products")
};

// update userName functions 
export const updateProduct = async (formData) =>{
    const { id, title, desc, price, stock,  color, size} =
    Object.fromEntries(formData)
    console.log(formData);
    try{
        connectToDB();
        // toupdate entry users
         const updateFields = { title, desc, price, stock, color, size,}

         Object.keys(updateFields).forEach(
            (key) => (updateFields[key] === "" || undefined) && delete updateFields[key]
         );
         await Product.findByIdAndUpdate(id, updateFields)
    } catch(err){
        console.log(err)
        throw new Error("Failed to create product!")
    }

    revalidatePath("/dashboard/products")
    redirect("/dashboard/products")
};

export const deleteUser = async (formData) =>{
    const { id } =
    Object.fromEntries(formData)

    try{
        connectToDB();

        await User.findByIdAndDelete(id);  //save to database
    } catch(err){
        console.log(err)
        throw new Error("Failed to create User!")
    }

    revalidatePath("/dashboard/products")
};

export const deleteProduct = async (formData) =>{
    const { id } =
    Object.fromEntries(formData)

    try{
        connectToDB();

        await Product.findByIdAndDelete(id);  //save to database
    } catch(err){
        console.log(err)
        throw new Error("Failed to create Product!")
    }

    revalidatePath("/dashboard/products")
};


export const authenticate = async (prevState, formData) => {

    const { username, password } = Object.fromEntries(formData);
    console.log(formData);

    try {
      await signIn("credentials", { username, password });
    } catch (err) {
      if (err.message.includes("CredentialsSignin")) {
        return "Wrong Credentials";
      }
      throw err;
    }
  };
