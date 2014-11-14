// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function() {
    this.render();

    this.collection.on('add remove', function() {
      console.log(SongQueueEntryView);
      this.render();
    }, this);
  },

  render: function() {
    // console.log(this.el);
    // return this.$el;
    this.$el.children().detach();

    this.$el.html('<th>Song Queue</th>').append(
      this.collection.map(function(song){
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }

});



