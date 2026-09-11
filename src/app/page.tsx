'use client';

import { useState, useCallback, useMemo } from 'react';
import { Menu, X, MapPin, Phone, Clock, ChevronRight, Star, CheckCircle2 } from 'lucide-react';

const services = [
	{
		title: 'PKW Führerschein',
		subtitle: 'Für Anfänger & Wiedereinsteiger',
		description: 'Gezielte Fahrstunden, ruhiges Lernen und klare Fortschritte — damit du Vertrauen im Straßenverkehr aufbaust.',
		bullets: ['Persönlicher Lernplan', 'Flexible Stunden', 'Modernes Auto'],
	},
	{
		title: 'Motorrad / Zweirad',
		subtitle: 'A1 · A2 · A',
		description: 'Sicheres Motorradfahren beginnt mit Technik, Ruhe und richtigem Feedback. Wir bauen dir die Sicherheit Schritt für Schritt auf.',
		bullets: ['Sicherheitsorientiert', 'Praxisnah', 'Fahrtechnik im Fokus'],
	},
	{
		title: 'B196 Zusatz',
		subtitle: 'Schnell & unkompliziert',
		description: 'Wenn du bereits Klasse B hast und schnell und unkompliziert Motorrad fahren möchtest, ist dieser Zusatz die ideale Lösung.',
		bullets: ['Schneller Einstieg', 'Praktisch', 'Klar erklärt'],
	},
];

const steps = [
	'Kostenlose Erstberatung',
	'Persönlicher Fahrplan',
	'Praktische Fahrstunden',
	'Sichere, selbstsichere Fahrweise',
];

const testimonials = [
	{
		name: 'Elvis Avdic',
		rating: 5,
		quote: 'Alles Bestens gelaufen. Ümit nimmt sich Zeit und hält sich an die Abstimmung. Klare Weiterempfehlung!',
	},
	{
		name: 'Hakan Basli',
		rating: 5,
		quote: 'Vielen lieben Dank für die tollen Fahrstunden, ich kann dich nur weiterempfehlen.',
	},
	{
		name: 'Elena Sommer',
		rating: 5,
		quote: 'Super Fahrlehrer. Er lebt für seinen Beruf und das merkt man! Er setzt sich für seine Schüler ein.',
	},
];

const stats = [
	{ value: '5/5', label: 'Bewertungen' },
	{ value: '3', label: 'Kurse' },
	{ value: 'B196', label: 'Zusatz' },
];

export default function Home() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	const toggleMenu = useCallback(() => {
		setMobileMenuOpen((prev) => !prev);
	}, []);

	const closeMenu = useCallback(() => {
		setMobileMenuOpen(false);
	}, []);

	const whatsappLink = useMemo(
		() => 'https://wa.me/491777796291/?text=Hi%20%C3%9Cmit,%20ich%20h%C3%A4tte%20gerne%20Informationen%20zu%20...',
		[]
	);

	const StatItem = ({ value, label }: { value: string; label: string }) => (
		<div className="text-center">
			<p className="text-3xl sm:text-4xl font-light tracking-tight text-white">{value}</p>
			<p className="mt-2 text-xs uppercase tracking-[0.2em] text-yellow-400/80">{label}</p>
		</div>
	);

	const ServiceCard = ({ service }: { service: (typeof services)[0] }) => (
		<div className="group relative border border-yellow-500/20 bg-gradient-to-br from-slate-900/80 to-slate-950 p-7 transition duration-300 hover:border-yellow-400/50 hover:bg-slate-900">
			<div className="absolute inset-0 bg-gradient-to-br from-yellow-500/0 to-yellow-500/0 transition duration-300 group-hover:from-yellow-500/5 group-hover:to-yellow-500/10" />
			<div className="relative">
				<p className="text-xs uppercase tracking-[0.25em] text-yellow-400/70">{service.subtitle}</p>
				<h4 className="mt-4 text-2xl font-light tracking-tight text-white">{service.title}</h4>
				<p className="mt-4 text-base leading-7 text-slate-300">{service.description}</p>
				<ul className="mt-6 space-y-3 text-sm text-slate-200">
					{service.bullets.map((bullet) => (
						<li key={bullet} className="flex items-center gap-3">
							<CheckCircle2 size={16} className="shrink-0 text-yellow-400" />
							<span>{bullet}</span>
						</li>
					))}
				</ul>
			</div>
		</div>
	);

	const TestimonialCard = ({ testimonial }: { testimonial: (typeof testimonials)[0] }) => (
		<article className="bg-white/5 backdrop-blur-sm border border-yellow-500/20 p-7 transition duration-300 hover:border-yellow-400/40 hover:bg-white/10">
			<div className="mb-5 flex gap-1 text-yellow-400">
				{[...Array(testimonial.rating)].map((_, idx) => (
					<Star key={idx} size={16} fill="currentColor" />
				))}
			</div>
			<p className="text-base leading-7 text-slate-200">"{testimonial.quote}"</p>
			<p className="mt-6 text-sm font-medium uppercase tracking-[0.2em] text-yellow-400/70">{testimonial.name}</p>
		</article>
	);

	return (
		<>
			{/* Navigation */}
			<nav className="sticky top-0 z-50 border-b border-yellow-500/10 bg-slate-950/90 backdrop-blur-lg">
				<div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
					<div className="flex-1">
						<p className="text-xs uppercase tracking-[0.3em] text-yellow-400/60">Fahrschule</p>
						<h1 className="text-lg font-light tracking-[-0.02em] text-white">am Ostendplatz</h1>
					</div>

					{/* Desktop Menu */}
					<div className="hidden items-center gap-10 md:flex">
						<a href="#ueber" className="text-sm tracking-wide text-slate-300 transition hover:text-yellow-400">
							Über uns
						</a>
						<a href="#angebote" className="text-sm tracking-wide text-slate-300 transition hover:text-yellow-400">
							Angebote
						</a>
						<a href="#erfolg" className="text-sm tracking-wide text-slate-300 transition hover:text-yellow-400">
							Erfolge
						</a>
						<a href="#kontakt" className="text-sm tracking-wide text-slate-300 transition hover:text-yellow-400">
							Kontakt
						</a>
					</div>

					{/* CTA Button Desktop */}
					<div className="ml-8 hidden md:flex">
						<a
							href={whatsappLink}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-2 border border-yellow-400/40 bg-yellow-400/10 px-5 py-2.5 text-sm font-medium text-yellow-400 transition hover:border-yellow-400/70 hover:bg-yellow-400/20"
						>
							Jetzt starten
							<ChevronRight size={16} />
						</a>
					</div>

					{/* Mobile Menu Button */}
					<button
						className="rounded border border-yellow-500/20 p-2 text-white transition hover:border-yellow-400 md:hidden"
						onClick={toggleMenu}
						aria-label="Toggle menu"
					>
						{mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
					</button>
				</div>

				{/* Mobile Menu */}
				{mobileMenuOpen && (
					<div className="border-t border-yellow-500/10 bg-slate-950 md:hidden">
						<div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-6 text-sm">
							<a href="#ueber" onClick={closeMenu} className="tracking-wide text-slate-300 transition hover:text-yellow-400">
								Über uns
							</a>
							<a href="#angebote" onClick={closeMenu} className="tracking-wide text-slate-300 transition hover:text-yellow-400">
								Angebote
							</a>
							<a href="#erfolg" onClick={closeMenu} className="tracking-wide text-slate-300 transition hover:text-yellow-400">
								Erfolge
							</a>
							<a href="#kontakt" onClick={closeMenu} className="tracking-wide text-slate-300 transition hover:text-yellow-400">
								Kontakt
							</a>
							<a
								href={whatsappLink}
								target="_blank"
								rel="noopener noreferrer"
								onClick={closeMenu}
								className="mt-4 inline-flex items-center justify-center gap-2 border border-yellow-400/40 bg-yellow-400/10 px-4 py-3 text-sm font-medium text-yellow-400 transition hover:border-yellow-400/70 hover:bg-yellow-400/20"
							>
								Jetzt starten
								<ChevronRight size={16} />
							</a>
						</div>
					</div>
				)}
			</nav>

			<main>
				{/* Hero Section */}
				<section id="ueber" className="relative min-h-screen overflow-hidden bg-slate-950 pt-12 sm:pt-20">
					{/* Background Image with Overlay */}
					<div className="absolute inset-0">
						<img
							src="https://images.unsplash.com/photo-1552820728-8ac41f1ce891?auto=format&fit=crop&w=1600&q=80"
							alt="Luxury car driving at night"
							className="h-full w-full object-cover"
						/>
						<div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-transparent" />
						<div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-transparent to-slate-950/80" />
					</div>

					{/* Content */}
					<div className="relative z-10 mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
						<div className="grid items-center gap-12 lg:grid-cols-2">
							<div className="space-y-8">
								<div className="space-y-4">
									<p className="text-xs uppercase tracking-[0.35em] text-yellow-400/70">Willkommen</p>
									<h2 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-[-0.03em] leading-tight text-white">
										Fahren lernen mit Vertrauen
									</h2>
									<p className="max-w-xl text-lg leading-8 text-slate-200">
										Sicherheit, Ruhe und echte Praxis — das ist unsere Methode. Gerne helfen wir dir, mobil zu werden,
										egal ob Auto, Motorrad oder Zweirad.
									</p>
								</div>

								<div className="flex flex-col gap-4 sm:flex-row pt-4">
									<a
										href={whatsappLink}
										target="_blank"
										rel="noopener noreferrer"
										className="inline-flex items-center justify-center gap-2 bg-yellow-400 px-6 py-3.5 text-base font-medium text-slate-900 transition hover:bg-yellow-300 hover:shadow-lg hover:shadow-yellow-400/50"
									>
										Kostenlose Anfrage
										<ChevronRight size={18} />
									</a>
									<a
										href="tel:+491777796291"
										className="inline-flex items-center justify-center border border-yellow-400/50 bg-transparent px-6 py-3.5 text-base font-medium text-yellow-400 transition hover:border-yellow-400 hover:bg-yellow-400/10"
									>
										+49 177 7796291
									</a>
								</div>

								{/* Stats */}
								<div className="flex flex-wrap gap-8 pt-8">
									{stats.map((stat) => (
										<StatItem key={stat.label} value={stat.value} label={stat.label} />
									))}
								</div>
							</div>

							{/* Floating Card */}
							<div className="relative hidden lg:flex items-center justify-center">
								<div className="absolute -inset-[100px] bg-gradient-to-br from-yellow-400/10 to-transparent blur-3xl" />
								<div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-yellow-400/20 rounded-lg p-8 w-full max-w-sm shadow-2xl">
									<div className="space-y-6">
										<div className="inline-flex items-center gap-2 border border-yellow-400/30 bg-yellow-400/10 px-3 py-2 rounded text-xs uppercase tracking-[0.2em] text-yellow-400">
											<span className="h-2 w-2 rounded-full bg-green-400" />
											Verfügbar jetzt
										</div>
										<div>
											<p className="text-sm uppercase tracking-[0.2em] text-slate-400">Nächste Schritte</p>
											<h3 className="mt-3 text-2xl font-light text-white">Lass uns loslegen</h3>
										</div>
										<p className="text-slate-300 leading-7">
											Schreib uns einfach über WhatsApp, und wir besprechen, welcher Kurs zu dir passt.
										</p>
										<a
											href={whatsappLink}
											target="_blank"
											rel="noopener noreferrer"
											className="inline-flex items-center justify-center w-full gap-2 bg-yellow-400 px-4 py-3 text-sm font-medium text-slate-900 transition hover:bg-yellow-300"
										>
											WhatsApp kontaktieren
											<ChevronRight size={16} />
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Services Section */}
				<section id="angebote" className="bg-slate-950 px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
					<div className="mx-auto max-w-7xl">
						<div className="mb-14">
							<p className="text-xs uppercase tracking-[0.3em] text-yellow-400/60">Angebote</p>
							<h3 className="mt-3 text-4xl sm:text-5xl font-light tracking-tight text-white">
								Fahrausbildung für dein Ziel
							</h3>
							<p className="mt-4 max-w-2xl text-lg text-slate-400">
								Jedes Training wird an deinen Lernstil angepasst. Wir erklären verständlich und helfen dir, mit Sicherheit auf die Straße zu gehen.
							</p>
						</div>

						<div className="grid gap-6 lg:grid-cols-3">
							{services.map((service) => (
								<ServiceCard key={service.title} service={service} />
							))}
						</div>
					</div>
				</section>

				{/* Process Section */}
				<section className="bg-gradient-to-b from-slate-900 to-slate-950 px-5 py-20 sm:px-6 lg:px-8">
					<div className="mx-auto max-w-7xl">
						<div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
							<div>
								<p className="text-xs uppercase tracking-[0.3em] text-yellow-400/60">Prozess</p>
								<h3 className="mt-3 text-4xl sm:text-5xl font-light tracking-tight text-white">
									So funktioniert es
								</h3>
								<p className="mt-4 max-w-xl text-lg text-slate-400">
									Unser bewährter Ablauf bringt dich schnell und sicher zum Ziel. Klare Schritte, transparente Kommunikation.
								</p>
							</div>

							<div className="grid gap-4 sm:grid-cols-2">
								{steps.map((step, index) => (
									<div
										key={step}
										className="group relative border border-yellow-500/20 bg-slate-900/50 p-6 transition duration-300 hover:border-yellow-400/50 hover:bg-slate-900/80"
									>
										<div className="absolute inset-0 bg-gradient-to-br from-yellow-500/0 to-yellow-500/0 transition duration-300 group-hover:from-yellow-500/5 group-hover:to-yellow-500/10" />
										<div className="relative">
											<div className="mb-4 inline-flex h-10 w-10 items-center justify-center border border-yellow-400/40 bg-yellow-400/10 text-sm font-light text-yellow-400">
												{index + 1}
											</div>
											<p className="text-base font-light text-white">{step}</p>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</section>

				{/* Testimonials Section */}
				<section id="erfolg" className="bg-slate-950 px-5 py-20 sm:px-6 lg:px-8">
					<div className="mx-auto max-w-7xl">
						<div className="mb-14">
							<p className="text-xs uppercase tracking-[0.3em] text-yellow-400/60">Erfolge</p>
							<h3 className="mt-3 text-4xl sm:text-5xl font-light tracking-tight text-white">
								Das sagen unsere Schüler
							</h3>
						</div>

						<div className="grid gap-6 lg:grid-cols-3">
							{testimonials.map((testimonial) => (
								<TestimonialCard key={testimonial.name} testimonial={testimonial} />
							))}
						</div>
					</div>
				</section>

				{/* Contact Section */}
				<section id="kontakt" className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 px-5 py-20 sm:px-6 lg:px-8">
					<div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.2fr_1fr]">
						<div className="space-y-8">
							<div>
								<p className="text-xs uppercase tracking-[0.3em] text-yellow-400/60">Kontakt</p>
								<h3 className="mt-3 text-4xl sm:text-5xl font-light tracking-tight text-white">
									Wir helfen dir gerne
								</h3>
							</div>

							<div className="space-y-6">
								{/* Phone */}
								<div className="flex items-start gap-4">
									<div className="flex h-12 w-12 items-center justify-center border border-yellow-400/30 bg-yellow-400/10 flex-shrink-0">
										<Phone size={20} className="text-yellow-400" />
									</div>
									<div>
										<p className="text-xs uppercase tracking-[0.2em] text-slate-400">Telefon</p>
										<a
											href="tel:+491777796291"
											className="mt-2 inline-block text-xl font-light text-white hover:text-yellow-400 transition"
										>
											+49 177 7796291
										</a>
									</div>
								</div>

								{/* Location */}
								<div className="flex items-start gap-4">
									<div className="flex h-12 w-12 items-center justify-center border border-yellow-400/30 bg-yellow-400/10 flex-shrink-0">
										<MapPin size={20} className="text-yellow-400" />
									</div>
									<div>
										<p className="text-xs uppercase tracking-[0.2em] text-slate-400">Standort</p>
										<p className="mt-2 text-xl font-light text-white">Frankfurt am Main</p>
									</div>
								</div>

								{/* Hours */}
								<div className="flex items-start gap-4">
									<div className="flex h-12 w-12 items-center justify-center border border-yellow-400/30 bg-yellow-400/10 flex-shrink-0">
										<Clock size={20} className="text-yellow-400" />
									</div>
									<div>
										<p className="text-xs uppercase tracking-[0.2em] text-slate-400">Termine</p>
										<p className="mt-2 text-xl font-light text-white">Nach Vereinbarung</p>
									</div>
								</div>
							</div>
						</div>

						{/* CTA Box */}
						<div className="relative border border-yellow-400/20 bg-gradient-to-br from-yellow-400/5 to-transparent p-8 backdrop-blur-sm">
							<div className="space-y-6">
								<div>
									<p className="text-xs uppercase tracking-[0.3em] text-yellow-400/60">Jetzt anfangen</p>
									<h4 className="mt-3 text-2xl font-light tracking-tight text-white">
										Direkt eine Anfrage stellen
									</h4>
								</div>

								<p className="text-base leading-7 text-slate-300">
									Schreib uns über WhatsApp, und wir besprechen genau, was zu deinem Lernstil passt und wie du am besten startest.
								</p>

								<a
									href={whatsappLink}
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center justify-center w-full gap-2 bg-yellow-400 px-6 py-3.5 text-base font-medium text-slate-900 transition hover:bg-yellow-300 hover:shadow-lg hover:shadow-yellow-400/50"
								>
									WhatsApp kontaktieren
									<ChevronRight size={18} />
								</a>

								{/* Social Links */}
								<div className="border-t border-yellow-400/10 pt-6">
									<p className="text-xs uppercase tracking-[0.2em] text-slate-400">Folge uns</p>
									<div className="mt-4 flex gap-6 text-sm">
										<a
											href="https://www.facebook.com/Fahrschule-am-Ostendplatz-321790862056753"
											target="_blank"
											rel="noopener noreferrer"
											className="text-slate-300 transition hover:text-yellow-400"
										>
											Facebook
										</a>
										<a
											href="https://www.instagram.com/fahrschule.am.ostendplatz"
											target="_blank"
											rel="noopener noreferrer"
											className="text-slate-300 transition hover:text-yellow-400"
										>
											Instagram
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>

			{/* Footer */}
			<footer className="border-t border-yellow-500/10 bg-slate-950 px-5 py-10 sm:px-6 lg:px-8">
				<div className="mx-auto max-w-7xl">
					<div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
						<div>
							<h2 className="text-lg font-light text-white">Fahrschule am Ostendplatz</h2>
							<p className="mt-2 text-sm text-slate-500">Frankfurt am Main, Deutschland</p>
						</div>
						<div className="flex flex-col gap-4 text-sm sm:flex-row sm:gap-8">
							<a href="#ueber" className="text-slate-400 transition hover:text-yellow-400">
								Über uns
							</a>
							<a href="#angebote" className="text-slate-400 transition hover:text-yellow-400">
								Angebote
							</a>
							<a href="#erfolg" className="text-slate-400 transition hover:text-yellow-400">
								Erfolge
							</a>
							<a href="#kontakt" className="text-slate-400 transition hover:text-yellow-400">
								Kontakt
							</a>
						</div>
					</div>
					<div className="mt-8 border-t border-yellow-500/10 pt-8">
						<p className="text-center text-xs text-slate-500">© 2024 Fahrschule am Ostendplatz. Alle Rechte vorbehalten.</p>
					</div>
				</div>
			</footer>
		</>
	);
}
