import { useEffect } from "react";
import {
    init,
    OpenViewTabContextMenuPayload,
    WorkspacePlatformOverrideCallback,
    getCurrentSync,
    BrowserCreateWindowRequest,
    PageLayout,
} from "@openfin/workspace-platform";

const overrideCallback: WorkspacePlatformOverrideCallback = (Provider) => {
    class Override extends Provider {
        openViewTabContextMenu(
            req: OpenViewTabContextMenuPayload,
            callerIdentity: OpenFin.Identity
        ): Promise<void> {
            const newPayload: OpenViewTabContextMenuPayload = {
                ...req,
                template: req.template.filter(
                    (item) =>
                        item.label !== "Back" &&
                        item.label !== "Forward" &&
                        item.label !== "Print View"
                ),
            };
            return super.openViewTabContextMenu(newPayload, callerIdentity);
        }
    }
    return new Override();
};

function App() {
    useEffect(() => {
        init({
            browser: {},
            overrideCallback,
        });
    }, []);

    const createWindow = async () => {
        const layout: PageLayout = {
            content: [
                {
                    type: "stack",
                    content: [
                        {
                            type: "component",
                            componentName: "view",
                            componentState: {
                                name: "myViewName",
                                url: "http://google.com",
                            },
                        },
                    ],
                },
            ],
        };
        const page = {
            title: "myPageTitle",
            pageId: "myPageId",
            layout,
        };
        const options: BrowserCreateWindowRequest = {
            workspacePlatform: {
                pages: [page],
                title: "My Window Title",
                favicon: "https://google.com/favicon.ico",
                disableMultiplePages: true, // disable page functonality for the window
            },
        };
        await getCurrentSync().Browser.createWindow(options);
    };
    return (
        <div>
            <button onClick={createWindow}>create window</button>
        </div>
    );
}

export default App;
