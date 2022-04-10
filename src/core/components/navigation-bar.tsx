import React from 'react';
import { AppBar, Button, Container, Menu, MenuItem, Toolbar } from '@mui/material';
import { NavLink } from 'react-router-dom';

export function NavigationBar() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    
    return <AppBar position="static">
        <Container maxWidth="lg">
            <Toolbar disableGutters>
                <h3><NavLink className={(navData) => navData.isActive ? "menu-caption menu-caption-active" : "menu-caption" } to="/" end>React Basics Demo</NavLink></h3>
                <NavLink className={(navData) => navData.isActive ? "menu-caption menu-caption-active" : "menu-caption" } to="/jsx">JSX</NavLink>
                <NavLink className={(navData) => navData.isActive ? "menu-caption menu-caption-active" : "menu-caption" } to="/components">Components</NavLink>
                <Button className="menu-button"
                    id="styling-button"
                    aria-controls={open ? 'styling-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}>
                    Styling
                </Button>
                <Menu
                    id="styling-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{ 'aria-labelledby': 'styling-button' }}>
                    <MenuItem onClick={handleClose}><NavLink className={(navData) => navData.isActive ? "menu-caption menu-caption-active" : "menu-caption" } to="/integrated-styling">React-Integrated Styling</NavLink></MenuItem>
                    <MenuItem onClick={handleClose}><NavLink className={(navData) => navData.isActive ? "menu-caption menu-caption-active" : "menu-caption" } to="/styled-components">Styled Components</NavLink></MenuItem>
                </Menu>
            </Toolbar>
        </Container>
    </AppBar>
}
