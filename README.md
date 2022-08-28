# TODO API (README de l'application finale)

## Pré-requis
- Node
- Docker et docker-compose

### Mettre à jour les dépendances
```bash
npm install
```
### Variables d'environnement
- Créer un fichier ```.env``` en copiant ```.env.template```
## Lancer l'application
```bash
npm run start
```
- En mode watch
```bash
npm run start:watch
```
- En mode worker
```bash
npm run start:worker
```
- En mode task
```bash
npm run task:clean-todos
```

## Bases de données et services
- Monter les services en local
```bash
docker-compose up -d
```
- Eteindre les services
```bash
docker-compose down
```
### Migrations
- Créer une nouvelle migration
```bash
npx sequelize-cli migration:generate --name <nom-de-la-migration>
```
- Lancer les migrations
```bash
npx sequelize-cli db:migrate
```
- Annuler la dernière migration (down)
```bash
npx sequelize-cli db:migrate:undo
```