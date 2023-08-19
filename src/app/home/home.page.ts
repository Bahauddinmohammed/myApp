import { Component, ElementRef, ViewChild } from '@angular/core';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() { }

  openLinkNewTab() {
    const url = 'https://chat.openai.com/';
    window.open(url,'ChatGPT')
  }

}

