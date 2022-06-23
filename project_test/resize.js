
function resizeImagem() {
      var width = window.innerWidth;
      var height = window.innerHeight;

      var stage = new Konva.Stage({
        container: 'container',
        width: width,
        height: height,
      });
    
      var layer = new Konva.Layer();
      stage.add(layer);
      //sofa
      var sofa = new Konva.Image({
        width: 300,
        height: 137,
        draggable: true,

      });
      layer.add(sofa);

      var imageObj1 = new Image();
      imageObj1.onload = function () {
        sofa.image(imageObj1);
      };
      imageObj1.src = 'assets/sofa.png';



      var tr1 = new Konva.Transformer({
        nodes: [sofa],
        keepRatio: true,
        rotateEnabled: false,
        borderEnabled: false,
        ignoreStroke: true,
        flipEnabled: false,
        
        enabledAnchors: [
          'top-left',
          'top-right',
          'bottom-left',
          'bottom-right',
          
        ],

      });
      layer.add(tr1);

     
}