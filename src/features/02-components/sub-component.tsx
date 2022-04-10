import React, { Fragment } from 'react';

// Interface for the props (to avoid any)
export interface SubComponentProps {
    someString: string;
    someNumber: number;
} 

// Functional component with props
export function SubComponent(props: SubComponentProps) {
    return <Fragment>
        <h1>Sub Component</h1>
        <div>Passed String: {props.someString}</div>
        <div>Passed Number: {props.someNumber}</div>
    </Fragment>
}

// Optional definition of the functional component with props. 
// React.FC (or React.FunctionComponent) creates a functional component.
// export const SubComponent: React.FC<SubComponentProps> = ({someString, someNumber}) =>
// {
//     return <Fragment>
//         <h1>Sub Component</h1>
//         <div>Passed String: {someString}</div>
//         <div>Passed Number: {someNumber}</div>
//     </Fragment>
// }