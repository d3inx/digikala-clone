import { Provider } from "react-redux";
import { store } from "./../store/index";
import "../styles/globals.css";
import "./../node_modules/vazirmatn/Round-Dots/Vazirmatn-RD-font-face.css";
import Navbar from "../components/navbar";

function MyApp({ Component, pageProps }) {
  return (
    <div dir="rtl" className="font-Vazir">
      <Provider store={store}>
        <Navbar />
        <Component {...pageProps} />
      </Provider>
    </div>
  );
}

export default MyApp;
