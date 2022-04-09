import React, { Fragment } from 'react';

export function JsxComponent() {
    // Some variables uses in the JSX code
    const number: number = 42;
    const colour: string = 'steelblue';
    const products = [
        {
            name: 'Core XR7, 6m²',
            price: 1650,
        },
        {
            name: 'Core XR7, 9m²',
            price: 1750,
        },
        {
            name: 'Core XR7, 10m²',
            price: 1850,
        }
    ];
    const dayOfWeek = new Date().getDay();
    const isWeekend = dayOfWeek === 6 || dayOfWeek  === 0;

    // A React element defined in code
    const demoElement = (
        <div>
            <span style={{color: 'yellow'}}>Hello</span>
            <span> </span>
            <span style={{color: 'orange'}}>World</span>
        </div>
    );

    // A function returning JSX
    function greeting(name: string) {
        return (<div>Hello {name}</div>);
    }

    // A function rendering the weekday
    function getWeekday() {
        switch (dayOfWeek) {
            case 0: return <span>Sunday</span>;
            case 1: return <span>Monday</span>;
            case 2: return <span>Tuesday</span>;
            case 3: return <span>Wednesday</span>;
            case 4: return <span>Thursday</span>;
            case 5: return <span>Friday</span>;
            case 6: return <span>Saturday</span>;
        }
    }
    
    return <Fragment>
        <h1>JSX</h1>

        <h2>Use an Element</h2>
        {/* Use the demo element */}
        {demoElement}
        
        <h2>Output an Expression (in {"{}"})</h2>
        <div>{1 + 1 + 40}</div>
        <div>{number}</div>

        <h2>JSX Returned from a Function</h2>
        {/* Call a function that returns JSX */}
        {greeting('Zaphod')}

        <h2>Use an Expression in an Attribute</h2>
        {/* Use the colour variable for the color property of the stype object.
            Note that style is an object with properties names like CSS properties, 
            just with camel casing replacing dashes. 
            background-color is backgroundColor for example. */}
        <div style={{color: colour}}>Should be {colour}</div>

        <h2>Output a List (Using .map())</h2>
        {/* Easiest: Using map().
            Note that 
            (<div key={`product${index}`}>{product.name}: {product.price}</div>)
            is a React element that is repeated for each object in the array. */}
        { 
            products.map((product, index) => 
                (<div key={`product${index}`}>{product.name}: {product.price}</div>)
            )
        }

        <h2>Conditional Output Based on a Boolean Expression</h2>
        {
            isWeekend 
                ? (<span style={{color: 'green'}}>It&apos;s weekend</span>)
                : (<span style={{color: 'red'}}>It&apos;s not weekend</span>)
        }

        <h2>Conditional Output Based on an Expression with Multiple Values</h2>
        {/* Conditional output based on an expression with multiple values can
            be achieved by combining the expression with an React element using 
            a logical AND. If the expression results in false, the result will 
            be null. If the expression results in true, the result will be the 
            React element. */}
        {dayOfWeek == 0 && <div>It&apos;s Sunday</div>}
        {dayOfWeek == 1 && <div>It&apos;s Monday</div>}
        {dayOfWeek == 2 && <div>It&apos;s Tuesday</div>}
        {dayOfWeek == 3 && <div>It&apos;s Wednesday</div>}
        {dayOfWeek == 4 && <div>It&apos;s Thursday</div>}
        {dayOfWeek == 5 && <div>It&apos;s Friday</div>}
        {dayOfWeek == 6 && <div>It&apos;s Saturday</div>}

        <h2>Conditional Output Based on an Expression with Multiple Values Using a Function</h2>
        <div>It&apos;s {getWeekday()}</div>
    </Fragment>;
}
