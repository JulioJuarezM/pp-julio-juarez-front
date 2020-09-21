'use strict';

var App = angular.module('dataManagerMongo',['ui.router']);

App.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
				$urlRouterProvider.otherwise("/newItem")
				
				$stateProvider
						.state('newItem', {
							url: "/newItem",
							templateUrl: "newItem.html"
						})
						.state('newItem.insertForm', {
							url: "/insertForm",
							templateUrl: "insertForm.html",
							controller: function($scope){
								$scope.services = ["Selling", "Support", "Delivery", "Reparation"];
							}
						})
						.state('listItems', {
							url: "/listItems",
							views: {
								"" 	:    { templateUrl: "listItems.html" },
								"itesmView@listItems": { templateUrl: "itemsTable.html" ,
									controller: function($scope){
											$scope.clients = [{Nombre: "Julio", Apellido: "Juarez"},{Nombre: "Julio", Apellido: "Juarez"}];
									}
								}
							}
						})
			}]);
App.controller('myController', ['$scope','$http', function ($scope,$http) {
    $scope.insert = function(){
        var jsonInsert = {
            Nombre: $scope.NombreInsert,
            Correo: $scope.correoInsert,
            Telefono: $scope.telefonoInsert,
            Contraseña: $scope.contrasenaInsert  ,
            Edad: $scope.edadInsert,
            Genero: $scope.generoInsert,
            Pasatiempo: $scope.pasatiempoInsert,
            FechaRegistro: new Date($scope.fecharegistroInsert).toISOString().replace(/T/, ' ').replace(/\..+/, '')   
        }

        $http({method: 'POST', url: 'http://localhost/auth', data: {
            "userName":"asfo",
            "passWord":"holamundo"
        }}).then(function (response) {
                $http({method: 'POST', url: 'http://localhost/insertData',headers: {
                    'access-token': response.data.token
                }, data: jsonInsert}).then(function (response) {
                    console.log(response);
                    alert('Registro generado correctamente!!!');
                    location.reload(); 
                }, function (response) {
                    $scope.data = response.data || 'Request failed';
                    $scope.status = response.status;
                });
            }, function (response) {
            $scope.data = response.data || 'Request failed';
            $scope.status = response.status;
        });

        console.log(jsonInsert);
    }

    $scope.fA = function(){
        console.log($scope.myVar);
        
    }
    $scope.init = function (json) {
        $http({method: 'POST', url: 'http://localhost/auth', data: {
            "userName":"asfo",
            "passWord":"holamundo"
        }}).then(function (response) {
                $http({method: 'POST', url: 'http://localhost/allData',headers: {
                    'access-token': response.data.token
                }, data: {
                    "allData":"1",
                    "Nombre":"Julio Cesar Juarez Martinez",
                    "Pasatiempo":"Futbol"
                }}).then(function (response) {

                    $scope.employees = response.data;
                    $scope.empArray = Object.keys($scope.employees)
                    .map(function (value, index) {
                        return { values: $scope.employees[value] }
                        }
                    );
                    }, function (response) {
                    $scope.data = response.data || 'Request failed';
                    $scope.status = response.status;
                });
            }, function (response) {
            $scope.data = response.data || 'Request failed';
            $scope.status = response.status;
        });
    };
    } ]);