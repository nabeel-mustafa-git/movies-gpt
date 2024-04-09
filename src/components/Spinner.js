import { PacmanLoader } from "react-spinners";

const Spinner = ({ up = true }) => {
  return (
    <div className={`fixed z-[999] top-0 left-0 bg-black ${up === true ? "bg-opacity-70" : ""} flex w-full h-screen items-center justify-center`}>
      <PacmanLoader color="#d81919" />
    </div>
  );
};

export default Spinner;
