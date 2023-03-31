import { useEffect } from "react";
import { init } from "./marketaxess-repro";

function App() {
    useEffect(() => {
        init();
    }, []);
    return <div>Playground</div>;
}

export default App;
