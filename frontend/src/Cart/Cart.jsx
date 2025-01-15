import React from "react";
import Navbar from "../Homepage/Navbar";
import Address from "./Address";

function Cart() {
  return (
    <div  className="flex flex-col justify-center align-middle p-8">
      <Navbar />

      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto" bis_skin_checked="1">
          <div
            className="-my-8 divide-y-2 divide-gray-100"
            bis_skin_checked="1"
          >
            <div
              className="py-8 flex flex-wrap md:flex-nowrap"
              bis_skin_checked="1"
            >
              <div
                className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col"
                bis_skin_checked="1"
              >
                <span className="font-semibold title-font text-gray-700">
                  Quantity : 1
                </span>
                <span className="mt-1 text-gray-500 text-sm">Readd item to the cart to increase quantity</span>
              </div>
              <div className="md:flex-grow" bis_skin_checked="1">
                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                  Product Name Title
                </h2>
                <p className="leading-relaxed">
                  Glossier echo park pug, church-key sartorial biodiesel
                  vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf
                  moon party messenger bag selfies, poke vaporware kombucha
                  lumbersexual pork belly polaroid hoodie portland craft beer.
                </p>
                <a className="text-indigo-500 inline-flex items-center mt-4">
                  Remove from cart
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Address />



    </div>
  );
}

export default Cart;
