/**
 * PARCEL DO ->>
 * HMR -> HOT MODULE REPLACEMENT (take care by parcel)
 * 
 * File watcher algorithims (parcel is doing for us) -> written in c++
 * BUNDLING
 * MINIFY
 * Cleaning our code(removing console)
 * Dev and production buil
 * Parcel does image optimization
 * Cahing while development
 * it does compression
 * compatiable with older version of brwoser
 * HTTPS on Dev machine
 * take care of port number
 * Consistent Hasing algorithim
 * zero config bundler
 * super fast build algorithim
 */

import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = React.createElement("h1",{
    id:"title1" // all the tag atttribute and value comes here
},"Heading 1");

const heading2 = React.createElement("h2",{
    id:"title2"
},"Heading 2");

const container = React.createElement("div",{
    id:"container"
},[heading1,heading2])

// generally we have only one root
const root = ReactDOM.createRoot(document.getElementById('root'));

// Passing react element(react element is object) inside the root
// render method takes react element(object) and modify the DOM
// render method override the everything, whatever exist within the root present.
root.render(container);
