
import angular,
{
    element,
    bootstrap
} from "angular";

import loginController from "./login/controllers/loginController";

const app = angular.module('app', ['ngRoute']);

app.controller("loginController", loginController);

element(document).ready(() => {
    bootstrap(document, ["app"])
})

export default app;