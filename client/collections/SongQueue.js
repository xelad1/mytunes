// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  // counter: 0,

  initialize: function(){

    this.on('add', function() {
      if (this.length === 1) {
        this.playFirst();
      }
    });

    this.on('ended', function(song) {
      this.at(0).dequeue();
      if (this.length !== 0) {
        this.playFirst();
      }
      // this.at(0).play();
    });

    this.on('dequeue', function() {
      this.remove(this.at(0));
    });
  },

  playFirst: function() {
    this.at(0).play();
  }

  // params.library.on('play', function(song){
  //     this.set('currentSong', song);
  //   }, this);
  //   params.library.on('enqueue', function(song){
  //     this.attributes.songQueue.add(song);
  //   }, this);
  // }

});
