import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  content: DS.attr(),
  questions: DS.belongsTo('question', {async: true})
});
