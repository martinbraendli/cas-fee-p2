var ratingStore;

//require(['Server/services/ratingStore.js'], function (rs) {
require(['base/Server/services/ratingStore.js'], function (rs,a,b,c,d,e) {
    ratingStore = rs;
}); // todo--> on error?

describe("test1", function () {
    /*
     beforeEach(inject(function (RepositoryService) {
     service = RepositoryService;
     }));
     */
    it("should multiply 2 and 3", function () {
        ratingStore.loadRatings();
    });

});
