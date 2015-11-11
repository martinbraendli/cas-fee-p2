/**
 * Jasmine spec's für NotePro
 */
describe("FettyBossy - Message Service", function () {
    var service;
    var originalTimeout;

    beforeEach(module("fettyBossy"));

    beforeEach(inject(function ($injector) {
        service = $injector.get('MessageService');
    }));

    beforeEach(function () {
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 500; // 500ms
    });

    afterEach(function () {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    });

    it('should set message', function() {
        expect(service).toBeDefined();

        service.setMessage("Testmessage", 0);

        var message = service.message;
        expect(message).toBeDefined();
        expect(message.text).toBe("Testmessage");
        expect(message.severity).toBe(0);
    });

    it('should replace message', function () {
        expect(service).toBeDefined();

        service.setMessage("Testmessage1", 0);
        service.setMessage("Testmessage2", 1);
        service.setMessage("Testmessage3", 2);

        var message = service.message;
        expect(message).toBeDefined();
        expect(message.text).toBe("Testmessage3");
        expect(message.severity).toBe(2);
    });

    it('should reset message', function () {
        expect(service).toBeDefined();

        service.setMessage("Testmessage1", 0);
        var message = service.message;
        expect(message).toBeDefined();
        expect(message.text).toBe("Testmessage1");
        expect(message.severity).toBe(0);

        service.setMessage(null, null);
        message = service.message;
        expect(message).toBeDefined();
        expect(message.text).toBeFalsy();
        expect(message.severity).toBeFalsy();
    });
});