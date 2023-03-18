import "../styles/globals.css";
import "./../node_modules/vazirmatn/Vazirmatn-font-face.css"
import Navbar from "../components/navbar";

function MyApp({ Component, pageProps }) {
  return (
    <div dir="rtl" className="font-Vazir">
        <Navbar />
        <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
