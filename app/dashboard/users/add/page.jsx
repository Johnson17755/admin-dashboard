import React from 'react'
import styles from '@/app/Ui/dashboard/users/addUser/addUser.module.css'
import { addUser } from '@/app/lib/actions';

const AddUserPage = () => {
  return (
    <div className={styles.container}>
      <form action={addUser} className={styles.form}>
        <input type="text" placeholder='Username' name='username' required/>
        <input type="email" placeholder='Email' name='email' required/>
        <input type="password" placeholder='Password' name='password' required/>
        <input type="phone" placeholder='phone' name='phone' required/>

        <select name="isAdmin" id="isAdmin">
          <option value={false}>Is Admin?</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <select name="isActive" id="isActive">
          <option value={true}>Is Admin?</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <textarea 
        name="address" 
        id="address"  
        rows="16" 
        placeholder='Address'></textarea>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default AddUserPage;