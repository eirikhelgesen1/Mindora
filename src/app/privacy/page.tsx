"use client";

import LegalLayout from "@/components/layout/LegalLayout";
import Navbar from "@/components/navbar-with-popover";
import "@/styles/mindora-colors.css";

export default function PrivacyPage() {
  return (
    <><Navbar /><LegalLayout>
      <h1 className="mt-8 mb-4">Personvernerklæring</h1>
      <p className="mb-10">Denne personvernerklæringen forklarer hvordan Mindora samler inn, bruker og beskytter dine personopplysninger i samsvar med personopplysningsloven og EUs personvernforordning (GDPR).</p>

      <h2 className="mt-12 mb-4 font-bold">1. Behandlingsansvarlig</h2>
      <p className="mb-10">Mindora er behandlingsansvarlig for personopplysninger som samles inn gjennom vår plattform. For spørsmål om personvern, kontakt <a href="mailto:kontakt@mindora.no">kontakt@mindora.no</a>.</p>

      <h2 className="mt-12 mb-4 font-bold">2. Hvilke personopplysninger vi samler inn</h2>
      <p className="mb-10">
        Vi samler inn følgende:
        <ul className="list-disc list-inside">
          <li>Navn, e-postadresse og påloggingsinformasjon</li>
          <li>Refleksjoner, mål, vaner og annen tekstlig informasjon du aktivt gir til AI-assistenten</li>
          <li>Opplastede dokumenter og filer</li>
          <li>Tekniske data som IP-adresse, enhetstype og nettleserinformasjon</li>
        </ul>
      </p>

      <h2 className="mt-12 mb-4 font-bold">3. Formål med behandlingen</h2>
      <p className="mb-10">Personopplysningene brukes for å tilby deg tjenesten, forbedre brukeropplevelsen, analysere bruksmønstre, gi AI-støtte og sikre teknisk stabilitet og sikkerhet.</p>

      <h2 className="mt-12 mb-4 font-bold">4. Behandlingsgrunnlag</h2>
      <p className="mb-10">Vi behandler personopplysninger med grunnlag i samtykke (GDPR art. 6 nr. 1 a), avtale (b), og i noen tilfeller berettiget interesse (f), eksempelvis for å forbedre tjenestene våre og forhindre misbruk.</p>

      <h2 className="mt-12 mb-4 font-bold">5. Bruk av tredjepartsleverandører</h2>
      <p className="mb-10">
        Vi deler data kun med pålitelige underleverandører:
        <ul className="list-disc list-inside">
          <li><strong>Stripe</strong> – for betalingshåndtering</li>
          <li><strong>Supabase</strong> – for datalagring og brukerautentisering</li>
          <li><strong>Google reCAPTCHA</strong> – for å beskytte skjemaer mot misbruk</li>
          <li><strong>LLM/AI-modell</strong> – for å generere innhold og respons basert på dine input (kan behandles anonymt)</li>
        </ul>
      </p>

      <h2 className="mt-12 mb-4 font-bold">6. Informasjonskapsler (cookies)</h2>
      <p className="mb-10">Vi bruker kun nødvendige informasjonskapsler for funksjoner som pålogging, sesjonskontroll og sikkerhet. Vi bruker ikke cookies for annonser eller sporing fra tredjeparter.</p>

      <h2 className="mt-12 mb-4 font-bold">7. Lagring og sikkerhet</h2>
      <p className="mb-10">Personopplysninger lagres på servere i EU/EØS med høy grad av sikkerhet. Vi bruker kryptering, rollebasert tilgang, sikker autentisering og regelmessige sikkerhetsrevisjoner.</p>

      <h2 className="mt-12 mb-4 font-bold">8. Dine rettigheter</h2>
      <p className="mb-10">
        Du har rett til:
        <ul className="list-disc list-inside">
          <li>Innsyn i hvilke opplysninger vi har lagret om deg</li>
          <li>Rettelse eller sletting av personopplysninger</li>
          <li>Å trekke tilbake samtykke</li>
          <li>Å be om dataportabilitet</li>
        </ul>
        Henvendelser sendes til <a href="mailto:kontakt@mindora.no">kontakt@mindora.no</a>
      </p>

      <h2 className="mt-12 mb-4 font-bold">9. Oppbevaringstid</h2>
      <p className="mb-10">Vi lagrer personopplysninger så lenge det er nødvendig for å oppfylle formålet med behandlingen eller så lenge du har en aktiv brukerprofil. Du kan til enhver tid be om sletting.</p>

      <h2 className="mt-12 mb-4 font-bold">10. Endringer i erklæringen</h2>
      <p className="mb-10">Denne erklæringen kan bli oppdatert. Vesentlige endringer varsles. Oppdatert versjon er alltid tilgjengelig på nettstedet.</p>

      <h2 className="mt-12 mb-4 font-bold">11. Kontakt</h2>
      <p className="mb-10">Har du spørsmål eller ønsker å utøve dine rettigheter, kontakt oss på <a href="mailto:kontakt@mindora.no">kontakt@mindora.no</a>.</p>
    </LegalLayout></>
  );
}