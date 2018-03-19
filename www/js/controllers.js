angular.module('app.controllers', [])
  
.controller('setBuyingCtrl', ['$scope', '$rootScope', '$stateParams', '$timeout','$ionicPopup','$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $rootScope, $stateParams, $timeout,$ionicPopup,$state) {
function showLoader() {
    jQuery('.loader').show();
}

function hideLoader() {
    jQuery('.loader').hide();
}

showLoader();

$timeout(hideLoader , 2000);

$scope.expPrice = function() {
   var myPopup = $ionicPopup.alert({
         template: "If you don't know, that's okay. Simply, input a rough estimate. If you purchase it well below market price, input what you actually paid.",
         buttons: [
          { 
            text: 'X', 
            onTap: function(e) {
              return 'cancel'
            }  
          },
          {
            text: 'OK',
            type: 'button-positive',
            onTap: function(e) {
                return 'success';
              }
            }
         ]
        });
        return;
} 

$scope.expMiles = function() {
  var myPopup = $ionicPopup.alert({
         template: "If you don't know, that's okay. Simply, input an rough estimate.",
         buttons: [
          { 
            text: 'X', 
            onTap: function(e) {
              return 'cancel'
            }  
          },
          {
            text: 'OK',
            type: 'button-positive',
            onTap: function(e) {
                return 'success';
              }
            }
         ]
        });
        return;
}

$scope.setBuyingvars = function(milesB, priceB) {
  console.log(milesB,priceB);

  if ( priceB == null || priceB == 0) {
    var myPopup = $ionicPopup.alert({
    title: 'Missing Info',
    template: 'Please enter a price above $0.',
    buttons: [
      { 
        text: 'X', 
        onTap: function(e) {
          return 'cancel'
        }  
      },
      {
        text: 'OK',
        type: 'button-positive',
        onTap: function(e) {
            return 'success';
          }
        }
     ]
    });
    return;
  }

  if ( typeof milesB === 'string' || milesB instanceof String ) {
    $rootScope.milesB = parseInt(milesB.replace(/[^0-9\.-]+/g,""));
  } else {
    $rootScope.milesB = parseInt(milesB);
  }

  $rootScope.priceB = priceB.toString();

  $state.go('setSelling');
}

$scope.min = 0;
$scope.max = 300000;
$scope.milesB = 50000;
$scope.milesS = 90000;

$scope.showMilesB = function(miles) {
    $scope.milesB = miles.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

}])
   
.controller('chooseReasonCtrl', ['$scope', '$rootScope', '$stateParams', '$timeout', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $rootScope, $stateParams, $timeout) {
function showLoader() {
    jQuery('.loader').show();
}

function hideLoader() {
    jQuery('.loader').hide();
}

showLoader();

$timeout(hideLoader , 2000);    

$scope.setUser = function(type) {
    $rootScope.userType = type;
}

}])
   
.controller('pausedWhatMattersBuyerCtrl', ['$scope', '$rootScope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $rootScope, $stateParams) {
$scope.setImportance = function(type) {
    $rootScope.imptOption = type;
}

}])
   
.controller('pausedStyleBuyerCtrl', ['$scope', '$rootScope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $rootScope, $stateParams) {
$scope.setStyle = function(style) {
    if ( !angular.isUndefined(style) && style != "? undefined:undefined ?" ) {
        $rootScope.style = style;
    }
}

}])
   
.controller('pausedInputSellerCtrl', ['$scope', '$rootScope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $rootScope, $stateParams) {

$scope.saveSeller = function(values) {
    $rootScope.seller = {};
    $rootScope.seller.pPrice = values[0];
    $rootScope.seller.con = values[1];
    $rootScope.seller.miles = values[2];
    $rootScope.seller.smoke = values[3];
    $rootScope.seller.pets = values[4];
    $rootScope.seller.rust = values[5];
    $rootScope.seller.owners = values[6];
    $rootScope.seller.misc = values[7];
    
}

}])
   
.controller('setSellingCtrl', ['$scope', '$rootScope', '$stateParams', '$timeout','$ionicPopup','$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $rootScope, $stateParams, $timeout,$ionicPopup,$state) {
function showLoader() {
    jQuery('.loader').show();
}

function hideLoader() {
    jQuery('.loader').hide();
}

$scope.min = 0;
$scope.max = 300000;
$scope.milesB = 50000;
$scope.milesS = 90000;

$scope.showMilesS = function(miles) {
  $scope.milesS = miles.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

showLoader();

$timeout(hideLoader , 2000);

$scope.expPrice = function() {
   var myPopup = $ionicPopup.alert({
         template: "If you don't know, that's okay. Simply, input what you would like to get out of your vehicle (even if its only $1). We'll help you get a more accurate price on the results page.",
         buttons: [
          { 
            text: 'X', 
            onTap: function(e) {
              return 'cancel'
            }  
          },
          {
            text: 'OK',
            type: 'button-positive',
            onTap: function(e) {
                return 'success';
              }
            }
         ]
        });
        return;
} 

$scope.expMiles = function() {
  var myPopup = $ionicPopup.alert({
         template: "If you don't know, that's okay. Simply, input what mileage you would want to sell at or when you will retire the vehicle (ex: 150000) . We'll help you get a more accurate mileage on the results page.",
         buttons: [
          { 
            text: 'X', 
            onTap: function(e) {
              return 'cancel'
            }  
          },
          {
            text: 'OK',
            type: 'button-positive',
            onTap: function(e) {
                return 'success';
              }
            }
         ]
        });
        return;
} 

$scope.setSellingvars = function(milesS,priceS) {
  console.log(milesS,priceS);
  var milesB = $rootScope.milesB;
  var errortxt = '';

  if ( typeof milesS === 'string' || milesS instanceof String ) {
    milesS = parseInt(milesS.replace(/[^0-9\.-]+/g,""));
  } else {
    milesS = parseInt(milesS);
  }

  if ( milesS < milesB) {
    errortxt = 'Please enter milage above '+ milesB.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") +'.';
  }

  if ( priceS == null ) {
    priceS = 0;
  }

  if ( errortxt ) {
        var myPopup = $ionicPopup.alert({
         title: 'Error with Submission',
         template: errortxt,
         buttons: [
          { 
            text: 'X', 
            onTap: function(e) {
              return 'cancel'
            }  
          },
          {
            text: 'OK',
            type: 'button-positive',
            onTap: function(e) {
                return 'success';
              }
            }
         ]
        });
        return;
    }
  
  $rootScope.milesS = milesS
  $rootScope.priceS = priceS.toString();
  $state.go('loadingPage');
}

}])
   
.controller('pausedSourceSellerCtrl', ['$scope', '$rootScope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $rootScope, $stateParams) {

$scope.setSeller = function(type) {
    $rootScope.sellerOption = type;
    
    return;
}

}])
   
.controller('pausedRegisterCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('pausedLoginCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('welcomeCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
  var d = new Date();
  var n = d.getFullYear();
  $scope.cyear = n;  

}])
   
.controller('chooseTypeCtrl', ['$scope', '$rootScope', '$stateParams', '$http', '$ionicPopup', '$state', '$timeout', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $rootScope, $stateParams, $http, $ionicPopup, $state, $timeout) {
    
function showLoader() {
    jQuery('.loader').show();
    console.log('show loader type');
}

function hideLoader() {
    jQuery('.loader').hide();
    
}

//console.log($rootScope.style);

if (!angular.isUndefined($rootScope.style)) {
    var styleParm = "";
} else {
    var styleParm = "";
}
$scope.yearSelect = '';
$scope.yearList = [];
$scope.makeSelect = '';
$scope.makeList = [];
$scope.modelSelect = '';
$scope.modelList = [];
$scope.trimSelect = '';
$scope.trimList = [];

showLoader();

$timeout(hideLoader , 2000);

var clientURL = 'https://www.fueleconomy.gov/ws/rest/vehicle/menu/';
$http({
    url: encodeURI(clientURL + "year"),
    headers: {
		"Accept": "application/xml",
		"Content-Type": "application/xml; charset=utf-8"}
}).then( function(res){
   //Sucess
   console.log('success year');
   parser = new DOMParser();
   xml = parser.parseFromString(res.data,"text/xml");
   var yearList = [];
   var sizex = xml.getElementsByTagName("menuItem");
    
   for (i = 0 ; i < sizex.length ; i++) {
      yearList.push(xml.getElementsByTagName("menuItems")[0].childNodes[i].childNodes[0].firstChild.nodeValue);
   }
   console.log(yearList);
   $scope.yearList = yearList;
},
function(res){
    //Error
    console.log('error year');
});

$scope.populateMake = function(year){
    console.log(year);
$scope.makeList = [];
$scope.modleList = [];
$scope.trimList = [];
var styleQ = '';

showLoader();


$http({
    url: encodeURI(clientURL + "make?year=" + year),
    headers: {
		"Accept": "application/xml",
		"Content-Type": "application/xml; charset=utf-8"}
}).then( function(res){
   //Sucess
   console.log('success make');
   parser = new DOMParser();
   xml = parser.parseFromString(res.data,"text/xml");
   var makeList = [];
   var sizex = xml.getElementsByTagName("menuItem");
    
   for (i = 0 ; i < sizex.length ; i++) {
      makeList.push(xml.getElementsByTagName("menuItems")[0].childNodes[i].childNodes[0].firstChild.nodeValue);
   }
   console.log(makeList);
   $scope.makeList = makeList;
   hideLoader();
},
function(res){
    //Error
    console.log('error make');
    hideLoader();
    //$scope.populateModel();
});    
}

$scope.populateModel = function(year,make){
console.log(year,make);
$scope.modelList = [];
$scope.trimList = [];

showLoader();

$http({
    url: encodeURI(clientURL + "model?year=" + year + "&make=" + make),
    headers: {
		"Accept": "application/xml",
		"Content-Type": "application/xml; charset=utf-8"}
}).then( function(res){
  console.log('success model');
   parser = new DOMParser();
   xml = parser.parseFromString(res.data,"text/xml");
   var modelList = [];
   var sizex = xml.getElementsByTagName("menuItem");
    
   for (i = 0 ; i < sizex.length ; i++) {
      modelList.push(xml.getElementsByTagName("menuItems")[0].childNodes[i].childNodes[0].firstChild.nodeValue);
   }
   console.log(modelList);
   $scope.modelList = modelList;
   hideLoader();
},
function(res){
    //Error
    console.log('error model');
    hideLoader();
});    
}

$scope.populateTrim = function(year, make, model) {
    console.log(year, make, model);
$scope.trimList = [];

showLoader();

$http({
    url: encodeURI(clientURL + "options?year=" + year + "&make=" + make + "&model=" + model),
    headers: {
		"Accept": "application/xml",
		"Content-Type": "application/xml; charset=utf-8"}
}).then( function(res){
  console.log('success trim');
   parser = new DOMParser();
   xml = parser.parseFromString(res.data,"text/xml");
   var trimList = [];
   var sizex = xml.getElementsByTagName("menuItem");
    
   for (i = 0 ; i < sizex.length ; i++) {
       console.log(xml.getElementsByTagName("menuItems")[0].childNodes[i].childNodes[1].firstChild.nodeValue);
      trimList[i] = {};
      trimList[i].id = xml.getElementsByTagName("menuItems")[0].childNodes[i].childNodes[1].firstChild.nodeValue;
      trimList[i].name = xml.getElementsByTagName("menuItems")[0].childNodes[i].childNodes[0].firstChild.nodeValue;
   }
   console.log(trimList);
   $scope.trimList = trimList;
   hideLoader();
},
function(res){
    //Error
    console.log('error trim');
    hideLoader();
}); 

}

$scope.setVariables = function(make, model, year, trimId) {
    if ( !trimId ) {
        var myPopup = $ionicPopup.alert({
         title: 'Missing Info',
         template: 'Please fill out the entire form.',
         buttons: [
          { 
            text: 'X', 
            onTap: function(e) {
              return 'cancel'
            }  
          },
          {
            text: 'OK',
            type: 'button-positive',
            onTap: function(e) {
                return 'success';
              }
            }
         ]
        });
        return;
    }
    $rootScope.type = "buy";
    $rootScope.make = make;
    $rootScope.model = model;
    $rootScope.year = year;
    $rootScope.trimId = trimId;
    console.log($rootScope.type, $rootScope.make, $rootScope.model, $rootScope.year);
    /*
    $scope.makeList = [];
    $scope.modelList = [];
    $scope.yearList = [];
    $scope.trimList = [];
    */
    
    $state.go('setBuying');
}

}])
   
.controller('pausedCarSelectSellerCtrl', ['$scope', '$rootScope', '$stateParams', '$http', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $rootScope, $stateParams, $http) {

function showLoader() {
    jQuery('.loader').show();
}

function hideLoader() {
    jQuery('.loader').hide();
}

$scope.makeSelect = '';
$scope.makeList = [];
$scope.modelSelect = '';
$scope.modelList = [];
$scope.yearSelect = '';
$scope.yearList = [];
$scope.trimSelect = '';
$scope.trimList = [];

showLoader(); 
var clientURL = 'https://api.edmunds.com';
$http({
    url: encodeURI(clientURL + "/api/vehicle/v2/makes?fmt=json&api_key=ykv5c7452ysyhbhqtgjfpkap"),
    headers: {
		"Accept": "application/json",
		"Content-Type": "application/json; charset=utf-8",
		"OData-MaxVersion": "4.0",
		"OData-Version": "4.0"}
}).then( function(res){
   //Sucess
   console.log('success make');
   $scope.makeList = res.data.makes;
   hideLoader();
},
function(res){
    //Error
    console.log('error make');
});

$scope.populateModel = function(make){
$scope.modelList = [];
$scope.yearList = [];
$scope.trimList = [];

showLoader();

$http({
    url: encodeURI(clientURL + "/api/vehicle/v2/" + make.niceName +  "/models?fmt=json&api_key=ykv5c7452ysyhbhqtgjfpkap"),
    headers: {
		"Accept": "application/json",
		"Content-Type": "application/json; charset=utf-8",
		"OData-MaxVersion": "4.0",
		"OData-Version": "4.0"}
}).then( function(res){
   //Sucess
   console.log('success model');
   $scope.modelList = res.data.models;
   hideLoader();
},
function(res){
    //Error
    console.log('error model');
});    
}

$scope.populateYear = function(make,model){
$scope.yearList = [];
$scope.trimList = [];

showLoader();

$http({
    url: encodeURI(clientURL + "/api/vehicle/v2/" + make.niceName +  "/" + model.niceName + "/years?fmt=json&api_key=ykv5c7452ysyhbhqtgjfpkap"),
    headers: {
		"Accept": "application/json",
		"Content-Type": "application/json; charset=utf-8",
		"OData-MaxVersion": "4.0",
		"OData-Version": "4.0"}
}).then( function(res){
   //Sucess
   console.log('success year');
   $scope.yearList = res.data.years;
   hideLoader();
},
function(res){
    //Error
    console.log('error year');
});    
}

$scope.populateTrim = function(year) {
$scope.trimList = [];

$scope.trimList = year.styles;

}

$scope.setVariables = function(make, model, year, trimId) {
    $rootScope.type = "sell";
    $rootScope.make = make;
    $rootScope.model = model;
    $rootScope.year = year;
    $rootScope.trimId = trimId;
    $scope.makeList = [];
    $scope.modelList = [];
    $scope.yearList = [];
    $scope.trimList = [];
}

}])
   
.controller('yourReportCtrl', ['$scope', '$rootScope', '$stateParams', '$http', '$sce', '$ionicPopup', '$timeout', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $rootScope, $stateParams, $http, $sce, $ionicPopup, $timeout) {
    
function showLoader() {
    jQuery('.loader').show();
}

function hideLoader() {
    jQuery('.loader').hide();
}


var CPM = {};

function showPopup() {
  $scope.data = {};
  var message = 'Join our community and get unique car reports & information.';
  switch ($rootScope.userType) {
      case'A':
          message = 'Email this report to myself or somewhere else.';
          break;
      case'B':
          message = 'Join our community and get alerted if we find you a great deal!';
          break;
      default:
          message = 'Email this report to myself or somewhere else.';
          break;
  }

  // An elaborate, custom popup
  var myPopup = $ionicPopup.show({
    template: '<input type="email" ng-model="data.email" placeholder="yourname@email.com">',
    title: 'Email me this Information',
    scope: $scope,
    buttons: [
      { 
        text: 'X', 
        onTap: function(e) {
          return 'cancel'
        }  
      },
      {
        text: '<b>Submit</b>',
        type: 'button-positive',
        onTap: function(e) {
          if (!$scope.data.email) {
            //don't allow the user to close unless they enter their email
            console.log('failed', $scope.data);
            e.preventDefault();
          } else {
            return 'success';
          }
        }
      }
    ]
  });

  myPopup.then(function(res) {
    console.log('Tapped!', res);
    myPopup.close();
    if ( res == 'success' ) {
        
        var $header = {'Content-Type' : 'x-www-form-urlencoded'};
        var $data = {};
        $data.email = $scope.data.email;
        
		
        $data.make = $rootScope.make;
        $data.model = $rootScope.model;
        $data.year = $rootScope.year;
        $data.trimid = $rootScope.trimId;
        $data.priceB = parseFloat($rootScope.priceB);
        $data.milesB =  parseInt($rootScope.milesB);
        $data.priceS = parseFloat($rootScope.priceS);
        $data.milesS = parseInt($rootScope.milesS);
        $data.cpm = $rootScope.CPM;
        $data.send = 'yes';
        
        $http({
          method: 'POST',
          url: 'https://carcurve.co/emailR.php',
          headers: $header, 
          data: $data
        }).then(function successCallback(response) {
            // this callback will be called asynchronously
            // when the response is available
            console.log('success');
            console.log(response);
            var myPopup = $ionicPopup.show({
                title: 'Sucess!',
                scope: $scope,
                buttons: [
                  { 
                    text: 'X', 
                    onTap: function(e) {
                      return 'cancel'
                    }  
                  },
                  {
                    text: '<b>Ok</b>',
                    type: 'button-positive',
                    onTap: function(e) {
                      return 'success';
                    }
                  }
                ]
              });
            $rootScope.Q_id = response.data;
          }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            console.log('error');
          });
    } else { 
        var $header = {'Content-Type' : 'x-www-form-urlencoded'};
        var $data = {};
        $data.make = $rootScope.make;
        $data.model = $rootScope.model;
        $data.year = $rootScope.year;
        $data.trimid = $rootScope.trimId;
        $data.priceB = parseFloat($rootScope.priceB);
        $data.milesB =  parseInt($rootScope.milesB);
        $data.priceS = parseFloat($rootScope.priceS);
        $data.milesS = parseInt($rootScope.milesS);
        $data.cpm = $rootScope.CPM;
        
        $http({
          method: 'POST',
          url: 'https://carcurve.co/emailR.php',
          headers: $header, 
          data: $data
        }).then(function successCallback(response) {
            // this callback will be called asynchronously
            // when the response is available
            console.log('success');
            console.log(response.data);
            $rootScope.Q_id = response.data;
          }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            console.log('error');
          });
    }
  });
 }

$scope.resetRoot = function () {
	delete $rootScope.make;
	delete $rootScope.model;
	delete $rootScope.year;
	delete $rootScope.trimId;
	delete $rootScope.priceB;
	delete $rootScope.milesB;
	delete $rootScope.priceS;
	delete $rootScope.milesS;
	delete $rootScope.CPM;
}

function invalidPrice() {
    jQuery('.results').hide();
    $scope.error = $sce.trustAsHtml('Error, car is too recent or exotic for relavent data.  <a ui-sref="carSelectBuyer" href="#/carselect-buyer">Click here</a> to go back to the car selection.');
}

function CalculateCPM() {
    console.log('total prices ' + prices);
    console.log('total miles ' + miles);
    console.log('graph points ' + graph);
    
    var lowestBA = [0,0];
    var highestSA = [0,0];
    
    angular.forEach( prices, function(price,index) {
        console.log(index, price, miles[index]);
        if ( index == 0 ) {
            //buying info
            lowestBA = [miles[index], price];
        } else {
            //selling info
            if ( price > highestSA[1] - (highestSA[1] * 0.10) ) {
                highestSA = [miles[index], price];
            }
        }
    });
    
    $scope.buyMiles = lowestBA[0].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    $scope.buyPrice = "$" + lowestBA[1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    $scope.sellMiles = highestSA[0].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    $scope.sellPrice = "$" + highestSA[1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    $scope.totalMilage = (highestSA[0]-lowestBA[0]).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    $scope.totalPrice = "$" + (lowestBA[1]-highestSA[1]).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    $scope.CPM = ((lowestBA[1]-highestSA[1])/(highestSA[0]-lowestBA[0])).toFixed(3);
    
    console.log('lowestBA ' + lowestBA);
    console.log('highestSA ' + highestSA);
    
    $rootScope.buyMiles = $scope.buyMiles;
    $rootScope.buyPrice = $scope.buyPrice;
    $rootScope.sellMiles = $scope.sellMiles;
    $rootScope.sellPrice = $scope.sellPrice; 
    $rootScope.CPM = $scope.CPM;
}

$scope.make = $rootScope.make;
$scope.model = $rootScope.model;
$scope.year = $rootScope.year;
var priceB = parseFloat($rootScope.priceB);
var milesB = parseInt($rootScope.milesB);
var priceS = parseFloat($rootScope.priceS);
var milesS = parseInt($rootScope.milesS);

$timeout(showPopup , 21000);


var actualPrice = priceB-priceS;
var actualMiles = milesS-milesB
var CPM = (priceB-priceS)/(milesS-milesB);

$scope.buyPrice = "$" + priceB.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
$scope.buyMiles = milesB.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
$scope.sellPrice = "$" + priceS.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
$scope.sellMiles = milesS.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
$scope.actualPrice = "$" + actualPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
$scope.actualMiles = actualMiles.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

if ( priceB == 0 ) {
  $scope.CPM = 'Pruchasing Price must be over $0';
  return;
} 

if ( milesB >= milesS ) {
  $scope.CPM = 'Selling Miles must be higher than Purchasing Miles';
  return;
}

$scope.CPM = CPM.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,') + " dollars/mile";
$rootScope.CPM = CPM.toFixed(2);

if ( CPM < 0.10 ) {
  $scope.face = 'fa-smile good'
  $scope.upper_txt = 'Good deal, Low CPM!';
  $scope.value = 'good';
  $scope.value_bg = 'good-bg';
  $scope.value_txt = 'Your CPM (cost-per-mile) is Low.  You are getting the most out of your vehicle.';
  $scope.sugg = 'You have a good deal going! But you can always do better though... Purchase for less with less milage or drive longer and sell for more. Get the most of every mile!';
} else if ( CPM < 0.49 ) {
  $scope.face = 'fa-meh ok';
  $scope.upper_txt = ' Not Bad, Average CPM.';
  $scope.value = 'ok';
  $scope.value_bg = 'ok-bg';
  $scope.value_txt = 'Your CPM (cost-per-mile) is Fair.  You could get more out of our vehicle. See below';
  $scope.sugg = 'For a better deal, buy for less with less milage or drive longer and sell for more. Get the most of every mile!';
} else {
  $scope.face = 'fa-frown bad';
  $scope.upper_txt =  'Bad break, High CPM...';
  $scope.value = 'bad';
  $scope.value_bg = 'bad-bg';
  $scope.value_txt = 'Your CPM (cost-per-mile) is Poor. See below.';
  $scope.sugg = 'You could be driving a truck, new or exotic vehicle but it could be a bad deal! You need to buy for less with less milage or drive longer and sell for more. Get the most of every mile!';
}

/*
var clientURL = 'https://api.edmunds.com';
var zip = 33777;
var invalid = false;

var buymiles = $rootScope.mileOption;
var miles = [];

if ( buymiles <= 25000 ) {
    miles = [buymiles, 45000, 65000, 75000, 95000, 135000];
} else if ( buymiles <= 55000) {
    miles = [buymiles, 75000, 85000, 95000, 100000, 105000, 135000, 165000];
} else {
    miles = [buymiles, 135000, 145000, 165000, 175000, 200000];
}
/*
var sellmiles = $rootScope.mileOption + 40000;

var miles = [buymiles, sellmiles - 10000, sellmiles, sellmiles + 15000,  sellmiles + (2 * 15000),  sellmiles + (3 * 15000),  sellmiles + (4 * 15000)];


var prices = [];
var graph = [];
var con = 'Average';
var processed = 0;

if ( $rootScope.imptOption == 'C' ) {
    con = 'Clean';
}


angular.forEach( miles, function(mile,index) {
$http({
    url: encodeURI(clientURL + "/v1/api/tmv/tmvservice/calculateusedtmv?styleid="+ $rootScope.trimId +"&condition=" + con + "&mileage="+ mile+"&zip="+ zip +"&fmt=json&api_key=ykv5c7452ysyhbhqtgjfpkap"),
    headers: {
		"Accept": "application/json",
		"Content-Type": "application/json; charset=utf-8",
		"OData-MaxVersion": "4.0",
		"OData-Version": "4.0"}
  }).then( function(res){
   //Sucess
   
   if(res.data.tmv.nationalBasePrice.usedTmvRetail === null) {
       console.log('fialed price for '+ mile);
       invalidPrice();
       invalid = true
   }
   console.log('success price for '+ mile);
   console.log(res);
   processed++;
   
   if ( index <= 2 ) {
       //set the buying prices
       if ( $rootScope.ownerOption == 'B' ) {
        var price = res.data.tmv.nationalBasePrice.usedPrivateParty + res.data.tmv.mileageAdjustment.usedPrivateParty;
        console.log("mile adj" + res.data.tmv.mileageAdjustment.usedPrivateParty);
       } else {
    	var price = res.data.tmv.nationalBasePrice.usedTmvRetail + res.data.tmv.mileageAdjustment.usedTmvRetail;
    	console.log("mile adj" + res.data.tmv.mileageAdjustment.usedTmvRetail);
       }
   } else {
        //set the trad-in prices
        var price = res.data.tmv.nationalBasePrice.usedTradeIn + res.data.tmv.mileageAdjustment.usedTradeIn;
   }
   prices[index] = price;
   graph[index] = {x: mile, y: price};
   if( processed === miles.length && !invalid) {
      $timeout(showPopup , 14000);
      CalculateCPM();
   }
  },
  function(res){
    //Error
    console.log('error price for '+ mile);
    console.log(res);
  });
});
*/

}])
   
.controller('pausedResultsSellerCtrl', ['$scope', '$rootScope', '$stateParams', '$http', '$sce', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $rootScope, $stateParams, $http, $sce) {

var CPM = {};

$scope.resetRoot = function () {
	delete $rootScope.make;
	delete $rootScope.model;
	delete $rootScope.year;
	delete $rootScope.trimId;
	delete $rootScope.priceB;
	delete $rootScope.milesB;
	delete $rootScope.priceS;
	delete $rootScope.milesS;
	delete $rootScope.CPM;
}

function invalidPrice() {
    $scope.error = $sce.trustAsHtml('Error, car is too recent or exotic for relavent data. <a ui-sref="pausedCarSelectSeller" href="#/carselect-seller">Click here</a> to go back to the car selection.');
    $('canvas').hide();
}

function CalculateCPM() {
    var highest = 0;
    var lowest = 0;
    var best = 0;
	cpmA = [];
	for(j = 1; j < 8; j++) {
		buyPrice = prices[0];
		sellPrice = pricesTI[j];
		totalCost = buyPrice - sellPrice;
		buyMiles = miles[0];
		sellMiles = miles[j];
		totalMiles = sellMiles - buyMiles;
		buycpm = buyPrice/buyMiles;
		sellcpm = sellPrice/sellMiles;
					
		if ( totalMiles <= 0 ) {
			cpm = -1;
		} else {
			cpm = totalCost/totalMiles;
		}
		
		cpmA[j-1] = [buyPrice, buyMiles, buycpm, sellPrice, sellMiles, sellcpm, cpm]; 
		
		if (cpm > highest) {
			highest = cpm
			highestA = [buyPrice, buyMiles, buycpm, sellPrice, sellMiles, sellcpm, cpm];
		}
		
		if ( (cpm < lowest && cpm != -1) || lowest === 0 ) {
			lowest = cpm;
			lowestA = [buyPrice, buyMiles, buycpm, sellPrice, sellMiles, sellcpm, cpm];
		}
		
	}
	CPM[miles[i]] = cpmA; 
    console.log(CPM);
    console.log('lowest ' + lowestA);
    console.log('highest ' + highestA);
    
    $scope.cCPM = ($rootScope.seller.pPrice/$rootScope.seller.miles).toFixed(3);
    $scope.salesPrice = "$" + prices[0].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    $scope.tradeIn = pricesTI[0].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    
    $scope.milesSale = lowestA[4].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    $scope.salesPriceM = "$" + lowestA[3].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    
    $scope.totalMilesS = (lowestA[4] - $rootScope.seller.miles).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    $scope.totalPriceS = "$" + ($rootScope.seller.pPrice - lowestA[3]).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    $scope.totalCPMS = (($rootScope.seller.pPrice - lowestA[3])/(lowestA[4] - $rootScope.seller.miles)).toFixed(3);
    
    $rootScope.buyMiles = $rootScope.seller.miles;
    $rootScope.buyPrice = $rootScope.seller.pPrice;
    $rootScope.sellMiles = lowestA[4];
    $rootScope.sellPrice = lowestA[3]; 
    $rootScope.CPM = $scope.totalCPMS;
}
    
$scope.make = $rootScope.make.name;
$scope.model = $rootScope.model.name;
$scope.year = $rootScope.year.year;
$scope.pPrice = ($rootScope.seller.pPrice).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
$scope.pMiles = ($rootScope.seller.miles).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
console.log($rootScope.seller.miles);

var clientURL = 'https://api.edmunds.com';
var zip = 33777;
var invalid = false;
var miles = [];

for (i = 0; i < 8; i++) {
	miles[i] = $rootScope.seller.miles + (i * 10000);
} 

var prices = [];
var pricesTI = [];
var processed = 0;
angular.forEach( miles, function(mile,index) {
  $http({
    url: encodeURI(clientURL + "/v1/api/tmv/tmvservice/calculateusedtmv?styleid="+ $rootScope.trimId +"&condition=Average&mileage="+ mile+"&zip="+ zip +"&fmt=json&api_key=ykv5c7452ysyhbhqtgjfpkap"),
    headers: {
		"Accept": "application/json",
		"Content-Type": "application/json; charset=utf-8",
		"OData-MaxVersion": "4.0",
		"OData-Version": "4.0"}
  }).then( function(res){
   //Sucess
   console.log('success price for '+ mile);
   console.log(res);
   if(res.data.tmv.nationalBasePrice.usedTmvRetail === null) {
       invalidPrice();
   }
   processed++
   if ( $rootScope.ownerOption == 'B' ) {
    var price = res.data.tmv.nationalBasePrice.usedPrivateParty + res.data.tmv.mileageAdjustment.usedPrivateParty;
   } else {
	var price = res.data.tmv.nationalBasePrice.usedTmvRetail + res.data.tmv.mileageAdjustment.usedTmvRetail;
   }
   var priceTI = res.data.tmv.nationalBasePrice.usedTradeIn + res.data.tmv.mileageAdjustment.usedTradeIn
   prices[index] = price;
   pricesTI[index] = priceTI;
   if(processed === miles.length && !invalid) {
      CalculateCPM();
   }
  },
  function(res){
    //Error
    console.log('error price for '+ mile);
    console.log(res);
  });
});

$scope.labels = miles;
$scope.series = ["Retail Price","Trade In Price"];
$scope.data = [prices,pricesTI];
$scope.colors = ['#97bbcd','#f7464a']
$scope.datasetOverride = [{fill: false, yAxisID: 'y-axis-1'}, {fill: false, yAxisID: 'y-axis-1'}];
$scope.options = {
    scales: {
       xAxes: [{
          ticks: {
            userCallback: function(value, index, values) {
            // Convert the number to a string and splite the string every 3 charaters from the end
            value = value.toString();
            value = value.split(/(?=(?:...)*$)/);

            // Convert the array to a string and format the output
            value = value.join(',');
            return value;
            }
          }
        }],
      yAxes: [{
          id: 'y-axis-1',
          type: 'linear',
          display: true,
          position: 'left',
          ticks: {
          userCallback: function(value, index, values) {
            // Convert the number to a string and splite the string every 3 charaters from the end
            value = value.toString();
            value = value.split(/(?=(?:...)*$)/);

            // Convert the array to a string and format the output
            value = value.join(',');
            return '$' + value;
          }
          }
        }]
    }
};

}])
   
.controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('termsAndConditionsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('loadingPageCtrl', ['$scope', '$stateParams', '$timeout', '$rootScope', '$state', '$sce', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $timeout, $rootScope, $state, $sce) {

particlesJS('particles-js',
  
  {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);

$scope.loading_text = $sce.trustAsHtml('Calculating...');
//$timeout(function() { $scope.loading_text = $sce.trustAsHtml('Learning when to buy & sell...');}, 3000);
//$timeout(function() { $scope.loading_text = $sce.trustAsHtml('This data is deep...');}, 4000);
//$timeout(function() { $scope.loading_text = $sce.trustAsHtml('Eureka! A result!');}, 6000);

$timeout(function() {
    if ( $rootScope.type == 'buy' ) {
        $state.go('yourReport');
    } else if ( $rootScope.type == 'sell' ) {
        $state.go('pausedResultsSeller');
    } else {
      $state.go('yourReport');
    }
}, 10000);


}])
   
.controller('emailMyResultsCtrl', ['$scope', '$rootScope', '$http', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $rootScope, $http, $stateParams) {
    console.log($rootScope.Q_id); 
    
$scope.EmailResults = function(value) {
    var $header = {'Content-Type' : 'x-www-form-urlencoded'};
    var $data = {}
    $data.email = value[0];
    $data.name = value[1];
    $data.offer = (value[2] ? value[2] : 0);
    
    $data.make = $rootScope.make;
    $data.model = $rootScope.model;
    $data.year = $rootScope.year;
    $data.trimid = $rootScope.trimId;
    $data.priceB = parseFloat($rootScope.priceB);
    $data.milesB =  parseInt($rootScope.milesB);
    $data.priceS = parseFloat($rootScope.priceS);
    $data.milesS = parseInt($rootScope.milesS);
    $data.cpm = $rootScope.CPM;
    $data.Q_id = $rootScope.Q_id;
    $data.send = 'yes';
    
    
    $http({
      method: 'POST',
      url: 'https://carcurve.co/emailR.php',
      headers: $header, 
      data: $data
    }).then(function successCallback(response) {
        // this callback will be called asynchronously
        // when the response is available
        console.log('success');
        console.log(response);
      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        console.log('error');
      });

      delete $rootScope.make;
      delete $rootScope.model;
      delete $rootScope.year;
      delete $rootScope.trimId;
      delete $rootScope.priceB;
      delete $rootScope.milesB;
      delete $rootScope.priceS;
      delete $rootScope.milesS;
      delete $rootScope.CPM;
      delete $rootScope.Q_id;
    }

}
    ])
 