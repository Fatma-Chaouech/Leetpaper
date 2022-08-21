"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PaperEntity = void 0;
var folder_entity_1 = require("../../../../../../../../../../src/folder/entity/folder.entity");
var link_entity_1 = require("../../../../../../../../../../src/link/entity/link.entity");
var note_entity_1 = require("../../../../../../../../../../src/note/entity/note.entity");
var user_entity_1 = require("../../../../../../../../../../src/user/entities/user.entity");
var typeorm_1 = require("typeorm");
var PaperEntity = /** @class */ (function () {
    function PaperEntity() {
    }
    __decorate([
        (0, typeorm_1.PrimaryColumn)({ type: 'text' })
    ], PaperEntity.prototype, "url");
    __decorate([
        (0, typeorm_1.Column)({ type: 'text' })
    ], PaperEntity.prototype, "content");
    __decorate([
        (0, typeorm_1.Column)({ type: 'boolean', "default": false })
    ], PaperEntity.prototype, "liked");
    __decorate([
        (0, typeorm_1.PrimaryColumn)(),
        (0, typeorm_1.ManyToOne)(function () { return user_entity_1.UserEntity; }, function (user) { return user.email; }),
        (0, typeorm_1.JoinColumn)({ name: 'user' })
    ], PaperEntity.prototype, "user");
    __decorate([
        (0, typeorm_1.ManyToMany)(function () { return link_entity_1.LinkEntity; }, function (link) { return link.url; }),
        (0, typeorm_1.JoinTable)()
    ], PaperEntity.prototype, "links");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return note_entity_1.NoteEntity; }, function (note) { return note.highlighted_text; })
    ], PaperEntity.prototype, "notes");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return folder_entity_1.FolderEntity; }, function (folder) { return folder.foder_name; })
    ], PaperEntity.prototype, "folder");
    PaperEntity = __decorate([
        (0, typeorm_1.Entity)('paper')
    ], PaperEntity);
    return PaperEntity;
}());
exports.PaperEntity = PaperEntity;
