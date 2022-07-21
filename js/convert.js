ko.applyBindings(new AppViewModel())
function AppViewModel() {
    var self = this;
    const tip = 'Converted text shows here. Select and copy.';
    self.input = ko.observable("");

    self.command = ko.computed(function() {
      if (self.input().length == 0)
          return tip;
      result = "'" + self.input().replace(/[" ,]/g, function(x){ return "\\"+x}) + "'";
      return result;
    });

}