// src/app/terms/page.tsx
import LegalLayout from '@/components/layout/LegalLayout'

export default function TermsPage() {
  return (
    <LegalLayout>
      <h1>Brukervilkår</h1>
      <p>Ved å bruke Mindora godtar du følgende vilkår for bruk av tjenesten.</p>

      <h2>1. Konto og tilgang</h2>
      <p>Du er ansvarlig for å holde innloggingsinformasjonen din trygg. Tjenesten er kun for personlig, ikke-kommersiell bruk med mindre annet er avtalt.</p>

      <h2>2. Innhold og eierskap</h2>
      <p>Du beholder eierskapet til dine refleksjoner og notater. Vi får begrenset rett til å behandle disse for å kunne vise dem tilbake til deg og forbedre tjenesten.</p>

      <h2>3. Ansvarsbegrensning</h2>
      <p>Vi gir ingen garantier om tjenestens tilgjengelighet eller at AI-assistentens svar er korrekte. Du bruker tjenesten på eget ansvar.</p>

      <h2>4. Brudd på vilkår</h2>
      <p>Ved brudd på vilkår kan vi stenge kontoen din og slette innhold uten forvarsel.</p>

      <h2>5. Kontakt</h2>
      <p>Spørsmål kan rettes til kontakt@mindora.no</p>
    </LegalLayout>
  )
}