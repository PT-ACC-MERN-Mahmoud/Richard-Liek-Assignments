import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button"

const ProductList = () => {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        axios.get('http://localhost:8000/products')
            .then(res => {
                console.log('Got Something');
                console.log(res);
                setProducts(res.data.products);
                console.log(products);
            });
    }, []);

    const deleteProduct = (id) => {
        axios.delete(`http://localhost:8000/products/${id}/delete`)
            .then(res => {
                console.log(res.data);
                res.data.success ? setProducts(products.filter(prod => prod._id != id)) : 
                console.log('Error Deleting Product');
            })
    }

    return (
        <ul className="card col-4">
            {products.map(product => (
                <div key={product._id} style={{justifyContent: 'space-between',
                    margin: 10 }}>
                    <Button variant="contained" color="success" component={Link} to={`/products/${product._id}`}>{product.title}</Button>
                    <Button variant="contained" color="error" onClick={()=>deleteProduct(product._id)}>Delete</Button>
                    <Button variant="contained" color="primary" component={Link} to={`/products/${product._id}/edit`}>Edit</Button>
                </div>
            ))}
        </ul>
    )
}

export default ProductList;
