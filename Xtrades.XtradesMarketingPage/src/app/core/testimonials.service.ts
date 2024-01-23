import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {TestimonialModel} from "../models/testimonial.model";

@Injectable({
  providedIn: 'root',
})
export class TestimonialsService {
  public testimonials: TestimonialModel[] = [];

  constructor(
    private http: HttpClient,
  ) {}

  public getTestimonials(): Observable<TestimonialModel[]> {
    if (this.testimonials.length > 0) {
      return new Observable((observer: any) => {
        observer.next(this.testimonials);
        observer.complete();
      });
    } else {
      return this.http
        .get<any>('https://app.xtrades.net/api/v2/Testimonials/testimonials')
        .pipe(map((res: any) => {
          if (res.data) {
            this.testimonials = res.data;
            return this.testimonials;
          } else {
            throw new Error('Unexpected response format');
          }
        }));
    }
  }
}
