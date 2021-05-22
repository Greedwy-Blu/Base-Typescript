"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var router_1 = __importDefault(require("./router"));
var app = express_1.default();
//function getUsername(){
//  return 'Gabriel@';
//}
//const username = getUsername();
app.use(cors_1.default());
app.use(router_1.default);
app.get('/', function (req, res) {
    return res.send('Hello World 2');
});
app.listen(3333);
