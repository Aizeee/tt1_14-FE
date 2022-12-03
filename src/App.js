// NORMAL
// import './App.css';

// BOOTSTRAP
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// NavBars
// import NavBar1 from './Components/NavBars/NavBar1'

// Pages
import Home from "./Pages/HomePage";
import About from "./Pages/AboutPage";
import Contact from "./Pages/ContactPage";
import Products from "./Pages/ProductsPage";
import Extra from "./Pages/ExtraPage";
import Extra2 from "./Pages/Extra2Page";
import Error from "./Pages/ErrorPage";
import ScheduleTransaction from "./Pages/ScheduleTransaction";
import SignupPage from "./Pages/SignupPage";
import LoginPage from "./Pages/LoginPage";
import TransactionDetails from "./Pages/TransactionDetails";
import ProtectedRoute from "./ProtectedRoute/Protected";

function App() {
  return (
    <Router>
      {/* <NavBar1 /> */}
      <Routes>
        <Route path="/" element={<ProtectedRoute />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/about" element={<ProtectedRoute />}>
          <Route path="/about" element={<About />} />
        </Route>
        <Route path="/contact" element={<ProtectedRoute />}>
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route path="/products" element={<ProtectedRoute />}>
          <Route path="/products" element={<Products />} />
        </Route>
        <Route path="/extra" element={<ProtectedRoute />}>
          <Route path="/extra" element={<Extra />} />
        </Route>
        <Route path="/extra2" element={<ProtectedRoute />}>
          <Route path="/extra2" element={<Extra2 />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/transactiondetails" element={<ProtectedRoute />}>
          <Route path="/transactiondetails" element={<TransactionDetails />} />
        </Route>
        <Route path="/scheduletransaction" element={<ProtectedRoute />}>
          <Route
            path="/scheduletransaction"
            element={<ScheduleTransaction />}
          />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
