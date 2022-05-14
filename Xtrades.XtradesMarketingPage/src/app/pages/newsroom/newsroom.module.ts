import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NewsroomComponent } from './newsroom/newsroom.component';
import { SharedModule } from '@shared/shared.module';
import { BlogPostComponent } from '@shared/components/blog-post/blog-post.component';

@NgModule({
  declarations: [NewsroomComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: NewsroomComponent,
      },
      { path: ':id', component: BlogPostComponent },
    ]),
  ],
})
export class NewsroomModule {}