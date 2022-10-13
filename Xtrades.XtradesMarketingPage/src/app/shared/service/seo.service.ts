
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(
    private titleSvc: Title,
    private metaSvc: Meta,
    @Inject(DOCUMENT) private dom: Document
  ) { }


  updateTitle(title: string){
    this.titleSvc.setTitle(title)
  }

  updateDescription(content: string) {
    this.metaSvc.updateTag({ name: 'description', content })
  }

  createCanonicalLink(url: string) {
    let link: HTMLLinkElement =this.dom.createElement('link');
    link.setAttribute('rel', 'canonical');
    link.setAttribute('href', url);
    this.dom.head.appendChild(link);
  }

}
