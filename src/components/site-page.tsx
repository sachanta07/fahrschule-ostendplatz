'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import type { FormEvent, ReactNode } from 'react';
import Image from 'next/image';
import type { LucideIcon } from 'lucide-react';
import {
	ArrowRight,
	CheckCircle2,
	ChevronDown,
	ChevronRight,
	Mail,
	MapPinned,
	Menu,
	MessageCircle,
	Phone,
	Star,
	X,
} from 'lucide-react';
import {
	benefits,
	brand,
	faqItems,
	heroHighlights,
	instructorPoints,
	licenseCategories,
	navigation,
	processSteps,
	testimonials,
} from '@/lib/site-data';

type SectionProps = {
	id?: string;
	children: ReactNode;
	className?: string;
};

const SECTION_PADDING = 'px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24';

function Section({ id, children, className = '' }: SectionProps) {
	return (
		<section id={id} className={`${SECTION_PADDING} ${className}`.trim()}>
			<div className="mx-auto w-full max-w-7xl">{children}</div>
		</section>
	);
}

function LogoMark() {
	return (
		<div className="flex shrink-0 items-center">
			<img
				src="/logo.svg"
				alt="Fahrschule am Ostendplatz"
				width="260"
				height="160"
				className="h-14 w-auto max-w-none object-contain object-left sm:h-16"
			/>
		</div>
	);
}

function PrimaryButton({ href, children, className = '', external = false }: { href: string; children: React.ReactNode; className?: string; external?: boolean }) {
	return (
		<a
			href={href}
			target={external ? '_blank' : undefined}
			rel={external ? 'noopener noreferrer' : undefined}
			className={`inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--brand-green)] px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_35px_rgba(70,178,62,0.22)] transition hover:-translate-y-0.5 hover:bg-[#3fa736] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--brand-green)] focus-visible:ring-offset-2 ${className}`}
		>
			{children}
		</a>
	);
}

function SecondaryButton({ href, children, className = '', external = false }: { href: string; children: React.ReactNode; className?: string; external?: boolean }) {
	return (
		<a
			href={href}
			target={external ? '_blank' : undefined}
			rel={external ? 'noopener noreferrer' : undefined}
			className={`inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--brand-green)] px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_35px_rgba(70,178,62,0.22)] transition hover:-translate-y-0.5 hover:bg-[#3fa736] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--brand-green)] focus-visible:ring-offset-2 ${className}`}
		>
			{children}
		</a>
	);
}

function Eyebrow({ children }: { children: React.ReactNode }) {
	return <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[color:var(--brand-green)]">{children}</p>;
}

function SectionHeading({ eyebrow, title, description, align = 'left' as 'left' | 'center' }: { eyebrow?: string; title: string; description?: string; align?: 'left' | 'center' }) {
	return (
		<div className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
			{eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
			<h2 className="mt-3 text-4xl font-semibold tracking-[-0.04em] text-[color:var(--ink)] sm:text-5xl">{title}</h2>
			{description ? <p className="mt-4 text-base leading-8 text-[color:var(--muted)] sm:text-lg">{description}</p> : null}
		</div>
	);
}

function StarRow() {
	return (
		<div className="flex items-center gap-1 text-[color:var(--brand-green)]" aria-label="5 von 5 Sternen">
			{Array.from({ length: 5 }).map((_, index) => (
				<Star key={index} size={16} fill="currentColor" aria-hidden="true" />
			))}
		</div>
	);
}

function Hero() {
	return (
		<section id="startseite" className="relative overflow-hidden bg-[color:var(--surface-strong)] text-white">
			<div className="absolute inset-0">
					<Image
					src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=80"
					alt="Modernes Auto auf einer urbanen Straße bei Nacht"
						fill
						priority
						sizes="100vw"
						className="object-cover opacity-35"
				/>
				<div className="absolute inset-0 bg-gradient-to-r from-[color:var(--surface-strong)] via-[color:var(--surface-strong)]/92 to-[color:var(--surface-strong)]/35" />
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(70,178,62,0.22),transparent_32%),linear-gradient(180deg,transparent,rgba(15,17,17,0.4))]" />
			</div>

			<div className="relative mx-auto grid min-h-[92svh] max-w-7xl items-center gap-14 px-5 py-10 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:py-16">
				<div className="relative z-10 max-w-3xl animate-fade-in-up">
					<div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-2 text-xs font-medium tracking-[0.22em] text-white/80 backdrop-blur-sm">
						<span className="h-2 w-2 rounded-full bg-[color:var(--brand-green)]" />
						Stuttgart-Ost · Auto & Motorrad
					</div>
					<h1 className="mt-6 text-5xl font-semibold tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
						Dein Führerschein.
						<br />
						Dein nächster Schritt.
					</h1>
					<p className="mt-6 max-w-2xl text-lg leading-8 text-white/80 sm:text-xl">
						{brand.name} – persönliche Ausbildung, moderne Fahrstunden und kompetente Begleitung auf deinem Weg zum Führerschein in Stuttgart.
					</p>

					<div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
						<PrimaryButton href="#kontakt">Jetzt anmelden</PrimaryButton>
						<PrimaryButton href="#klassen">Führerscheinklassen entdecken</PrimaryButton>
					</div>

					<div className="mt-6 flex flex-col gap-2 text-sm text-white/75 sm:flex-row sm:items-center sm:gap-4">
						<StarRow />
						<span>Persönlich. Kompetent. Empfehlenswert.</span>
					</div>

					<div className="mt-10 grid gap-3 sm:grid-cols-3">
						{['Persönliche Betreuung', 'Moderne Ausbildung', 'Theorie & Praxis'].map((item) => (
							<div key={item} className="rounded-2xl border border-white/10 bg-white/6 px-4 py-3 text-sm text-white/88 backdrop-blur-md">
								{item}
							</div>
						))}
					</div>
				</div>

				<div className="relative z-10 lg:justify-self-end">
					<div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 shadow-[0_40px_80px_rgba(0,0,0,0.28)] backdrop-blur-md">
						<Image
							src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80"
							alt="Dunkles Automobil-Foto als Hero-Motiv"
							width={1200}
							height={900}
							priority
							sizes="(max-width: 1024px) 100vw, 48vw"
							className="h-[26rem] w-full object-cover sm:h-[32rem]"
						/>
						<div className="absolute inset-0 bg-gradient-to-t from-[color:var(--surface-strong)] via-transparent to-transparent" />
						<div className="absolute left-5 right-5 top-5 flex items-center justify-between rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white/90 backdrop-blur-md">
							<span>Schülerfeedback</span>
							<span className="inline-flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-[color:var(--brand-green)]" />Persönlich erreichbar</span>
						</div>
						<div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-white/8 p-4 backdrop-blur-md">
							<div className="flex items-center justify-between gap-4">
								<div>
									<p className="text-xs uppercase tracking-[0.25em] text-white/60">Fahrstunden</p>
									<p className="mt-1 text-lg font-semibold text-white">nach Vereinbarung</p>
								</div>
								<ArrowRight className="text-[color:var(--brand-green)]" aria-hidden="true" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

function TrustStrip() {
	return (
		<section className="border-b border-[color:var(--border)] bg-white px-5 py-5 sm:px-6 lg:px-8">
			<div className="mx-auto flex max-w-7xl flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
				<div className="flex items-center gap-4">
					<StarRow />
					<p className="text-sm font-medium text-[color:var(--ink)]">Top bewertet von unseren Fahrschülern</p>
				</div>
				<div className="grid grid-cols-2 gap-3 text-sm text-[color:var(--muted)] sm:grid-cols-5">
					{heroHighlights.map((item) => (
						<div key={item} className="rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-2 text-center">
							{item}
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

function LicenseCategoriesSection() {
	return (
		<Section id="klassen" className="bg-[color:var(--surface)]">
			<div className="space-y-10">
				<SectionHeading
					eyebrow="Führerscheinklassen"
					title="Welchen Führerschein möchtest du machen?"
					description="Wähle die passende Klasse für dein Ziel. Wenn du Fragen hast, beraten wir dich persönlich und ohne Umwege."
				/>

				<div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
					{licenseCategories.map((item) => {
						const Icon = item.icon;
						return (
							<article
								key={item.name}
								className="group rounded-[1.35rem] border border-[color:var(--border)] bg-white p-5 shadow-[0_18px_50px_rgba(15,23,42,0.04)] transition duration-300 hover:-translate-y-1 hover:border-[color:var(--brand-green)]/40"
							>
								<div className="flex items-start justify-between gap-4">
									<div>
										<span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] ${item.accent === 'auto' ? 'bg-[#eef8ec] text-[#2b6f25]' : 'bg-[#edf5ee] text-[#2b6f25]'}`}>
											{item.group}
										</span>
										<h3 className="mt-4 text-xl font-semibold tracking-[-0.03em] text-[color:var(--ink)]">{item.name}</h3>
									</div>
									<div className="grid h-11 w-11 place-items-center rounded-2xl bg-[color:var(--surface)] text-[color:var(--brand-green)]">
										<Icon size={22} aria-hidden="true" />
									</div>
								</div>
								<p className="mt-4 min-h-24 text-sm leading-7 text-[color:var(--muted)]">{item.description}</p>
								<div className="mt-6 flex items-center justify-between gap-3 border-t border-[color:var(--border)] pt-4">
									<span className="text-sm font-medium text-[color:var(--ink)]">Preis auf Anfrage</span>
									<a href="#kontakt" className="inline-flex items-center gap-1 text-sm font-semibold text-[color:var(--brand-green)] transition group-hover:gap-2">
										Mehr erfahren <ChevronRight size={16} />
									</a>
								</div>
							</article>
						);
					})}
				</div>
			</div>
		</Section>
	);
}

function BenefitsSection() {
	return (
		<Section id="ueber-uns" className="bg-white">
			<div className="space-y-10">
				<SectionHeading
					eyebrow="Warum wir"
					title="Warum Fahrschule am Ostendplatz?"
					description="Persönlich, verständlich und auf den Punkt: Hier lernst du mit einem Team, das dir Sicherheit statt Stress vermittelt."
				/>

				<div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
					{benefits.map((benefit) => {
						const Icon = benefit.icon as LucideIcon;
						return (
							<div key={benefit.title} className="rounded-[1.35rem] border border-[color:var(--border)] bg-[color:var(--surface)] p-6 transition hover:-translate-y-1 hover:border-[color:var(--brand-green)]/35">
								<div className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-[color:var(--brand-green)] shadow-sm">
									<Icon size={22} aria-hidden="true" />
								</div>
								<h3 className="mt-5 text-xl font-semibold tracking-[-0.03em] text-[color:var(--ink)]">{benefit.title}</h3>
								<p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">{benefit.description}</p>
							</div>
						);
					})}
				</div>
			</div>
		</Section>
	);
}

function InstructorSection() {
	return (
		<Section id="ueber" className="bg-[color:var(--surface)]">
			<div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
				<div className="relative overflow-hidden rounded-[1.75rem] border border-[color:var(--border)] bg-white shadow-[0_24px_60px_rgba(15,23,42,0.07)]">
						<Image
						src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80"
						alt="Fahrlehrer im Gespräch mit einer Fahrschülerin"
							width={1200}
							height={900}
							sizes="(max-width: 1024px) 100vw, 42vw"
							className="h-[28rem] w-full object-cover"
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/0 to-black/0" />
					<div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-black/35 p-4 text-white backdrop-blur-md">
						<p className="text-xs uppercase tracking-[0.28em] text-white/65">Persönlicher Unterricht</p>
						<p className="mt-1 text-base font-semibold">Geduldig, klar und praxisnah</p>
					</div>
				</div>

				<div>
					<SectionHeading
						eyebrow="Über uns"
						title="Mehr als Fahrunterricht. Persönliche Begleitung."
						description="Du sollst verstehen, was du tust — nicht nur Regeln auswendig lernen. Genau dafür steht der Unterricht am Ostendplatz."
					/>

					<div className="mt-8 grid gap-4 sm:grid-cols-2">
						{instructorPoints.map((point) => (
							<div key={point} className="flex items-start gap-3 rounded-2xl border border-[color:var(--border)] bg-white p-4">
								<CheckCircle2 className="mt-0.5 shrink-0 text-[color:var(--brand-green)]" size={20} aria-hidden="true" />
								<p className="text-sm leading-7 text-[color:var(--muted)]">{point}</p>
							</div>
						))}
					</div>

					<div className="mt-8 flex flex-wrap gap-3">
						<PrimaryButton href="#kontakt">Jetzt anmelden</PrimaryButton>
						<SecondaryButton href="https://wa.me/491777796291/?text=Hi%20%C3%9Cmit,%20ich%20h%C3%A4tte%20gerne%20Informationen%20zu%20..." external>
							Noch Fragen? WhatsApp
						</SecondaryButton>
					</div>
				</div>
			</div>
		</Section>
	);
}

function ProcessSection() {
	return (
		<Section id="ablauf" className="bg-white">
			<div className="space-y-10">
				<SectionHeading
					eyebrow="Ablauf"
					title="So kommst du zu deinem Führerschein"
					description="Ein klarer, verständlicher Prozess ohne unnötige Hürden."
				/>

				<div className="grid gap-4 md:grid-cols-4 md:gap-0 md:rounded-[1.6rem] md:border md:border-[color:var(--border)] md:bg-[color:var(--surface)] md:p-2">
					{processSteps.map((step, index) => (
						<div key={step.number} className="relative rounded-[1.35rem] border border-[color:var(--border)] bg-white p-5 md:border-0 md:bg-transparent md:p-6">
							<div className="flex items-center gap-4 md:flex-col md:items-start">
								<div className="grid h-12 w-12 place-items-center rounded-2xl bg-[color:var(--brand-green)] text-sm font-bold text-white shadow-sm">{step.number}</div>
								<div>
									<h3 className="text-xl font-semibold tracking-[-0.03em] text-[color:var(--ink)]">{step.title}</h3>
									<p className="mt-2 text-sm leading-7 text-[color:var(--muted)]">{step.description}</p>
								</div>
							</div>
							{index < processSteps.length - 1 ? <div className="hidden md:block absolute top-1/2 right-[-0.5rem] h-px w-4 bg-[color:var(--border)]" /> : null}
						</div>
					))}
				</div>
			</div>
		</Section>
	);
}

function ReviewsSection() {
	return (
		<Section id="bewertungen" className="bg-[color:var(--surface)]">
			<div className="space-y-10">
				<SectionHeading
					eyebrow="Bewertungen"
					title="Echte Stimmen von Fahrschülern"
					description="Persönliche, ehrliche Rückmeldungen aus dem bestehenden Auftritt."
				/>

				<div className="grid gap-4 lg:grid-cols-3">
					{testimonials.map((item) => (
						<article key={item.name} className="rounded-[1.35rem] border border-[color:var(--border)] bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.04)]">
							<StarRow />
							<p className="mt-5 text-base leading-8 text-[color:var(--ink)]">“{item.quote}”</p>
							<p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--muted)]">{item.name}</p>
						</article>
					))}
				</div>

				<div className="rounded-[1.75rem] border border-[color:var(--border)] bg-white px-6 py-8 text-center sm:px-10">
					<p className="text-2xl font-semibold tracking-[-0.03em] text-[color:var(--ink)] sm:text-3xl">Auch bereit für deinen Führerschein?</p>
					<div className="mt-5 flex justify-center">
						<PrimaryButton href="#kontakt">Jetzt anmelden</PrimaryButton>
					</div>
				</div>
			</div>
		</Section>
	);
}

function FaqSection() {
	const [openIndex, setOpenIndex] = useState<number | null>(0);
	return (
		<Section id="faq" className="bg-white">
			<div className="space-y-10">
				<SectionHeading
					eyebrow="FAQ"
					title="Antworten auf die wichtigsten Fragen"
					description="Kompakt, ehrlich und ohne unnötigen Ballast."
				/>

				<div className="mx-auto max-w-4xl space-y-3">
					{faqItems.map((item, index) => {
						const isOpen = openIndex === index;
						return (
							<div key={item.question} className="rounded-[1.25rem] border border-[color:var(--border)] bg-[color:var(--surface)]">
								<button
									type="button"
									className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
									onClick={() => setOpenIndex(isOpen ? null : index)}
									aria-expanded={isOpen}
								>
									<span className="text-base font-semibold text-[color:var(--ink)]">{item.question}</span>
									<ChevronDown className={`shrink-0 text-[color:var(--brand-green)] transition-transform ${isOpen ? 'rotate-180' : ''}`} size={18} aria-hidden="true" />
								</button>
								<div className={`grid transition-all duration-300 ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
									<div className="overflow-hidden px-5 pb-4 text-sm leading-7 text-[color:var(--muted)]">
										{item.answer}
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</Section>
	);
}

function ContactSection() {
	const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '', classType: '', message: '' });
	const [consent, setConsent] = useState(false);

	const handleSubmit = useCallback((event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const subject = encodeURIComponent('Anfrage Fahrschule am Ostendplatz');
		const body = encodeURIComponent(
			[
				`Vorname: ${form.firstName}`,
				`Nachname: ${form.lastName}`,
				`E-Mail: ${form.email}`,
				`Telefonnummer: ${form.phone}`,
				`Führerscheinklasse: ${form.classType}`,
				'',
				form.message,
			].join('\n')
		);
		window.location.href = `mailto:${brand.email}?subject=${subject}&body=${body}`;
	}, [form]);

	return (
		<Section id="kontakt" className="bg-[color:var(--surface)]">
			<div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
				<div>
					<SectionHeading
						eyebrow="Kontakt"
						title="Bereit, loszufahren?"
						description="Melde dich jetzt bei uns und starte deinen Weg zum Führerschein. Wir beraten dich persönlich und beantworten gerne deine Fragen."
					/>

					<div className="mt-8 space-y-4 rounded-[1.5rem] border border-[color:var(--border)] bg-white p-6">
						<div className="flex items-start gap-4">
							<div className="grid h-11 w-11 place-items-center rounded-2xl bg-[#edf7eb] text-[color:var(--brand-green)]"><Phone size={18} aria-hidden="true" /></div>
							<div>
								<p className="text-xs uppercase tracking-[0.22em] text-[color:var(--muted)]">Anrufen</p>
								<a href={`tel:${brand.phone.replace(/\s+/g, '')}`} className="mt-1 inline-block text-lg font-semibold text-[color:var(--ink)] hover:text-[color:var(--brand-green)]">{brand.phone}</a>
							</div>
						</div>
						<div className="flex items-start gap-4">
							<div className="grid h-11 w-11 place-items-center rounded-2xl bg-[#edf7eb] text-[color:var(--brand-green)]"><MessageCircle size={18} aria-hidden="true" /></div>
							<div>
								<p className="text-xs uppercase tracking-[0.22em] text-[color:var(--muted)]">WhatsApp</p>
								<a href={`https://wa.me/${brand.whatsapp.replace(/\D/g, '')}?text=Hi%20ich%20habe%20Interesse%20an%20einem%20F%C3%BChrerschein.`} target="_blank" rel="noopener noreferrer" className="mt-1 inline-block text-lg font-semibold text-[color:var(--ink)] hover:text-[color:var(--brand-green)]">{brand.whatsapp}</a>
							</div>
						</div>
						<div className="flex items-start gap-4">
							<div className="grid h-11 w-11 place-items-center rounded-2xl bg-[#edf7eb] text-[color:var(--brand-green)]"><Mail size={18} aria-hidden="true" /></div>
							<div>
								<p className="text-xs uppercase tracking-[0.22em] text-[color:var(--muted)]">E-Mail</p>
								<a href={`mailto:${brand.email}`} className="mt-1 inline-block text-lg font-semibold text-[color:var(--ink)] hover:text-[color:var(--brand-green)]">{brand.email}</a>
							</div>
						</div>
					</div>
				</div>

				<div className="rounded-[1.75rem] border border-[color:var(--border)] bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
					<h3 className="text-2xl font-semibold tracking-[-0.03em] text-[color:var(--ink)]">Anfrage senden</h3>
					<p className="mt-2 text-sm leading-7 text-[color:var(--muted)]">Deine Anfrage wird als E-Mail vorbereitet. So bleibt es einfach und transparent.</p>

					<form className="mt-6 grid gap-4" onSubmit={handleSubmit}>
						<div className="grid gap-4 sm:grid-cols-2">
							<label className="grid gap-2 text-sm font-medium text-[color:var(--ink)]">
								Vorname
								<input required value={form.firstName} onChange={(e) => setForm((prev) => ({ ...prev, firstName: e.target.value }))} className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-3 text-base outline-none transition focus:border-[color:var(--brand-green)] focus:bg-white" />
							</label>
							<label className="grid gap-2 text-sm font-medium text-[color:var(--ink)]">
								Nachname
								<input required value={form.lastName} onChange={(e) => setForm((prev) => ({ ...prev, lastName: e.target.value }))} className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-3 text-base outline-none transition focus:border-[color:var(--brand-green)] focus:bg-white" />
							</label>
						</div>

						<div className="grid gap-4 sm:grid-cols-2">
							<label className="grid gap-2 text-sm font-medium text-[color:var(--ink)]">
								E-Mail
								<input required type="email" value={form.email} onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))} className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-3 text-base outline-none transition focus:border-[color:var(--brand-green)] focus:bg-white" />
							</label>
							<label className="grid gap-2 text-sm font-medium text-[color:var(--ink)]">
								Telefonnummer
								<input required type="tel" value={form.phone} onChange={(e) => setForm((prev) => ({ ...prev, phone: e.target.value }))} className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-3 text-base outline-none transition focus:border-[color:var(--brand-green)] focus:bg-white" />
							</label>
						</div>

						<label className="grid gap-2 text-sm font-medium text-[color:var(--ink)]">
							Führerscheinklasse
							<select required value={form.classType} onChange={(e) => setForm((prev) => ({ ...prev, classType: e.target.value }))} className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-3 text-base outline-none transition focus:border-[color:var(--brand-green)] focus:bg-white">
								<option value="">Bitte wählen</option>
								{licenseCategories.map((item) => <option key={item.name} value={item.name}>{item.name}</option>)}
							</select>
						</label>

						<label className="grid gap-2 text-sm font-medium text-[color:var(--ink)]">
							Nachricht
							<textarea required rows={5} value={form.message} onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))} className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-3 text-base outline-none transition focus:border-[color:var(--brand-green)] focus:bg-white" placeholder="Was möchtest du machen?" />
						</label>

						<label className="flex items-start gap-3 rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-4 text-sm text-[color:var(--muted)]">
							<input type="checkbox" required checked={consent} onChange={(e) => setConsent(e.target.checked)} className="mt-1 h-4 w-4 rounded border-[color:var(--border)] text-[color:var(--brand-green)] focus:ring-[color:var(--brand-green)]" />
							<span>Ich stimme zu, dass meine Angaben zur Bearbeitung meiner Anfrage verwendet werden. Weitere Informationen findest du in der Datenschutzerklärung.</span>
						</label>

						<button type="submit" className="inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--brand-green)] px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_35px_rgba(70,178,62,0.22)] transition hover:-translate-y-0.5 hover:bg-[#3fa736] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--brand-green)] focus-visible:ring-offset-2">
							Anfrage senden
							<ArrowRight size={16} aria-hidden="true" />
						</button>
					</form>
				</div>
			</div>
		</Section>
	);
}

function LocationSection() {
	return (
		<Section className="bg-[color:var(--surface-strong)] text-white">
			<div className="grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-stretch">
				<div>
					<Eyebrow>Standort</Eyebrow>
					<h2 className="mt-3 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">Direkt am Ostendplatz in Stuttgart</h2>
					<p className="mt-4 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">{brand.address.street}<br />{brand.address.postalCode} {brand.address.city}</p>
					<div className="mt-8 flex flex-wrap gap-3">
						<PrimaryButton href={brand.routeUrl} external>Route planen</PrimaryButton>
						<SecondaryButton href="#kontakt">Kontakt aufnehmen</SecondaryButton>
					</div>
					<div className="mt-8 grid gap-4 sm:grid-cols-2">
						<div className="rounded-[1.35rem] border border-white/10 bg-white/6 p-5 backdrop-blur-sm">
							<p className="text-xs uppercase tracking-[0.25em] text-white/55">Adresse</p>
							<p className="mt-2 text-lg font-semibold text-white">{brand.address.street}</p>
							<p className="text-sm text-white/75">{brand.address.postalCode} {brand.address.city}</p>
						</div>
						<div className="rounded-[1.35rem] border border-white/10 bg-white/6 p-5 backdrop-blur-sm">
							<p className="text-xs uppercase tracking-[0.25em] text-white/55">Kontakt</p>
							<p className="mt-2 text-lg font-semibold text-white">Schnell erreichbar</p>
							<p className="text-sm text-white/75">WhatsApp, Telefon oder E-Mail</p>
						</div>
					</div>
				</div>

				<div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(70,178,62,0.18),transparent_35%),linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] p-5">
					<div className="flex h-full min-h-[22rem] items-center justify-center rounded-[1.35rem] border border-dashed border-white/15 bg-black/20 p-8 text-center">
						<div className="max-w-sm">
							<MapPinned className="mx-auto text-[color:var(--brand-green)]" size={42} aria-hidden="true" />
							<p className="mt-4 text-xl font-semibold text-white">Ostendstraße 52, 70188 Stuttgart</p>
							<p className="mt-3 text-sm leading-7 text-white/70">Hier kannst du uns ganz einfach vor Ort finden. Die Karte ist bewusst ruhig gehalten und später leicht durch eine echte Kartenintegration ersetzbar.</p>
						</div>
					</div>
				</div>
			</div>
		</Section>
	);
}

function Footer() {
	return (
		<footer className="border-t border-[color:var(--border)] bg-white px-5 py-12 sm:px-6 lg:px-8">
			<div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
				<div>
					<LogoMark />
					<p className="mt-4 max-w-md text-sm leading-7 text-[color:var(--muted)]">{brand.description}</p>
				</div>

				<div>
					<p className="text-sm font-semibold uppercase tracking-[0.25em] text-[color:var(--ink)]">Navigation</p>
					<ul className="mt-4 space-y-3 text-sm text-[color:var(--muted)]">
						{navigation.map((item) => <li key={item.label}><a href={item.href} className="hover:text-[color:var(--brand-green)]">{item.label}</a></li>)}
					</ul>
				</div>

				<div>
					<p className="text-sm font-semibold uppercase tracking-[0.25em] text-[color:var(--ink)]">Kontakt</p>
					<ul className="mt-4 space-y-3 text-sm text-[color:var(--muted)]">
						<li>{brand.address.street}</li>
						<li>{brand.address.postalCode} {brand.address.city}</li>
						<li><a href={`tel:${brand.phone.replace(/\s+/g, '')}`} className="hover:text-[color:var(--brand-green)]">{brand.phone}</a></li>
						<li><a href={`https://wa.me/${brand.whatsapp.replace(/\D/g, '')}`} className="hover:text-[color:var(--brand-green)]">{brand.whatsapp}</a></li>
						<li><a href={`mailto:${brand.email}`} className="hover:text-[color:var(--brand-green)]">{brand.email}</a></li>
					</ul>
				</div>

				<div>
					<p className="text-sm font-semibold uppercase tracking-[0.25em] text-[color:var(--ink)]">Rechtliches</p>
					<ul className="mt-4 space-y-3 text-sm text-[color:var(--muted)]">
						<li><a href="/impressum" className="hover:text-[color:var(--brand-green)]">Impressum</a></li>
						<li><a href="/datenschutz" className="hover:text-[color:var(--brand-green)]">Datenschutz</a></li>
						<li><a href={brand.socials.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-[color:var(--brand-green)]">Facebook</a></li>
						<li><a href={brand.socials.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-[color:var(--brand-green)]">Instagram</a></li>
					</ul>
				</div>
			</div>
		</footer>
	);
}

function FloatingContactBar() {
	return (
		<div className="fixed inset-x-0 bottom-0 z-50 border-t border-[color:var(--border)] bg-white/95 px-3 py-3 backdrop-blur-lg md:hidden">
			<div className="mx-auto grid max-w-7xl grid-cols-3 gap-2">
				<a href={`https://wa.me/${brand.whatsapp.replace(/\D/g, '')}?text=Hallo%20ich%20interessiere%20mich%20f%C3%BCr%20den%20F%C3%BChrerschein.`} target="_blank" rel="noopener noreferrer" className="rounded-full bg-[#edf7eb] px-3 py-3 text-center text-sm font-semibold text-[color:var(--ink)]">WhatsApp</a>
				<a href={`tel:${brand.phone.replace(/\s+/g, '')}`} className="rounded-full bg-[color:var(--surface)] px-3 py-3 text-center text-sm font-semibold text-[color:var(--ink)]">Anrufen</a>
				<a href="#kontakt" className="rounded-full bg-[color:var(--brand-green)] px-3 py-3 text-center text-sm font-semibold text-white">Jetzt anmelden</a>
			</div>
		</div>
	);
}

function MobileNavigation({ open, onToggle, onClose }: { open: boolean; onToggle: () => void; onClose: () => void }) {
	return (
		<>
			<button type="button" onClick={onToggle} className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--border)] bg-white text-[color:var(--ink)] md:hidden" aria-label="Menü öffnen oder schließen">
				{open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
			</button>

			{open ? (
					<div className="fixed left-5 right-5 top-20 rounded-[1.5rem] border border-[color:var(--border)] bg-white p-4 shadow-[0_20px_60px_rgba(15,23,42,0.1)] md:hidden">
					<div className="grid gap-2">
						{navigation.map((item) => (
							<a key={item.label} href={item.href} onClick={onClose} className="rounded-2xl px-4 py-3 text-sm font-medium text-[color:var(--ink)] hover:bg-[color:var(--surface)]">{item.label}</a>
						))}
						<div className="mt-2 grid gap-2">
							<PrimaryButton href="#kontakt" className="w-full">Jetzt anmelden</PrimaryButton>
							<SecondaryButton href={`https://wa.me/${brand.whatsapp.replace(/\D/g, '')}?text=Hallo%20ich%20habe%20eine%20Frage%20zum%20F%C3%BChrerschein.`} external className="w-full">WhatsApp</SecondaryButton>
						</div>
					</div>
				</div>
			) : null}
		</>
	);
}

function Navbar() {
	const [open, setOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 12);
		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	useEffect(() => {
		const onResize = () => {
			if (window.innerWidth >= 768) setOpen(false);
		};
		window.addEventListener('resize', onResize);
		return () => window.removeEventListener('resize', onResize);
	}, []);

	const navClass = scrolled ? 'bg-white/92 shadow-[0_14px_40px_rgba(15,23,42,0.08)] backdrop-blur-xl' : 'bg-white/80 backdrop-blur-md';

	return (
		<header className={`sticky top-0 z-40 border-b border-[color:var(--border)] transition-all duration-300 ${navClass}`}>
			<div className="relative mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-6 lg:px-8">
				<a href="#startseite" className="shrink-0">
					<LogoMark />
				</a>

				<nav className="hidden items-center gap-7 md:flex">
					{navigation.map((item) => (
						<a key={item.label} href={item.href} className="text-sm font-medium text-[color:var(--ink)] transition hover:text-[color:var(--brand-green)]">{item.label}</a>
					))}
				</nav>

				<div className="hidden items-center gap-3 md:flex">
					<SecondaryButton href={`https://wa.me/${brand.whatsapp.replace(/\D/g, '')}?text=Hallo%20ich%20habe%20Interesse%20an%20einem%20F%C3%BChrerschein.`} external>WhatsApp</SecondaryButton>
					<PrimaryButton href="#kontakt">Jetzt anmelden</PrimaryButton>
				</div>

				<div className="relative md:hidden">
					<MobileNavigation open={open} onToggle={() => setOpen((value) => !value)} onClose={() => setOpen(false)} />
				</div>
			</div>
		</header>
	);
}

function MainContent() {
	return (
		<main className="pb-24 md:pb-0">
			<Hero />
			<TrustStrip />
			<LicenseCategoriesSection />
			<BenefitsSection />
			<InstructorSection />
			<ProcessSection />
			<ReviewsSection />
			<FaqSection />
			<ContactSection />
			<LocationSection />
		</main>
	);
}

export default function SitePage() {
	const structuredData = useMemo(() => ({
		'@context': 'https://schema.org',
		'@type': 'DrivingSchool',
		name: brand.name,
		description: brand.description,
		url: 'https://fahrschule-am-ostendplatz.de/',
		telephone: brand.phone,
		email: brand.email,
		address: {
			'@type': 'PostalAddress',
			streetAddress: brand.address.street,
			addressLocality: brand.address.city,
			postalCode: brand.address.postalCode,
			addressCountry: 'DE',
		},
		areaServed: 'Stuttgart',
	}), []);

	const faqSchema = useMemo(() => ({
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		mainEntity: faqItems.map((item) => ({
			'@type': 'Question',
			name: item.question,
			acceptedAnswer: {
				'@type': 'Answer',
				text: item.answer,
			},
		})),
	}), []);

	return (
		<div className="min-h-screen bg-white">
			<Navbar />
			<MainContent />
			<Footer />
			<FloatingContactBar />
			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
		</div>
	);
}
