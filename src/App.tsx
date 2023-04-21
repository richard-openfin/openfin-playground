import {} from "@openfin/workspace";
import * as WP from "@openfin/workspace-platform";
import { useEffect } from "react";

const samplePage = {
    title: "Test",
    pageId: "testpage",
    layout: {
        content: [
            {
                type: "stack",
                content: [
                    {
                        type: "component",
                        componentName: "view",
                        componentState: {
                            url: "https://examples.com",
                        },
                    },
                ],
            },
        ],
    },
};

function App() {
    useEffect(() => {
        const init = async () => {
            await WP.init({ browser: {} });
            const platform = WP.getCurrentSync();
            platform.Browser.createWindow({
                workspacePlatform: {
                    pages: [samplePage],
                },
            });
        };
        init();
    }, []);

    return <div>Playground 2</div>;
}

export default App;
