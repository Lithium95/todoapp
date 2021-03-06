// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.controller("TodoCtrl", function($scope,$ionicPopup,$ionicListDelegate,$ionicModal) {
  $scope.tasks = [];
  $scope.newTask = function(data){
    if (data.newItem!=" ")
    {
      $scope.tasks.push({title:data.newItem,complete: false});
      swal("Task Added:", ""+ data.newItem, "success")
      data.newItem = ' '; 
      $scope.closeModal();
     
    }else
    {
      $scope.closeModal();
      swal("Incomplete", "No task was added", "error")
    }
  };
    $scope.edit = function(task) {
      $scope.data = { response: task.title };
      $ionicPopup.prompt({
        title: "Edit Task",
        scope: $scope
    }).then(function(res) {    // promise 
        if (res !== undefined) task.title = $scope.data.response;
        $ionicListDelegate.closeOptionButtons()
      })
    };
    $ionicModal.fromTemplateUrl('addtasks.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });
  $scope.openModal = function() {
    $scope.modal.show();
  };
  $scope.closeModal = function() {
    $scope.modal.hide();
  };
  //Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });
  // Execute action on hide modal
  $scope.$on('modal.hidden', function() {
    // Execute action
  });
  // Execute action on remove modal
  $scope.$on('modal.removed', function() {
    // Execute action
  });
})

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

