describe('GitUserSearchController', function() {
    beforeEach(module('GitUserSearch'));

    var ctrl;

    beforeEach(inject(function($controller) {
        ctrl = $controller('GitUserSearchController');
    }));

    it('initialises with an empty search results and term', function() {
        expect(ctrl.searchResult).toBeUndefined();
        expect(ctrl.searchTerm).toBeUndefined();
    });

    describe('when searching for a user', function() {

      var httpBackend;
      beforeEach(inject(function($httpBackend){
        httpBackend = $httpBackend
        httpBackend
          .when("GET", "https://api.github.com/search/users?access_token=a17eee887ac0a92ed1407d7943647dd94fa5a587&q=hello")
          .respond(
            { items: items }
            );
      }));

      var items = [
        {
          "login": "tansaku",
          "avatar_url": "https://avatars.githubusercontent.com/u/30216?v=3",
          "html_url": "https://github.com/tansaku"
        },
        {
          "login": "stephenlloyd",
          "avatar_url": "https://avatars.githubusercontent.com/u/196474?v=3",
          "html_url": "https://github.com/stephenlloyd"
        }
      ];

      it('displays search results', function() {
        ctrl.searchTerm = 'hello';
        ctrl.doSearch();
        httpBackend.flush();
        expect(ctrl.searchResult.items).toEqual(items);
      });
    });
});
