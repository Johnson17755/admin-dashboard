// Logging for dashboard 
// export const authConfig = {
//     providers:[],
//     pages: {
//         signIn: "/login",
//     },
//     callbacks: {
//         authorized({ auth, request }){
//             const isLoggedIn = auth?.user; //if there is a users in our sections
//             const isOnDashboard = request.nextUrl.pathname.startsWith("/dashboard");
//             if(isOnDashboard){
//                 if(isLoggedIn) return true;
//                 return false;
//             } else if(isLoggedIn){
//                 return Response.redirect(new URL("/dashboard", request.nextUrl));
//             }
//             return true;
//         },
//     },
// };

export const authConfig = {
    pages: {
      signIn: "/login",
    },
    providers: [],
    callbacks: {
      authorized({ auth, request: { nextUrl } }) {
        const isLoggedIn = !!auth?.user;
        const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
        
        if (isOnDashboard) {
          if (isLoggedIn) return true;
          return false;
        } else if (isLoggedIn) {
          return Response.redirect(new URL('/dashboard', nextUrl));
        }
        return true;
      },
    },
    secret: process.env.NEXTAUTH_SECRET,
  };