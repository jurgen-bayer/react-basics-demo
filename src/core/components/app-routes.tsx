import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { JsxComponent } from '../../features/01-jsx/jsx';
import { ComponentsComponent } from '../../features/02-components/components';
import { StylingDemoComponent } from '../../features/03-styling/styling';
import { HomeComponent } from '../../features/home';
import { NotFoundComponent } from '../../features/not-found';

export function AppRoutes() {
    return <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/jsx" element={<JsxComponent />} />
        <Route path="/components" element={<ComponentsComponent />} />
        <Route path="/styling" element={<StylingDemoComponent />} />
        <Route path='*' element={<NotFoundComponent />} />
    </Routes>
}