# Ember.Observable `set` chaining

Restores the 1.X behavior that allowed chaining `set`, `setProperties`, and `[increment|decrement|toggle]Property` calls.

```js
// Ember 2.X without this addon
Ember.Logger.log(foo.set('bar', true)); // true
Ember.Logger.log(foo.setProperties({ baz: false )); // { baz: false }
```

```js
// Ember 1.X without this addon
Ember.Logger.log(foo.set('bar', true)); // foo
Ember.Logger.log(foo.setProperties({ baz: false )); // foo
```

```js
// Ember 2.X with this addon
Ember.Logger.log(foo.set('bar', true)); // foo
Ember.Logger.log(foo.setProperties({ baz: false )); // foo
```

This essentially "undoes" the work of [ember/ember.js#11213](https://github.com/emberjs/ember.js/pull/11213).

## Installation

`ember install ember-observable-set-chaining`
