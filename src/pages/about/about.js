define(["knockout", "text!./about.html"], function(ko, homeTemplate) {

  function AboutViewModel(params) {
    var self = this;
    var canvas = null;
    var page = null;
    var context = null;
    self.interval = null;
    var frameRate = 1000/2;
    var frame = 0;
    var assets = [
      'http://img.webme.com/pic/d/derwasser-clan/katze-kitten.png',
      'http://www.zooboerse.de/images/katze.png',
      'http://3.bp.blogspot.com/-eYAm6ijl4p8/UrTNqu9lt3I/AAAAAAAAPsQ/D5fXGgSggh4/s550/21f_Katze.png',
      'http://www.sabine-brandl.de/userfiles/image/katze.png'
    ];
    var frames = [];

    setup = function() {
      canvas = document.getElementById('my_canvas');
      page = document.getElementById('page');
      context = canvas.getContext('2d');
      canvas.width = page.offsetWidth;
      canvas.height = page.offsetHeight;

      for(var i = 0; i < assets.length; i++){
        frames.push(new Image());
        frames[i].onload = onImageLoad;
        frames[i].src = assets[i];
      };

      self.interval = setInterval(animate, frameRate);
    }

    var animate = function(){
      context.clearRect(0,0,canvas.width, canvas.height);
      context.drawImage(frames[frame], 192, 192);
      frame = (frame + 1) % frames.length;
      console.log('animated');
    }

    var onImageLoad = function(){
      console.log('imageLoaded');
    };

    setup();
  };

  AboutViewModel.prototype.dispose = function() {
    clearInterval(this.interval);
  };

  return { viewModel: AboutViewModel, template: homeTemplate };

});
