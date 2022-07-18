import { useState } from "react";
import Button from "@mui/material/Button"
import { Link } from "react-router-dom";
const ProductForm = (props) => {

  const {initialTitle, initialPrice, initialDescription, onSubmitProp} = props;

  const [title, setTitle] = useState(initialTitle);
  const [price, setPrice] = useState(initialPrice);
  const [description, setDescription] = useState(initialDescription);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    onSubmitProp({title, price, description});
    setTitle("")
    setPrice("")
    setDescription("")
  }

  return (
    <div>
        <form className="mt-3" onSubmit={onSubmitHandler}>
          <p className="form-group">
            <label>Title</label>
            <br />
            <input
              className="form-control"
              type="text"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
          </p>
          <p className="form-group">
            <label>Price</label>
            <br />
            <input
              className="form-control"
              type="text"
              onChange={(e) => setPrice(e.target.value)}
              value={price}
            />
          </p>
          <p className="form-group">
            <label>Description</label>
            <br />
            <input
              className="form-control"
              type="text"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
          </p>
          <p className="text-center">
            <Button variant="contained">Submit</Button>
          </p>
        </form>
    </div>
  );
}

export default ProductForm;