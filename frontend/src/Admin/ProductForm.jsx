import React, { useState } from "react";
import { postRequest } from "../Service/AxiosRequest";

function ProductForm() {

  const[productName, setProuctName] = useState(null)
  const[category, setCategory] = useState(null)
  const[price, setPrice] = useState(null)
  const[description, setDescription] = useState(null)



  const addProduct = async (e) => {
    e.preventDefault()


    const productData = {
      productName,
      category,
      description,
      price,
    };



    try {
      const data = await postRequest("http://localhost:8080/new-product", productData)
      
    } catch (error) {
      console.log(error)
      throw error;
    }
  }

  return (
    <div className="container flex flex-row justify-center align-middle m-10 ">
      <form>
        <h1 className="text-center">Add a new product</h1>
        <br />

        <label for="pname">Product Name:</label>
        <br />
        <input className="border-2" onChange={(e) => setProuctName(e.target.value)} type="text" id="pname" name="pname" />
        <br />
        <label for="fname">Category:</label>
        <br />
        <input className="border-2" onChange={(e) => setCategory(e.target.value)} type="text" id="cname" name="cname" />
        <br />
        <label for="cname">Description</label>
        <br />
        <textarea className="border-2" onChange={(e) => setDescription(e.target.value)} type="text" id="price" name="price" />
        <br />
        <label for="lname">Price</label>
        <br />
        <input className="border-2" onChange={(e) => setPrice(e.target.value)} type="number" id="price" name="price" />
        <br />
        <input onClick={addProduct} type="submit" />
      </form>
    </div>
  );
}

export default ProductForm;
