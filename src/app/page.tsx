import type { Metadata } from 'next';
import SitePage from '@/components/site-page';

export const metadata: Metadata = {
	title: 'Fahrschule am Ostendplatz | Stuttgart-Ost',
	description:
		'Premium Fahrschule in Stuttgart-Ost für Autoführerschein, Motorradführerschein, B196 und B96. Persönliche Ausbildung am Ostendplatz.',
	alternates: {
		canonical: 'https://fahrschule-am-ostendplatz.de/',
	},
	openGraph: {
		type: 'website',
		title: 'Fahrschule am Ostendplatz | Stuttgart-Ost',
		description:
			'Persönliche Fahrausbildung in Stuttgart für Auto und Motorrad mit moderner, vertrauensvoller Begleitung.',
		url: 'https://fahrschule-am-ostendplatz.de/',
		siteName: 'Fahrschule am Ostendplatz',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Fahrschule am Ostendplatz | Stuttgart-Ost',
		description:
			'Persönliche Fahrausbildung in Stuttgart für Auto und Motorrad mit moderner, vertrauensvoller Begleitung.',
	},
};

export default function Home() {
	return <SitePage />;
}
