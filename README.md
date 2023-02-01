# Kurs. - aplikacja webowa wspomagająca nauczanie przedmiotu Elementy Teorii Automatów i	Języków Formalnych

## 1. Studium przypadku 
Aplikacja ma takich aktorów jak:
 - klient niezalogowany,
 - klient zalogowany - 0,
 - administrator - 1.
 
 Klient Niezalogowany MOŻE:
- przeglądać ofertę strony, dostepne kursy (tzn. glowna strone bez dostepu do kursu),
- logować się (username*, hasło*),
- zarejestrować się (username*, e-mail*, hasło*),
- skontaktować się z administracja (imię, e-mail*, treść*)

Klient Zalogowany  MOŻE:
- przeglądać ofertę strony, dostepne kursy (tzn. glowna strone z dostepem do kursu),
- wypełniać kurs - (zapoznać się z teorią, zadania z rozwiązaniami + test jednokrotnego wyboru sprawdzający wiedzę),
- przegladac informacje o koncie, 
- skontaktować się z administracją,
- wylogować się.

Administrator MOŻE:
- dodawać, edytować, usuwać tresci kursów,
- sprawdzać konto konkretnego użytkownika,
- sprawdzać, usuwać maile firmowe,
- wylogować się.

## 2. Już zostało zrobione:
1. Widok główny aplikacji, tzn. można przeglądać ofertę strony oraz dostepne kursy.
2. Widok logowania i rejestracji (użytkownik zalogowany może się wylogować). (jwt, tokeny)
3. Baza danych.
4. Rozdzielenie zwykłego użytkownika zalogowanego od administratora.

## 3. Do zrobienia: 
1. Widok kursu z materiałami, zadaniami oraz testami.
2. Widok profilu użytkownika.
3. Widok panelu administratora.

## 4. Widoki zrobione:
![image](https://user-images.githubusercontent.com/72127610/216113860-05a74266-f814-47b6-a223-06e3dfa744ee.png)
![image](https://user-images.githubusercontent.com/72127610/216113923-bd7abd98-4b9d-4fec-a413-11ad8e088e5d.png)
![image](https://user-images.githubusercontent.com/72127610/216113956-41c8454d-8ed2-4b16-b72e-42125027e7f2.png)
![image](https://user-images.githubusercontent.com/72127610/216114091-8d2b0ae5-45f6-44a7-b81e-b904797af182.png)
![image](https://user-images.githubusercontent.com/72127610/216114173-3e651b2a-0264-4f1e-843c-3d0ce977f46c.png)
![image](https://user-images.githubusercontent.com/72127610/216114216-f4b5f842-bbc7-4d29-887c-bf9eb54f7f28.png)
![image](https://user-images.githubusercontent.com/72127610/216114407-9c1d3262-68d8-4b24-acd4-95f1a6ea6a94.png)
![image](https://user-images.githubusercontent.com/72127610/216114501-ec0840b7-b589-4cc3-959f-bc2a45e6916e.png)

## 5. Widoki do zrobienia schemat:

## 6. Jak przetestować aplikacje, inaczej instrukcja: 
1. Trzeba pobrać wszystkie pliki z folderów client oraz server (albo cały folder kurs);
2. Otworzyć folder w VScode;
3. Otworzyć dwa terminału dla servera i dla clienta;
4. Wchodzimy na stronę https://nodejs.org/en/ i dokonujemy instalacji Node.js;
5. Wpisujemy ```npm init``` w obu terminałach;
6. Po inicjalizacji ```npm start``` tak samo w obu;
7. Bazę danych mam w programie MySqlWorkbench;


