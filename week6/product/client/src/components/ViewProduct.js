import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios';
import Button from '@mui/material/Button'

const ViewProduct = () => {
    const [product, setProduct] = useState({});
    const { id } = useParams();
    
    useEffect(() => {
        axios.get(`http://localhost:8000/products/${id}`)
            .then(res => {
                setProduct(res.data.product);
            })
    })


    return (
        <div className="card col-4">
            <p>Title: {product.title}</p>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
            <Button component={Link} variant="contained" to={`/`}>Home</Button>
        </div>
    )
}

export default ViewProduct;