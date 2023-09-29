import React, { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import PageNotFound from "../pages/page-not-found/PageNotFound";
import { EXTENTION_ROUTE, HOME_ROUTE, SIGNUP_ROUTE } from "../content-management/Landing";

const LandingLayout = lazy(() => import('../layout/LandingLayout'))
const Home = lazy(() => import("../pages/home/Home"))
const Extention = lazy(() => import("../pages/extention/Extention"))
const SignUp = lazy(() => import("../auth/SignUp"))





const LandingRoute = () => {
  return (
    <div>
      <Routes>
        <Route element={<LandingLayout />}>
            <Route index element={<Navigate to="home" />} />
            <Route
              path={HOME_ROUTE}
              element={<Home />}
            />
            <Route
              path={EXTENTION_ROUTE}
              element={<Extention />}
            />
            <Route
              path={SIGNUP_ROUTE}
              element={<SignUp />}
            />
        </Route>
        <Route path="*" element={<PageNotFound />} />
        
      </Routes>
    </div>
  );
};

export default LandingRoute;
