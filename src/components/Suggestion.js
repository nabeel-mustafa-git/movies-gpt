import GptSearch from "./GptSearch";
import Nav from "./Nav";

const Suggestion = () => {
  return (
    <div>
      <Nav route={"/suggestion"} />
      <GptSearch />
    </div>
  );
};

export default Suggestion;
