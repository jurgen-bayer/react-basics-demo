import React from 'react';
import { AppBar, Container, Toolbar } from '@mui/material';
import { NavLink } from 'react-router-dom';

export function NavigationBar() {
    return <AppBar position="static">
        <Container maxWidth="lg">
            <Toolbar disableGutters>
                <h3><NavLink className={(navData) => navData.isActive ? "menu-caption menu-caption-active" : "menu-caption" } to="/" end>React Basics Demo</NavLink></h3>
                <NavLink className={(navData) => navData.isActive ? "menu-caption menu-caption-active" : "menu-caption" } to="/jsx">JSX</NavLink>
                <NavLink className={(navData) => navData.isActive ? "menu-caption menu-caption-active" : "menu-caption" } to="/components">Components</NavLink>
            </Toolbar>
        </Container>
    </AppBar>
}
