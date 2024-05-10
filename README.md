# React resume
## Beskrivning
Projektet är en kortfattad sida om mig med möjligheter att se mina projekt och att kontakta mig.

## Stacken
Projektet nyttjar Vite med React. Vite är en alternativ bundler till Webpack. Den är mycket snabbare, med mer inbyggd funktionalitet.
Projektet nyttjar även SCSS-moduler för tydligare struktur och bättre utvecklarupplevelse. 

## Integrationer
- Integration mot GitHubs REST-API för att hämta information om repositories

## Bibliotek/Hooks
- För globalt state-management används jotai. Jotai är ett lightweight-alternativ till de vanligaste global state-management biblioteken. I jotai använder man Atoms istället för slices. Mycket funktionalitet saknas om man jämför med Redux, men utvecklarupplevelsen är bättre då det är mindre boilerplate, förutsatt att man inte behöver den extra funktionalitet som libs som Redux erbjuder. Detta används i projektet för darkmode-hantering.
- För navigationslänkarna används useMemo, vilket är Reacts inbyggda hook för att skippa omläsning vid varje re-render. Om \<Header /> skulle renderas om, skulle links inte sättas om, vilket sparar (i detta fallet minimal) prestanda. Detta är en bra praxis för alla konstanter som faktiskt ska vara _konstanta_ i React.

## Hur man kör projektet
Först krävs att man kör `npm ci` för att installera alla node_modules. För att köra projektet i devmiljö använder man `npm run dev`. Om man vill bygga för produktion använder man `npm run build`.