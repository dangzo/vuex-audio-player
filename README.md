# vuex-audio-player

Demo: [http://www.danielegazzelloni.com/vuex-audio-player/](http://www.danielegazzelloni.com/vuex-audio-player/)

An audio player written with Vuex and Twitter Bootstrap. 

Goal is to write clean, efficient code, demonstrating proficiency with Vue and Vuex patterns. Using decorators from [vuex-class](https://github.com/ktsn/vuex-class) and [vue-property-decorator](https://github.com/kaorun343/vue-property-decorator).

#### Features implemented:

- Change songs on click
- Automatically play next song on song end
- Play/Pause/Volume/etc... so far these are just HTML5 ```<auddio>``` features


### Project setup
```
npm install
```

#### Compiles and hot-reloads for development
```
npm run start
```

#### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```


#### Todo:

- ~~Using middlewares~~
- ~~Using PropTypes~~
- Unit testing
- Implement the actual audio palyer controls in React/Redux (so Play, Pause, the progress bar, volume adjust, etc)
- Let it work with Youtube links or external URLs
- Get song meta from file