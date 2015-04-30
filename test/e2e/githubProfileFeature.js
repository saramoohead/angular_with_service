describe('Github Profile finder', function() {

  var searchBox = element(by.model('searchCtrl.searchTerm'));
  var searchButton = element(by.className('btn'));

  beforeEach(function() {
    browser.get('http://localhost:8080');
  });

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('Github user search');
  });

  it('finds profiles', function (){

    searchBox.sendKeys('stephenbob');
    searchButton.click();

    var profiles = element.all(by.repeater('user in searchCtrl.searchResult.items'));
    expect(profiles.last().getText()).toEqual('stephenbob');
  });

  it('returns correct count of items in search', function() {

    searchButton.click();

    var profiles = element.all(by.repeater('user in searchCtrl.searchResult.items'));
    expect(profiles.count()).toBe(2);

    // var profiles = element.all(by.repeater('user in searchCtrl.searchResult.items'));
    // expect(profiles.get(0).getText()).toEqual('spike');
    // expect(element(by.binding('user.login')).getText()).toEqual('spike01');
  });
});

