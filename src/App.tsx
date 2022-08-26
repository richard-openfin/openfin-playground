import { fin } from "@openfin/core";
import { useEffect, useState } from "react";

const windowOptions = {
    defaultHeight: 92,
    defaultWidth: 312,
    resizable: false,
    shadow: true,
    saveWindowState: false,
    frame: false,
    alwaysOnTop: true,
    showTaskbarIcon: false,
    opacity: 1,
    backgroundColor: "#2F3136",
};

function App() {
    const [windows, setWindows] = useState<OpenFin.Window[]>([]);

    const create = async () => {
        const {
            primaryMonitor: {
                monitorRect: { bottom, right },
            },
        } = await fin.System.getMonitorInfo();

        const win = await fin.Window.create({
            ...windowOptions,
            name: `toast:${Date.now()}`,
            defaultTop: bottom + windowOptions.defaultHeight,
            defaultLeft: right + windowOptions.defaultWidth,
        });

        await win.animate(
            {
                position: {
                    left: Math.floor(Math.random() * right),
                    top: Math.floor(Math.random() * bottom),
                    duration: 100,
                },
            },
            {
                interrupt: true,
                tween: "linear",
            }
        );

        setWindows((currWindows) => [...currWindows, win]);
    };

    const closeAll = async () => {
        await Promise.all(windows.map((w) => w.close()));
        setWindows([]);
    };

    useEffect(() => {
        return () => {
            closeAll();
        };
    }, []);

    return (
        <div>
            Playground<button onClick={create}>Create Window</button>
            <button onClick={closeAll}>Close All</button>
        </div>
    );
}

export default App;
