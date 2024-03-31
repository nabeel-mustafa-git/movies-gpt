const Footer = () => {
  return (
    <footer className="bg-black md:px-36 sm:px-10 px-5 py-10 flex flex-col gap-4">
      <h2 className="text-gray-500 text-3xl font-bold py-4">MOVAI</h2>
      <p className="text-red-500">
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
