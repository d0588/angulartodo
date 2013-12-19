mdlColorDlg = angular.module 'mdlColorDlg', []

###
mdlColorDlg.controller 'ColorDialogCtrl', ($scope) ->
  alert ColorDialogService
  $scope.DialogVisible = ColorDialogService.Visible
  $scope.$watch ColorDialogService.Visible, () ->
    #$scope.DialogVisible = ColorDialogService.Visible
    alert '!'
    return
  return
###

mdlColorDlg.service 'ColorDialogService', ($compile, $rootScope, $http) ->
  $http.get("src/colordialog.html").then (response) ->
    angular.element(document.body).append $compile(response.data)($rootScope)
    return
  dlg = 
    elem: undefined
    Visible: true

mdlColorDlg.directive 'colorable', (ColorDialogService) -> 
  ($scope, elem, attr) ->
    elem.bind 'click', () -> 
      #ColorDialogService.Visible = !ColorDialogService.Visible
      ColorDialogService.elem = elem
      return
    return