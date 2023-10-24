import Products from "../ComponentDad/Products";
import Home from "../ComponentDad/Home";
import Contact from "../ComponentDad/Contact";
import News from "../ComponentDad/News";
import NewItem from "../componentChild/NewItem";
import Introduce from "../ComponentDad/Introduce";
import AllProducts from "../ComponentDad/AllProducts";
import ListSearch from "../componentChild/ListSearch";

const listRouter = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/products",
    component: Products,
  },
  {
    path: "/contact",
    component: Contact,
  },
  {
    path: "/news",
    component: News,
  },
  {
    path: "/news/:NewItem",
    component: NewItem,
  },
  {
    path: "/introduce",
    component: Introduce,
  },
  { path: "/products/:productCategory", component: AllProducts },
  { path: "/search/:valueSearch", component: ListSearch },
];
export default listRouter;
