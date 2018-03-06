angular.module('app.directives', [])

.directive('blankDirective', [function(){

}]).directive('ngMin', function() {
	return {
		restrict: 'A',
		require: 'ngModel',
		link: function(scope, elem, attr) { elem.attr('min', attr.ngMin); }
	};
}).directive('ngMax', function() {
	return {
		restrict: 'A',
		require: 'ngModel',
		link: function(scope, elem, attr) { elem.attr('max', attr.ngMax); }
	};
});