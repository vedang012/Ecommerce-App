import React from "react";
import Navbar from "../Homepage/Navbar";

function Product() {
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
              VCOMMERCE
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              The Catcher in the Rye
            </h1>

            <br></br>


            <p className="leading-relaxed">
              Fam locavore kickstarter distillery. Mixtape chillwave tumeric
              sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo
              juiceramps cornhole raw denim forage brooklyn. Everyday carry +1
              seitan poutine tumeric. Gastropub blue bottle austin listicle
              pour-over, neutra jean shorts keytar banjo tattooed umami
              cardigan.
            </p>
            <div
              className="flex mt-6 items-center pb-5 border-b-2 border-gray-800 mb-5"
              bis_skin_checked="1"
            >
              <div className="flex" bis_skin_checked="1">
                <span className="mr-3">Color</span>
                <button className="border-2 border-gray-800 rounded-full w-6 h-6 focus:outline-none"></button>
                <button className="border-2 border-gray-800 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                <button className="border-2 border-gray-800 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button>
              </div>
              <div className="flex ml-6 items-center" bis_skin_checked="1">
                <span className="mr-3">Size</span>
                <div className="relative" bis_skin_checked="1">
                  <select className="rounded border border-gray-700 focus:ring-2 focus:ring-indigo-900 bg-transparent appearance-none py-2 focus:outline-none focus:border-indigo-500 text-gray-900 pl-3 pr-10">
                    <option>SM</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                  </select>
                  <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <div className="flex" bis_skin_checked="1">
              <span className="title-font font-medium text-2xl text-gray-900">
                $58.00
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
