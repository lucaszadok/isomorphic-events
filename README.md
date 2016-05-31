# isomorphic-events
Emit and Listen events on node and browser.

## Usage

### Listen
```sh
const isomorphicEvents = require('isomorphic-events');

isomorphicEvents.on('event', () => {})
```

### Dispatch
```sh
const isomorphicEvents = require('isomorphic-events');

isomorphicEvents.emit('event', {})
```
