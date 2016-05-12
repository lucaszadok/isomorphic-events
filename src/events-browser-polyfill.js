// Polyfill for creating CustomEvents on IE9/10/11
// code from:
// https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent

(function (self) {
  if (self.CustomEvent) {
    return
  }

  function CustomEvent (event, params) {
    params = params || { bubbles: false, cancelable: false, detail: undefined };
    var evt = document.createEvent( 'CustomEvent' );
    evt.initCustomEvent( event, params.bubbles, params.cancelable, params.detail );
    return evt;
   }

  CustomEvent.prototype = self.Event.prototype;
  self.CustomEvent = CustomEvent;
})(typeof self !== 'undefined' ? self : this);
