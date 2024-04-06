import logo from "../images/movai-bw-logo.png";

const Footer = () => {
  return (
    <footer className="bg-black md:px-36 sm:px-10 px-5 py-10 flex flex-col gap-4">
      <img draggable="false" className="w-[180px] max-md:w-[120px] opacity-50" src={logo} />
      <p className="color-red">
        Questions?{" "}
        <a href="https://www.linkedin.com/in/nabeel-dev" target="_blank" className="text-gray-500 border-b border-gray-500">
          Contact me on Linkdin!
        </a>
      </p>
      <p className="text-gray-700 flex justify-center text-sm font-semibold">Copyright 2024. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
