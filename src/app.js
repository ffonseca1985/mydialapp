
import angular, {
    element,
    bootstrap
} from "angular";

//Ctrl's
import loginController from "./login/controllers/signinController";
import appRouteConfig from "./configs/routeConfig"
import uiRouter from "angular-ui-router";

const app = angular.module('app', [uiRouter]);

app.controller("loginController", loginController);
app.config(appRouteConfig);

element(document).ready(() => {
    bootstrap(document, ["app"])
})

export default app;