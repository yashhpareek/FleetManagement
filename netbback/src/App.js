import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutUs from './components/AboutUs';
import CustomerCare from './components/CustomerCare';
import Modify from './components/Modify';
import Car from "./Cars";
import CustomerForm from "./Register";
import LoginComponent from "./Loginform";
import AffiliatedHotels from './components/AffilatedHotels';
import WeatherRedirect from './components/Weather';
import CareerPage from './components/Carrear';
import AddonList from "./Addon";
import HubSelectionForm from "./Hub";
import BookingForm from "./BookingForm";
import Cancel from './Cancel';
import ReturnHubSelectionForm from './ReturnHubSelectionForm';
import ConfirmBooking from './ConfirmBooking';
import BookingFormRitik from './BookingFormritik';
import StaffLogin from './StaffLogin';
import StaffPage from './StaffPage';
import BookingByStaff from './BookingByStaff';
import StaffBookingForm from './StaffBookingForm';
import CancelBookingByStaff from './CancelBookingByStaff';
import StaffHandOver from './StaffHandOver';
import Return from './Return';
import BookingButton from './Testmain';
import Rlogic from './Rlogic';
import ReturnLogic from './ReturnLogic';
import PDFGenerator from './PDFGenerator';
import Home from './Home';

const App = () => {
    return (
      <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/LoginComponent" element={<LoginComponent/>} />
          <Route path="/" element={<Home/>} />
          <Route path="/StaffLogin" element={<StaffLogin/>} />
          <Route path="/StaffPage" element={<StaffPage/>} />
          <Route path="/BookingByStaff" element={<BookingByStaff/>} />
          <Route path="/AboutUs" element={<AboutUs/>} />
          <Route path="/BookingFormRitik" element={<BookingFormRitik/>} />
          <Route path="/Modify" element={<Modify/>} />
          <Route path="/ReturnLogic" element={<ReturnLogic/>} />
          <Route path="/Rlogic" element={<Rlogic/>} />
          <Route path="/ConfirmBooking" element={<ConfirmBooking/>} />
          <Route path="/CustomerForm" element={<CustomerForm/>} />
          <Route path="/AffiliatedHotels" element={<AffiliatedHotels/>} />
          <Route path="/WeatherRedirect" element={<WeatherRedirect/>} />
          <Route path="/CareerPage" element={<CareerPage/>} />
          <Route path="/Car" element={<Car/>} />
          <Route path="/BookingButton" element={<BookingButton/>} />
          <Route path="/Return" element={<Return/>} />
          <Route path="/StaffHandOver" element={<StaffHandOver/>} />
          <Route path="/CancelBookingByStaff" element={<CancelBookingByStaff/>} />
          <Route path="/StaffBookingForm" element={<StaffBookingForm/>} />
          <Route path="/Cancel" element={<Cancel/>} />
          <Route path="/PDFGenerator" element={<PDFGenerator/>} />
          <Route path="/BookingForm" element={<BookingForm/>} />
          <Route path="/HubSelectionForm" element={<HubSelectionForm/>} />
          <Route path="/ReturnHubSelectionForm" element={<ReturnHubSelectionForm/>} />
          <Route path="/CustomerCare" element={<CustomerCare/>} />
          <Route path="/AddonList" element={<AddonList/>} />
          {/* Add more routes here for other components/pages */}
        </Routes>
        <Footer />
      </div>
    </Router>
    );
};

export default App;
