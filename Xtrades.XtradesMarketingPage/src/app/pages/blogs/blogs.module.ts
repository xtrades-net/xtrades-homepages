import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BlogsComponent } from './blogs/blogs.component';
import { SharedModule } from '@shared/shared.module';
import { BlogPostComponent } from '@shared/components/blog-post/blog-post.component';
import { ModalModule } from '@shared/components/modal/modal.module';
import { FooterModule } from '@shared/components/footer/footer.module';

@NgModule({
  declarations: [BlogsComponent],
  imports: [
    CommonModule,
    SharedModule,
    FooterModule,
    RouterModule.forChild([
      {
        path: '',
        component: BlogsComponent,
      },
      { path: ':url', component: BlogPostComponent },
    ]),
    ModalModule,
  ],
})
export class BlogsModule {}
