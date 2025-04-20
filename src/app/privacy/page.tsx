// src/app/privacy/page.tsx
import LegalLayout from '@/components/layout/LegalLayout'
import Navbar from "@/components/navbar-with-popover"
import '@/styles/mindora-colors.css';

export default function PrivacyPage() {
  return (
    <><Navbar /><LegalLayout>
      <h1>Personvernerklæring</h1>
      <p>Denne personvernerklæringen forklarer hvordan vi samler inn, bruker og beskytter dine personopplysninger gjennom bruk av Mindora.</p>

      <h2>Hvilke data vi samler inn</h2>
      <ul>
        <li>Navn og e-postadresse ved registrering</li>
        <li>Innlogging og brukshistorikk via Supabase</li>
        <li>Betalingsinformasjon via Stripe (lagres ikke av oss)</li>
        <li>ReCAPTCHA-data (IP, enhet, adferd) for sikkerhet</li>
        <li>Tekst brukeren skriver i AI-refleksjoner</li>
      </ul>

      <h2>Formål med innsamling</h2>
      <ul>
        <li>Administrere din konto og tilgang til tjenester</li>
        <li>Forbedre brukeropplevelsen og tilpasse innhold</li>
        <li>Hindre misbruk og sikre plattformen (reCAPTCHA)</li>
        <li>Sende deg relevante e-poster og varsler</li>
      </ul>

      <h2>Dine rettigheter</h2>
      <p>Du kan når som helst be om innsyn i hvilke data vi har lagret, be om retting, begrensning, eller sletting av dine opplysninger ved å kontakte oss.</p>

      <h2>Kontakt</h2>
      <p>
        Behandlingsansvarlig: Eirik Helgesen<br />
        E-post: kontakt@mindora.no
      </p>
    </LegalLayout></>
  )
}