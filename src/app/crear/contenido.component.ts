import { Component } from '@angular/core';


@Component({
	selector: 'app-contenido'
})
export class Item{

    item: string;

    constructor(item){
        this.item = item;
    }
}