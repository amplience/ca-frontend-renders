(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        var renderTypes = typeof root.renderTypes !== 'undefined' ? root.renderTypes : undefined;
        var Hbars = typeof root.Handlebars !== 'undefined' ? root.Handlebars : undefined;
        factory()(Hbars || null, renderTypes || null);
    }
}(this, function () {
    return function(Hbars, renderTps){
        if(renderTps && typeof renderTypes  === 'undefined'){
            var renderTypes = renderTps;
        }
        if(Hbars && typeof Handlebars === 'undefined'){
            Handlebars = Hbars;
        }

        if (typeof Handlebars !== 'undefined') {
            Handlebars.registerHelper('escapeUrl', function (url) {
                if (!url || url.length < 1) {
                    return '';
                }
                return encodeURIComponent(url);
            });

            Handlebars.registerHelper('dynamicTemplate', function (id, renderTypes, context, addTemplateClassname) {
                if (id === false) {
                    id = context['@type'];
                }

                if (renderTypes) {
                    context.renderTypes = renderTypes;
                }

                else {
                    renderTypes = context.renderTypes;
                }

                var parsedId = id.indexOf('/') === -1 ? id : id.substring(id.lastIndexOf('/') + 1, id.length);
                var matchedTemplate;
                for (var name in renderTypes) {
                    if (parsedId === renderTypes[name]) {
                        matchedTemplate = Handlebars.partials[name].length
                            ? Handlebars.partials[name]
                            : Handlebars.template(Handlebars.partials[name]);
                        break;
                    }
                }
                if (!matchedTemplate) {
                    return "Template matching id: " + id + ' not found';
                }

                context.addTemplateClassname = typeof addTemplateClassname !== 'undefined' ? addTemplateClassname : '';
                return new Handlebars.SafeString(matchedTemplate(context));
            });

            Handlebars.registerHelper('matchType', function (id, renderName, opts) {
                if (!renderTypes) {
                    return new Handlebars.SafeString('renderTypes are undefined');
                }

                var parsedId = id.indexOf('/') === -1 ? id : id.substring(id.lastIndexOf('/') + 1, id.length);
                if (renderTypes[renderName] === parsedId) {
                    return opts.fn(this);
                }
            });

            Handlebars.registerHelper("math", function (lvalue, operator, rvalue, options) {
                lvalue = parseFloat(lvalue);
                rvalue = parseFloat(rvalue);

                return {
                    "+": lvalue + rvalue,
                    "-": lvalue - rvalue,
                    "*": lvalue * rvalue,
                    "/": lvalue / rvalue,
                    "%": lvalue % rvalue
                }[operator];
            });

            Handlebars.registerHelper('bannerConfig', function (opts) {
                hex = this.bannerColor || '#fff';
                alpha = this.bannerOpacity || 1;
                hex = hex.replace('#', '');

                if (hex.length === 3) {
                    var hexArr = hex.split('');
                    hex = hexArr[0] + hexArr[0];
                    hex += (hexArr[1] + hexArr[1]);
                    hex += (hexArr[2] + hexArr[2]);
                }

                var r = parseInt(hex.slice(0, 2), 16);
                var g = parseInt(hex.slice(2, 4), 16);
                var b = parseInt(hex.slice(4, 6), 16);

                if (alpha) {
                    return 'background-color:rgba(' + r + ', ' + g + ', ' + b + ', ' + alpha + '); ';
                }
                else {
                    return 'background-color:rgb(' + r + ', ' + g + ', ' + b + '); ';
                }
            });

            Handlebars.registerHelper('roundelConfig', function (roundel) {
                if (roundel && roundel[0] && roundel[0].roundel && roundel[0].roundel.name) {
                    var resultPosition = '';
                    switch (roundel[0].roundelPosition) {
                        case 'Bottom Right':
                            resultPosition = 'p1_img=';
                            break;
                        case 'Bottom Left':
                            resultPosition = 'p2_img=';
                            break;
                        case 'Top Left':
                            resultPosition = 'p3_img=';
                            break;
                        case 'Top Right':
                            resultPosition = 'p4_img=';
                            break;
                    }
                    var roundelRatio = roundel[0].roundelRatio;
                    return resultPosition + roundel[0].roundel.name + (roundelRatio ? ('&roundelRatio=' + roundelRatio) : '');
                } else {
                    return '';
                }
            });

            Handlebars.registerHelper('splitBlock', function (index, split) {
                if (typeof split === 'undefined') {
                    return ''
                }
                var id = parseInt(index, 10);
                var splitter = split.split('/');
                if (id === 0) {
                    return 'amp-ca-size-' + splitter[0];
                }

                return 'amp-ca-size-' + splitter[1];
            });

            Handlebars.registerHelper('iff', function (a, operator, b, opts) {
                var bool = false;
                switch (operator) {
                    case '==':
                        bool = a == b;
                        break;
                    case '>':
                        bool = a > b;
                        break;
                    case '<':
                        bool = a < b;
                        break;
                    default:
                        throw "Unknown operator " + operator;
                }

                if (bool) {
                    return opts.fn(this);
                } else {
                    return opts.inverse(this);
                }
            });

            Handlebars.registerHelper('roundelProperties', function (opts) {
                if (this.roundel && this.roundel[0] && this.roundel[0].roundel && this.roundel[0].roundelPosition && this.roundel[0].roundelRatio) {
                    return opts.fn(this);
                } else {
                    return opts.inverse(this);
                }
            });

            Handlebars.registerHelper('showdown', function (text) {
                if (typeof showdown === 'undefined') {
                    return text || '';
                }
                var converter = new showdown.Converter({
                    noHeaderId: true,
                    simpleLineBreaks: true
                });

                var text = converter.makeHtml(text);

                if (typeof text === 'undefined') {
                    text = '';
                }

                return new Handlebars.SafeString(text);
            });
        }

        else {
            console.warn('Handlebars is not defined, please make sure you included Handlebars library');
        }
    }
}));




