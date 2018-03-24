

# lifx-sdk-javascript

This is a simple JavaScript SDK for making HTTP calls to the [LIFX API](https://api.developer.lifx.com/).
## Available calls checklist
|Name|Type|Function|Available|
|--|--|--|--|
|[List Lights](https://api.developer.lifx.com/docs/list-lights)|`GET`|`list_lights()`|Yes|
|[Set State](https://api.developer.lifx.com/docs/set-state)|`PUT`|`set_state()`|Yes|
|[Set States](https://api.developer.lifx.com/docs/set-states)|`PUT`|`set_states()`|Yes|
|[State Delta](https://api.developer.lifx.com/docs/state-delta)|`POST`|`state_delta()`|**No**|
|[Toggle Power](https://api.developer.lifx.com/docs/toggle-power)|`POST`|`toggle_power()`|Yes|
|[Breathe Effect](https://api.developer.lifx.com/docs/breathe-effect)|`POST`|`breath_effect()`|Yes|
|[Pulse Effect](https://api.developer.lifx.com/docs/pulse-effect)|`POST`|`pulse_effect()`|Yes|
|[Cycle](https://api.developer.lifx.com/docs/cycle)|`POST`|`cycle()`|Yes|
|[List Scenes](https://api.developer.lifx.com/docs/list-scenes)|`GET`|`list_scenes()`|Yes|
|[Activate Scene](https://api.developer.lifx.com/docs/activate-scene)|`PUT`|`activate_scene()`|Yes|
|[Validate Color](https://api.developer.lifx.com/docs/validate-color)|`GET`|`validate_color()`|Yes|

## Using the example
**1.** Clone this repo and move into the the directory.

```sh
git clone git@github.com:thelevicole/lifx-sdk-javascript.git && cd lifx-sdk-javascript
```

**2.** Install any node dependencies required.

```sh
npm install
```

**3.** Run the default Gulp task.

```sh
gulp default
```

**4.** Visit [http://localhost:3000](http://localhost:3000)


## Setup
### Link required files
Firstly we need to include the files.
```html
<!-- Lifx.js Javascript file -->
<script src="/js/Lifx.js"></script>
```
### Initiate SDK
Initiating the SDK requires an [access token](https://api.developer.lifx.com/docs/authentication).  You can generate personal access tokens from your [LIFX Cloud](https://cloud.lifx.com/settings) account.
```javascript
const connection = new Lifx('XXXXXXXXXXX');
```
## Basic usage
HTTP calls that require a `:selector` will be taken from the functions first parameter. If none given `all` will be sent as default. Read more about selectors [here](https://api.developer.lifx.com/docs/selectors).
### List Lights
```javascript
connection.list_lights().then(function(lights) {
	// Do something with lights
});
```

### Set State
```javascript
connection.set_state('id:XXXXXXXXXXXXX', {
	power: 'on',
	color: '#ff0000',
	brightness: 0.4
});
```
## Code example
### HTML
```html
<button id="toggle-all">Toggle power</button>
<input type="color" id="change-color">
```
### Javascript
```javascript
const connection = new Lifx('ACCESS-TOKEN');
const button = document.getElementById('toggle-all');
const input = document.getElementById('change-color');

button.addEventListener('click', function() {
	connection.toggle_power().then(function(response) {
		console.log('Power toggled. Response:', response);
	});
});

input.addEventListener('change', function() {
	const color_value = input.value || '#ff0000';
	connection.set_state('all', {
		color: color_value
	}).then(function(response) {
		console.log('Change color to:', color_value);
	});
});
```
