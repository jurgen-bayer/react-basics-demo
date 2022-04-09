import React, { Fragment } from "react";

// Import the CSS file dedicated for this component
import './styling.scss';

export function StylingDemoComponent() {
    const dayOfWeek = new Date().getDay();
    const isWeekend = dayOfWeek === 6 || dayOfWeek  === 0;

    const demoStyle = {
        border: 'solid 2px steelblue', 
        padding: '10px', 
        backgroundColor: '#606060', 
        marginBottom: '10px',
        // textAlign: 'center' // Does not work. React wants a TextAlign object, 
        // but it's unclear where this is defined.
    };
    return <Fragment>
        <h1>Styling</h1>
        <div className="styling-demo">div with styling-demo class. Note that React merges styles, and the style defined here wins. That&apos;s why the div on the home page is identically styled.</div>
        <div className="better-styling-demo-1">div with better-styling-demo-1 class. Note that the style here is inherited from the better-styling-demo style defined in styles.scss. That&apos;s why the div on the home page with the base style is styled differently.</div>
        <div style={{border: 'solid 2px steelblue', padding: '10px', backgroundColor: '#606060', marginBottom: '10px', textAlign: 'center'}}>div with inline-style</div>
        <div style={demoStyle}>div with inline-style defined in an object</div>
        <div style={{color: isWeekend ? 'green' : 'inherit'}}>div with conditional inline-style. Green when it&apos;s weekend.</div>
    </Fragment>;
}