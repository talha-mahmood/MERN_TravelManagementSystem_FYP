import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import StateContext from './components/StateContext'
import { ConfigProvider } from 'antd';
import theme from './theme/themeConfig';
import Home from './components/Home'
import Header from "./components/layout/Header";
import MyFooter from "./components/MyFooter";
import Hotelslisting from "./components/Hotelslisting";
import Carslisting from "./components/Carslisting";
import AddPackage from "./components/AddPackage";
import AddCar from "./components/AddCar" 
import PackageList from "./components/PackageList";
import Login from "./components/Login";
import Signup from "./components/Signup";
import UpdatePackage from "./components/UpdatePackage";
import ProtectedRoutes from "./components/ProtectedRoutes";
import AddPlaces from "./components/AddPlaces";
import Register from "./components/Register";
import HotelsBooking from "./components/HotelsBooking";
import TourPackageBooking from "./components/TourPackageBooking";
import CarsBooking from "./components/CarsBooking";
import TourPackageListing from "./components/TourPackageListing";
import TravelGuideBooking from "./components/TravelGuideBooking";
import TravelGuideListing from "./components/TravelGuideListing";
import Error from "./components/Error";

function App() {
  return (
    <Router>
      <Header />
      <StateContext>
        <ConfigProvider theme={theme}>
        </ConfigProvider>
        <Routes>

          <Route

            path="/"
            element={<Home />}
          ></Route>
          <Route

            path="/tourpackagelisting"
            element={<ProtectedRoutes><TourPackageListing /></ProtectedRoutes>}
          ></Route>
          <Route

            path="/hotelslisting"
            element={<ProtectedRoutes><Hotelslisting /></ProtectedRoutes>}
          ></Route>
          <Route

            path="/carslisting"
            element={<ProtectedRoutes><Carslisting /></ProtectedRoutes>}
          ></Route>
          <Route

            path="/travelguidelisting"
            element={<ProtectedRoutes><TravelGuideListing /></ProtectedRoutes>}
          ></Route>


          <Route

            path="/add-package"
            element={<ProtectedRoutes><AddPackage /></ProtectedRoutes>}
          ></Route>
          <Route

            path="/add-cars"
            element={<ProtectedRoutes><AddCar /></ProtectedRoutes>}
          ></Route>
          <Route

            path="/package-list"
            element={<ProtectedRoutes><PackageList /></ProtectedRoutes>}
          ></Route>



          <Route

            path="/update/:id"
            element={<ProtectedRoutes><UpdatePackage /></ProtectedRoutes>}
          ></Route>




          <Route

            path="/login"
            element={<Login />}
          ></Route>
          <Route

            path="/signup"
            element={<Signup />}
          ></Route>
          <Route

            path="/admin"
            element={<AddPlaces />}
          ></Route>
          <Route

            path="/register"
            element={<Register />}
          ></Route>
          <Route

            path="/hotelsbooking"
            element={<HotelsBooking />}
          ></Route>
          <Route

            path="/tourpackagebooking/:id"
            element={<TourPackageBooking />}
          ></Route>
          <Route

            path="/carsbooking"
            element={<CarsBooking />}
          ></Route>
          <Route

            path="/travelguidebooking"
            element={<TravelGuideBooking />}
          ></Route>

          <Route

            path="*"
            element={<Error />}
          ></Route>

        </Routes>

        <ConfigProvider />
      </StateContext>
      <MyFooter />
    </Router>
  );
}

export default App;
