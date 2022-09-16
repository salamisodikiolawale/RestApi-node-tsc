## préréquis d'un projet nodejs avec typescript
* Installation de nodejs
    > nvm install -g node
* Installation de typescript 
    > npm install -g typescript@latest
* Installation du programme d'exécution de typescript
    > npm install -g ts-node
* Installation de nodemon
    > npm install -g nodemon
## Mise en place des outils de test d'un api
* Installation de Insomnia
    > https://insomnia.rest/download
* Installation de Postman
    > ??

## Initialisation d'un projet nodejs avec typescript
* Génération du fichier de configuration package.json (contient tout les configurations et dependances du projet)
  > npm init --yes
* Génération du fichier tsconfig.json (pour la compilation des fichiers  tsc)
  > tsc --init
* Installation du package @types/node (Requis pour des projets avec typescript | pas nécessaire pour des projets nodejs et javascrypt)
* Ce module permet d'avoir les types de definition supportés par typescript
  > npm install @types/node

>> NB : update in package.json the line => "target": "es2016" to "target": "es2017"

## Lancer une application nodejs
* option 1
  > tsc app.js  et node app.js
* option 2
  > ts-node app.ts

### Lancer le server node en mode :
* Automatique
  > nodemon app.ts
* manuel
  > npm start

## EXPRESS JS
> npm install @types/node 
> 
> npm install express 
> 
> npm install @types/express

## Utilisation de  Encryption password avec typescript
* Installation of the modules for encryption
> npm install bcryptjs 
> npm install @types/bcryptjs

## Utilisation du validateur de expressjs
> npm install express-validator @types/express-validator



## CORRESPONDANCE SQL SERVER      =>  MONGODB     =>   JAVASCRIPT
####  SQL Server   =========>  MongoDB     ============>   js
####  Database     ===========>  Database   
####  Tables       =============>  Collections ===========>   Tableaux d'objets
####  Rows         ==============>  Document    ============>   Objets
####  Columns      ===========>  Field       =================>   Propiété des objet

## USE CONTAINER MONGODB
[[mongo shell command site]](https://www.mongodb.com/docs/mongodb-shell/run-commands/)
> NB : cls => pour retour en arrière dans le shell command ubuntu
> docker-compose up OR docker stack deploy -c docker-compose.yml nomStack

> docker exec -it nom-container bash

> mongosh -u admin -p root

> OU >> mongo -u your_user -p your_password --authenticationDatabase my_db

* Insertin d'un Document 
> db.customer.insertOne({});
* Insertion d'un ensemble de  Document 
> db.customer.insertMany({});