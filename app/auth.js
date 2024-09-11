import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import { authConfig } from "./authconfig";
import { connectToDB } from "./lib/utils";
import { User } from "./lib/models";
import bcrypt from "bcrypt";
// Your own logic for dealing with plaintext password strings; be careful!
// const login = async (credentials) =>{
//   try{
//     connectToDB() //connecting to database
//     const user = await User.findOne({ username: credentials.username }) //fine one users
//     if(!user) throw new Error("Wrong Credentials");

//     const isPassWordCorrect = await bcrypt.compare(credentials.password, user.password)
    
//     if(!isPassWordCorrect) throw new Error("Wrong Credentials");
//     return user;
//   }catch(err){
//     console.log(err)
//     throw new Error("Failed to login!")
//   }
// };

const login = async (credentials) => {
  try {
    connectToDB();
    const user = await User.findOne({ username: credentials.username });

    console.log(user);
    if (!user || !user.isAdmin) throw new Error("Wrong credentials!");

    const isPasswordCorrect = await bcrypt.compare(
      credentials.password,
      user.password
    );

    if (!isPasswordCorrect) throw new Error("Wrong credentials!");

    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to login!");
  }
};

export const { signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        try {
          const user = await login(credentials);
          return user;
        } catch (err) {
          return err;
        }
      },
    }),
  ],

  
});