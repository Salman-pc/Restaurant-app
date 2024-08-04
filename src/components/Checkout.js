import { useContext } from "react";
import { Statecontext } from "../context/AppProvider";

const Checkout = () => {
  const cartpackege = useContext(Statecontext);

  return (
    <div className="container mx-auto px-4 pt-24 py-8">
      <h1 className="text-4xl font-bold text-blue-600 mb-8 text-center animate-fadeIn">
        Your Cart
      </h1>
      {cartpackege.cartitem && cartpackege.cartitem.length > 0 ? (
        <ul className="flex flex-wrap  gap-4">
          {cartpackege.cartitem.map((item) => (
            <div
              key={item.id}
              className="cursor-pointer xl:w-[200px] h-auto lg:w-[180px] md:w-[160px] w-[140px] bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition duration-300 animate-fadeInUp"
            >
              <img
                src={item.img}
                className="rounded-xl w-full"
                alt={item.title}
              />
              <h5 className="text-center mt-2 text-gray-800">{item.title}</h5>
            </div>
          ))}
        </ul>
      ) : (
        <div className="text-center mt-10">
          <h2 className="text-2xl font-bold text-red-500 animate-fadeIn">
            Your checkout is empty.
          </h2>
          <p className="text-lg mt-4 text-gray-600">
            It looks like you haven't added any items to your cart yet.
          </p>
        </div>
      )}
    </div>
  );
};

export default Checkout;
