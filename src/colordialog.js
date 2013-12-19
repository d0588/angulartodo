var mdlColorDlg;

mdlColorDlg = angular.module('mdlColorDlg', []);

/*
mdlColorDlg.controller 'ColorDialogCtrl', ($scope) ->
  alert ColorDialogService
  $scope.DialogVisible = ColorDialogService.Visible
  $scope.$watch ColorDialogService.Visible, () ->
    #$scope.DialogVisible = ColorDialogService.Visible
    alert '!'
    return
  return
*/


mdlColorDlg.service('ColorDialogService', function($compile, $rootScope, $http) {
  var dlg;
  $http.get("src/colordialog.html").then(function(response) {
    angular.element(document.body).append($compile(response.data)($rootScope));
  });
  return dlg = {
    elem: void 0,
    Visible: true
  };
});

mdlColorDlg.directive('colorable', function(ColorDialogService) {
  return function($scope, elem, attr) {
    elem.bind('click', function() {
      ColorDialogService.elem = elem;
    });
  };
});
