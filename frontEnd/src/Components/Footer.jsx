import { assets } from "../assets/frontend_assets/assets";

const Footer = () => {
  return (
    <div className="">
      <div className="flex flex-col sm:grid grid-cols-[3fr_3fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} className="mb-5 w-32" alt="" />
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Dignissimos reiciendis rerum culpa ea magnam autem sequi, architecto
            tenetur necessitatibus possimus.
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+212 6 15 97 96 88</li>
            <li>anas.laribi95@gmail.com</li>
          </ul>
        </div>
      </div>

      <div>
        <hr className="text-gray-200" />
        <p className="py-5 text-sm text-center">
          {" "}
          Copyright 2025 &copy; forever.com - All right reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
