function Address(props) {
  return (
    <>
      <div className="w-1/2">
        <div className="relative" bis_skin_checked="1">
          <label for="message" className="leading-7 text-sm text-gray-600">
            Enter the delivery address here...
          </label>
          <textarea
            id="address"
            name="address"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          ></textarea>
        </div>
        <button className="text-white mt-2 bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
        ₹ {props.price} - Order now!
        </button>
      </div>
    </>
  );
}

Address.defaultProps = {
    price : 0.00
}

export default Address;
