githubUserSearch.controller('GitUserSearchController', ['$resource',function($resource) {

    var searchResource = $resource('https://api.github.com/search/users?access_token=a17eee887ac0a92ed1407d7943647dd94fa5a587')
    var self = this;

    self.doSearch = function() {
        console.log(self.searchTerm);

        self.searchResult = searchResource.get(
            { q: self.searchTerm }
        );
    };
}]);