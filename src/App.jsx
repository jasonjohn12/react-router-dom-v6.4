import {
  Link,
  Outlet,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./Home";
import Data, { dataLoader } from "./Data";
import Contact from "./Contact";
// import { Contact } from "./Contact";
import "./App.css";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/data" element={<Data />} loader={dataLoader} />
      </Route>
    )
  );

  return (
    <div>
      <RouterProvider router={router} />
      {/* <h1>Hello React</h1>

      <h2>Start Editing to see some magic</h2> */}
    </div>
  );
}

export default App;

const Root = () => {
  return (
    <>
      <div>
        <Link to="/">Home</Link>
        <Link to="/data">Data</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
};
