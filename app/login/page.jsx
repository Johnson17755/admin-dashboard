"use client"
// import styles from '@/app/Ui/login/login.module.css';
// import { authenticate } from '../lib/actions';

//  const LoginPage = () => {
//   return (
//     <div className={styles.container}>
//       <form action={authenticate} className={styles.form}>
//         <h1>Login</h1>
//         <input type="text" placeholder='username' name='username' />
//         <input type="password" placeholder='password' name='password'/>
//         <button>Login</button>
//       </form>
//     </div>
//   )
// }

// export default LoginPage;


import React, { useState } from 'react';
import styles from '@/app/Ui/login/login.module.css';
import { authenticate } from '../lib/actions';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Call the authenticate function with the current form data
      await authenticate(null, new FormData(e.target));
    } catch (error) {
      console.error("Authentication error:", error);
      // Handle errors here, e.g., display an error message
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h1>Login</h1>
        <input 
          type="text" 
          placeholder="username" 
          name="username" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
        />
        <input 
          type="password" 
          placeholder="password" 
          name="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
