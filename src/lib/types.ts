export interface ImageWithAlt {
	src: string;
	alt: string;
	link?: string | undefined;
}

export type InfoBoxTextColorOptions = 'white' | 'black';

export interface FAQItem {
	question: string;
	answer: string;
}
