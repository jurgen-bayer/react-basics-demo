import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { JsxComponent } from '../../features/01-jsx/jsx';
import { ComponentsDemoComponent } from '../../features/02-components/components-demo';
import { StyledComponentsDemo } from '../../features/03-styling/styled-components-demo';
import { StylingDemoComponent } from '../../features/03-styling/styling-demo';
import { HomeComponent } from '../../features/home';
import { NotFoundComponent } from '../../features/not-found';

export function AppRoutes() {
    return <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/jsx" element={<JsxComponent />} />
        <Route path="/components" element={<ComponentsDemoComponent />} />
        <Route path="/integrated-styling" element={<StylingDemoComponent />} />
        <Route path="/styled-components" element={<StyledComponentsDemo />} />
        <Route path='*' element={<NotFoundComponent />} />
    </Routes>
}