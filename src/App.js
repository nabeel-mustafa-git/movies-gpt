import { Provider } from "react-redux";
import Body from "./components/Body";
import Footer from "./components/Footer";
import appStore from "./utils/appStore";
import useCheckInternet from "./hooks/useCheckInternet";
import NoInternet from "./components/NoInternet";

function App() {
  const status = useCheckInternet();
  if (!status) return <NoInternet />;
  return (
    <Provider store={appStore}>
      <Body />
      <Footer />
    </Provider>
  );
}

export default App;
