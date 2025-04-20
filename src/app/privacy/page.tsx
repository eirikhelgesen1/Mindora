// src/app/privacy/page.tsx
export default function PrivacyPage() {
    return (
      <main className="max-w-3xl mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-6">Personvernerklæring</h1>
        <p className="mb-4">
          Denne personvernerklæringen forklarer hvordan vi samler inn, bruker og beskytter
          dine personopplysninger gjennom bruk av Mindora.
        </p>
  
        <h2 className="text-xl font-semibold mt-6 mb-2">Hvilke data vi samler inn</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>Navn og e-postadresse ved registrering</li>
          <li>Innlogging og brukshistorikk via Supabase</li>
          <li>Betalingsinformasjon via Stripe (lagres ikke av oss)</li>
          <li>ReCAPTCHA-data (IP, enhet, adferd) for sikkerhet</li>
          <li>Tekst brukeren skriver i AI-refleksjoner</li>
        </ul>
  
        <h2 className="text-xl font-semibold mt-6 mb-2">Formål med innsamling</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>Administrere din konto og tilgang til tjenester</li>
          <li>Forbedre brukeropplevelsen og tilpasse innhold</li>
          <li>Hindre misbruk og sikre plattformen (reCAPTCHA)</li>
          <li>Sende deg relevante e-poster og varsler</li>
        </ul>
  
        <h2 className="text-xl font-semibold mt-6 mb-2">Dine rettigheter</h2>
        <p className="mb-4">
          Du kan når som helst be om innsyn i hvilke data vi har lagret, be om retting,
          begrensning, eller sletting av dine opplysninger ved å kontakte oss.
        </p>
  
        <h2 className="text-xl font-semibold mt-6 mb-2">Kontakt</h2>
        <p>
          Behandlingsansvarlig: Eirik Helgesen<br />
          E-post: kontakt@mindora.no
        </p>
      </main>
    )
  }