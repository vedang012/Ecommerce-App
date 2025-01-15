function Gridview(props) {

  const openProduct = (productId) => {
    window.location.href= `/product/${productId}`;
  };


  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto" bis_skin_checked="1">
          <div className="flex flex-wrap -m-4" bis_skin_checked="1">
            {props.products.map((product) => (
              <div
                key={product.productId}
                className="lg:w-1/4 md:w-1/2 p-4 w-full"
                bis_skin_checked="1"
                onClick={() => openProduct(product.productId)}
              >
                <a className="block relative h-48 rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src="https://dummyimage.com/420x260"
                  />
                </a>
                <div className="mt-4" bis_skin_checked="1">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    {product.category}
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    {product.name}
                  </h2>
                  <p className="mt-1">₹ {product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

Gridview.defaultProps = {
  products: [
    {
      productId: 1,
      category: "category_default",
      name: "product_name",
      price: 0.0,
    },
  ],
};

export default Gridview;
