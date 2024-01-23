import { Injectable } from '@angular/core';

export interface TestimonialModel {
  username: string;
  attachments: any[];
  avatar: string;
  content:string;
  dateTime: Date;
}
@Injectable({
  providedIn: 'root',
})
export class TestimonialsService {
  public testimonials: TestimonialModel[] = [];
}
