"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.FolderEntity = void 0;
var paper_entity_1 = require("../../../../../../../../../../src/paper/entities/paper.entity");
var typeorm_1 = require("typeorm");
var FolderEntity = /** @class */ (function () {
    function FolderEntity() {
    }
    __decorate([
        (0, typeorm_1.PrimaryColumn)({ type: 'varchar', length: 30, nullable: false })
    ], FolderEntity.prototype, "foder_name");
    __decorate([
        (0, typeorm_1.Column)({ type: 'text' })
    ], FolderEntity.prototype, "description");
    __decorate([
        (0, typeorm_1.CreateDateColumn)({ type: 'timestamp', name: 'created_at' })
    ], FolderEntity.prototype, "created_at");
    __decorate([
        (0, typeorm_1.PrimaryColumn)(),
        (0, typeorm_1.OneToMany)(function () { return paper_entity_1.PaperEntity; }, function (paper) { return paper.url; })
    ], FolderEntity.prototype, "papers");
    FolderEntity = __decorate([
        (0, typeorm_1.Entity)('folder')
    ], FolderEntity);
    return FolderEntity;
}());
exports.FolderEntity = FolderEntity;
