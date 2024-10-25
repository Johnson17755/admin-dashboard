"use client"
import React from 'react'
import styles from './menuLink.module.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const MenuLink = ({item}) => {
    // checking url path. the pathname helps in term on the navigation to other links
    const pathname = usePathname(); 
    // console.log(pathname);
  return (
    <Link href={item.path} className={`${styles.container} ${pathname === item.path && styles.active}`}>
    {item.icon}
    {item.title}
    </Link>
  )
};

export default MenuLink;