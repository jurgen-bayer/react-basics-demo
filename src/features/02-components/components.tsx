import React, { Fragment } from 'react';

function functionalComponentAsFunction() {
    return <Fragment>
        <h2>Functional Component as Function</h2>
        <p>Some content</p>
    </Fragment>
}

export function ComponentsComponent() {
    return <Fragment>
        <h1>Components</h1>
        {functionalComponentAsFunction()}
    </Fragment>
}