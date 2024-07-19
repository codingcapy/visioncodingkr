
/*
author: Paul Kim
date: May 8, 2024
version: 1.0
description: router for Vision Coding
 */

import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import Layout from "./layout";
import HomePage from "./pages/HomePage";

export function Router() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route element={<Layout />}>
                <Route path="/" element={<HomePage />} />
            </Route>
        )
    )
    return router
}