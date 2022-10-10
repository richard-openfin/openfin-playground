import * as notifications from "openfin-notifications";
import * as workspacePlatform from "@openfin/workspace-platform";
import * as workspace from "@openfin/workspace";
import { useState } from "react";

const getStatus = (status: boolean | null) => {
    if (status === null) {
        return "";
    }
    return status ? "success" : "error";
};

const getStatusColor = (status: boolean | null) => (status ? "green" : "red");

function App() {
    const [nfnsResponse, setNfnsResponse] = useState<boolean | null>(null);
    const [wpResponse, setWpResponse] = useState<boolean | null>(null);
    const [wsResponse, setWsResponse] = useState<boolean | null>(null);

    const nfns = async () => {
        try {
            await notifications.provider.getStatus();
            setNfnsResponse(true);
        } catch (err) {
            console.error(err);
            setNfnsResponse(false);
        }
    };

    const wp = async () => {
        try {
            await workspacePlatform.init({});
            setWpResponse(true);
        } catch (err) {
            console.error(err);
            setWpResponse(false);
        }
    };

    const ws = async () => {
        try {
            await workspace.Home.register({
                id: "test-home",
                title: "Test Home",
                icon: "https://google.com/favicon.ico",
                onUserInput: async () => ({ results: [] }),
            });
            setWsResponse(true);
        } catch (err) {
            console.error(err);
            setWsResponse(false);
        }
    };

    return (
        <div>
            <button onClick={nfns}>Notifications.getStatus()</button>
            <button onClick={wp}>WorkspacePlatform.init()</button>
            {wpResponse && (
                <button onClick={ws}>Workspace.Home.register()</button>
            )}
            <p>
                Notifications.getStatus() response:{" "}
                <span style={{ color: getStatusColor(nfnsResponse) }}>
                    {getStatus(nfnsResponse)}
                </span>
            </p>
            <p>
                WorkspacePlatform.init() response:{" "}
                <span style={{ color: getStatusColor(wpResponse) }}>
                    {getStatus(wpResponse)}
                </span>
            </p>
            <p>
                Workspace.Home.register() response:{" "}
                <span style={{ color: getStatusColor(wsResponse) }}>
                    {getStatus(wsResponse)}
                </span>
            </p>
        </div>
    );
}

export default App;
