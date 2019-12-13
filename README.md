# Introduction
Angualr 8 version of the Rick and Morty API Consumer, derived heavily from the [ReactJS version](https://github.com/bkatchmar/rick-and-morty-api-consumption), the primary intention of this is to create the same app that consumes the Rick and Morty API but in Angular to demonstrate understanding of both technologies.

# Deploying to GitHub Pages
I followed [this article](https://medium.com/@swarnakishore/deploying-angular-cli-project-to-github-pages-db49246598a1) to help me get started with this. I first ran:

```
npm i -g angular-cli-ghpages
ng add angular-cli-ghpages
```

Built using:

```
ng build --prod --base-href /rick-and-morty-api-consumption-angular/
```

# Components
Component generation done via the following commands:

```
ng generate component characters
ng generate component episodes
ng generate component individual
```

## Characters
Consumer of the `/character` end points, list in a table with paging all of the characters found in the show. Click to drill into individual character page.

## Episodes
Consumer of the `/episode` end points, list in a table with paging all of the episodes up to season 3.

## Individual
Individual pages for each character with the ID number the API assigns to each.

# Services
Services to consume the Rick and Morty API have been generate via the following:

```
ng generate service characters
ng generate service episodes
```

## Characters
Calls the `/character` end points.

## Episodes
Calls the `/episode` end points.

# Extra Libraries
## Bootstrap

```
npm install bootstrap --save
```