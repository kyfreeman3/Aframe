

//   AFRAME.registerComponent('left', {
//       schema: {

//       },
  
//        init: function () {
//       //     console.log("test");
//       //   // Do something when component first attached.
//          var left = sceneEl.querySelector("#left");
//          document.querySelector("#left").addEventListener('click');
//          var leftPos = left.getAttribute("position");
//       //   this.el.addEventListener('click', function (evt) { 
//       //       left(leftPos);
//       //       console.log("EVNET");
//       //   });
//       //   entityEl.addEventListener('physicscollided', function (event) {
//       //     console.log('Entity collided with', event.detail.collidingEntity);
//       //   });
//        },
//       events: {
//         click: function (evt){
//           console.log("Clicked!");

//         }
//       },
//       tick: function () {
//         this.el.addEventListener('click', function (evt) { 
//                 left(leftPos);
//                 console.log("EVNET");
//             });
//       }
//   });
//   AFRAME.registerComponent('right', {
//     schema: {
        
//     },

//     init: function () {
//       // Do something when component first attached.
//       var right = sceneEl.querySelector("#right");
//       //document.querySelector("#right").addEventListener('click');
//       //var rightPos = right.getAttribute("position");
      
//     },
//     update: function() {
//       var rightPos = right.getAttribute("position");
//       this.el.addEventListener('click', function (evt) { 
//         right(rightPos);
//         console.log("EVNET");
//       });
//     }
// });
// AFRAME.registerComponent('log', {
//   schema: {
//     message: {type: 'string', default: 'Hello, World!'}
//   },

//   init: function () {
//     console.log(this.data.message);
//   }
// });
  

//   function left(l) {
//         console.log("Left: " +l);
//   }
//   function right(r) {
//     console.log("right: " +r);
// }

AFRAME.registerComponent('hello-world', {
  schema: {
    
  },

  init: function () {
    // Do something when component first attached.
    console.log('Hello, World!');
  },

  update: function () {
    // Do something when component's data is updated.
  },

  remove: function () {
    // Do something the component or its entity is detached.
  },

  tick: function (time, timeDelta) {
    // Do something on every scene tick or frame.
  }
});
