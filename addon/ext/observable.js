import Ember from 'ember';

const superReturnThis = function() {
  this._super(...arguments);
  return this;
};

Ember.Observable.reopen({
  set: superReturnThis,
  setProperties: superReturnThis,
  incrementProperty: superReturnThis,
  decrementProperty: superReturnThis,
  toggleProperty: superReturnThis
});
