# Kurs. - aplikacja webowa wspomagająca nauczanie przedmiotu Elementy Teorii Automatów i	Języków Formalnych

## 1. Studium przypadku 
Aplikacja ma takich aktorów jak:
 - klient niezalogowany,
 - klient zalogowany,
 - administrator.
 
 Klient Niezalogowany MOŻE:
- przeglądać ofertę strony, dostepne kursy (tzn. glowna strone bez dostepu do kursu),
- logować się (e-mail*, hasło*),
- zarejestrować się (e-mail*, hasło*),
- skontaktować się z administracja (imię, e-mail*, treść*)

Klient Zalogowany  MOŻE:
- przeglądać ofertę strony, dostepne kursy (tzn. glowna strone z dostepem do kursu),
- wypełniać kurs - (zapoznać się z teorią, zadania z rozwiązaniami + test jednokrotnego wyboru sprawdzający wiedzę),
- przegladac informacje o koncie, 
- skontaktować się z administracją,
- wylogować się.

Administrator MOŻE:
- dodawać, edytować, usuwać tresci kursow,
- sprawdzać konto konkretnego użytkownika,
- sprawdzać, usuwać maile firmowe,
- wylogować się.

## 2. Już zostało zrobione:
1. Widok główny aplikacji, tzn. można przeglądać ofertę strony oraz dostepne kursy.
2. Widok logowania i rejestracji (użytkownik zalogowany może się wylogować). (jwt, tokeny)
3. Baza danych.

## 3. Do zrobienia: 
1. Widok kursu z materiałami, zadaniami oraz testami.
2. Widok profilu użytkownika.
3. Widok panelu administratora.

## 4. Widoki zrobione:

## 5. Widoki do zrobienia schemat:

## 6. Jak przetestować aplikacje, inaczej instrukcja: 
1. Trzeba pobrać wszystkie pliki z folderów client oraz server (albo cały folder kurs);
2. Otworzyć folder w VScode;
3. Otworzyć dwa terminału dla servera i dla clienta;
4. Wchodzimy na stronę https://nodejs.org/en/ i dokonujemy instalacji Node.js;
5. Wpisujemy ```npm init``` w obu terminałach;
6. Po inicjalizacji ```npm start``` tak samo w obu;
7. Bazę danych mam w programie MySqlWorkbench;


