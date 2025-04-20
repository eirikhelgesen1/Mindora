// src/app/cookies/page.tsx
export default function CookiesPage() {
    return (
      <main className="max-w-3xl mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-6">Informasjonskapsler & reCAPTCHA</h1>
  
        <p className="mb-4">
          Mindora bruker informasjonskapsler (cookies) og reCAPTCHA for å beskytte nettstedet og
          gi deg en trygg og funksjonell opplevelse.
        </p>
  
        <h2 className="text-xl font-semibold mt-6 mb-2">Hva vi bruker</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>Nødvendige cookies for innlogging og sikkerhet</li>
          <li>Google reCAPTCHA v3 for å hindre bots og spam</li>
          <li>Stripe cookies ved betaling (kun ved bruk)</li>
        </ul>
  
        <h2 className="text-xl font-semibold mt-6 mb-2">Google reCAPTCHA</h2>
        <p className="mb-4">
          Denne nettsiden er beskyttet av reCAPTCHA. Google sin
          <a href="https://policies.google.com/privacy" className="text-indigo-600 underline ml-1">personvernerklæring</a>
          og
          <a href="https://policies.google.com/terms" className="text-indigo-600 underline ml-1">vilkår</a>
          gjelder.
        </p>
  
        <h2 className="text-xl font-semibold mt-6 mb-2">Valg og kontroll</h2>
        <p className="mb-4">
          Du kan velge å blokkere cookies i nettleseren din, men noen funksjoner (som innlogging) vil
          da ikke fungere.
        </p>
      </main>
    )
  }