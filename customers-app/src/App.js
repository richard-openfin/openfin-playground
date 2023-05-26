import LocalButton from "./Button";
import React from "react";

const OpenFinMobile = React.lazy(() => import("openfin_mobile/OpenFinMobile"));

const App = () => (
    <div>
        <h1>Customer's App</h1>
        <LocalButton />
        <React.Suspense fallback="Loading Button">
            <OpenFinMobile />
        </React.Suspense>
    </div>
);

export default App;
