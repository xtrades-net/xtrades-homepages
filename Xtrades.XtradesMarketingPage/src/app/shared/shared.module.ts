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
} from './components/blog-post';
import { BlogPostComponent } from './components/blog-post/blog-post.component';
import { BottomSocialNavComponent } from './components/bottom-social-nav/bottom-social-nav.component';

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
    LoaderComponent,
    TruncatePipe,
    BottomSocialNavComponent,
  ],
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
    VideoHeroModule,
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
    LoaderComponent,
    TruncatePipe,
    BottomSocialNavComponent,
  ],
})
export class SharedModule {}
