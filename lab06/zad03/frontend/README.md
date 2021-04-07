# Frontend developement - Projekt - Marek Połom

Strona korzysta z dwóch API. YouTube oraz mojego własnego API do komunikacji z bazą danych (MongoDB).
Baza danych zawarta jest w folderze db.zip.

Do poprawnego uruchomienia projektu należy wypakować bazę do osobnego folderu oraz pobrać wszystkie zależności.
Baza odpalana jest poleceniem:

```bash
$ node index.js
```

Do poprawnego działania bazy wymagane jest MongoDB!

Obecna konfiguracja powinna automatycznie połączyć się z bazą MongoDB działającą w kontenerze Docker.

Aby wprowadzić własny klucz do API YouTube należy zastąpić go w pliku src/state/ducks/youtube/operations.js