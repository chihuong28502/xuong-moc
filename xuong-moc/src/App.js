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
import { ToastContainer } from "react-toastify";
import handleClickScrollIcon from "./handleJs/showScroll";
// import "./js/main";
function App() {
  return (
    <>
      <Header />
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
      </Routes>
      <Footer />
      <ToastContainer />
      <button id="scroll-top" onClick={handleClickScrollIcon}>
        <i className="fa-solid fa-chevron-up"></i>
      </button>
    </>
  );
}

export default App;
