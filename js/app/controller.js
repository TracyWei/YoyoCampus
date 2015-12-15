angular.module('yoyoApp', [])
	.service('appServices', [function() {
		this.mylocation;
	}])
	.controller('indexController', ['$scope', function($scope) {
		// $scope.test=2000;
	}]) //选择地点
	.controller('locationController', ['$scope', '$http', 'appServices', '$rootScope', function($scope, $http, appServices, $rootScope) {
		var i = 1;
		var re = function() {
			$http({
					method: "get",
					url: url + "/v1.0/location/",
					headers: {
						access_token: 'c8c1b2da-86ed-11e5-83a9-00163e021195'
					}
				})
				.success(function(data) {
					console.log("success" + i);
					i = i + 1;
					console.log(data);
					$scope.locations = data.location;
				})
				.error(function(data) {
					console.log("error");
				});
		};
		re();
		$scope.getLocation = function(loc) {
			appServices.mylocation = loc;
		}
	}]) //主页
	.controller('HomeFuckController', ['$scope', '$rootScope', function($scope, $rootScope) {
		// $scope.load = function() {  
		//            alert('code here');  
		//            $scope.aaaacampus="我的校区";
		//       } 
		// $scope.test=2000; 
		console.log($scope.aaaacampus);
		console.log("homeCtrl");
		$rootScope.HomeClick = true;
		console.log("test:" + $rootScope.HomeClick);
		var state = true;
		$scope.click_idle111 = function() {
			// if($rootScope.HomeClick){
			console.log("click")
			console.log("触发idle_broadcast");
			state = false;
			console.log("test unclick:" + $rootScope.HomeClick);
			$rootScope.HomeClick = false;
			console.log("test click:" + $rootScope.HomeClick);
			$rootScope.$broadcast('pass_location');
			console.log("触发idle_broadcast结束");
			// }
		}
		$scope.click_travel = function() {
			console.log("click")
			console.log("触发travel_broadcast");
			state = false;
			console.log("test unclick:" + $rootScope.HomeClick);
			$rootScope.HomeClick = false;
			console.log("test click:" + $rootScope.HomeClick);
			$rootScope.$broadcast('pass_location');
			console.log("触发travel_broadcast结束");
		}
		$scope.click_cloth = function() {
			console.log("click")
			console.log("触发clothes_broadcast");
			state = false;
			console.log("test unclick:" + $rootScope.HomeClick);
			$rootScope.HomeClick = false;
			console.log("test click:" + $rootScope.HomeClick);
			$rootScope.$broadcast('pass_location');
			console.log("触发clothes_broadcast结束");
		}
		$scope.click_driver = function() {
			console.log("click")
			console.log("触发driver_broadcast");
			state = false;
			console.log("test unclick:" + $rootScope.HomeClick);
			$rootScope.HomeClick = false;
			console.log("test click:" + $rootScope.HomeClick);
			$rootScope.$broadcast('pass_location');
			console.log("触发driver_broadcast结束");
		}
		$scope.click_study = function() {
			console.log("click")
			console.log("触发study_broadcast");
			state = false;
			console.log("test unclick:" + $rootScope.HomeClick);
			$rootScope.HomeClick = false;
			console.log("test click:" + $rootScope.HomeClick);
			$rootScope.$broadcast('pass_location');
			console.log("触发study_broadcast结束");
		}
		$scope.click_personalShop = function() {
			console.log("click")
			console.log("触发personalShop_broadcast");
			state = false;
			console.log("test unclick:" + $rootScope.HomeClick);
			$rootScope.HomeClick = false;
			console.log("test click:" + $rootScope.HomeClick);
			$rootScope.$broadcast('pass_location');
			console.log("触发personalShop_broadcast结束");
		}
	}])
	//闲置
	.controller('idleController', ['$scope', '$http', 'appServices', '$rootScope', function($scope, $http, appServices, $rootScope) {
		$scope.kinds = null;
		$scope.testidle = 2000;
		$http({
			method: "get",
			url: url + "/v1.0/category/idle/",
			headers: {
				access_token: 'c8c1b2da-86ed-11e5-83a9-00163e021195'
			}
		}).
		success(function(data) {
				console.log("获取标题栏")
				console.log(data.category);
				$scope.kinds = data.category;

			})
			.error(function() {
				console.log("error1");
			});
		var location = appServices.mylocation | null;
		var category, order;
		var page = 1;
		var refresh = function() {
			location = appServices.mylocation;
			if (location) {
				$('.alert_loc').hide();
			}
			console.log(location + "hhhh");
			if (location) {
				console.log("开始获取数据,发送htp");
				$http.get(url + '/v1.0/idle/search/', {
						headers: {
							access_token: 'c8c1b2da-86ed-11e5-83a9-00163e021195'
						},
						params: {
							order: order,
							category: category,
							page: page,
							location: location
						}
					})
					.success(function(data) {
						console.log("success");
						console.log(data.result);
						$scope.idles = data.result;
					})
					.error(function() {
						console.log("error2");
					});
			}
			console.log("获取数据结束")
		}
		refresh();
		$rootScope.xianzhiOn = true;
		$scope.$on('pass_location', function() {
			// if($rootScope.xianzhiOn){
			console.log("on");
			console.log(location);
			refresh();
			$rootScope.xianzhiOn = false;
			// }

		})
		$scope.reByKind = function(kind) {
			category = kind;
			console.log(category);
			refresh();
		};
		$scope.reByOrder = function(order_click) {
			console.log(order_click);
			order = order_click;
			refresh();
		}
	}]) //旅游
	.controller('travelController', ['$scope', '$http', 'appServices', '$rootScope', function($scope, $http, appServices, $rootScope) {
		$scope.test1 = function() {
			console.log("get");
		}
		console.log("hello");
		$http.get(url + '/v1.0/label/', {
			headers: {
				access_token: 'c8c1b2da-86ed-11e5-83a9-00163e021195'
			},
			params: {
				category: "旅游"
			}
		}).
		success(function(data) {
				$scope.travels = data.label;
				console.log($scope.travels);
				$scope.test = 2000;
			})
			.error(function() {
				console.log("error_category");
			});
		var location = appServices.mylocation | null;
		var order, label;
		var page = 1;
		var category = "旅游";
		var refresh = function() {
			location = appServices.mylocation;
			if (location) {
				$('.alert_loc').hide();
			}
			console.log(location + "hhhh");
			if (location) {
				console.log("开始获取数据,发送htp");
				$http.get(url + '/v1.0/goods/search/', {
						headers: {
							access_token: 'c8c1b2da-86ed-11e5-83a9-00163e021195'
						},
						params: {
							order: order,
							category: category,
							page: page,
							location: location,
							label:label
						}
					})
					.success(function(data) {
						console.log("success");
						console.log(data.result);
						$scope.travel_details = data.result;
					})
					.error(function() {
						console.log("error2");
					});
			}
			console.log("获取数据结束")
		}
		refresh();
		$rootScope.xianzhiOn = true;
		$scope.$on('pass_location', function() {
			// if($rootScope.xianzhiOn){
			console.log("on");
			console.log(location);
			refresh();
			$rootScope.xianzhiOn = false;
			// }

		})
		$scope.reByLabel = function(one_label) {
			label = one_label;
			console.log(one_label);
			refresh();
		};
		$scope.reByOrder = function(order_click) {
			order = order_click;
			refresh();
		}
	}]) //班服
	.controller('clothesController', ['$scope', '$http', 'appServices', '$rootScope', function($scope, $http, appServices, $rootScope) {
		console.log("hello");
		$http.get(url + '/v1.0/label/', {
			headers: {
				access_token: 'c8c1b2da-86ed-11e5-83a9-00163e021195'
			},
			params: {
				category: "班服"
			}
		}).
		success(function(data) {
				$scope.clothes = data.label;
				console.log($scope.clothes);
				$scope.test = 2000;
			})
			.error(function() {
				console.log("error_category");
			});
		var location = appServices.mylocation | null;
		var order, label;
		var page = 1;
		var category = "班服";
		var refresh = function() {
			location = appServices.mylocation;
			console.log("after" + location);
			if (location) {
				$('.alert_loc').hide();
			}
			console.log(location + "hhhh");
			if (location) {
				console.log("开始获取数据,发送htp");
				$http.get(url + '/v1.0/goods/search/', {
						headers: {
							access_token: 'c8c1b2da-86ed-11e5-83a9-00163e021195'
						},
						params: {
							order: order,
							category: category,
							page: page,
							location: location,
							label:label
						}
					})
					.success(function(data) {
						console.log("success");
						console.log(data.result);
						$scope.travel_details = data.result;
					})
					.error(function() {
						console.log("error2");
					});
			}
			console.log("获取数据结束")
		}
		refresh();
		$rootScope.xianzhiOn = true;
		$scope.$on('pass_location', function() {
			// if($rootScope.xianzhiOn){
			console.log("on");
			console.log(location);
			refresh();
			$rootScope.xianzhiOn = false;
			// }

		})
		$scope.reByLabel = function(one_label) {
			label = one_label;
			console.log(one_label);
			refresh();
		};
		$scope.reByOrder = function(order_click) {
			order = order_click;
			refresh();
		}
	}]) //驾校
	.controller('driverController', ['$scope', '$http', 'appServices', '$rootScope', function($scope, $http, appServices, $rootScope) {
		console.log("hello");
		$http.get(url + '/v1.0/label/', {
			headers: {
				access_token: 'c8c1b2da-86ed-11e5-83a9-00163e021195'
			},
			params: {
				category: "驾校"
			}
		}).
		success(function(data) {
			$scope.drivers = data.label;
			console.log($scope.clothes);
		})
		.error(function() {
			console.log("error_category");
		});
		var location = appServices.mylocation | null;
		var order, label;
		var page = 1;
		var category = "驾校";
		var refresh = function() {
			location = appServices.mylocation;
			console.log("after" + location);
			if (location) {
				$('.alert_loc').hide();
			}
			console.log(location + "hhhh");
			if (location) {
				console.log("开始获取数据,发送htp");
				$http.get(url + '/v1.0/goods/search/', {
						headers: {
							access_token: 'c8c1b2da-86ed-11e5-83a9-00163e021195'
						},
						params: {
							order: order,
							category: category,
							page: page,
							location: location,
							label:label
						}
					})
					.success(function(data) {
						console.log("success");
						console.log(data.result);
						$scope.travel_details = data.result;
					})
					.error(function() {
						console.log("error2");
					});
			}
			console.log("获取数据结束")
		}
		refresh();
		$rootScope.xianzhiOn = true;
		$scope.$on('pass_location', function() {
			// if($rootScope.xianzhiOn){
			console.log("on");
			console.log(location);
			refresh();
			$rootScope.xianzhiOn = false;
			// }

		})
		$scope.reByLabel = function(one_label) {
			label = one_label;
			console.log(one_label);
			refresh();
		};
		$scope.reByOrder = function(order_click) {
			order = order_click;
			refresh();
		}
	}]) //留学
	.controller('studyController', ['$scope', '$http', 'appServices', '$rootScope', function($scope, $http, appServices, $rootScope) {
		console.log("hello");
		$http.get(url + '/v1.0/label/', {
			headers: {
				access_token: 'c8c1b2da-86ed-11e5-83a9-00163e021195'
			},
			params: {
				category: "留学"
			}
		}).
		success(function(data) {
			$scope.studies = data.label;
			console.log($scope.clothes);
		})
		.error(function() {
			console.log("error_category");
		});
		var location = appServices.mylocation | null;
		var order, label;
		var page = 1;
		var category = "留学";
		var refresh = function() {
			location = appServices.mylocation;
			console.log("after" + location);
			if (location) {
				$('.alert_loc').hide();
			}
			console.log(location + "hhhh");
			if (location) {
				console.log("开始获取数据,发送htp");
				$http.get(url + '/v1.0/goods/search/', {
						headers: {
							access_token: 'c8c1b2da-86ed-11e5-83a9-00163e021195'
						},
						params: {
							order: order,
							category: category,
							page: page,
							location: location,
							label:label
						}
					})
					.success(function(data) {
						console.log("success");
						console.log(data.result);
						$scope.travel_details = data.result;
					})
					.error(function() {
						console.log("error2");
					});
			}
			console.log("获取数据结束")
		}
		refresh();
		$rootScope.xianzhiOn = true;
		$scope.$on('pass_location', function() {
			// if($rootScope.xianzhiOn){
			console.log("on");
			console.log(location);
			refresh();
			$rootScope.xianzhiOn = false;
			// }

		})
		$scope.reByLabel = function(one_label) {
			label = one_label;
			console.log(one_label);
			refresh();
		};
		$scope.reByOrder = function(order_click) {
			order = order_click;
			refresh();
		}
	}]) //个人小店
	.controller('personalShopController', ['$scope', '$http', 'appServices', '$rootScope', function($scope, $http, appServices, $rootScope) {
		console.log("hello");
		$http.get(url + '/v1.0/label/', {
			headers: {
				access_token: 'c8c1b2da-86ed-11e5-83a9-00163e021195'
			},
			params: {
				category: "个人小店"
			}
		}).
		success(function(data) {
			$scope.shops = data.label;
			console.log($scope.clothes);
		})
		.error(function() {
			console.log("error_category");
		});
		var location = appServices.mylocation | null;
		var order, label;
		var page = 1;
		var category = "个人小店";
		var refresh = function() {
			location = appServices.mylocation;
			console.log("after" + location);
			if (location) {
				$('.alert_loc').hide();
			}
			console.log(location + "hhhh");
			if (location) {
				console.log("开始获取数据,发送htp");
				$http.get(url + '/v1.0/goods/search/', {
						headers: {
							access_token: 'c8c1b2da-86ed-11e5-83a9-00163e021195'
						},
						params: {
							order: order,
							category: category,
							page: page,
							location: location,
							label:label
						}
					})
					.success(function(data) {
						console.log("success");
						console.log(data.result);
						$scope.travel_details = data.result;
					})
					.error(function() {
						console.log("error2");
					});
			}
			console.log("获取数据结束")
		}
		refresh();
		$rootScope.xianzhiOn = true;
		$scope.$on('pass_location', function() {
			// if($rootScope.xianzhiOn){
			console.log("on");
			console.log(location);
			refresh();
			$rootScope.xianzhiOn = false;
			// }

		})
		$scope.reByLabel = function(one_label) {
			label = one_label;
			console.log(one_label);
			refresh();
		};
		$scope.reByOrder = function(order_click) {
			order = order_click;
			refresh();
		}
	}]);