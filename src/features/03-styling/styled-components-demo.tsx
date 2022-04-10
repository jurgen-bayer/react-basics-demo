import React, { Fragment } from "react";
import styled from "@emotion/styled";

// Create a new Styled Components Title component with styled components that 
// will render a h1 element with the defined style. Note that styled.h1 is a Tag 
// Function, that gets a Template Literal passed. This allows easier passing
// a multiline string with optional templates, compared to having to pass 
// the string in  brackets.
// See https://jb-software-solutions.nimbusweb.me/s/share/6766864/xmqvuuwng59a11hxbmkn.
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: darkorange;
`;

// Interface for the props of the Note component
enum NoteType {
    info,
    warning,
    error
}
interface NoteProps {
    type: NoteType
}
// Note component with props
const Note = styled.div`
  /* Adapt the colors based on warning prop */
  background: ${(props: NoteProps) => props.type == NoteType.info
        ? "silver" : (props.type === NoteType.warning ? "darkorange" : "red")};
  color: ${(props: NoteProps) => props.type == NoteType.info ?
        "darkBlue" : (props.type === NoteType.warning ? "white" : "yellow")};

  padding: 15px;
  margin-top: 10px;
`;

// Extend a Styled Components component
const Box = styled.div`
    background-color: steelblue;
    border: 8px solid darkblue;
    color: white;
    padding: 20px;
    margin-top: 10px;
`;
const OrangeBox = styled(Box)`
    background-color: orange;
    border-color: red;
`;

// Button component used to change the HTML element later. Note that TypeScript
// would complain when using the Button with as="a" href="..." because a div
// does not contain a href property. Declaring the property is a workaround.
const Button = styled.div<{ href: any }>`
    display: inline-block;
    color: white;
    background-color: steelblue;
    font-size: 1em;
    padding: 0.75em 1em;
    margin-top: 10px;
    border: 4px solid darkblue;
    border-radius: 4px;
`;

export function StyledComponentsDemo() {
    return <Fragment>
        {/* Use the Title component */}
        <Title>Styled Components</Title>

        {/* Use the Note component, passing a prop  */}
        <Note type={NoteType.info}>Info note</Note>
        <Note type={NoteType.warning}>Warning note</Note>
        <Note type={NoteType.error}>Error note</Note>

        {/* Use the Box and the extended OrangeBox component */}
        <Box>Default Box</Box>
        <OrangeBox>Orange Box</OrangeBox>

        {/* Use the Button component normal and as an a element. Note that
            with TypeScript, the declared property href must be passed even 
            if not used. */}
        <Button href="#">Button component defined by Styled Components</Button>
        <Button as="a" href="#">Button component rendered as a element</Button>
    </Fragment>
}