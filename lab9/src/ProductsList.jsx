import { useState } from 'react'
import Product from './Product'

function toggleStock(product) {
    console.log(product.name + ' ' + product.inStock);
    product.inStock = !product.inStock; 
    console.log(' now ' + product.inStock);
    return product;
}

export default function ProductsList() {
  const [plist, setPlist] = useState([
    { id: 1, name: 'Apple', price: 1, inStock: true }, 
    { id: 2, name: 'Banana', price: 1, inStock: false }, 
    { id: 3, name: 'Cherry', price: 2, inStock: true }
  ]);
  
  return (
        <table border='1px' >
            <caption>Product Table</caption>
            <tbody>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Status</th>
                </tr>
                {plist.map(p => <Product key={p.id} {...p} 
                    toggleStock={() => setPlist(plist.map(p1 => p1.id == p.id ? toggleStock(p1) : p1) )} />)}        
            </tbody>    
        </table>
    )
}
   