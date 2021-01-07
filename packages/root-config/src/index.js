import { registerApplication, start } from "single-spa";

registerApplication({
    name: "@cnamts/app-shared-module",
    app: () => System.import("app-shared-module"),
    activeWhen: "/",
});

start();
