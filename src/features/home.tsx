import React, { Fragment } from 'react';

export function HomeComponent() {
    return <Fragment>
        <h1>Home</h1>
        <div className="styling-demo">div with styling-demo class. Note that the style is merged with the style in 03-styling/styling.scss, and 03-styling/styling.scss wins.</div>
        <div className="better-styling-demo">div with better-styling-demo class. Note that the style is not overwritten. Instead, 03-styling/styling.scss inherits from this style.</div>
    </Fragment> 
} 