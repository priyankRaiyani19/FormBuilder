import React from 'react';
import {Route, Routes} from "react-router";

import HomePage from "../pages/HomePage";
import GeneratedForm from "../pages/GeneratedForm";

const RouteProvider = () => {
    return (

             <Routes>
                 <Route path="/" element={<HomePage />} />
                 <Route path="/generated-form" element={<GeneratedForm />} />
             </Routes>





    );
};

export default RouteProvider;