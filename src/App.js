import "./App.css";
import Header from "./components/Header/Header";
import AutentificationScreen from "./components/AutentificationScreen/AutentificationScreen";
import PickupScreen from "./components/PickupScreen/PickupScreen";
import DeliveryScreen from "./components/DeliveryScreen/DeliveryScreen";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

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

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
