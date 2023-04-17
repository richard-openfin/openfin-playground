import { fin } from "@openfin/core";
import { useEffect } from "react";

function App() {
    useEffect(() => {
        fin.me.showDeveloperTools();
        const platform = fin.Platform.getCurrentSync();
        platform.once("platform-api-ready", async () => {
            await platform.createWindow({
                // url: "http://localhost:3002/home/",
                name: "openfin-home",
                defaultWidth: 648,
                defaultHeight: 210,
                minWidth: 500,
                minHeight: 50,
                showTaskbarIcon: false,
                saveWindowState: false,
                frame: false,
                autoShow: false,
                alwaysOnTop: true,
                defaultCentered: true,
                maximizable: false,
                resizable: false,
                minimizable: false,
                backgroundThrottling: true,
                workspacePlatform: {
                    _internalDeferShowOptions: {
                        setAsForeground: true,
                        deferShowEnabled: true,
                        autoShow: false,
                    },
                },
            } as any);
            console.log("window created");
        });
        fin.Platform.init({});
    }, []);
    return <div>Playground</div>;
}

export default App;
