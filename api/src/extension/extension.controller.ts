import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ExtensionService } from './extension.service';

@Controller('')
export class ExtensionController {

    constructor(private readonly extensionService: ExtensionService) {}


    // 2 : adds the paper to the database
    @Post('bookmarklet/post_v5') 
    async addPaper(@Body() body: any) {
        console.log("Trying to add the paper");
        return this.extensionService.addPaper(body);
    }   

    // moves the bookmark to the folder
    @Post('move/{bookmark_id}/to/{folder_id}')
    async movePaper(@Body() body: any, @Param('bookmark_id') bookmark_id: string, @Param('folder_id') folder_id: string) {
        return this.extensionService.movePaper(body, bookmark_id, folder_id);
    }

    // DONE : 1 : returns the html tags of the page
    @Get('/bookmarklet/xpaths') 
    async getXpaths(@Query() query : { url : string }) {
        const result =  await this.extensionService.getXpaths(query.url);
        console.log("xpaths", result.xpaths);
        return result;

    }

    
}
