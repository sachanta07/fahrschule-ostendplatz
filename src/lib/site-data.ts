import { Bike, CarFront, Trailer, ShieldCheck, Users, GraduationCap, Route, CheckCircle2 } from 'lucide-react';

export const brand = {
	name: 'Fahrschule am Ostendplatz',
	description:
		'Persönliche Fahrausbildung in Stuttgart mit Fokus auf Vertrauen, Verständlichkeit und einer freundlichen Lernatmosphäre.',
	address: {
		street: 'Ostendstraße 52',
		postalCode: '70188 Stuttgart',
		city: 'Stuttgart',
	},
	phone: '+49 176 58881138',
	whatsapp: '+49 177 7796291',
	email: 'fahrschule.am.ostendplatz@gmail.com',
	routeUrl: 'https://www.google.com/maps/search/?api=1&query=Ostendstra%C3%9Fe+52+70188+Stuttgart',
	socials: {
		facebook: 'https://www.facebook.com/Fahrschule-am-Ostendplatz-321790862056753',
		instagram: 'https://www.instagram.com/fahrschule.am.ostendplatz',
	},
};

export const navigation = [
	{ label: 'Startseite', href: '#startseite' },
	{ label: 'Führerscheinklassen', href: '#klassen' },
	{ label: 'Über uns', href: '#ueber-uns' },
	{ label: 'Ablauf', href: '#ablauf' },
	{ label: 'Bewertungen', href: '#bewertungen' },
	{ label: 'FAQ', href: '#faq' },
	{ label: 'Kontakt', href: '#kontakt' },
] as const;

export const heroHighlights = [
	'Persönliche Betreuung',
	'Moderne Ausbildung',
	'Theorie & Praxis',
	'Stuttgart-Ost',
	'Auto & Motorrad',
] as const;

export const licenseCategories = [
	{
		name: 'Klasse B',
		group: 'Auto',
		description: 'Für Pkw und die klassische Fahrausbildung im Straßenverkehr. Preis auf Anfrage.',
		icon: CarFront,
		accent: 'auto',
	},
	{
		name: 'Klasse BE',
		group: 'Auto',
		description: 'Für Pkw mit Anhänger. Ideal, wenn du mehr Flexibilität beim Fahren brauchst.',
		icon: Trailer,
		accent: 'auto',
	},
	{
		name: 'Klasse B96',
		group: 'Auto',
		description: 'Anhänger-Erweiterung für Klasse B nach Zusatzschulung. Preis auf Anfrage.',
		icon: Trailer,
		accent: 'auto',
	},
	{
		name: 'Klasse B196',
		group: 'Motorrad',
		description: 'Motorrad-Erweiterung auf Basis von Klasse B nach der vorgeschriebenen Zusatzschulung.',
		icon: Bike,
		accent: 'moto',
	},
	{
		name: 'Klasse A',
		group: 'Motorrad',
		description: 'Für große Motorräder. Wir begleiten dich strukturiert und praxisnah durch die Ausbildung.',
		icon: Bike,
		accent: 'moto',
	},
	{
		name: 'Klasse A1',
		group: 'Motorrad',
		description: 'Der Einstieg in die Motorradwelt mit leichten Krafträdern und verständlicher Begleitung.',
		icon: Bike,
		accent: 'moto',
	},
	{
		name: 'Klasse A2',
		group: 'Motorrad',
		description: 'Für mittelstarke Motorräder mit Fokus auf sicherer Kontrolle und sauberer Technik.',
		icon: Bike,
		accent: 'moto',
	},
	{
		name: 'Klasse AM',
		group: 'Motorrad',
		description: 'Für Mopeds und leichte Zweiräder. Ein kompakter, verständlicher Start in die Mobilität.',
		icon: Bike,
		accent: 'moto',
	},
] as const;

export const benefits = [
	{
		title: 'Persönliche Betreuung',
		description: 'Du lernst mit echter Begleitung statt anonymer Massenabfertigung.',
		icon: Users,
	},
	{
		title: 'Verständlicher Unterricht',
		description: 'Theorie und Praxis werden ruhig, klar und nachvollziehbar erklärt.',
		icon: GraduationCap,
	},
	{
		title: 'Praxisnahes Fahren',
		description: 'Der Schwerpunkt liegt auf sicherem Verhalten im echten Straßenverkehr.',
		icon: Route,
	},
	{
		title: 'Stressfreie Lernatmosphäre',
		description: 'Du sollst dich sicher fühlen und dich Schritt für Schritt steigern können.',
		icon: ShieldCheck,
	},
	{
		title: 'Unterstützung bis zur Prüfung',
		description: 'Wir begleiten dich strukturiert auf dem Weg zur bestandenen Prüfung.',
		icon: CheckCircle2,
	},
	{
		title: 'Auto und Motorrad',
		description: 'Führerscheinklassen für zwei und vier Räder an einem zentralen Standort.',
		icon: Bike,
	},
] as const;

export const instructorPoints = [
	'Persönliche Begleitung statt Fließband-Unterricht',
	'Geduldige, klare Erklärungen in jeder Phase',
	'Praxisnahes Lernen mit realem Straßenverkehr',
	'Freundliche Atmosphäre für neue und nervöse Fahrschüler',
] as const;

export const processSteps = [
	{
		number: '01',
		title: 'Anmelden',
		description: 'Du meldest dich unkompliziert bei uns und wir besprechen deinen Einstieg.',
	},
	{
		number: '02',
		title: 'Theorie lernen',
		description: 'Du lernst die Grundlagen verständlich und strukturiert.',
	},
	{
		number: '03',
		title: 'Fahrstunden absolvieren',
		description: 'Gemeinsam trainieren wir Schritt für Schritt im echten Verkehr.',
	},
	{
		number: '04',
		title: 'Prüfung bestehen',
		description: 'Mit guter Vorbereitung gehst du sicher und ruhig in die Prüfung.',
	},
] as const;

export const testimonials = [
	{
		name: 'Elvis Avdic',
		rating: 5,
		quote:
			'Alles Bestens gelaufen. Ümit nimmt sich Zeit, hält sich an die Abstimmung und erklärt alles verständlich. Klare Weiterempfehlung.',
	},
	{
		name: 'Hakan Basli',
		rating: 5,
		quote:
			'Vielen lieben Dank für die tollen Fahrstunden. Ich konnte mich von Anfang an sicher und gut begleitet fühlen.',
	},
	{
		name: 'Elena Sommer',
		rating: 5,
		quote:
			'Super Fahrlehrer. Er lebt für seinen Beruf und setzt sich wirklich für seine Schüler ein. Ich habe viel gelernt und mich ernst genommen.',
	},
] as const;

export const faqItems = [
	{
		question: 'Welche Führerscheinklassen bietet ihr an?',
		answer:
			'Wir bieten die Klassen B, BE, B96, B196, A, A1, A2 und AM an. Für Details beraten wir dich gern persönlich.',
	},
	{
		question: 'Wie kann ich mich anmelden?',
		answer:
			'Am schnellsten per WhatsApp, Telefon oder über das Kontaktformular auf dieser Seite. Wir melden uns persönlich zurück.',
	},
	{
		question: 'Wann findet der Theorieunterricht statt?',
		answer:
			'Die genauen Zeiten besprechen wir direkt mit dir. Bitte kontaktiere uns für die aktuelle Planung.',
	},
	{
		question: 'Wie laufen die Fahrstunden ab?',
		answer:
			'Du lernst in ruhiger, verständlicher Begleitung und wirst Schritt für Schritt an den Straßenverkehr herangeführt.',
	},
	{
		question: 'Kann ich bei euch den Motorradführerschein machen?',
		answer:
			'Ja. Wir begleiten dich bei den Motorradklassen A, A1, A2 und B196.',
	},
	{
		question: 'Was ist B196?',
		answer:
			'B196 ist eine Motorrad-Erweiterung auf Basis der Klasse B nach der vorgeschriebenen Zusatzschulung.',
	},
	{
		question: 'Was ist B96?',
		answer:
			'B96 ist eine Erweiterung für Anhänger-Kombinationen nach Zusatzschulung.',
	},
	{
		question: 'Wie kann ich einen Termin vereinbaren?',
		answer:
			'Nutze WhatsApp, rufe uns an oder sende eine Anfrage über das Formular.',
	},
	{
		question: 'Wo befindet sich die Fahrschule?',
		answer: 'Ostendstraße 52, 70188 Stuttgart.',
	},
] as const;
