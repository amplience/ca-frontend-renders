describe('Utils.js', function () {
    var utils = new AmpCa.Utils();

    var auth = {
        baseUrl: 'https://c1.adis.ws',
        id: '3a8b75af-b2c8-4f48-acbf-b64a9b1342fe',
        store: 'csdemo'
    };

    describe('baseAjax success callback method testing', function () {
        var formattedData = null;
        var callbackFormattedData = null;

        beforeEach(function (done) {
            utils.baseAjax({
                url: auth.baseUrl + '/cms/content/query?fullBodyObject=true&scope=tree&store=' + auth.store + '&query=%7B%22sys.iri%22:%22http://content.cms.amplience.com/' + auth.id + '%22%7D&v=' + Date.now(),
                callback: function (successData) {
                    callbackFormattedData = successData;
                    done();
                },
                formatData: function (data) {
                    formattedData = amp.inlineContent(JSON.parse(data));
                    return formattedData;
                }
            });
        });

        it("should fire formatData callback and return formatted data", function (done) {
            expect(typeof formattedData).toEqual('object');
            done();
        });

        it("should fire callback and return the same data as formatData callback", function (done) {
            expect(callbackFormattedData).toEqual(formattedData);
            done();
        });
    });


    describe('baseAjax error callback method testing', function () {
        var errorData = null;
        var errorUrlPart = 'fail';

        beforeEach(function (done) {
            utils.baseAjax({
                url: auth.baseUrl + '/cms/content/query?fullBodyObject=true&scope=tree&' + errorUrlPart + '=' + auth.store + '&query=%7B%22sys.iri%22:%22http://content.cms.amplience.com/' + auth.id + '%22%7D&v=' + Date.now(),
                errorCallback: function (errorStatus){
                    errorData = errorStatus;
                    done();
                }
            });
        });

        it("should fire errorCallback and return 400 error", function (done) {
            expect(errorData).toEqual(400);
            done();
        });
    });


    describe('AJAX for CA render test', function () {
        var content = null;

        beforeEach(function (done) {
            utils.getCaData({
                auth: auth,
                callback: function (data) {
                    content = data[0];
                    done();
                },
                formatData: function (data) {
                    return amp.inlineContent(JSON.parse(data));
                }
            });
        });

        it("should return JS Object", function (done) {
            expect(typeof content).toEqual('object');
            done();
        });

        it("should return string type for a fetched text content", function (done) {
            expect(typeof content.text).toEqual('string');
            done();
        });
    });
});
