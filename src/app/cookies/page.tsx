// src/app/cookies/page.tsx
import LegalLayout from '@/components/layout/LegalLayout'

export default function CookiesPage() {
  return (
    <LegalLayout>
      <h1>Informasjonskapsler & reCAPTCHA</h1>

      <p>Mindora bruker informasjonskapsler (cookies) og reCAPTCHA for å beskytte nettstedet og gi deg en trygg og funksjonell opplevelse.</p>

      <h2>Hva vi bruker</h2>
      <ul>
        <li>Nødvendige cookies for innlogging og sikkerhet</li>
        <li>Google reCAPTCHA v3 for å hindre bots og spam</li>
        <li>Stripe cookies ved betaling (kun ved bruk)</li>
      </ul>

      <h2>Google reCAPTCHA</h2>
      <p>
        Denne nettsiden er beskyttet av reCAPTCHA. Google sin
        <a href="https://policies.google.com/privacy" className="text-indigo-600 underline ml-1">personvernerklæring</a>
        og
        <a href="https://policies.google.com/terms" className="text-indigo-600 underline ml-1">vilkår</a>
        gjelder.
      </p>

      <h2>Valg og kontroll</h2>
      <p>Du kan velge å blokkere cookies i nettleseren din, men noen funksjoner (som innlogging) vil da ikke fungere.</p>
    </LegalLayout>
  )
}