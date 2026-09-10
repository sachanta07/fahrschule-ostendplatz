'use client';

import { useState } from 'react';
import { Menu, X, MapPin, Phone, Clock, ArrowRight, Check, Star } from 'lucide-react';

const services = [
	{
		title: 'PKW Führerschein',
		subtitle: 'Für Anfänger & Wiedereinsteiger',
		description:
			'Gezielte Fahrstunden, ruhiges Lernen und klare Fortschritte — damit du Vertrauen im Straßenverkehr aufbaust.',
		bullets: ['Persönlicher Lernplan', 'Flexible Stunden', 'Modernes Auto'],
	},
	{
		title: 'Motorrad / Zweirad',
		subtitle: 'A1 · A2 · A',
		description:
			'Sicheres Motorradfahren beginnt mit Technik, Ruhe und richtigem Feedback. Wir bauen dir die Sicherheit Schritt für Schritt auf.',
		bullets: ['Sicherheitsorientiert', 'Praxisnah', 'Fahrtechnik im Fokus'],
	},
	{
		title: 'B196 Zusatz',
		subtitle: 'Schnell & unkompliziert',
		description:
			'Wenn du bereits Klasse B hast und schnell und unkompliziert Motorrad fahren möchtest, ist dieser Zusatz die ideale Lösung.',
		bullets: ['Schneller Einstieg', 'Praktisch', 'Klar erklärt'],
	},
];

const steps = [
	'Kostenlose Erstberatung',
	'Persönlicher Fahrplan',
	'Praktische Fahrstunden',
	'Bescheidene, sichere Fahrweise',
];

const testimonials = [
	{
		name: 'Elvis Avdic',
		quote:
			'Alles Bestens gelaufen. Ümit nimmt sich Zeit, hält sich an die Abstimmung und erklärt alles verständlich. Klare Weiterempfehlung.',
	},
	{
		name: 'Hakan Basli',
		quote:
			'Vielen lieben Dank für die tollen Fahrstunden. Ich konnte mich von Anfang an sicher und gut begleitet fühlen.',
	},
	{
		name: 'Elena Sommer',
		quote:
			'Super Fahrlehrer. Er lebt für seinen Beruf und setzt sich wirklich für seine Schüler ein. Ich habe viel gelernt und mich ernst genommen.',
	},
];

export default function Home() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<>
			<nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-sm">
				<div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
					<div>
						<p className="text-[11px] uppercase tracking-[0.25em] text-slate-500">
							Fahrschule
						</p>
						<h1 className="text-lg font-semibold tracking-tight text-slate-900">
							am Ostendplatz
						</h1>
					</div>

					<div className="hidden items-center gap-8 md:flex">
						<a
							href="#ueber"
							className="text-sm text-slate-700 transition hover:text-slate-950"
						>
							Über uns
						</a>
						<a
							href="#angebote"
							className="text-sm text-slate-700 transition hover:text-slate-950"
						>
							Angebote
						</a>
						<a
							href="#erfolg"
							className="text-sm text-slate-700 transition hover:text-slate-950"
						>
							Erfolge
						</a>
						<a
							href="#kontakt"
							className="text-sm text-slate-700 transition hover:text-slate-950"
						>
							Kontakt
						</a>
					</div>

					<div className="hidden md:flex">
						<a
							href="https://wa.me/491777796291/?text=Hi%20%C3%9Cmit,%20ich%20h%C3%A4tte%20gerne%20Informationen%20zu%20..."
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-2 bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-slate-700"
						>
							Jetzt starten
						</a>
					</div>

					<button
						className="rounded border border-slate-200 p-2 text-slate-900 md:hidden"
						onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
						aria-label="Toggle menu"
					>
						{mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
					</button>
				</div>

				{mobileMenuOpen && (
					<div className="border-t border-slate-200 bg-white md:hidden">
						<div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-4 text-sm text-slate-700">
							<a href="#ueber">Über uns</a>
							<a href="#angebote">Angebote</a>
							<a href="#erfolg">Erfolge</a>
							<a href="#kontakt">Kontakt</a>
							<a
								href="https://wa.me/491777796291/?text=Hi%20%C3%9Cmit,%20ich%20h%C3%A4tte%20gerne%20Informationen%20zu%20..."
								target="_blank"
								rel="noopener noreferrer"
								className="mt-2 inline-flex items-center justify-center bg-slate-900 px-4 py-3 text-white"
							>
								Jetzt starten
							</a>
						</div>
					</div>
				)}
			</nav>

			<main>
				<section
					id="ueber"
					className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,#f3f4f6_0%,#ffffff_42%,#fbfbfb_100%)] px-5 py-16 sm:px-6 lg:px-8 lg:py-24"
				>
					<div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_1.2fr]">
						<div>
							<p className="mb-5 text-xs font-medium uppercase tracking-[0.28em] text-slate-500">
								Willkommen
							</p>
							<h2 className="max-w-xl text-4xl font-light leading-tight tracking-[-0.05em] text-slate-900 sm:text-5xl lg:text-6xl">
								Sicherheit, Ruhe und echte Praxis — genau so lernt man fahren.
							</h2>
							<p className="mt-6 max-w-lg text-lg leading-8 text-slate-700">
								Gerne helfen wir dir, endlich mobil zu werden – egal ob du zuerst
								mit dem Auto starten oder dich für Motorrad und Zweirad entscheidest.
								Bei uns geht es nicht um Druck, sondern um Vertrauen und klare
								Fortschritte.
							</p>

							<div className="mt-8 flex flex-col gap-4 sm:flex-row">
								<a
									href="https://wa.me/491777796291/?text=Hi%20%C3%9Cmit,%20ich%20h%C3%A4tte%20gerne%20Informationen%20zu%20..."
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center justify-center gap-2 bg-slate-900 px-6 py-3.5 text-base font-medium text-white transition hover:bg-slate-700"
								>
									Kostenlose Anfrage{' '}
									<ArrowRight size={18} className="mt-0.5" />
								</a>
								<a
									href="tel:+491777796291"
									className="inline-flex items-center justify-center border border-slate-300 bg-white px-6 py-3.5 text-base font-medium text-slate-900 transition hover:border-slate-900"
								>
									+49 177 7796291
								</a>
							</div>

							<div className="mt-10 grid max-w-lg grid-cols-3 gap-4 text-left">
								<div>
									<p className="text-3xl font-light tracking-tight text-slate-900">
										5/5
									</p>
									<p className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-500">
										Bewertungen
									</p>
								</div>
								<div>
									<p className="text-3xl font-light tracking-tight text-slate-900">
										3
									</p>
									<p className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-500">
										Kurse
									</p>
								</div>
								<div>
									<p className="text-3xl font-light tracking-tight text-slate-900">
										B196
									</p>
									<p className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-500">
										Zusatz
									</p>
								</div>
							</div>
						</div>

						<div className="relative">
							<div className="absolute -left-8 top-8 h-28 w-28 rounded-full bg-amber-200/60 blur-3xl" />
							<div className="absolute -right-8 bottom-8 h-32 w-32 rounded-full bg-slate-200 blur-3xl" />
							<div className="relative overflow-hidden border border-slate-200 bg-white shadow-[0_30px_80px_rgba(15,23,42,0.08)]">
								<img
									src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=80"
									alt="Auto auf der Straße"
									className="h-[520px] w-full object-cover"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-slate-900/55 via-slate-900/10 to-transparent" />
								<div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
									<div className="inline-flex items-center gap-2 border border-white/30 bg-white/10 px-3 py-1.5 text-[11px] uppercase tracking-[0.2em] text-white backdrop-blur-sm">
										<span className="h-2 w-2 rounded-full bg-emerald-400" />
										Fahrstunden nach Vereinbarung
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section
					id="angebote"
					className="bg-slate-950 px-5 py-20 text-white sm:px-6 lg:px-8"
				>
					<div className="mx-auto max-w-7xl">
						<div className="mb-12 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
							<div>
								<p className="text-xs uppercase tracking-[0.28em] text-slate-400">
									Angebote
								</p>
								<h3 className="mt-3 text-3xl font-light tracking-tight text-white sm:text-4xl">
									Fahrausbildung für dein Ziel
								</h3>
							</div>
							<p className="max-w-xl text-slate-300">
								Jedes Training wird an deinen Lernstil angepasst. Wir nehmen uns Zeit,
								erklären verständlich und helfen dir, mit Sicherheit auf die Straße zu
								gehen.
							</p>
						</div>

						<div className="grid gap-6 lg:grid-cols-3">
							{services.map((service) => (
								<div
									key={service.title}
									className="border border-slate-800 bg-slate-900 p-7 transition hover:border-slate-600 hover:bg-slate-900/90"
								>
									<p className="text-xs uppercase tracking-[0.25em] text-slate-400">
										{service.subtitle}
									</p>
									<h4 className="mt-6 text-2xl font-light tracking-tight text-white">
										{service.title}
									</h4>
									<p className="mt-4 text-base leading-7 text-slate-300">
										{service.description}
									</p>
									<ul className="mt-6 space-y-3 text-sm text-slate-200">
										{service.bullets.map((bullet) => (
											<li key={bullet} className="flex items-start gap-3">
												<Check size={16} className="mt-0.5 text-amber-300" />
												<span>{bullet}</span>
											</li>
										))}
									</ul>
								</div>
							))}
						</div>
					</div>
				</section>

				<section className="bg-white px-5 py-20 sm:px-6 lg:px-8">
					<div className="mx-auto max-w-7xl">
						<div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
							<div>
								<p className="text-xs uppercase tracking-[0.28em] text-slate-500">
								Warum wir
								</p>
								<h3 className="mt-3 text-3xl font-light tracking-tight text-slate-900 sm:text-4xl">
									So funktioniert gutes Lernen
								</h3>
							</div>

							<div className="grid gap-4 sm:grid-cols-2">
								{steps.map((step, index) => (
									<div
										key={step}
										className="flex items-center gap-4 border border-slate-200 bg-slate-50 p-4"
									>
										<div className="flex h-10 w-10 items-center justify-center bg-slate-900 text-sm font-medium text-white">
											{index + 1}
										</div>
										<p className="text-sm text-slate-700">{step}</p>
									</div>
								))}
							</div>
						</div>
					</div>
				</section>

				<section
					id="erfolg"
					className="bg-slate-100 px-5 py-20 sm:px-6 lg:px-8"
				>
					<div className="mx-auto max-w-7xl">
						<div className="mb-12">
							<p className="text-xs uppercase tracking-[0.28em] text-slate-500">
								Erfolge
							</p>
							<h3 className="mt-3 text-3xl font-light tracking-tight text-slate-900 sm:text-4xl">
								Das sagen unsere Schüler
							</h3>
						</div>

						<div className="grid gap-6 lg:grid-cols-3">
							{testimonials.map((item) => (
								<article
									key={item.name}
									className="bg-white p-7 shadow-[0_20px_40px_rgba(15,23,42,0.04)] ring-1 ring-slate-200"
								>
									<div className="mb-5 flex gap-1 text-amber-500">
										{[...Array(5)].map((_, idx) => (
											<Star key={idx} size={18} fill="currentColor" />
										))}
									</div>
									<p className="text-base leading-7 text-slate-700">
										“{item.quote}”
									</p>
									<p className="mt-6 text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
										{item.name}
									</p>
								</article>
							))}
						</div>
					</div>
				</section>

				<section
					id="kontakt"
					className="bg-white px-5 py-20 sm:px-6 lg:px-8"
				>
					<div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">
						<div>
							<p className="text-xs uppercase tracking-[0.28em] text-slate-500">
								Kontakt
							</p>
							<h3 className="mt-3 text-3xl font-light tracking-tight text-slate-900 sm:text-4xl">
								Wir helfen dir gerne weiter
							</h3>
							<div className="mt-8 space-y-6 text-slate-700">
								<div className="flex items-start gap-4">
									<div className="flex h-11 w-11 items-center justify-center border border-slate-200 bg-slate-50">
										<Phone size={18} />
									</div>
									<div>
										<p className="text-xs uppercase tracking-[0.2em] text-slate-500">
											Telefon
										</p>
										<a
											href="tel:+491777796291"
											className="mt-2 inline-block text-xl text-slate-900 hover:text-slate-600"
										>
											+49 177 7796291
										</a>
									</div>
								</div>

								<div className="flex items-start gap-4">
									<div className="flex h-11 w-11 items-center justify-center border border-slate-200 bg-slate-50">
										<MapPin size={18} />
									</div>
									<div>
										<p className="text-xs uppercase tracking-[0.2em] text-slate-500">
											Standort
										</p>
										<p className="mt-2 text-lg text-slate-900">
											Frankfurt am Main
										</p>
									</div>
								</div>

								<div className="flex items-start gap-4">
									<div className="flex h-11 w-11 items-center justify-center border border-slate-200 bg-slate-50">
										<Clock size={18} />
									</div>
									<div>
										<p className="text-xs uppercase tracking-[0.2em] text-slate-500">
											Termine
										</p>
										<p className="mt-2 text-lg text-slate-900">
											Nach Vereinbarung
										</p>
									</div>
								</div>
							</div>
						</div>

						<div className="border border-slate-200 bg-slate-50 p-7">
							<p className="text-xs uppercase tracking-[0.28em] text-slate-500">
								So kommst du zu uns
							</p>
							<h4 className="mt-4 text-2xl font-light tracking-tight text-slate-900">
								Direkt loslegen
							</h4>
							<p className="mt-4 text-base leading-7 text-slate-700">
								Wenn du auf der Suche nach einer Fahrstunde bist, die wirklich zu dir
								passt, schick uns einfach eine Nachricht. Wir sagen dir, was für dich
								sinnvoll ist und wie du am besten startest.
							</p>
							<a
								href="https://wa.me/491777796291/?text=Hi%20%C3%9Cmit,%20ich%20h%C3%A4tte%20gerne%20Informationen%20zu%20..."
								target="_blank"
								rel="noopener noreferrer"
								className="mt-8 inline-flex items-center gap-2 bg-slate-900 px-6 py-3.5 text-base font-medium text-white transition hover:bg-slate-700"
							>
								WhatsApp kontaktieren{' '}
								<ArrowRight size={18} className="mt-0.5" />
							</a>

							<div className="mt-8 border-t border-slate-200 pt-6">
								<p className="text-sm text-slate-600">Social</p>
								<div className="mt-4 flex gap-4 text-sm text-slate-700">
									<a
										href="https://www.facebook.com/Fahrschule-am-Ostendplatz-321790862056753"
										target="_blank"
										rel="noopener noreferrer"
									>
										Facebook
									</a>
									<a
										href="https://www.instagram.com/fahrschule.am.ostendplatz"
										target="_blank"
										rel="noopener noreferrer"
									>
										Instagram
									</a>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>

			<footer className="bg-slate-950 px-5 py-10 text-slate-300 sm:px-6 lg:px-8">
				<div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
					<div>
						<p className="text-lg font-medium text-white">Fahrschule am Ostendplatz</p>
						<p className="mt-1 text-sm text-slate-400">Frankfurt am Main</p>
					</div>
					<div className="flex flex-col gap-2 text-sm text-slate-400 sm:flex-row sm:items-center sm:gap-6">
						<a href="#angebote" className="hover:text-white">
							Angebote
						</a>
						<a href="#erfolg" className="hover:text-white">
							Erfolge
						</a>
						<a href="#kontakt" className="hover:text-white">
							Kontakt
						</a>
					</div>
				</div>
			</footer>
		</>
	);
}
