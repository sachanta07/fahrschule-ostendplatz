'use client';

import { useState } from 'react';
import { Menu, X, Phone, MapPin, Clock } from 'lucide-react';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="flex flex-col">
            <h1 className="text-lg font-normal text-gray-900 tracking-tight">Fahrschule am Ostendplatz</h1>
            <p className="text-xs text-gray-600">Frankfurt</p>
          </div>
          
          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex gap-12">
            <a href="#journey" className="text-sm text-gray-700 hover:text-gray-900 transition">Ablauf</a>
            <a href="#angebote" className="text-sm text-gray-700 hover:text-gray-900 transition">Angebote</a>
            <a href="#erfolg" className="text-sm text-gray-700 hover:text-gray-900 transition">Erfolg</a>
            <a href="#kontakt" className="text-sm text-gray-700 hover:text-gray-900 transition">Kontakt</a>
          </div>

          {/* CTA Button */}
          <a href="https://wa.me/491777796291/?text=Hi%20%C3%9Cmit,%20ich%20h%C3%A4tte%20gerne%20Informationen%20zu%20..."
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block bg-red-700 text-white px-5 py-2 text-sm hover:bg-red-800 transition"
          >
            Jetzt starten
          </a>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="flex flex-col gap-3 px-6 py-4">
              <a href="#journey" className="text-gray-700 hover:text-gray-900 text-sm">Ablauf</a>
              <a href="#angebote" className="text-gray-700 hover:text-gray-900 text-sm">Angebote</a>
              <a href="#erfolg" className="text-gray-700 hover:text-gray-900 text-sm">Erfolg</a>
              <a href="#kontakt" className="text-gray-700 hover:text-gray-900 text-sm">Kontakt</a>
              <a href="https://wa.me/491777796291/?text=Hi%20%C3%9Cmit,%20ich%20h%C3%A4tte%20gerne%20Informationen%20zu%20..."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-700 text-white px-4 py-2 text-center text-sm mt-2"
              >
                Jetzt starten
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="bg-white pt-24 pb-32 px-6 lg:px-8">
        <div className="max-w-2xl mx-auto lg:mx-0 lg:max-w-none">
          <div className="mb-8">
            <p className="text-sm text-gray-600 mb-4">Willkommen bei der Fahrschule am Ostendplatz</p>
            <h2 className="text-5xl lg:text-6xl font-light text-gray-900 leading-tight tracking-tight mb-8">
              Vom nervösen Schüler zum sicheren Fahrer
            </h2>
            <p className="text-lg text-gray-700 max-w-xl leading-relaxed mb-8">
              Das ist die Realität unserer Arbeit. Ümit versteht die Angst am Anfang. Er weiß, dass regelmäßige Fahrstunden, geduldiges Teaching und echte Unterstützung den Unterschied ausmachen. Nach wenigen Wochen sehen Sie die Veränderung selbst.
            </p>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="https://wa.me/491777796291/?text=Hi%20%C3%9Cmit,%20ich%20h%C3%A4tte%20gerne%20Informationen%20zu%20..."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-red-700 text-white px-6 py-3 text-base hover:bg-red-800 transition w-full sm:w-auto text-center"
            >
              Anfrage stellen via WhatsApp
            </a>
            <a href="tel:+491777796291"
              className="inline-block border border-gray-900 text-gray-900 px-6 py-3 text-base hover:bg-gray-50 transition w-full sm:w-auto text-center"
            >
              +49 177 7796291 anrufen
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="angebote" className="bg-gray-50 py-32 px-6 lg:px-8 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h3 className="text-4xl lg:text-5xl font-light text-gray-900 mb-4">
              Unsere Fokus
            </h3>
            <p className="text-lg text-gray-700 max-w-2xl">
              Jeder Mensch lernt anders. Deshalb bieten wir maßgeschneiderte Programme für verschiedene Ziele und Situationen.
            </p>
          </div>

          <div className="space-y-16">
            {/* Auto */}
            <div className="grid lg:grid-cols-3 gap-12">
              <div>
                <p className="text-sm text-gray-600 mb-2">Für Anfänger und Wiedereinsteiger</p>
                <h4 className="text-2xl font-light text-gray-900 mb-4">PKW Führerschein</h4>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Klasse B. Du lernst von Grund auf, mit regelmäßigen Fahrstunden und durchdachtem Lernplan. Weniger Stress, mehr Fortschritt.
                </p>
              </div>
              <div className="lg:col-span-2 bg-white p-8 border border-gray-200">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-red-700 font-light mt-1">—</span>
                    <span>Intensive Einzelfahrten mit kontinuierlichem Feedback</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-700 font-light mt-1">—</span>
                    <span>Flexible Zeiten für Schule, Beruf oder Familie</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-700 font-light mt-1">—</span>
                    <span>Fahrzeuge, die sich fahren lassen (nicht kämpfen lassen)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-700 font-light mt-1">—</span>
                    <span>Klare Kosten, keine versteckten Gebühren</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Zweirad */}
            <div className="grid lg:grid-cols-3 gap-12">
              <div>
                <p className="text-sm text-gray-600 mb-2">Für Motorrad-Begeisterte</p>
                <h4 className="text-2xl font-light text-gray-900 mb-4">Motorrad & Roller</h4>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Klasse A1, A2, oder A. Sicherheit ist hier nicht verhandelbar. Du lernst richtige Technik, nicht nur Balanceieren.
                </p>
              </div>
              <div className="lg:col-span-2 bg-white p-8 border border-gray-200">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-red-700 font-light mt-1">—</span>
                    <span>Expert:innenunterricht von erfahrenen Fahrlehrern</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-700 font-light mt-1">—</span>
                    <span>Sicherheitsfokus: Bremsen, Kurven, Gefahrenerkennung</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-700 font-light mt-1">—</span>
                    <span>Moderne Maschinen für das Training</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-700 font-light mt-1">—</span>
                    <span>Kleine Gruppen für besseres Lernen</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* B196 */}
            <div className="grid lg:grid-cols-3 gap-12">
              <div>
                <p className="text-sm text-gray-600 mb-2">Schnelle Lösung für Autofahrer</p>
                <h4 className="text-2xl font-light text-gray-900 mb-4">B196 Zusatz</h4>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Du hast Klasse B, möchtest aber Motorräder fahren? Das geht schneller, als du denkst. Nur wenige Stunden, keine große Prüfung.
                </p>
              </div>
              <div className="lg:col-span-2 bg-white p-8 border border-gray-200">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-red-700 font-light mt-1">—</span>
                    <span>Schnell: 3–5 Fahrstunden für Sicherheit</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-700 font-light mt-1">—</span>
                    <span>Günstiger als ein voller Motorrad-Führerschein</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-700 font-light mt-1">—</span>
                    <span>Keine Prüfung, nur praktisches Training</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-700 font-light mt-1">—</span>
                    <span>Rechtlich valide, europaweit gültig</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section id="erfolg" className="py-32 px-6 lg:px-8 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h3 className="text-4xl lg:text-5xl font-light text-gray-900 mb-4">
              Was passiert nach wenigen Wochen
            </h3>
            <p className="text-lg text-gray-700 max-w-2xl">
              Schüler berichten von der Veränderung, die sie selbst bemerkt haben. Das ist das Ergebnis von Geduld und Struktur.
            </p>
          </div>

          <div className="space-y-12">
            {/* Story 1 */}
            <div className="border-l-2 border-red-700 pl-8 py-6">
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                "Alles Bestens gelaufen. Ümit nimmt sich Zeit und hält sich an die Abstimmung. Klare Weiterempfehlung."
              </p>
              <p className="text-sm text-gray-600">
                <strong>Elvis Avdic</strong> — Führerschein bestanden
              </p>
            </div>

            {/* Story 2 */}
            <div className="border-l-2 border-red-700 pl-8 py-6">
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                "Vielen lieben Dank für die tollen Fahrstunden, ich kann dich nur weiterempfehlen."
              </p>
              <p className="text-sm text-gray-600">
                <strong>Hakan Basli</strong> — Führerschein bestanden
              </p>
            </div>

            {/* Story 3 */}
            <div className="border-l-2 border-red-700 pl-8 py-6">
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                "Super Fahrlehrer. Er lebt für seinen Beruf und das merkt man! Er setzt sich für seine Schüler ein."
              </p>
              <p className="text-sm text-gray-600">
                <strong>Elena Sommer</strong> — Führerschein bestanden
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontakt" className="py-32 px-6 lg:px-8 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20">
            {/* Contact Info */}
            <div>
              <h3 className="text-4xl lg:text-5xl font-light text-gray-900 mb-12">
                Direkter Kontakt
              </h3>
              
              <div className="space-y-8">
                <div>
                  <p className="text-sm text-gray-600 mb-2">Telefon</p>
                  <a href="tel:+491777796291" className="text-xl text-gray-900 hover:text-red-700 transition">
                    +49 177 7796291
                  </a>
                </div>

                <div>
                  <p className="text-sm text-gray-600 mb-2">Sofort erreichen</p>
                  <a href="https://wa.me/491777796291/?text=Hi%20%C3%9Cmit,%20ich%20h%C3%A4tte%20gerne%20Informationen%20zu%20..."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl text-gray-900 hover:text-red-700 transition"
                  >
                    WhatsApp schreiben
                  </a>
                </div>

                <div>
                  <p className="text-sm text-gray-600 mb-2">Standort</p>
                  <p className="text-lg text-gray-900">
                    Frankfurt am Main<br/>
                    Deutschland
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-600 mb-2">Zeiten</p>
                  <p className="text-lg text-gray-900">
                    Nach Vereinbarung<br/>
                    Flexibel für dich
                  </p>
                </div>
              </div>
            </div>

            {/* Social & Info */}
            <div>
              <h3 className="text-lg font-light text-gray-900 mb-8">
                Folge uns für Einblicke
              </h3>
              <div className="space-y-4 mb-12">
                <a href="https://www.facebook.com/Fahrschule-am-Ostendplatz-321790862056753"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-700 hover:text-red-700 transition"
                >
                  Facebook →
                </a>
                <a href="https://www.instagram.com/fahrschule.am.ostendplatz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-700 hover:text-red-700 transition"
                >
                  Instagram →
                </a>
              </div>

              <div className="border-t border-gray-300 pt-8">
                <p className="text-sm text-gray-700 leading-relaxed">
                  Die erste Fahrstunde ist oft die nervöseste. Das verstehen wir. Die zweite ist schon besser. Nach ein paar Wochen fragst du dich, warum du so nervös warst.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-16 px-6 lg:px-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12 pb-12 border-b border-gray-800">
            <div>
              <h5 className="font-light text-white mb-4">Fahrschule am Ostendplatz</h5>
              <p className="text-sm text-gray-400">Professionelle Fahrausbildung in Frankfurt.</p>
            </div>
            <div>
              <h5 className="font-light text-white mb-4">Angebote</h5>
              <ul className="space-y-2 text-sm">
                <li><a href="#angebote" className="text-gray-400 hover:text-white transition">PKW Führerschein</a></li>
                <li><a href="#angebote" className="text-gray-400 hover:text-white transition">Motorrad</a></li>
                <li><a href="#angebote" className="text-gray-400 hover:text-white transition">B196 Zusatz</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-light text-white mb-4">Kontakt</h5>
              <ul className="space-y-2 text-sm">
                <li><a href="tel:+491777796291" className="text-gray-400 hover:text-white transition">+49 177 7796291</a></li>
                <li><a href="https://wa.me/491777796291" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">WhatsApp</a></li>
              </ul>
            </div>
          </div>
          <div className="text-sm text-gray-500 text-center">
            <p>&copy; 2026 Fahrschule am Ostendplatz. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
