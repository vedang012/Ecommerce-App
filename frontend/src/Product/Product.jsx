import React, { useEffect, useState } from "react";
import Navbar from "../Homepage/Navbar";
import { getRequest } from "../Service/AxiosRequest";
import { useParams } from "react-router-dom";

function Product() {

  const { productId } = useParams()
  const [product, setProduct] = useState({})

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getRequest(`http://localhost:8080/products/${productId}`)
        setProduct(data)
      } catch (error) {
        console.log(error)
      }
    }

    fetchProduct()
  }, [])


  return (

    <>

      <Navbar />

      <section className="text-gray-400 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto" bis_skin_checked="1">
          <div className="lg:w-4/5 mx-auto flex flex-wrap" bis_skin_checked="1">
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src="https://dummyimage.com/400x400"
            />
            <div
              className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0"
              bis_skin_checked="1"
            >
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                {product.category}
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {product.name}
              </h1>

              <br></br>


              <p className="leading-relaxed">
                {product.description}
              </p>
              <div
                className="flex mt-6 items-center pb-5 border-b-2 border-gray-800 mb-5"
                bis_skin_checked="1"
              >
              </div>
              <div className="flex" bis_skin_checked="1">
                <span className="title-font font-medium text-2xl text-gray-900">
                  ₹ {product.price}
                </span>
                <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>

  );
}

export default Product;
