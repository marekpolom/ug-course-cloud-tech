# Projekt Technologie Chmurowe - Marek Połom
### Linki do DockerHub'a:
### [DockerHub Frontend](https://hub.docker.com/r/mpolom/frontend)
### [DockerHub Backend](https://hub.docker.com/r/mpolom/backend)
---
## Aby utworzyć Namespace należy wykonać ten skrypt:
```console
./create.sh
```
## Aby usunąć Namespace należy wykonać ten skrypt:
```console
./delete.sh
```
---
## 1. Namespace development
---
### Aby uruchomić tą przestrzeń należy wykonać te komendy z wewnątrz katalogu ```kubectl-development``` (Wykonać w przypadku gdy skrypt ```./create.sh``` nie zadziałał):
1. Utworzyć Namespace:
   ```console
   kubectl apply -f ./development-namespace.yaml
   ```
2. Utworzyć Persistent Volume dla bazy mongo:
   ```console
   kubectl apply -f ./mongo-pv.yaml
   ```
3. Utworzyć Persistent Volume Claim dla bazy mongo:
   ```console
   kubectl apply -f ./mongo-pvc.yaml
   ```
4. Odpalić pozostałem pliki konfiguracyjne:
   ```console
   kubectl apply -f .
   ```
---
### Aby skorzystać z aplikacji w wersji ```development``` należy wejść pod adres ```http://localhost/development```
---
### Na potrzeby projektu przygotowałem kilka wersji aplikacji (dev-0.1, dev-0.2, dev-0.3, dev-1.0). Aby skorzystać z innej wersji aplikacji należy zmienić jej numer w plikach ```backend-deploy.yaml``` oraz ```frontend-deploy.yaml``` oraz wykonać komendę:
```console 
kubectl apply -f .
```
### Wersji frontendowej odpowiada ten sam numer co wersji backendowej.
---
### Aby wyświetlić historię zmian deploya należy wykonać:
```console
kubectl rollout history deployment [nazwa] --namespace development
```
### Gdzie ```[nazwa]``` to ```frontend``` lub ```backend``` w zależności od tego, którą historie wersji chcemy wyświetlić.
---
### Aby przywrócić stan aplikacji do poprzedniej wersji należy wykonać komendę:
```console
kubectl rollout undo deployment [nazwa] --to-revision=1 --namespace development
```
### Gdzie ```[nazwa]``` to ```frontend``` lub ```backend``` w zależności od tego, którego deploya chcemy przywrócić.
---
### Dla tej przestrzeni postanowiłem utworzyć jedną replike dla Frontendu oraz dwie dla Backendu. Frontend nie potrzebuje więcej niż jedna replika do poprawnego działania. Dzięki dwóm replikom na Backendzie w razie awarii jednej z nich Backend nadal będzie działał. Rozłożenie ruchu na backendzie nie ma dużego znaczenia w przypadku wersji developerskiej.
---
---
## 2. Namespace production
---
### Aby uruchomić tą przestrzeń należy wykonać te komendy z wewnątrz katalogu ```kubectl-production``` (Wykonać w przypadku gdy skrypt ```./create.sh``` nie zadziałał):
1. Utworzyć Namespace:
   ```console
   kubectl apply -f ./production-namespace.yaml
   ```
2. Utworzyć Persistent Volume dla bazy mongo:
   ```console
   kubectl apply -f ./mongo-pv.yaml
   ```
3. Utworzyć Persistent Volume Claim dla bazy mongo:
   ```console
   kubectl apply -f ./mongo-pvc.yaml
   ```
4. Odpalić pozostałem pliki konfiguracyjne:
   ```console
   kubectl apply -f .
   ```
---
### Aby skorzystać z aplikacji w wersji ```production``` należy wejść pod adres ```http://localhost/production```
---
### Production zawiera tylko jedną wersję (prod-1.0)
---
### Dla tej przestrzeni postanowiłem utworzyć jedną replike dla Frontendu oraz cztery dla Backendu. Frontend nie potrzebuje więcej niż jedna replika do poprawnego działania. Dzięki czterem replikom na Backendzie w razie awarii jednej (lub paru) z nich Backend nadal będzie działał. Taka ilość replik pozwala także na rozłorzenie ruchu na Backendzie; powinno to przyspieszyć działanie aplikacji (jednak nie ma to zbytnio znaczenia w przypadku tak małej aplikacji).
---
---
## 3. Działanie aplikacji
---
### Frontend posiada (w ostatniej wersji) 4 operacje które można wykonać (dodawanie, odejmowanie, mnożenie i dzielenie), wyświetlanie wyniku operacji, oraz historię operacji (można usuwać poszczególne rekordy z historii).
---
### Backend zawiera (w ostatniej wersji) 6 endpointów:
* /add - dodaje dwie liczby i zwraca wynik,
* /sub - odejmuje dwie liczby i zwraca wynik,
* /mult - mnoży dwie liczby i zwraca wynik,
* /div - dzieli dwie liczby i zwraca wynik,
* /hist - zwraca historię operacji,
* /delete - usuwa rekord z historii oraz pamięci cache.

### Każda z operacji matematycznych na backendzie zapisywana jest do bazy Mongo oraz Redis. Dane w bazie Redis przechowywane są przez 60 sekund. Jeśli w tym czasie zostanie wysłane takie samo rządanie, to operacja nie zapisze się do bazy Mongo, a wynik zostanie pobrany z pamięci cache (bazy Redis).
---
---
## 4. Changelog:
---
* 1.0:
  * dodanie funkcji usuwania rekordów z historii.
* 0.3:
  * dodanie pola, które wyświeta wynik operacji.
* 0.2:
  * dodanie endpointa ```/mult```,
  * dodanie endpointa ```/div```,
  * dodanie na frontendzie pól do obliczania działań mnożenia i dzielenia.
* 0.1:
  * dodanie endpointa ```/add```,
  * dodanie endpointa ```/sub```,
  * dodanie endpointa ```/hist```,
  * dodanie na frontendzie pól do obliczania działań dodawania i odejmowania,
  * dodanie na frontendzie pola z historią operacji.