angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('chooseMileage', {
    url: '/mileage',
    templateUrl: 'templates/chooseMileage.html',
    controller: 'chooseMileageCtrl'
  })

  .state('chooseReason', {
    url: '/preferences ',
    templateUrl: 'templates/chooseReason.html',
    controller: 'chooseReasonCtrl'
  })

  .state('pausedWhatMattersBuyer', {
    url: '/what-matters',
    templateUrl: 'templates/pausedWhatMattersBuyer.html',
    controller: 'pausedWhatMattersBuyerCtrl'
  })

  .state('pausedStyleBuyer', {
    url: '/style-buyer',
    templateUrl: 'templates/pausedStyleBuyer.html',
    controller: 'pausedStyleBuyerCtrl'
  })

  .state('pausedInputSeller', {
    url: '/page16',
    templateUrl: 'templates/pausedInputSeller.html',
    controller: 'pausedInputSellerCtrl'
  })

  .state('choosePrice', {
    url: '/source-buyer',
    templateUrl: 'templates/choosePrice.html',
    controller: 'choosePriceCtrl'
  })

  .state('pausedSourceSeller', {
    url: '/source-seller',
    templateUrl: 'templates/pausedSourceSeller.html',
    controller: 'pausedSourceSellerCtrl'
  })

  .state('pausedRegister', {
    url: '/register',
    templateUrl: 'templates/pausedRegister.html',
    controller: 'pausedRegisterCtrl'
  })

  .state('pausedLogin', {
    url: '/login',
    templateUrl: 'templates/pausedLogin.html',
    controller: 'pausedLoginCtrl'
  })

  .state('welcome', {
    url: '/question',
    templateUrl: 'templates/welcome.html',
    controller: 'welcomeCtrl'
  })

  .state('chooseType', {
    url: '/carselect-buyer',
    templateUrl: 'templates/chooseType.html',
    controller: 'chooseTypeCtrl'
  })

  .state('pausedCarSelectSeller', {
    url: '/carselect-seller',
    templateUrl: 'templates/pausedCarSelectSeller.html',
    controller: 'pausedCarSelectSellerCtrl'
  })

  .state('yourReport', {
    url: '/your-report',
    templateUrl: 'templates/yourReport.html',
    controller: 'yourReportCtrl'
  })

  .state('pausedResultsSeller', {
    url: '/result-seller',
    templateUrl: 'templates/pausedResultsSeller.html',
    controller: 'pausedResultsSellerCtrl'
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('termsAndConditions', {
    url: '/tems',
    templateUrl: 'templates/termsAndConditions.html',
    controller: 'termsAndConditionsCtrl'
  })

  .state('loadingPage', {
    url: '/loading',
    templateUrl: 'templates/loadingPage.html',
    controller: 'loadingPageCtrl'
  })

  .state('emailMyResults', {
    url: '/email',
    templateUrl: 'templates/emailMyResults.html',
    controller: 'emailMyResultsCtrl'
  })

$urlRouterProvider.otherwise('/question')


});