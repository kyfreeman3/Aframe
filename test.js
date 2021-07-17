AFRAME.registerComponent('calc', {
    schema: {
        horsepower : {type: 'int', default: 100},
        color : {type: 'color', default: '#000000'}
        
    },

    init: function () {
      // Do something when component first attached.
      //code executes once. set components initial state and variables
    },

    update: function () {
      // Do something when component's data is updated.
      //update executes everytime a change is made to your component
    },

    remove: function () {
      // Do something the component or its entity is detached.
      //when the entity that the component that is attached to is destroyed
    },

    tick: function (time, timeDelta) {
      // Do something on every scene tick or frame.
      // is called every single frame: 60 to 120 times every second.
    },
    pause: function(){
      // continously computing operations.
      // maybe when scene is paused you want operations to stop
    },
    play: function(){
      // this code will be executed after its been paused.
    }

});
