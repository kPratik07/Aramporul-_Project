/**
 * Testimonial component types
 */

export interface Testimonial {
  text: string;
  name: string;
  role: string;
  image: string;
}

export interface TestimonialsProps {
  testimonials?: Testimonial[];
}

