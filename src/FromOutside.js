import {useEffect, useState} from "react";
import React from 'react';
import {doesMyComponentExist, observeContainer} from "./utils";


export const FromOutside = () => {
    const [elementExists, setElementExist] = useState(doesMyComponentExist());
    const [indicator, setIndicator] = useState(elementExists);
    useEffect(() => {
        observeContainer(() => {
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
            <div>{'my component exist: ' + indicator}</div>
        </div>
    );
};
