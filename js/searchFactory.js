githubUserSearch.factory('Search', ['$http', function($http) {
  var queryUrl = 'https://api.github.com/search/users?access_token=a17eee887ac0a92ed1407d7943647dd94fa5a587';
  return {
    query: function(searchTerm) {
      return $http({
        url: queryUrl,
        method: 'GET',
        params: {
          q: searchTerm
        }
      });
    }
  };
}]);
