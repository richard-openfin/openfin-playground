import { useEffect } from "react";
import { init, getCurrentSync } from "@openfin/workspace-platform";
import { Dock } from "@openfin/workspace";

function App() {
    useEffect(() => {
        init({});

        getCurrentSync().on("platform-api-ready", () => {
            Dock.register({
                id: "test-dock",
                title: "Test Dock",
                icon: "https://openfin.co/favicon.ico",
            })
                .then(() => {
                    console.log("Dock.register promise resolved");
                })
                .catch(() => {
                    console.log("Dock.register promise rejected");
                });
        });
    }, []);

    return <div>Playground</div>;
}

export default App;
