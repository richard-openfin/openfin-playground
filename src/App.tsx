import { useEffect } from "react";
import { init } from "./container-repro";

function App() {
    useEffect(() => {
        init();
    }, []);
    return <div>Playground</div>;
}

export default App;
