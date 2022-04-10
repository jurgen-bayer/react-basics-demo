import React, { Fragment } from "react";

// Import the CSS Module dedicated for this component
import styles from './styling-demo.module.scss';

export function StylingDemoComponent() {
    const dayOfWeek = new Date().getDay();
    const isWeekend = dayOfWeek === 6 || dayOfWeek === 0;

    // Style defined in code
    const demoStyle = {
        border: 'solid 2px steelblue',
        padding: '10px',
        backgroundColor: '#606060',
        marginBottom: '10px',
        textAlign: 'center' as const // Note the const assertion trick to avoid 
        // TypeScript reporting the error "type '{ ... }' is not assignable to
        // type 'Properties<string | number, string & {}>'.
        // Types of property 'textAlign' are incompatible.
        // Type 'string' is not assignable to type 'TextAlign | undefined'."
    };

    return <Fragment>
        <h1>Styling</h1>
        <div className={styles.box}>div with &apos;box&apos; class from the Style Module. Note that the style
            does not clash with the style in /styles/styles.css, because 03-styling/styling-demo.module.scss is a Style Module.</div>
        <div className={styles.roundedBox}>div with the &apos;roundedBox&apos; class from the Style Module, which is
            composed with the &apos;box&apos; style.</div>
        <div style={{
            border: 'solid 2px steelblue',
            padding: '10px',
            backgroundColor: '#606060',
            marginBottom: '10px',
            textAlign: 'center'
        }}>
            div with inline-style
        </div>
        <div style={demoStyle}>div with inline-style defined in an object</div>
        <div style={{ color: isWeekend ? 'green' : 'inherit' }}>div with conditional inline-style. Green when it&apos;s weekend.</div>
    </Fragment>;
}