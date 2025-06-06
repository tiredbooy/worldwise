import { lazy, Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { CitiesProvider } from "./contexts/CitiesContext";
import { AuthProvider } from "./contexts/FakeAuthContext";

import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import City from "./components/City";
import Form from "./components/Form";
import ProtectedRoute from "./pages/ProtectedRoute";
import SpinnerFullPage from "./components/SpinnerFullPage";

// import Product from "./pages/Product";
// import Pricing from "./pages/Pricing";
// import Homepage from "./pages/Homepage";
// import Login from "./pages/Login";
// import AppLayout from "./pages/AppLayout";
// import PageNotFound from "./pages/PageNotFound";

const Product = lazy(() => import("./pages/Product"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Homepage = lazy(() => import("./pages/Homepage"));
const Login = lazy(() => import("./pages/Login"));
const AppLayout = lazy(() => import("./pages/AppLayout"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));

//// WITHOUT LAZY LOADING
// dist/assets/index-494e47d3.css   31.90 kB │ gzip:   5.29 kB
// dist/assets/index-189d6d02.js   532.80 kB │ gzip: 151.11 kB
////  -------------------

//// WITH LAZY LOADING

function App() {
  return (
    <AuthProvider>
      <CitiesProvider>
        <Suspense fallback={<SpinnerFullPage />}>
          <BrowserRouter>
            <Routes>
              <Route index element={<Homepage />} />
              <Route path="product" element={<Product />} />
              <Route path="pricing" element={<Pricing />} />
              <Route path="login" element={<Login />} />
              <Route
                path="app"
                element={
                  <ProtectedRoute>
                    <AppLayout />
                  </ProtectedRoute>
                }
              >
                <Route index element={<Navigate replace to={"cities"} />} />
                <Route path="cities" element={<CityList />} />
                <Route path="cities/:id" element={<City />} />
                <Route path="countries" element={<CountryList />} />
                <Route path="form" element={<Form />} />
              </Route>

              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </BrowserRouter>
        </Suspense>
      </CitiesProvider>
    </AuthProvider>
  );
}

export default App;
