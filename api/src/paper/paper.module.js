"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PaperModule = void 0;
var common_1 = require("@nestjs/common");
var paper_service_1 = require("./paper.service");
var paper_controller_1 = require("./paper.controller");
var typeorm_1 = require("@nestjs/typeorm");
var paper_entity_1 = require("./entities/paper.entity");
var PaperModule = /** @class */ (function () {
    function PaperModule() {
    }
    PaperModule = __decorate([
        (0, common_1.Module)({
            imports: [typeorm_1.TypeOrmModule.forFeature([paper_entity_1.PaperEntity])],
            providers: [paper_service_1.PaperService],
            controllers: [paper_controller_1.PaperController]
        })
    ], PaperModule);
    return PaperModule;
}());
exports.PaperModule = PaperModule;
