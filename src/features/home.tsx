import React, { Fragment } from 'react';

export function HomeComponent() {
    return <Fragment>
        <h1>Home</h1>
        <div className="header">Header</div>
        <div className="box">div with &apos;box&apos; class. Note that the style 
        does not clash with the style in 03-styling/styling-demo.module.scss, 
        because 03-styling/styling-demo.module.scss is a Style Module.</div>
    </Fragment> 
} 