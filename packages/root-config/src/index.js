import { registerApplication, start } from "single-spa";

registerApplication({
    name: "@cnamts/app-shared-module",
    app: () => System.import("app-shared-module"),
    activeWhen: "/",
});

registerApplication({
    name: "@cnamts/app-login",
    app: () => System.import("app-login"),
    activeWhen: "/vue3",
});



start();