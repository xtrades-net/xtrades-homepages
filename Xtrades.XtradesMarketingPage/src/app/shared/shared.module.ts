import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroModule } from './components/hero/hero.module';
import { CardModule } from './components/card/card.module';
import { HeaderModule } from './components/header/header.module';
import { SeparatorModule } from './components/separator/separator.module';
import { XButtonModule } from './components/x-button/x-button.module';
import { IconCardModule } from './components/icon-card/icon-card.module';
import { SliderModule } from './components/slider/slider.module';
import { LabelComponent } from './components/label/label.component';
import { TextSliderModule } from './components/text-slider/text-slider.module';
import { FooterModule } from './components/footer/footer.module';
import { NewsComponent } from './components/news/news.component';
import { MailingListComponent } from './components/mailing-list/mailing-list.component';
import { FormsModule } from '@angular/forms';
import { BlogCardComponent } from './components/blog-card/blog-card.component';
import { BlogPostComponent } from './components/blog-post/blog-post.component';

@NgModule({
  declarations: [LabelComponent, NewsComponent, MailingListComponent, BlogCardComponent, BlogPostComponent],
  imports: [
    CommonModule,
    FormsModule,
    CardModule,
    HeaderModule,
    HeroModule,
    SeparatorModule,
    XButtonModule,
    IconCardModule,
    SliderModule,
    TextSliderModule,
    FooterModule,
  ],
  exports: [
    CommonModule,
    CardModule,
    HeaderModule,
    HeroModule,
    SeparatorModule,
    XButtonModule,
    IconCardModule,
    SliderModule,
    LabelComponent,
    TextSliderModule,
    FooterModule,
    NewsComponent,
    MailingListComponent,
    BlogCardComponent,
    BlogPostComponent,
  ],
})
export class SharedModule { }
