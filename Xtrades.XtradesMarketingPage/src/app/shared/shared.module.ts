import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HeroModule } from './components/hero/hero.module';
import { CardModule } from './components/card/card.module';
import { HeaderModule } from './components/header/header.module';
import { SeparatorModule } from './components/separator/separator.module';
import { XButtonModule } from './components/x-button/x-button.module';
import { IconCardModule } from './components/icon-card/icon-card.module';
import { SliderModule } from './components/slider/slider.module';
import { LabelComponent } from './components/label/label.component';
import { TextSliderModule } from './components/text-slider/text-slider.module';
import { FooterComponent } from './components/footer-new/footer.component';
import { NewsComponent } from './components/news/news.component';
import { MailingListComponent } from './components/mailing-list/mailing-list.component';
import { FormsModule } from '@angular/forms';
import { BlogCardComponent } from './components/blog-card/blog-card.component';
import { LoaderComponent } from './components/loader/loader.component';
import { VideoHeroModule } from './components/video-hero/video-hero.module';
import { TruncatePipe } from './components/blog-card/truncate.pipe';
import {
  BlogPost10Component,
  BlogPost11Component,
  BlogPost1Component,
  BlogPost2Component,
  BlogPost3Component,
  BlogPost4Component,
  BlogPost5Component,
  BlogPost6Component,
  BlogPost7Component,
  BlogPost8Component,
  BlogPost9Component,
  BlogPost12Component,
  BlogPost13Component,
  BlogPost14Component,
  BlogPost15Component,
  BlogPost16Component,
  BlogPost17Component,
  BlogPost18Component,
  BlogPost19Component,
  BlogPost20Component,
  BlogPost21Component,
  BlogPost22Component,
  BlogPost23Component,
  BlogPost24Component,
  BlogPost25Component,
  BlogPost26Component,
  BlogPost27Component,
  BlogPost28Component,
  BlogPost29Component,
  BlogPost30Component,
  BlogPost31Component,
} from './components/blog-post';
import { BlogPostComponent } from './components/blog-post/blog-post.component';
import { BottomSocialNavComponent } from './components/bottom-social-nav/bottom-social-nav.component';
import { MobileAppLinkComponent } from './components/mobile-app-link/mobile-app-link.component';
import { PopoverModule } from './components/popover/popover.module';
import { AccordionModule } from './components/accordion/accordion.module';
import { DirectivesModule } from './directives/directives.module';
import { MailingListNewComponent } from './components/mailing-list-new/mailing-list-new.component';
import { FaqsComponent } from './components/faqs/faqs/faqs.component';
import { TableOfContentComponent } from './components/blog-post/table-of-content/table-of-content.component';
import { DisclaimerComponent } from './components/disclaimer/disclaimer.component';

@NgModule({
  declarations: [
    LabelComponent,
    NewsComponent,
    MailingListComponent,
    BlogCardComponent,
    BlogPostComponent,
    BlogPost1Component,
    BlogPost2Component,
    BlogPost3Component,
    BlogPost4Component,
    BlogPost5Component,
    BlogPost6Component,
    BlogPost7Component,
    BlogPost8Component,
    BlogPost9Component,
    BlogPost10Component,
    BlogPost11Component,
    BlogPost12Component,
    BlogPost13Component,
    BlogPost14Component,
    BlogPost15Component,
    BlogPost16Component,
    BlogPost17Component,
    BlogPost18Component,
    BlogPost19Component,
    BlogPost20Component,
    BlogPost21Component,
    BlogPost22Component,
    BlogPost23Component,
    BlogPost24Component,
    BlogPost25Component,
    BlogPost26Component,
    BlogPost27Component,
    BlogPost28Component,
    BlogPost29Component,
    BlogPost30Component,
    BlogPost31Component,
    LoaderComponent,
    TruncatePipe,
    BottomSocialNavComponent,
    MobileAppLinkComponent,
    MailingListNewComponent,
    FaqsComponent,
    FooterComponent,
    TableOfContentComponent,
    DisclaimerComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CardModule,
    HeaderModule,
    HeroModule,
    SeparatorModule,
    XButtonModule,
    IconCardModule,
    SliderModule,
    TextSliderModule,
    VideoHeroModule,
    PopoverModule,
    AccordionModule,
    DirectivesModule,
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
    FooterComponent,
    NewsComponent,
    MailingListComponent,
    BlogCardComponent,
    BlogPostComponent,
    LoaderComponent,
    TruncatePipe,
    BottomSocialNavComponent,
    MobileAppLinkComponent,
    MailingListNewComponent,
    FaqsComponent,
    DisclaimerComponent,
  ],
})
export class SharedModule {}
