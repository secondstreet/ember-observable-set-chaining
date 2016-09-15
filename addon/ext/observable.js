import Observable from 'ember/mixins/observable';

const superReturnThis = function() {
  this._super(...arguments);
  return this;
};

Observable.reopen({
  set: superReturnThis,
  setProperties: superReturnThis,
  incrementProperty: superReturnThis,
  decrementProperty: superReturnThis,
  toggleProperty: superReturnThis
});
