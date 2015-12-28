# Redux Devtools Script

> WARN! This only works with redux-devtools@^2.1.5, later versions requires to ship with React.

Using [Redux DevTools](https://github.com/gaearon/redux-devtools) without React in your App!

## Usage

Just follow [redux-devtools guide](https://github.com/gaearon/redux-devtools#installation) but do not mount anything into your dom tree using React but reference a script:

```html
<!-- your app -->
<div id="app"></div>
<!-- your bundle -->
<script src="/build/bundle.js"></script>
<!-- use this to mount panel into dom tree -->
<script src="https://npmcdn.com/redux-devtools-script"></script>
```

**Remember to expose your Redux store to `window` Object**

```javascript
import store from './store'
window.ReduxStore = store
```

And it's done! Check out the [Vue example](https://github.com/egoist/vuepack)!

## License

MIT &copy; [EGOIST](https://github.com/egoist)
