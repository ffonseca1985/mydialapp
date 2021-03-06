
import angular from "angular";

import loginController from "./login/controllers/signinController";
import detailBookController from  "./books/controllers/detailController";
import listBookController from  "./books/controllers/listController";
import bookMasterController from "./master/book/bookMasterController"

import bookFilter  from "./books/filters/bookFilter"

import bookService from "./books/services/bookService";

import appRouteConfig from "./configs/routeConfig"
import uiRouter from "angular-ui-router";

import ngMaterial from "angular-material";
import ngMessages  from "angular-messages";
import ngBootstrap from "angular-ui-bootstrap"

import "angular-material/angular-material.css";
import "bootstrap/dist/css/bootstrap.css"

const app = angular.module('app', [uiRouter, ngMaterial, ngMessages, ngBootstrap]);

app.controller("loginController", loginController);
app.controller("bookMasterController", bookMasterController);
app.controller("listBookController", listBookController);
app.controller("detailBookController", detailBookController);

app.service("bookService", bookService);
app.filter("bookFilter", bookFilter);

app.config(appRouteConfig);

export default app;