"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.NoteEntity = void 0;
var paper_entity_1 = require("../../../../../../../../../../src/paper/entities/paper.entity");
var typeorm_1 = require("typeorm");
var NoteEntity = /** @class */ (function () {
    function NoteEntity() {
    }
    __decorate([
        (0, typeorm_1.PrimaryColumn)({ type: 'text' })
    ], NoteEntity.prototype, "highlighted_text");
    __decorate([
        (0, typeorm_1.Column)({ type: 'text' })
    ], NoteEntity.prototype, "note");
    __decorate([
        (0, typeorm_1.PrimaryColumn)(),
        (0, typeorm_1.ManyToOne)(function () { return paper_entity_1.PaperEntity; }, function (paper) { return paper.notes; })
    ], NoteEntity.prototype, "paper");
    NoteEntity = __decorate([
        (0, typeorm_1.Entity)('note')
    ], NoteEntity);
    return NoteEntity;
}());
exports.NoteEntity = NoteEntity;
