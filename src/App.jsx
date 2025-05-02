import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./app/routes";
import Header from "./widgets/Header/Header";
import Footer from "./widgets/Footer/Footer";
import ScrollToTop from "./app/ScrollToTop";
import CustomCursor from "./widgets/CustomCursor/CustomCursor";

const App = () => {
  return (
    <BrowserRouter>
      <CustomCursor/>
      <ScrollToTop />
      <Header />
      <AppRoutes />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
