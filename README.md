## Wstęp
Aplikacja internetowa, pozwalająca urzytkownikowi przesyłać zdjędcia, następnie aplikacja rozwiąże te zdjęcia i zaznaczy odpowiednie elementy.


## Instalacja
# BACKEND
Windows:
1. Pobieramy Dockera z https://docs.docker.com/desktop/windows/install/
2. Otwieramy Powershella jako administrator i wklejamy:
`docker pull adamgwozdz00/recognizer_api`

3. Po pobraniu wklejamy
`docker run -d -p 5001:5001 adamgwozdz00/recognizer_api`

Szczegółowa instrukcja w README: https://github.com/adamgwozdz00/recognizer_rest
# FRONTEND
1. Pobieramy nodejs https://nodejs.org/en/download/ w wersji LTS
2. Pobieramy to repozytorium `git clone https://github.com/adamgwozdz00/recognizerOSP.git` (lub zielony przycisk code i pobieramy zipa).
3. Wchodzimy w folder recognizerOSP przy użyciu powershella i wklejamy `npm install`
4. Budujemy projekt wklejamy `npm run vite build`

## Uruchomienie
1. Uruchamiamy aplikację `npm run vite dev`
2. Wpisujemy w przeglądarkę `localhost:3000`

## Działanie
- Klikamy **Get Started**
- Klikamy kontener z ikoną zdjęcia z plusem, wybieramy zdjęcie lub przeciągamy go na to pole  
- Klikamy **Find Śrubki** i czekamy aż *śrubkas* i *nakrentkas* zaznaczą się na zdjęciu.
