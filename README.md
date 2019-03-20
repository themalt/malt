# malt

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
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

## Mock API
Goto server folder and run it.
```shell
cd server && npm start
```

### Available endpoints
* `/:4000/v1/websites` - all websites data
* `/:4000/v1/websites/{websiteId}` - single website data
* `/:4000/v1/websites/{websiteId}/pages` - all website pages 
* `/:4000/v1/websites{websiteId}/pages/{pageId}` - single page data

### Static content
Static content is available on `/:4000/static` root path for instance: `/:4000/static/corg.png`.