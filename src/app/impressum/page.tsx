import { brand } from '@/lib/site-data';

export default function ImpressumPage() {
	return (
		<main className="mx-auto max-w-4xl px-5 py-16 sm:px-6 lg:px-8">
			<h1 className="text-4xl font-semibold tracking-[-0.04em] text-[color:var(--ink)]">Impressum</h1>
			<div className="mt-8 space-y-4 text-sm leading-7 text-[color:var(--muted)]">
				<p><strong className="text-[color:var(--ink)]">{brand.name}</strong></p>
				<p>{brand.address.street}<br />{brand.address.postalCode} {brand.address.city}</p>
				<p>Telefon: <a href={`tel:${brand.phone.replace(/\s+/g, '')}`} className="text-[color:var(--brand-green)]">{brand.phone}</a></p>
				<p>E-Mail: <a href={`mailto:${brand.email}`} className="text-[color:var(--brand-green)]">{brand.email}</a></p>
				<p>Weitere Pflichtangaben ergänzen wir, sobald die offizielle Rechtsform und Vertretungsdaten vorliegen.</p>
			</div>
		</main>
	);
}
