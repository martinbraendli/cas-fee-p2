/**
 * Jasmine spec's für NotePro
 */
describe("FettyBossy - Repository Service", function () {
    var service;

    beforeEach(module("fettyBossy"));

    beforeEach(inject(function (RepositoryService) {
        service = RepositoryService;
    }));

    it('should do some initial checks', function () {
        expect(service).toBeDefined();

        service.addListener();

        service.loadRecipes();

    });
});