# React + TypeScript Viktoriin

See on interaktiivne valikvastustega viktoriinirakendus, tehtud **React 18** ja **TypeScript** abil.  
Rakendus kuvab kasutajale küsimusi ükshaaval, annab kohest tagasisidet ja näitab lõpptulemust koos tabeliga.

## Rakenduse demo

Rakendust saab proovida siin:

[https://quiz-apps.vercel.app](https://quiz-apps-ashen.vercel.app/)

## Funktsionaalsus

- 4 küsimust vähemalt, igaühel 3 vastusevarianti
- Kohene tagasiside (Õige/Vale vastus)
- Lõpptulemuste tabel koos kasutaja vastustega
- Lõppskoor ja isikupärastatud sõnum
- Kujundus järgib Statistikaameti CVI-d

## Projektistruktuur

quiz-app/
├─ public/
│ └─ index.html
├─ src/
│ ├─ App.tsx
│ ├─ index.tsx
│ ├─ App.css
│ └─ index.css
├─ tests/
│ └─ quiz.spec.js # Playwright E2E testid
├─ package.json
├─ tsconfig.json
└─ README.md

## Tehnoloogiad

- React
- TypeScript
- Playwright
- Node.js

## Nõuded

- Node.js ≥ 18
- npm ≥ 9
- TypeScript
- Playwright (testide jaoks)

## Paigaldamine ja käivitamine

1. Laadi projekt alla või klooni GitHubist:

```bash
git clone https://github.com/KaarelNoole/quiz-app.git
cd quiz-app

Installi sõltuvused:

npm install

Käivita dev server:

npm start

Ava brauseris: http://localhost:3000

Testimine (Playwright)

Installi Playwright (kui pole juba devDependencies):

npm install -D @playwright/test
npx playwright install

Käivita testid:

npx playwright test

Testid kontrollivad:

Küsimuse kuvamist

Õige ja vale vastuse käitumist

Punktisumma muutumist

Lõpptulemuse tabeli ja skoori kuvamist
