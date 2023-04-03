import { fin } from "@openfin/core";

const wpSimulationInit = async () => {
    const platform = fin.Platform.getCurrentSync();
    platform.addListener("platform-api-ready", () => {
        console.log("workspace-platform-api-ready-simulation");
    });

    return fin.Platform.init({});
};

const launchAppWithChannelProviderAndTryToConnect = async () => {
    await fin.Application.startFromManifest(
        "http://localhost:9000/channel-provider.json"
    );

    console.warn("First connection to test-channel-provider");
    fin.InterApplicationBus.Channel.connect("test-channel-provider", {
        wait: true,
    });
};

const tryToConnectToChannelProvider = async () => {
    console.warn("Connecting to test-channel-provider...");
    await fin.InterApplicationBus.Channel.connect("test-channel-provider", {
        wait: true,
    });
    console.log("Connected.");
};

const launchAndConnectWorkspaceSimulation = async () => {
    await fin.Application.startFromManifest(
        "http://localhost:9000/workspace-simulation.json"
    );

    console.log("Connecting to workspace-simulation...");
    await fin.InterApplicationBus.Channel.connect(
        "workspace-simulation-channel-provider",
        {
            wait: true,
        }
    );
    console.log("Connected to workspace-simulation.");
};

export const init = async () => {
    fin.me.showDeveloperTools();
    console.log(111);

    await launchAppWithChannelProviderAndTryToConnect();

    await wpSimulationInit();

    fin.Platform.getCurrentSync().addListener(
        "platform-api-ready",
        async () => {
            console.log(222);
            await tryToConnectToChannelProvider();
            await launchAndConnectWorkspaceSimulation();
        }
    );
};
