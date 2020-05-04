import {useEffect, useState} from "react";
import React from 'react';
import {doesMyComponentExist, observeProductTourOverlay} from "./init";


export const FromOutside = () => {
    const [elementExists, setElementExist] = useState(doesMyComponentExist());
    const [indicator, setIndicator] = useState(elementExists);
    useEffect(() => {
        observeProductTourOverlay(() => {
            setElementExist(doesMyComponentExist());
            // this will fire every time something inside container changes
            // (i.e. a child is added or removed)
        });
        // garbage collector should take care of mutationObserver in a way there are no memory leaks, so no need to disconnect it on compoment unmouting.
    }, []);

    useEffect(() => {
        setIndicator(elementExists);
        //do stuff when elementExistence changes
    }, [elementExists]);
    return (
        <div>
            <div>{'my component has been added: ' + indicator}</div>
        </div>
    );
};
