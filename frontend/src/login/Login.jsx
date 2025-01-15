import React from "react";
import Navbar from "../Homepage/Navbar";

function Login() {

  const authUrl = "http://localhost:8080/oauth2/authorization/google"

  const googleLogin = () => {
    window.location.href=authUrl
  }


  return (
    <>
      <Navbar />

      <section className="text-gray-600 body-font">
        <div
          className="container px-5 py-24 mx-auto flex flex-col text-center items-center"
          bis_skin_checked="1"
        >
          <div
            className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0"
            bis_skin_checked="1"
          >
            <h1 className="title-font font-medium text-3xl text-gray-900">
              Welcome to V Commerce
            </h1>
            <p className="leading-relaxed mt-4">
              V Commerce is a new generation, one-stop shop that brings
              convenience, variety, and affordability to your fingertips! Shop
              for your favorite products at the most reasonable prices, with a
              wide range of categories to choose from. Our mission is to
              redefine the online shopping experience by providing top-quality
              products backed by the latest secure technology. With a focus on
              user-friendly features and unmatched security, we aim to
              revolutionize the online shopping industry. Enjoy seamless
              transactions, fast delivery, and customer satisfaction like never
              before.
            </p>
          </div>

          <br></br>
          <br></br>


          <div
            className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col w-full mt-10 md:mt-0"
            bis_skin_checked="1"
          >
            <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
              Log In / Sign Up
            </h2>
            <button onClick={googleLogin} className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Google Login
            </button>
            <p className="text-xs text-gray-500 mt-3">
              By signing up you will agree to our <u>Terms and Services</u>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
