"use client";

import React from 'react';
import styles from './search.module.css';
import { MdSearch } from 'react-icons/md';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

const Search = ({ placeholder }) => {
  const searchParams = useSearchParams();
  const router = useRouter(); 
  const pathname = usePathname();

  const handleSearch = useDebouncedCallback((e) => {
    const params = new URLSearchParams(searchParams); // Create new URLSearchParams instance

    params.set("page", 1);
    if(e.target.value){
      e.target.value.length > 2 && params.set("q", e.target.value); // Set the search parameter
    }else{
      params.delete("q");
    }
    router.replace(`${pathname}?${params}`); // Replace the URL with the updated search parameters
  }, 300);


  return (
    <div className={styles.container}>
      <MdSearch />
      <input 
        type="text" 
        placeholder={placeholder} 
        className={styles.input} 
        onChange={handleSearch} 
      />
    </div>
  );
};

export default Search;
