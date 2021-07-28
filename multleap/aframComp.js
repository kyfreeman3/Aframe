

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