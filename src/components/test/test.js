define(['knockout', 'text!./test.html'], function(ko, templateMarkup) {

  function Test(params) {
    this.message = ko.observable('Hello from the test component!');
  }

  // This runs when the component is torn down. Put here any logic necessary to clean up,
  // for example cancelling setTimeouts or disposing Knockout subscriptions/computeds.
  Test.prototype.dispose = function() { };

  return { viewModel: Test, template: templateMarkup };

});
