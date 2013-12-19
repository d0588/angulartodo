var todoApp;

todoApp = angular.module('todoApp', ['mdlColorDlg']);

todoApp.controller('tasklistController', function($scope) {
  $scope.tasks = [
    {
      title: 'Сделать задачник',
      processed: true,
      isedit: false
    }, {
      title: 'Сдать супер-героический задачник!',
      processed: false,
      isedit: false
    }, {
      title: 'Для начала/окончания редактирования задачи - двойной клик по строке',
      processed: false,
      isedit: false
    }, {
      title: 'Для фильтра/сортировки клик по соответствующему заголовку',
      processed: false,
      isedit: false
    }
  ];
  $scope.orderField = '';
  $scope.orderRev = false;
  $scope.changeSort = function() {
    if ($scope.orderField === '') {
      $scope.orderField = 'title';
    } else {
      if (!$scope.orderRev) {
        $scope.orderRev = true;
      } else {
        $scope.orderField = '';
        $scope.orderRev = false;
      }
    }
  };
  $scope.filterField = void 0;
  $scope.filterVal = false;
  $scope.changeFilter = function() {
    if (!$scope.filterBeh) {
      $scope.filterBeh = {
        processed: false
      };
      $scope.filterVal = false;
    } else if (!$scope.filterVal) {
      $scope.filterBeh = {
        processed: true
      };
      $scope.filterVal = true;
    } else {
      $scope.filterBeh = void 0;
    }
  };
  $scope.submit = function() {
    if (this.newtaskname) {
      $scope.tasks.unshift({
        title: this.newtaskname,
        processed: false,
        isedit: false
      });
      this.newtaskname = '';
    }
  };
});

/*
todoApp.directive 'colorable', () ->
  ($scope, elem, attr) ->
    elem[0].ondblclick = () ->
      alert(elem[0].innerHTML)
      return
    return

todoApp.service 'dialogColors', [$dlg, ($dlg) ->
  return]
*/

