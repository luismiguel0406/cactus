import React from 'react';
import { Suspense, useEffect } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';


import Loader from '../Layout/Loader';
import LayoutRoutes from '../Route/LayoutRoutes';

const Routers = () => {

        useEffect(() => {
                let abortController = new AbortController();
                console.ignoredYellowBox = ['Warning: Each', 'Warning: Failed'];
                console.disableYellowBox = true;
                return () => {
                        abortController.abort();
                };

        }, []);

        return (
                <BrowserRouter basename={'/'}>
                        <>
                                <Suspense fallback={<Loader />}>
                                        <Routes>
                                                <Route exact path={'/'} element={<Navigate to={`home`} />} />    
                                                <Route path={`/*`} element={<LayoutRoutes />} />
                                        </Routes>
                                </Suspense>
                        </>
                </BrowserRouter>
        );
};

export default Routers;