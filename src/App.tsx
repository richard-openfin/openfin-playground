import { provider } from "openfin-notifications";
import { useEffect } from "react";

function App() {
    useEffect(() => {
        provider.getStatus().then(console.log);
    }, []);
    return <div>Playground</div>;
}

export default App;
