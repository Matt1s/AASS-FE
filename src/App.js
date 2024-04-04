import "./App.css";


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import AutentificationScreen from "./components/AutentificationScreen/AutentificationScreen";
import PickupScreen from "./components/PickupScreen/PickupScreen";
import DeliveryScreen from "./components/DeliveryScreen/DeliveryScreen";
import Header from "./components/Header/Header";


const router = createBrowserRouter([
  {
    path: "/",
    element: <AutentificationScreen />,
  },
  {
    path: "/delivery",
    element: <DeliveryScreen />,
  },
  {
    path: "/pickup",
    element: <PickupScreen />,
  },
]);


// Display the Header component in the App component on all pages.
function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
      <RouterProvider router={router}>

      </RouterProvider>
      </div>
    </div>
  );
}

export default App;
