import { Injectable } from '@nestjs/common';
import axios, { AxiosError } from 'axios';
import { JSDOM } from 'jsdom';

@Injectable()
export class ExtensionService {

    constructor() {}
    async fetchFromWeb(url: string) {
        const HTMLData = axios
            .get(url)
            .then(res => res.data)
            .catch((error: AxiosError) => {
            console.error(`There was an error with ${error.config.url}.`);
            console.error(error.toJSON());
            });
            
            const data = await HTMLData;
            const dom = new JSDOM(await data);
            const document = dom.window.document
            //console.log(document)
            const content = document.querySelector('body').textContent ; 
            return {
                "url" : url,
                "content" : content
            } ;
    }


    async getXpaths(url: string){
        const data = await this.fetchFromWeb(url);
        const dom = new JSDOM(data.content);
        const document = dom.window.document;
        const xpaths = Array.from(document.querySelectorAll('*')).map((el: { tagName: any; }) => el.tagName);
        return {"xpaths" : xpaths};
    }


    async addPaper(body: any){
        // adds the paper to the database
        return true;
    }

    async movePaper(body: any, bookmark_id: string, folder_id: string){
        // moves the bookmark to the folder
        return true;
    }
    
}
