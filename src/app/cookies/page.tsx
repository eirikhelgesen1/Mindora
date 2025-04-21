"use client";

import LegalLayout from "@/components/layout/LegalLayout";
import Navbar from "@/components/navbar-with-popover";
import "@/styles/mindora-colors.css";

export default function CookiesPage() {
  return (
    <><Navbar /><LegalLayout>
      <h1 className="mt-8 mb-4">Retningslinjer for informasjonskapsler</h1>
      <p className="mb-10">Denne siden forklarer hvordan Mindora bruker informasjonskapsler (cookies) for å sikre en trygg og funksjonell tjeneste.</p>

      <h2 className="mt-12 mb-4 font-bold">1. Hva er informasjonskapsler?</h2>
      <p className="mb-10">Informasjonskapsler er små tekstfiler som lagres på enheten din når du besøker et nettsted. De hjelper med å identifisere brukersesjoner, muliggjøre innlogging, og sikre at tjenesten fungerer som den skal.</p>

      <h2 className="mt-12 mb-4 font-bold">2. Hvilke cookies vi bruker</h2>
      <p className="mb-10">
        Vi bruker kun nødvendige cookies:
        <ul className="list-disc list-inside">
          <li><strong>Autentiseringscookies</strong> – for å holde deg innlogget i løpet av en økt.</li>
          <li><strong>Sikkerhetscookies</strong> – for å beskytte mot angrep og misbruk av skjemaer (f.eks. reCAPTCHA).</li>
          <li><strong>Sesjonsstyring</strong> – for å huske midlertidig informasjon mens du bruker tjenesten.</li>
        </ul>
      </p>

      <h2 className="mt-12 mb-4 font-bold">3. Ingen tredjeparts sporing</h2>
      <p className="mb-10">Vi bruker ikke cookies for annonsering, markedsføring eller tredjeparts sporing. Vi verdsetter personvernet ditt og bruker ikke analyseverktøy som sender data til eksterne parter.</p>

      <h2 className="mt-12 mb-4 font-bold">4. Hvordan du kan administrere cookies</h2>
      <p className="mb-10">Du kan endre innstillinger i nettleseren din for å blokkere eller slette informasjonskapsler. Merk at enkelte funksjoner i Mindora ikke vil fungere uten nødvendige cookies.</p>

      <h2 className="mt-12 mb-4 font-bold">5. Endringer</h2>
      <p className="mb-10">Vi kan oppdatere våre cookie-retningslinjer ved behov. Endringer publiseres på denne siden med oppdatert dato.</p>

      <h2 className="mt-12 mb-4 font-bold">6. Kontakt</h2>
      <p className="mb-10">Har du spørsmål om informasjonskapsler? Kontakt oss på <a href="mailto:kontakt@mindora.no">kontakt@mindora.no</a>.</p>
    </LegalLayout></>
  );
}
