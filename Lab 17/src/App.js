import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

import Homepage from "./pages/Home";
import ProductPages from "./pages/Products";

const routerDefinition = createRoutesFromElements(
  <Route>
    <Route path="/" element={<Homepage/>}/>
    <Route path="/products" element={<ProductPages/>}/>
  </Route>
);
// const router = createBrowserRouter([
//   { path: "/", element: <Homepage /> },
//   { path: "/products", element: <ProductPages /> },
// ]);

const router = createBrowserRouter(routerDefinition);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
