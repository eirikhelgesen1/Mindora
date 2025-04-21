"use client";

import LegalLayout from "@/components/layout/LegalLayout";
import Navbar from "@/components/navbar-with-popover";
import "@/styles/mindora-colors.css";

export default function TermsPage() {
  return (
    <><Navbar /><LegalLayout>
      <h1 className="mt-8 mb-4 font-bold">Brukervilkår</h1>
      <p className="mb-10">Denne avtalen regulerer din bruk av Mindora og dets tjenester. Ved å bruke Mindora bekrefter du at du har lest, forstått og akseptert disse vilkårene.</p>

      <h2 className="mt-12 mb-4 font-bold">1. Konto og tilgang</h2>
      <p className="mb-10">Du er ansvarlig for å sikre at innloggingsinformasjonen din er konfidensiell. All aktivitet som skjer under din konto anses å være din. Tjenesten tilbys for personlig og ikke-kommersiell bruk med mindre det foreligger en uttrykkelig avtale om annet.</p>

      <h2 className="mt-12 mb-4 font-bold">2. Innhold og eierskap</h2>
      <p className="mb-10">Du beholder eierskapet til alt innhold du oppretter i Mindora, inkludert refleksjoner, mål og dokumenter. Ved bruk av tjenesten gir du oss en begrenset lisens til å lagre, vise og behandle innholdet for å levere og forbedre tjenestene. Denne lisensen opphører når du sletter innholdet eller avslutter din konto.</p>

      <h2 className="mt-12 mb-4 font-bold">3. Tjenestebeskrivelse</h2>
      <p className="mb-10">Mindora er et digitalt verktøy for personlig utvikling, produktivitet og selvinnsikt. Plattformen tilbyr funksjoner som målsporing, refleksjonsverktøy, AI-assistert samtale og dokumenthåndtering. Enkelte funksjoner er tilgjengelig gratis, mens premium-funksjoner krever abonnement.</p>

      <h2 className="mt-12 mb-4 font-bold">4. Betaling og abonnement</h2>
      <p className="mb-10">Betalte funksjoner faktureres gjennom vår betalingsleverandør Stripe. Du godtar Stripes <a href="https://stripe.com/legal" target="_blank" rel="noopener noreferrer">vilkår og betingelser</a> ved å benytte betalingsfunksjonen. Abonnement fornyes automatisk med mindre det avsluttes før ny periode starter. Ingen refusjon gis for påbegynte perioder.</p>

      <h2 className="mt-12 mb-4 font-bold">5. Bruk av AI og begrensninger</h2>
      <p className="mb-10">AI-funksjonalitet i Mindora benytter store språkmodeller (LLMs) for å gi støtte og veiledning. Disse modellene er kraftige, men kan gi unøyaktige eller upassende svar. Informasjonen er ikke ment å erstatte profesjonell rådgivning innen jus, helse eller økonomi. Brukeren er selv ansvarlig for hvordan informasjonen benyttes.</p>

      <h2 className="mt-12 mb-4 font-bold">6. Ansvarsbegrensning</h2>
      <p className="mb-10">Mindora tilbys «som den er» uten garantier for tilgjengelighet, nøyaktighet eller resultater. Vi fraskriver oss ethvert ansvar for direkte eller indirekte tap som måtte oppstå som følge av bruk av tjenesten. Vi forbeholder oss retten til å endre, avbryte eller begrense tilgang til tjenesten når som helst.</p>

      <h2 className="mt-12 mb-4 font-bold">7. Brudd på vilkår</h2>
      <p className="mb-10">Ved mistanke om misbruk, brudd på lov eller brudd på disse vilkårene kan vi suspendere eller avslutte tilgangen din uten forvarsel. Dette inkluderer retten til å fjerne eller blokkere innhold vi anser som skadelig eller upassende.</p>

      <h2 className="mt-12 mb-4 font-bold">8. Endringer i vilkårene</h2>
      <p className="mb-10">Vi forbeholder oss retten til å oppdatere disse brukervilkårene. Vesentlige endringer vil bli varslet på nettstedet eller via e-post. Ved fortsatt bruk etter publisering av endringer anses disse som akseptert.</p>

      <h2 className="mt-12 mb-4 font-bold">9. Kontakt</h2>
      <p className="mb-10">Har du spørsmål eller tilbakemeldinger? Ta kontakt med oss på <a href="mailto:kontakt@mindora.no">kontakt@mindora.no</a>.</p>
    </LegalLayout></>
  );
}
