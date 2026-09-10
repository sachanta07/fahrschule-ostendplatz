'use client';

import { useState } from 'react';
import { Menu, X, ChevronRight, Star, MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">Fahrschule am Ostendplatz</h1>
          
          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex gap-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 transition">Home</a>
            <a href="#services" className="text-gray-700 hover:text-blue-600 transition">Services</a>
            <a href="#reviews" className="text-gray-700 hover:text-blue-600 transition">Reviews</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition">Contact</a>
          </div>

          {/* CTA Button */}
          <a href="https://wa.me/491777796291/?text=Hi%20%C3%9Cmit,%20ich%20h%C3%A4tte%20gerne%20Informationen%20zu%20..."
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Anmelden
          </a>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="flex flex-col gap-4 px-4 py-4">
              <a href="#home" className="text-gray-700 hover:text-blue-600">Home</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600">Services</a>
              <a href="#reviews" className="text-gray-700 hover:text-blue-600">Reviews</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a>
              <a href="https://wa.me/491777796291/?text=Hi%20%C3%9Cmit,%20ich%20h%C3%A4tte%20gerne%20Informationen%20zu%20..."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg text-center"
              >
                Anmelden
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Willkommen bei der Fahrschule am Ostendplatz!
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Dein zuverlässiger Partner für sichere und kompetente Fahrausbildung
          </p>
          <p className="text-lg md:text-xl mb-12 text-blue-50 max-w-3xl mx-auto">
            Gerne helfen wir dir, endlich mobil zu werden – ob auf zwei oder vier Rädern. 
            Mit modernen Fahrzeugen und erfahrenen Fahrlehrern begleiten wir dich sicher zum Führerschein.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/491777796291/?text=Hi%20%C3%9Cmit,%20ich%20h%C3%A4tte%20gerne%20Informationen%20zu%20..."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition flex items-center justify-center gap-2"
            >
              Jetzt anmelden <ChevronRight size={20} />
            </a>
            <a href="#contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition"
            >
              Mehr erfahren
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Unsere Kurse
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Auto Kurs */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition transform hover:scale-105">
              <div className="bg-blue-600 h-32 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm11 0c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
                </svg>
              </div>
              <div className="p-6">
                <h4 className="text-2xl font-bold mb-4 text-gray-800">Auto Führerschein</h4>
                <p className="text-gray-600 mb-6">
                  Moderne Fahrschulung für PKW Führerschein (Klasse B). 
                  Erfahrene Fahrinstruktoren begleiten dich sicher zur Bestehung.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Intensive Fahrausbildung</li>
                  <li>✓ Moderne Fahrzeuge</li>
                  <li>✓ Flexible Zeiten</li>
                </ul>
                <a href="https://wa.me/491777796291/?text=Hi%20%C3%9Cmit,%20ich%20h%C3%A4tte%20gerne%20Informationen%20zum%20Auto%20Kurs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 font-semibold hover:text-blue-800"
                >
                  Mehr Info →
                </a>
              </div>
            </div>

            {/* Zweirad Kurs */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition transform hover:scale-105">
              <div className="bg-green-600 h-32 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 11h-8v7h8v-7zm4 8v-6h-4.18C21.16 11.04 19.85 9.5 18 9.5s-3.16 1.54-2.82 3.5H8V5h12c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2zm-18-2h4V7H5v10zm6-6h6V7h-6v4z"/>
                </svg>
              </div>
              <div className="p-6">
                <h4 className="text-2xl font-bold mb-4 text-gray-800">Zweirad (Motorrad)</h4>
                <p className="text-gray-600 mb-6">
                  Sicherheits- und Fahrtechniktraining für Motorräder 
                  aller Klassen (A1, A2, A).
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Expert:innen Unterricht</li>
                  <li>✓ Praktische Übungen</li>
                  <li>✓ Sicherheit an der See</li>
                </ul>
                <a href="https://wa.me/491777796291/?text=Hi%20%C3%9Cmit,%20ich%20h%C3%A4tte%20gerne%20Informationen%20zum%20Zweirad%20Kurs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 font-semibold hover:text-green-800"
                >
                  Mehr Info →
                </a>
              </div>
            </div>

            {/* B196 Zusatz */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition transform hover:scale-105">
              <div className="bg-orange-600 h-32 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
                </svg>
              </div>
              <div className="p-6">
                <h4 className="text-2xl font-bold mb-4 text-gray-800">B196 Zusatz</h4>
                <p className="text-gray-600 mb-6">
                  Neue Möglichkeit: Fahre automatisch getriebene Motorräder 
                  bis 125cc mit deinem PKW-Führerschein (B).
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Kurzer Kurs</li>
                  <li>✓ Günstiger & Schneller</li>
                  <li>✓ Ohne zusätzliche Prüfung</li>
                </ul>
                <a href="https://wa.me/491777796291/?text=Hi%20%C3%9Cmit,%20ich%20h%C3%A4tte%20gerne%20Informationen%20zum%20B196%20Zusatz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-600 font-semibold hover:text-orange-800"
                >
                  Mehr Info →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="reviews" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Das sagen unsere Schüler:innen
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Review 1 */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "Alles Bestens gelaufen. Ümit nimmt sich Zeit und hält sich an die Abstimmung. Klare Weiterempfehlung!"
              </p>
              <p className="font-semibold text-gray-800">Elvis Avdic</p>
              <p className="text-gray-600 text-sm">Bestanden ✓</p>
            </div>

            {/* Review 2 */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "Vielen lieben Dank für die tollen Fahrstunden, ich kann dich nur weiterempfehlen."
              </p>
              <p className="font-semibold text-gray-800">Hakan Basli</p>
              <p className="text-gray-600 text-sm">Bestanden ✓</p>
            </div>

            {/* Review 3 */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "Super Fahrlehrer. Er lebt für seinen Beruf und das merkt man! Er setzt sich für seine Schüler ein."
              </p>
              <p className="font-semibold text-gray-800">Elena Sommer</p>
              <p className="text-gray-600 text-sm">Bestanden ✓</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Kontaktieren Sie uns
          </h3>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <MapPin className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Adresse</h4>
                  <p className="text-gray-700">
                    Fahrschule am Ostendplatz<br/>
                    Frankfurt am Main<br/>
                    Deutschland
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Phone className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Telefon</h4>
                  <a href="tel:+491777796291" className="text-blue-600 hover:text-blue-800">
                    +49 177 7796291
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Mail className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">E-Mail</h4>
                  <p className="text-gray-700">Kontakt via WhatsApp oder Telefon</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Clock className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Öffnungszeiten</h4>
                  <p className="text-gray-700">
                    Mo - Fr: Nach Vereinbarung<br/>
                    Sa - So: Nach Vereinbarung
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-6 justify-center">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h4 className="text-2xl font-bold mb-6 text-gray-800">
                  Werden Sie noch heute Schüler:in!
                </h4>
                <p className="text-gray-700 mb-8">
                  Kontaktieren Sie uns via WhatsApp, Telefon oder persönlich. 
                  Wir beantworten gerne all Ihre Fragen und freuen uns auf Sie!
                </p>
                
                <div className="space-y-4">
                  <a href="https://wa.me/491777796291/?text=Hi%20%C3%9Cmit,%20ich%20h%C3%A4tte%20gerne%20Informationen%20zu%20..."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-green-500 text-white py-3 rounded-lg font-semibold text-center hover:bg-green-600 transition"
                  >
                    💬 WhatsApp schreiben
                  </a>
                  <a href="tel:+491777796291"
                    className="block w-full bg-blue-600 text-white py-3 rounded-lg font-semibold text-center hover:bg-blue-700 transition"
                  >
                    📞 Anrufen
                  </a>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h4 className="text-lg font-bold mb-4 text-gray-800">Folgen Sie uns</h4>
                <div className="flex gap-4">
                  <a href="https://www.facebook.com/Fahrschule-am-Ostendplatz-321790862056753"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-blue-600 text-white py-2 rounded text-center font-semibold hover:bg-blue-700 transition"
                  >
                    Facebook
                  </a>
                  <a href="https://www.instagram.com/fahrschule.am.ostendplatz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-pink-600 text-white py-2 rounded text-center font-semibold hover:bg-pink-700 transition"
                  >
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h5 className="font-bold text-white mb-4">Fahrschule am Ostendplatz</h5>
              <p>Ihre zuverlässige Fahrschule in Frankfurt am Main.</p>
            </div>
            <div>
              <h5 className="font-bold text-white mb-4">Services</h5>
              <ul className="space-y-2">
                <li><a href="#services" className="hover:text-white transition">Auto Kurse</a></li>
                <li><a href="#services" className="hover:text-white transition">Zweirad Kurse</a></li>
                <li><a href="#services" className="hover:text-white transition">B196 Zusatz</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold text-white mb-4">Kontakt</h5>
              <ul className="space-y-2">
                <li><a href="tel:+491777796291" className="hover:text-white transition">+49 177 7796291</a></li>
                <li><a href="#contact" className="hover:text-white transition">Kontaktformular</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-sm">
            <p>&copy; 2026 Fahrschule am Ostendplatz. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
