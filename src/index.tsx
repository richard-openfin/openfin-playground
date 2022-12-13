import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as WP from "@openfin/workspace-platform";
import * as Home from "@openfin/workspace/home";

const req: any = {
    workspacePlatform: {
        pages: [
            {
                pageId: "ddfb783b-52cb-47eb-b25e-5205b28be97f",
                title: "Test Page",
                tooltip: "Simple Tooltip",
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
            },
        ],
    },
};

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);

document.addEventListener("DOMContentLoaded", async () => {
    await WP.init({ browser: {} });
    await Home.register({
        title: "test",
        id: "TEST",
        icon: "https://google.com",
        async onUserInput() {
            return { results: [] };
        },
    });
    await WP.getCurrentSync().Browser.createWindow(req);
});
