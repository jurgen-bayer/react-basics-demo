import React, { Fragment } from 'react';
import { SubComponent } from './sub-component';

function functionalComponentAsFunction() {
    return <Fragment>
        <h2>Functional Component as Function</h2>
        <p>Some content</p>
    </Fragment>
}

export function ComponentsDemoComponent() {
    return <Fragment>
        <h1>Components</h1>
        {functionalComponentAsFunction()}
        <SubComponent someString="This is a string passed from the using component" someNumber={42}></SubComponent>
    </Fragment>
}