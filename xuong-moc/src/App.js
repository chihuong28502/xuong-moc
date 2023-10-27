import Header from "./components/Header";
import "./css/reset.css";
import "./css/style.css";
import "./css/category.css";
import "./css/home-about.css";
import "./css/home-contact.css";
import "./css/news.css";
import "./css/footer.css";
import "./css/responsive.css";
import { Route, Routes } from "react-router-dom";
import listRouter from "./router";
import Footer from "./components/Footer";
import "react-toastify/dist/ReactToastify.css";
import ScrollToTop from "./Scroll";
import { ToastContainer } from "react-toastify";
// import "./js/main";
function App() {
  return (
    <>
      <Header />
      <ScrollToTop>
        <Routes>
          {listRouter.map((route, index) => {
            const ComponentSelect = route.component;
            return (
              <Route
                key={index}
                path={route.path}
                element={<ComponentSelect />}
              />
            );
          })}
          {/* <Route path="/Products" element={<Products />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="/News" element={<News />}></Route>
        {/* components child */}
          {/* <Route path="/ProductItem" element={<ProductItem />}></Route> */}{" "}
          {/* */}
        </Routes>
      </ScrollToTop>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
