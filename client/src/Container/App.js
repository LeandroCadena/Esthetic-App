import React from "react";
import { Route } from "react-router-dom";
import Header from "../components/Header/Header";
import Login from "../components/Login/Login";
import Home from "../components/Home/Home";
import UserRegister from "../components/UserRegister/UserRegister";
import Section from "../components/Section/Section.js";
import Cart from "../components/Cart/Cart";
import ServiceUpload from "../components/Section/Services/Service/ServiceUpload/ServiceUpload";
import { ProvidersByService } from "../components/Section/Providers/ProvidersByService";
import ProviderCalendar from "../components/ProviderCalendar/ProviderCalendar";
import ProviderProfile from "../components/ProviderProfile/ProviderProfile";
import UserProfile from "../components/UserProfile/UserProfile";
import ProviderDetails from "../components/ProviderDetails/ProviderDetails";
import HomeProvider from "../components/HomeProviders/HomePage/HomeProvider";
import Providers from "../components/SearchProvider/Providers";
import ProviderRating from "../components/Section/ProviderRating/ProviderRating";
import CovidProtocol from '../components/CovidProtocol/CovidProtocol';
import Footer from '../components/Footer/Footer';
import About from '../components/About/About';
import EventsHistory from '../components/UserProfile/EventsHistory/EventsHistory';

const App = () => {
  return (
    <React.Fragment>
      <Route path="/" component={Header} />
      <Route exact path={["/"]} component={(Home, Section)} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/userRegister" component={UserRegister} />
      <Route exact path="/user/provider" component={HomeProvider} />
      <Route
        exact
        path="/services/providers/:serviceName"
        component={ProvidersByService}
      />
      {/* <Route path='/services/details/:id' component={ServiceDetails} /> */}
      <Route exact path={["/cart", "/cart/:id"]} component={Cart} />
      <Route exact path="/service/upload/:id" component={ServiceUpload} />
      <Route exact path="/providers/:id/profile" component={ProviderProfile} />
      <Route exact path="/providers/review/:id" component={ProviderRating} />
      <Route
        exact
        path="/services/providers/:service/:provider/calendar"
        component={ProviderCalendar}
      />
      <Route exact path="/providers/:id" component={ProviderDetails} />
      <Route exact path="/profile/:id" component={UserProfile} />
      <Route exact path="/search" component={Providers} />
      <Route exact path="/covid" component={CovidProtocol} />
      <Route exact path="/perfil/historial" component={EventsHistory}/>
      <Route path="/" component={Footer} />
      <Route exact path="/about" component={About} />
    </React.Fragment>
  );
};

export default App;
