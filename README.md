# Vue Swapi test task
- Vue 3
- Composition API

## Configure (optional)
Open `src/config.js` to change config values

  - `minAmount` - minimum amount of people to display
  - `allowDuplicates` - should people be duplicated in order to artificially reach goal of minAmount?
  - `unwantedChars` - string containing characters for names that start with them to be discarded
  - `fillFormArgs.gender` - gender of a person who should have form filled
  - `birthYear` - birth year of a person who should have form filled

## Run

```sh
npm install
```

```sh
npm run dev
```

## Specification
```
Set up a Vue.js SPA instance on the 'home' page querying https://swapi.dev/, downloading and then displaying 80 people or more, where if you come across a person whose name starts with L, N, C then you discard them. Also, with each person, the color of the font (name and surname) is to match the color of their eyes. 

Next to each person create a button leading to subpage '/edit' where the form will be filled with the person's data as long as the person is female, and was born in the “19BBY” year.

Note: Everyone will have the edit page, only fill out the form if the person meets these requirements 

At the top of the list write the number of men and women.

We would also like the best practices in JS to be used ;)
```