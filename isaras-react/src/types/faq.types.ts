/**
 * FAQ component types
 */

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQProps {
  faqs?: FAQItem[];
}

