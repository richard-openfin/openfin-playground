import { Dock } from "@openfin/workspace";
import * as WP from "@openfin/workspace-platform";
import { fin } from "@openfin/core";

const delay = (fn: Function, ms: number) =>
    new Promise((resolve) => setTimeout(() => resolve(fn()), ms));

const retry = async (fn: Function, maxAttempts: number) => {
    const execute = async (attempt: number) => {
        try {
            return await fn();
        } catch (err) {
            console.log("erroring...");

            if (attempt <= maxAttempts) {
                const nextAttempt = attempt++;
                const delayMs = 2 ** attempt * 100;
                console.error(`Retrying after ${delayMs}ms due to:`, err);
                return delay(() => execute(nextAttempt), delayMs * 1000);
            } else {
                throw err;
            }
        }
    };
    return execute(1);
};

const connectNotificationService = async (): Promise<void> => {
    console.log("Notification Service: connecting...");

    const client = await fin.InterApplicationBus.Channel.connect(
        "of-notifications-service-v1",
        {
            payload: { version: "1.20.0" },
        }
    );

    console.log(
        "Notication Service: connected. channelId:",
        client.providerIdentity?.channelId
    );
};

export const init = async () => {
    fin.me.showDeveloperTools();
    console.log(111);
    await import("@openfin/workspace/notifications");
    // fin.Application.startFromManifest(
    //     "https://cdn.openfin.co/release/apps/openfin/processmanager/2.0.3/app.json"
    // );
    await WP.init({});

    WP.getCurrentSync().addListener("platform-api-ready", async () => {
        console.log(222);
        await retry(connectNotificationService, 5);
        await Dock.register({
            title: "test",
            id: "test-dock",
            icon: "https://openfin.co/favicon.ico",
        });
        await Dock.show();
    });
};
