# Mindora

**Bygg vaner som varer. Reflekter med mening. Fokuser uten stress.**

Mindora er en AI-drevet coaching- og produktivitetsapp som hjelper brukere – spesielt studenter – med å utvikle gode vaner, reflektere systematisk og holde fokus i en travel hverdag.

---

## 🌟 Funksjoner

- **Mål- og vanebygger**: Sett deg personlige mål, bygg gode vaner, og følg progresjonen visuelt.
- **Refleksjonsdagbok**: Svar på daglige refleksjonsspørsmål og få AI-genererte innsikter.
- **Fokus-app**: Bruk Pomodoro-teknikken for å jobbe effektivt, og bli belønnet av AI-coachen.
- **AI-støtte**: Motta personlig tilpassede tips og refleksjoner basert på dine aktiviteter.
- **Stripe-integrert betaling**: Abonner eller kjøp livstidslisens enkelt og sikkert.
- **Sikker autentisering**: E-postbasert og OAuth via Supabase.

---

## 🔧 Teknologi

- **Next.js 14** (React-basert rammeverk)
- **Supabase** (backend: database, autentisering)
- **Stripe** (betalingsløsning)
- **TypeScript** (statisk typet JavaScript)
- **Tailwind CSS** (responsiv styling)
- **PostCSS & ESLint** (kodekvalitet og optimalisering)

---

## 🔍 Kom i gang

### Installasjon

1. Klon repoet:
```bash
git clone https://github.com/eirikhelgesen1/Mindora.git
```

2. Installer avhengigheter:
```bash
npm install
```

3. Sett opp miljøvariabler:

Lag en `.env.local`-fil og fyll inn:
```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
STRIPE_SECRET_KEY=your_stripe_secret_key
NEXT_PUBLIC_STRIPE_PUBLIC_KEY=your_stripe_public_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
```

4. Start utviklingsserver:
```bash
npm run dev
```

Applikasjonen vil kjøre på `http://localhost:3000`

---

## 📅 Veikart

- [x] MVP: Vanebygging, refleksjon, fokus-modus
- [ ] Mobiloptimalisering
- [ ] Pushvarsler for vaner og refleksjoner
- [ ] Flere AI-coach-profiler (velg stil/personlighet)
- [ ] Flerspråklig støtte (norsk og engelsk)

---

## 📚 Lisens

Dette prosjektet er lisensiert under [MIT-lisensen](LICENSE).

---

## 💬 Kontakt

Eirik Helgesen • [LinkedIn](https://www.linkedin.com/in/eirikhelgesen1/) • [GitHub](https://github.com/eirikhelgesen1)

Har du forslag, ønsker eller finner du bugs? Ikke nøl med å åpne en Issue eller lage en Pull Request!

---

**Live Demo:** [https://mindora-plum.vercel.app](https://mindora-plum.vercel.app)