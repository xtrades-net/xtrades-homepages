import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  constructor(
    private titleSvc: Title,
    private metaSvc: Meta,
    @Inject(DOCUMENT) private dom: Document
  ) {}

  updateTitle(title: string) {
    this.titleSvc.setTitle(title);
  }

  updateDescription(content: string) {
    const existingDescriptionTag = this.metaSvc.getTag('name="description"');
    if (existingDescriptionTag) {
      this.metaSvc.updateTag({ name: 'description', content });
    } else {
      this.metaSvc.addTag({ name: 'description', content });
    }
  }

  updateMetaTitle(content: string) {
    this.metaSvc.updateTag({ name: 'title', content });
  }

  createCanonicalLink(url: string) {
    let headLinks = this.dom.querySelectorAll('link');
    headLinks.forEach((link) => {
      if (link.rel === 'canonical') {
      }
      link.rel === 'canonical' ? link.remove() : '';
    });
    let link: HTMLLinkElement = this.dom.createElement('link');
    link.setAttribute('rel', 'canonical');
    link.setAttribute('href', 'https://www.xtrades.net' + url);
    this.dom.head.appendChild(link);
  }
}
