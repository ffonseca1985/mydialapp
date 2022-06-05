
import angular from "angular";

import loginController from "./login/controllers/signinController";
import detailBookController from  "./books/controllers/detailController";
import listBookController from  "./books/controllers/listController";
import bookMasterController from "./master/book/bookMasterController"

import bookService from "./books/services/bookService";

import appRouteConfig from "./configs/routeConfig"
import uiRouter from "angular-ui-router";

import ngMaterial from "angular-material";
import "angular-material/angular-material.css";

const app = angular.module('app', [uiRouter, ngMaterial]);

app.controller("loginController", loginController);
app.controller("bookMasterController", bookMasterController);
app.controller("listBookController", listBookController);
app.controller("detailBookController", detailBookController);

app.service("bookService", bookService);

app.config(appRouteConfig);

export default app;