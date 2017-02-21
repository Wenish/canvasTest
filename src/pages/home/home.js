define(["knockout", "text!./home.html"], function(ko, homeTemplate) {

  function HomeViewModel(params) {
    var canvas = null;
    var page = null;
    var context = null;
    var img = null;

    setup = function() {
      canvas = document.getElementById('my_canvas');
      page = document.getElementById('page');
      context = canvas.getContext('2d');
      canvas.width = page.offsetWidth;
      canvas.height = page.offsetHeight;

      img = new Image();
      img.onload = onImageLoad;
      img.src = 'http://img.webme.com/pic/d/derwasser-clan/katze-kitten.png';
    }

    onImageLoad = function(){
      console.log('image loaded');
      context.drawImage(img, 192, 192)
    };

    setup();
  };

  HomeViewModel.prototype.doSomething = function() {
    this.message('You invoked doSomething() on the viewmodel.');
  };

  HomeViewModel.prototype.dispose = function() { };

  return { viewModel: HomeViewModel, template: homeTemplate };

});
