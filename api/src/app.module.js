"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var common_1 = require("@nestjs/common");
var app_controller_1 = require("./app.controller");
var app_service_1 = require("./app.service");
var extension_module_1 = require("./extension/extension.module");
var typeorm_1 = require("@nestjs/typeorm");
var user_module_1 = require("./user/user.module");
var paper_module_1 = require("./paper/paper.module");
var folder_module_1 = require("./folder/folder.module");
var note_controller_1 = require("./note/note.controller");
var note_service_1 = require("./note/note.service");
var note_module_1 = require("./note/note.module");
var link_module_1 = require("./link/link.module");
var user_entity_1 = require("./user/entities/user.entity");
var paper_entity_1 = require("./paper/entities/paper.entity");
var link_entity_1 = require("./link/entity/link.entity");
var note_entity_1 = require("./note/entity/note.entity");
var folder_entity_1 = require("./folder/entity/folder.entity");
var AppModule = /** @class */ (function () {
    function AppModule(dataSource) {
        this.dataSource = dataSource;
    }
    AppModule = __decorate([
        (0, common_1.Module)({
            imports: [extension_module_1.ExtensionModule,
                typeorm_1.TypeOrmModule.forRoot({
                    type: 'mysql',
                    host: 'localhost',
                    port: 3306,
                    username: 'root',
                    password: 'root',
                    database: 'test',
                    entities: [user_entity_1.UserEntity, paper_entity_1.PaperEntity, link_entity_1.LinkEntity, note_entity_1.NoteEntity, folder_entity_1.FolderEntity],
                    synchronize: true,
                    autoLoadEntities: true
                }),
                user_module_1.UserModule,
                paper_module_1.PaperModule,
                folder_module_1.FolderModule,
                note_module_1.NoteModule,
                link_module_1.LinkModule,
            ],
            controllers: [app_controller_1.AppController, note_controller_1.NoteController],
            providers: [app_service_1.AppService, note_service_1.NoteService]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
