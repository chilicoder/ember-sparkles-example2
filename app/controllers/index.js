import Ember from 'ember';

export default Ember.Controller.extend({
  chartData: [
    {name: 'foo', value: 12},
    {name: 'bar', value: 33},
    {name: 'baz', value: 67},
    {name: 'boo', value: 23},
    {name: 'faa', value: 13}
  ],
  tooltip: '',
  actions: {
    doMouseOn(value, idx, element){
      console.log('doMouseOn', arguments);
      this.set('tooltip', JSON.stringify(value));
    },
    doMouseOut(){
      console.log('doMouseOut', arguments);
      this.set('tooltip','');
    },
  }
});
