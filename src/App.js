import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Preloader from './components/layouts/Preloader';
import Dashboard from './components/pages2/Dashboard';
import Accordions from './components/pages2/Accordions';
import Addproduct from './components/pages2/Addproduct';
import Alerts from './components/pages2/Alerts';
import Animations from './components/pages2/Animations';
import Badges from './components/pages2/Badges';
import Basictables from './components/pages2/Basictables';
import Breadcrumbs from './components/pages2/Breadcrumbs';
import Buttons from './components/pages2/Buttons';
import Cards from './components/pages2/Cards';
import Chartjs from './components/pages2/Chartjs';
import Chat from './components/pages2/Chat';
import Cropper from './components/pages2/Cropper';
import Customerlist from './components/pages2/Customerlist';
import Customerreview from './components/pages2/Customerreview';
import Datatables from './components/pages2/Datatables';
import Draggables from './components/pages2/Draggables';
import Email from './components/pages2/Email';
import Flaticons from './components/pages2/Flaticons';
import Fontawesome from './components/pages2/Fontawesome';
import Formelements from './components/pages2/Formelements';
import Formlayouts from './components/pages2/Formlayouts';
import Formvalidation from './components/pages2/Formvalidation';
import Formwizard from './components/pages2/Formwizard';
import Googlemaps from './components/pages2/Googlemaps';
import Invoicedetail from './components/pages2/Invoicedetail';
import Invoicelist from './components/pages2/Invoicelist';
import Materialize from './components/pages2/Materialize';
import Menucatalogue from './components/pages2/Menucatalogue';
import Menugrid from './components/pages2/Menugrid';
import Menulist from './components/pages2/Menulist';
import Modals from './components/pages2/Modals';
import Googlechart from './components/pages2/Googlechart';
import Orders from './components/pages2/Orders';
import Pagination from './components/pages2/Pagination';
import Preloaders from './components/pages2/Preloaders';
import Productdetail from './components/pages2/Productdetail';
import Progressbars from './components/pages2/Progressbars';
import Rangeslider from './components/pages2/Rangeslider';
import Rating from './components/pages2/Rating';
import Restaurantlist from './components/pages2/Restaurantlist';
import Sales from './components/pages2/Sales';
import Sliders from './components/pages2/Sliders';
import Socialactivity from './components/pages2/Socialactivity';
import Sweetalerts from './components/pages2/Sweetalerts';
import Tabs from './components/pages2/Tabs';
import Toast from './components/pages2/Toast';
import Todolist from './components/pages2/Todolist';
import Tour from './components/pages2/Tour';
import Typography from './components/pages2/Typography';
import Vectormaps from './components/pages2/Vectormaps';
import Widgets from './components/pages2/Widgets';
import Clientmanagement from './components/pages2/Clientmanagement';
import Comingsoon from './components/pages2/Comingsoon';
import Defaultlogin from './components/pages2/Defaultlogin';
import Defaultregister from './components/pages2/Defaultregister';
import Error from './components/pages2/Error';
import Faq from './components/pages2/Faq';
import Invoice from './components/pages2/Invoice';
import Lockscreen from './components/pages2/Lockscreen';
import Modallogin from './components/pages2/Modallogin';
import Modalregister from './components/pages2/Modalregister';
import Portfolio from './components/pages2/Portfolio';
import Stockmanagement from './components/pages2/Stockmanagement';
import Userprofile from './components/pages2/Userprofile';
import Webanalytics from './components/pages2/Webanalytics';
import ListeMenu from './components/pages/ListeMenu';
import CodeQr from './components/pages/CodeQr';


function App() {
  return (
    <Router basename={'/themes/themeforest/react/costic'}>
      <Preloader/>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/accordions" component={Accordions} />
        <Route path="/add-product" component={Addproduct} />
        <Route path="/alerts" component={Alerts} />
        <Route path="/animations" component={Animations} />
        <Route path="/badges" component={Badges} />
        <Route path="/basic-tables" component={Basictables} />
        <Route path="/breadcrumbs" component={Breadcrumbs} />
        <Route path="/buttons" component={Buttons} />
        <Route path="/cards" component={Cards} />
        <Route path="/chartjs" component={Chartjs} />
        <Route path="/chat" component={Chat} />
        <Route path="/cropper" component={Cropper} />
        <Route path="/customer-list" component={Customerlist} />
        <Route path="/customer-review" component={Customerreview} />
        <Route path="/data-tables" component={Datatables} />
        <Route path="/draggables" component={Draggables} />
        <Route path="/email" component={Email} />
        <Route path="/flaticons" component={Flaticons} />
        <Route path="/fontawesome" component={Fontawesome} />
        <Route path="/form-elements" component={Formelements} />
        <Route path="/form-layouts" component={Formlayouts} />
        <Route path="/form-validation" component={Formvalidation} />
        <Route path="/form-wizard" component={Formwizard} />
        <Route path="/google-maps" component={Googlemaps} />
        <Route path="/invoice-detail" component={Invoicedetail} />
        <Route path="/invoice-list" component={Invoicelist} />
        <Route path="/materialize" component={Materialize} />
        <Route path="/menu-catalogue" component={Menucatalogue} />
        <Route path="/menu-grid" component={Menugrid} />
        <Route path="/menu-list" component={Menulist} />
        <Route path="/modals" component={Modals} />
        <Route path="/google-chart" component={Googlechart} />
        <Route path="/orders" component={Orders} />
        <Route path="/pagination" component={Pagination} />
        <Route path="/preloaders" component={Preloaders} />
        <Route path="/product-detail" component={Productdetail} />
        <Route path="/progress-bars" component={Progressbars} />
        <Route path="/range-slider" component={Rangeslider} />
        <Route path="/rating" component={Rating} />
        <Route path="/restaurant-list" component={Restaurantlist} />
        <Route path="/sales" component={Sales} />
        <Route path="/sliders" component={Sliders} />
        <Route path="/social-activity" component={Socialactivity} />
        <Route path="/sweet-alerts" component={Sweetalerts} />
        <Route path="/tabs" component={Tabs} />
        <Route path="/toast" component={Toast} />
        <Route path="/todo-list" component={Todolist} />
        <Route path="/tour" component={Tour} />
        <Route path="/typography" component={Typography} />
        <Route path="/vector-maps" component={Vectormaps} />
        <Route path="/widgets" component={Widgets} />
        <Route path="/client-management" component={Clientmanagement} />
        <Route path="/coming-soon" component={Comingsoon} />
        <Route path="/default-login" component={Defaultlogin} />
        <Route path="/default-register" component={Defaultregister} />
        <Route path="/error" component={Error} />
        <Route path="/faq" component={Faq} />
        <Route path="/invoice" component={Invoice} />
        <Route path="/lock-screen" component={Lockscreen} />
        <Route path="/modal-login" component={Modallogin} />
        <Route path="/modal-register" component={Modalregister} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/stock-management" component={Stockmanagement} />
        <Route path="/user-profile" component={Userprofile} />
        <Route path="/web-analytics" component={Webanalytics} />


        <Route path="/liste-menu" component={ListeMenu} />
        <Route path="/code-qr" component={CodeQr} />
      </Switch>
    </Router>
  );
}

export default App;
