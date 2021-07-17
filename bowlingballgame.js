/*
I want to define the bowling ball game given in Pubnub through Js for better organization.

Objects that I need: 1* a-sphere - ball ( id, color, pos, radius, grabbable, dynamic-body, mass, track-position)
                     1* a-box -bowlingLane ( pos, color, width, height, rotation, static-body)
                     10* a-cylinder- pins (id, radius, height, pos, color, dynamic-body, mass)
                     5* a-triangle- tracks (id, color, position, rotation, vertex-a, vertex-b, vertex-c, static-body, mass, location)
                        location for tracks: center, far-left, far-right, left, right
                     1* a-box- wall (pos, scale, color, static-body, mass)
                     2* a-box- borders ( pos, color, width, height, rotation, static-body )
*/  
AFRAME.registerComponent('move-rig', {
    init: function () {
    document.querySelector("#center").addEventListener('click', this.moveRig.bind(this));
    document.querySelector("#left").addEventListener('click', this.moveRig.bind(this));
    document.querySelector("#far-left").addEventListener('click', this.moveRig.bind(this));
    document.querySelector("#right").addEventListener('click', this.moveRig.bind(this));
    document.querySelector("#far-right").addEventListener('click', this.moveRig.bind(this));
    },
    moveRig: function () {
    var camPos = document.querySelector("#wrapper");
    var position = camPos.getAttribute("position");
    camPos.setAttribute("position",'0 2 6'); 
    }
  })            
AFRAME.registerComponent("refresh", {
    init: function() {
    this.el.addEventListener('click', function (evt) {
    window.location.reload();
    });
    }
  })
AFRAME.registerComponent('far-right', {
    schema: {
        
    },

    init: function () {
        this.el.addEventListener('click', function (evt) { 
            farRight();
    });
}   
})
AFRAME.registerComponent('right', {
    schema: {
        
    },

    init: function () {
        this.el.addEventListener('click', function (evt) { 
            right();
    });
    }
    })
AFRAME.registerComponent('center', {
    schema: {
        
    },

    init: function () {
        this.el.addEventListener('click', function (evt) { 
            center();
    });
}
})
AFRAME.registerComponent('far-left', {
    schema: {
        
    },

    init: function () {
        this.el.addEventListener('click', function (evt) { 
            farLeft();
        });
}
})
AFRAME.registerComponent('left', {
    schema: {
        
    },

    init: function () {
        this.el.addEventListener('click', function (evt) { 
            left();
    });
    }
})
AFRAME.registerComponent('bowling', {
    schema: {
    },

    init: function () {
      // Do something when component first attached.
    },

    update: function () {
      // Do something when component's data is updated.
    },

    remove: function () {
      // Do something the component or its entity is detached.
    },

    tick: function (time, timeDelta) {
      // Do something on every scene tick or frame.
    },

    farLeft: function() {
        const slide = document.createElement('a-animation');
        slide.setAttribute('id', 'animate');
        slide.setAttribute('to', '-0.8 1.325 -9.55');
        slide.setAttribute('from', '-0.8 1.325 3');
        slide.setAttribute('attribute', 'position');
        slide.setAttribute('dur', '3000');
        document.querySelector('#green').appendChild(slide);
        document.querySelector("#pinID").getAttribute('rotation').x;
      },
      center: function() {
        const slide = document.createElement('a-animation');
        slide.setAttribute('id', 'animate');
        slide.setAttribute('to', '0 1.325 -9.55');
        slide.setAttribute('from', '0 1.325 3');
        slide.setAttribute('attribute', 'position');
        slide.setAttribute('dur', '3000');
        document.querySelector('#green').appendChild(slide);
        document.querySelector("#pinID").getAttribute('rotation').x;
        
      },
      left: function() {
        const slide = document.createElement('a-animation');
        slide.setAttribute('id', 'animate');
        slide.setAttribute('to', '-0.4 1.325 -9.55');
        slide.setAttribute('from', '-0.4 1.325 3');
        slide.setAttribute('attribute', 'position');
        slide.setAttribute('dur', '3000');
        document.querySelector('#green').appendChild(slide);
        document.querySelector("#pinID").getAttribute('rotation').x;
      },
      right: function() {
        const slide = document.createElement('a-animation');
        slide.setAttribute('id', 'animate');
        slide.setAttribute('to', '0.4 1.325 -9.55');
        slide.setAttribute('from', '0.4 1.325 3');
        slide.setAttribute('attribute', 'position');
        slide.setAttribute('dur', '3000');
        document.querySelector('#green').appendChild(slide);
        document.querySelector("#pinID").getAttribute('rotation').x;
      },
      farRight: function(){
        const slide = document.createElement('a-animation');
        slide.setAttribute('id', 'animate');
        slide.setAttribute('to', '0.8 1.325 -9.55');
        slide.setAttribute('from', '0.8 1.325 3');
        slide.setAttribute('attribute', 'position');
        slide.setAttribute('dur', '3000');
        document.querySelector('#green').appendChild(slide);
        document.querySelector("#pinID").getAttribute('rotation').x;
      }
})
  pubnub.publish({
    message: {'key' : 'your-turn'},
    channel: 'VR'
  });
