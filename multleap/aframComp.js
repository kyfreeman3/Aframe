// AFRAME.registerComponent('Leap-hands', {
//     schema: {
//     },
  
//     init: function () {
//       var sceneEl = document.querySelector('a-scene');
//       var left = sceneEl.querySelector("#Left");
//       var right = sceneEl.querySelector("#Right");
//       document.querySelector("#Left").addEventListener('click');
//       document.querySelector("#Right").addEventListener('click');
//       var leftPos = left.getAttribute("position");
//       var rightPos = right.getAttribute("position");
//       console.log( leftPos + rightPos);
      
//       console.log("test" + leftPos + rightPos);
//       // Do something when component first attached.
//     },
  
    
//   });

  AFRAME.registerComponent('left', {
      schema: {

      },
  
      init: function () {
          console.log("test");
        // Do something when component first attached.
        var left = sceneEl.querySelector("#left");
        //document.querySelector("#left").addEventListener('click');
         var leftPos = left.getAttribute("position");
        // this.el.addEventListener('click', function (evt) { 
        //     left(leftPos);
        // });
      }
  });
  AFRAME.registerComponent('right', {
    schema: {
        
    },

    init: function () {
      // Do something when component first attached.
      var right = sceneEl.querySelector("#right");
      //document.querySelector("#right").addEventListener('click');
      var rightPos = right.getAttribute("position");
    //   this.el.addEventListener('click', function (evt) { 
    //     right(rightPos);
    //   });
    }
});
  

  function left(l) {
        console.log("Left: " +l);
  }
  function right(r) {
    console.log("right: " +r);
}