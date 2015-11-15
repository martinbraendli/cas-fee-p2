/**
 * Jasmine spec's für NotePro
 */
describe("FettyBossy - Repository Service", function () {
    var service;
    var httpBackend;

    beforeEach(module("fettyBossy"));

    beforeEach(inject(function ($injector, $httpBackend) {
        service = $injector.get('RepositoryService');
        httpBackend = $httpBackend;
        expect(service).toBeDefined();
    }));

    /**
     * Expect call to API 'api/recipes' and check promise with data
     */
    it('should load all recipes', function () {
        var expectedJson = [{userName: "user1"}, {userName: "user2"}];

        var checkResult = function (data) {
            expect(data).toBeDefined();
            expect(data[0].userName).toBe("user1");
            expect(data[1].userName).toBe("user2");
        };
        httpBackend.whenGET('/api/recipes').respond(200, expectedJson);
        service.loadRecipes().then(checkResult);
        httpBackend.flush();
    });

    it('should load all recipes > handle error', function () {
        var checkResult = function (data) {
            expect(data.status).toBe(401);
        };

        httpBackend.whenGET('/api/recipes').respond(401, "");
        service.loadRecipes().then(shouldNotBeCalled, checkResult);
        httpBackend.flush();
    });

    it('should load recipe by user', function () {
        var expectedJson = [{userName: "user1", title: "Rezept1"}, {userName: "user1", title: "Rezept2"}];

        var checkResult = function (data) {
            expect(data).toBeDefined();
            expect(data[0].userName).toBe("user1");
            expect(data[0].title).toBe("Rezept1");
            expect(data[1].userName).toBe("user1");
            expect(data[1].title).toBe("Rezept2");
        };

        httpBackend.whenGET('/api/recipes/byUser/123').respond(200, expectedJson);
        service.loadRecipesByUser("123").then(checkResult);
        httpBackend.flush();
    });

    it('should load recipe by id', function () {
        expect(false).toBeTruthy();
    });

    it('should save recipe', function () {
        expect(false).toBeTruthy();
    });

    it('should load user by id', function () {
        expect(false).toBeTruthy();
    });

    it('should register user', function () {
        expect(false).toBeTruthy();
    });

    it('should save user', function () {
        expect(false).toBeTruthy();
    });

    it('should load ratings', function () {
        expect(false).toBeTruthy();
    });

    it('should save rating', function () {
        expect(false).toBeTruthy();
    });

    shouldNotBeCalled = function () {
        fail("not method called");
    };
});