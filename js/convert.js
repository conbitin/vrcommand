ko.applyBindings(new AppViewModel())
function AppViewModel() {
    var self = this;
    const base_cmd = 'adb shell dumpsys activity service com.vinfast.ivi.voicecontrol --action vinfast.debug.ACTION_FOR_SERVICE_3 value'
    self.input = ko.observable("");

    self.command = ko.computed(function() {
      result = base_cmd + " " + self.input().replace(/[" ]/g, function(x){ return "\\"+x});
      return result;
    });

}