import { useEffect } from "react";
import { fin } from "@openfin/core";

function App() {
    useEffect(() => {
        const init = async () => {
            const win = await fin.Window.create({
                name: "test",
                hotkeys: [{ keys: "Ctrl+M" }],
            });

            win.addListener("hotkey", (event) => {
                console.log(111, event);
            });
        };

        init();
    }, []);
    return <div>Playground</div>;
}

export default App;
