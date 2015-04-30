githubUserSearch.controller('GitUserSearchController', ['Search', function(Search) {

    // var searchResource = $resource('https://api.github.com/search/users?access_token=a17eee887ac0a92ed1407d7943647dd94fa5a587');
    var self = this;

    self.doSearch = function() {
        Search.query(self.searchTerm)
            .then(function(response) {
                self.searchResult = response.data;
        });
    };
}]);
