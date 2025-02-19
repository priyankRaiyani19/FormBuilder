import React from 'react';
import {Route, Routes} from "react-router";

import HomePage from "../pages/HomePage";
import GeneratedForm from "../pages/GeneratedForm";

const RouteProvider = () => {
    return (

         <div className="min-h-screen bg-gray-50">
             <Routes>
                 <Route path="/" element={<HomePage />} />
                 <Route path="/generated-form" element={<GeneratedForm />} />
             </Routes>
         </div>




    );
};

export default RouteProvider;