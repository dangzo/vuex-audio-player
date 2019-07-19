# vuex-audio-player

Demo: [http://www.danielegazzelloni.com/vuex-audio-player/](http://www.danielegazzelloni.com/vuex-audio-player/)

An audio player written with Vuex and Twitter Bootstrap. 

Goal is to write clean, efficient code, demonstrating proficiency with Vue and Vuex patterns. Using decorators from [vuex-class](https://github.com/ktsn/vuex-class) and [vue-property-decorator](https://github.com/kaorun343/vue-property-decorator).

#### Features implemented:

- Songs play and change on click
- Play, pause, stop, volume etc buttons by HTML5 ```<auddio>``` element
- The player automatically plays the next song on song end
- UI is simple and cool :thumbsup:


### Project setup
```
npm install
```

#### Compiles and hot-reloads for development
```
npm run serve
```

#### Compiles and minifies for production
```
npm run build
```

### Cypress.io unit tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```


#### Todo:

- ~~Add e2e tests~~

#### Future/backlog ideas:
- Add Node.js backend / GraphQL / MongoDB (or other simple db solution)
- Implement the actual audio player controls in a custom way (so Play, Pause, the progress bar, volume adjust, etc)
- Let it work with Youtube links, external URLs, uploaded mp3 files (?), etc.
- Get song meta from file
