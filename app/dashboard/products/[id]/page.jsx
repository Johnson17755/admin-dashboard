import React from 'react'
import styles from '@/app/Ui/dashboard/products/singleProduct/singleProduct.module.css';
import Image from 'next/image';
import { fetchProduct } from '@/app/lib/data';
import { updateProduct } from '@/app/lib/actions';

const SingleProductPage = async ({params}) => {

    const {id} = params;
    const product = await fetchProduct(id);
  return (
    <div className={styles.container}>
        <div className={styles.infoContainer}>
            <div className={styles.imgContainer}>
                <Image src={product.img || "/noavatar.png"} fill />
            </div>
            {product.title}
        </div>
        <div className={styles.formContainer}>
            <form action={updateProduct}  className={styles.form}>
                <label>Title</label>
                <input type="text" name='title' placeholder={product.title}/>
                <label>Price</label>
                <input type="number" name='price' placeholder={product.price}/>
                <label>Stock</label>
                <input type="stock" name='stock' placeholder={product.stock}/>
                <label>Color</label>
                <input type="text" name='color' placeholder={product.color}/>
                <label>Size</label>
                <input type="text" name='size' placeholder={product.size}/>
                <label>Cat</label>
                <select name="cat" id="cat">
                    <option value='Kitchen' selected={product.cat}>Kitchen</option>
                    <option value=" computers" selected={product.cat}>Computer</option>
                </select>
                <label>Description</label>
                <textarea 
                name="desc" 
                id="desc" 
                rows="10" 
                placeholder={product.desc}></textarea>
                <button>Update</button>
            </form>
        </div>
    </div>
  )
}

export default SingleProductPage;