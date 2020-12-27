(window.webpackJsonp = window.webpackJsonp || []).push([
    [0],
    {
        19: function(e, a, t) {
            e.exports = t.p + "static/media/user-img-placeholder.be2ed151.jpeg";
        },
        23: function(e, a, t) {
            e.exports = t(50);
        },
        40: function(e, a) {
            window.FusionCharts.register("theme", {
                name: "ecommerce",
                theme: {
                    base: {
                        chart: {
                            bgAlpha: "0",
                            canvasBgAlpha: "0",
                            baseFont: "basefont-regular",
                            baseFontSize: "14",
                            baseFontBold: "0",
                            chartBottomMargin: "0",
                            chartTopMargin: "0",
                            chartLeftMargin: "0",
                            chartRightMargin: "0",
                            canvasBottomMargin: "0",
                            canvasTopMargin: "0",
                            canvasRightMargin: "0",
                            canvasLeftMargin: "0",
                            showBorder: "0",
                            showCanvasBorder: "0",
                            baseFontColor: "#ffffff",
                            captionFontBold: "0",
                            captionFontSize: "14",
                            subCaptionFontSize: "14",
                            tooltipColor: "#ffffff",
                            tooltipBgColor: "#000000",
                            tooltipBgAlpha: "60",
                            tooltipPadding: "5",
                            toolTipBorderAlpha: "10",
                            toolTipBorderRadius: "3",
                            showValues: "0",
                            legendBgAlpha: "0",
                            legendBorderAlpha: "0",
                            legendBorderThickness: "0",
                        },
                    },
                    bar2d: {
                        chart: {
                            placeValuesInside: "0",
                            usePlotGradientColor: "0",
                            showAlternateVGridColor: "0",
                            chartLeftMargin: "5",
                            canvasLeftMargin: "5",
                            divLineAlpha: "10",
                            divLineColor: "#ffffff",
                            captionFontColor: "#8091ab",
                            paletteColors: "#1d4f91",
                            valuePadding: "5",
                            yAxisName: "Orders",
                            yAxisNameAlpha: "50",
                            yAxisNameFontSize: "12",
                            yAxisNamePadding: "20",
                            valueFontBold: "0",
                            valueFontSize: "12",
                            plotToolText: "<div>$label<br><b>$value orders</b>",
                            captionAlignment: "left",
                            captionPadding: "20",
                        },
                    },
                    doughnut2d: {
                        chart: {
                            captionFontSize: "14",
                            captionFontColor: "#8091ab",
                            showLabels: "0",
                            showValues: "0",
                            use3DLighting: "0",
                            showPlotBorder: "0",
                            defaultCenterLabel: "75%",
                            pieRadius: "45",
                            doughnutRadius: "33",
                            showTooltip: "0",
                            enableRotation: "0",
                            enableSlicing: "0",
                            startingAngle: "90",
                        },
                    },
                    geo: {
                        chart: {
                            captionFontSize: "14",
                            captionFontColor: "#8091ab",
                            legendScaleLineThickness: "0",
                            legendaxisborderalpha: "0",
                            legendShadow: "0",
                            plotFillAlpha: "85",
                            showBorder: "1",
                            borderColor: "#ffffff",
                            borderThickness: "0.3",
                            nullEntityColor: "#17202e",
                            nullEntityAlpha: "50",
                            entityFillHoverColor: "#17202e",
                            captionAlignment: "left",
                            entityToolText:
                                "<div>$lname<br><b>$value orders</b>",
                            chartLeftMargin: "40",
                        },
                    },
                },
            });
        },
        44: function(e, a, t) {},
        50: function(e, a, t) {
            "use strict";
            t.r(a);
            var r = t(0),
                n = t.n(r),
                l = t(2),
                s = t.n(l),
                c = t(10),
                o = t(11),
                i = t(20),
                d = t(12),
                m = t(21),
                u = t(5),
                h = t(6);
            function p() {
                var e = Object(u.a)([""]);
                return (
                    (p = function() {
                        return e;
                    }),
                    e
                );
            }
            function g() {
                var e = Object(u.a)([""]);
                return (
                    (g = function() {
                        return e;
                    }),
                    e
                );
            }
            var v = h.a.div(g()),
                b = h.a.nav(p()),
                f = t(4),
                E = t.n(f),
                N = t(15),
                x = t.n(N),
                y = t(16),
                w = t.n(y),
                R = t(17),
                k = t(1),
                C = t.n(k),
                B = (t(40), "AIzaSyD3Aaz9XlXFDRxjc8GrojP9_SGV86fzSnM"),
                S = "1sCgmzBIq2K9jUckLuYSWbDq4CuNUfdtuE6a5xI3I5Hw",
                F = t(18),
                A = t.n(F);
            function T(e) {
                var a,
                    t = [
                        { value: 1, symbol: "" },
                        { value: 1e3, symbol: "k" },
                        { value: 1e6, symbol: "m" },
                        { value: 1e9, symbol: "g" },
                        { value: 1e12, symbol: "t" },
                        { value: 1e15, symbol: "p" },
                        { value: 1e18, symbol: "e" },
                    ];
                for (a = t.length - 1; a > 0 && !(e >= t[a].value); a--);
                return (
                    (e / t[a].value)
                        .toFixed(2)
                        .replace(/\.0+$|(\.[0-9]*[1-9])0+$/, "$1") + t[a].symbol
                );
            }
            var O = t(19),
                j = t.n(O);
            C.a.fcRoot(E.a, x.a, w.a, R.a);
            var D = "https://sheets.googleapis.com/v4/spreadsheets/"
                    .concat(
                        S,
                        "/values:batchGet?ranges=Sheet1&majorDimension=ROWS&key="
                    )
                    .concat(B),
                I = (function(e) {
                    function a() {
                        var e;
                        return (
                            Object(c.a)(this, a),
                            ((e = Object(i.a)(
                                this,
                                Object(d.a)(a).call(this)
                            )).getData = function(a) {
                                for (
                                    var t,
                                        r,
                                        n = e.state.items,
                                        l = n.length,
                                        s = 0,
                                        c = 0,
                                        o = 0,
                                        i = 0,
                                        d = 0,
                                        m = 0,
                                        u = 0,
                                        h = [],
                                        p = [],
                                        g = 0,
                                        v = 0,
                                        b = 0,
                                        f = 0,
                                        E = 0,
                                        N = 0;
                                    N < l;
                                    N++
                                )
                                    a === n[N].month &&
                                        ("AM" === n[N].source
                                            ? ((s += parseInt(n[N].revenue)),
                                              h.push({
                                                  label: "Amazon",
                                                  value: n[N].orders,
                                                  displayValue: "".concat(
                                                      n[N].orders,
                                                      " orders"
                                                  ),
                                              }))
                                            : "EB" === n[N].source
                                            ? ((c += parseInt(n[N].revenue)),
                                              h.push({
                                                  label: "Ebay",
                                                  value: n[N].orders,
                                                  displayValue: "".concat(
                                                      n[N].orders,
                                                      " orders"
                                                  ),
                                              }))
                                            : "ET" === n[N].source &&
                                              ((o += parseInt(n[N].revenue)),
                                              h.push({
                                                  label: "Etsy",
                                                  value: n[N].orders,
                                                  displayValue: "".concat(
                                                      n[N].orders,
                                                      " orders"
                                                  ),
                                              })),
                                        (i += parseInt(n[N].product_views)),
                                        (d += parseInt(n[N].purchase_rate / 3)),
                                        (m += parseInt(n[N].checkout_rate / 3)),
                                        (u += parseInt(
                                            n[N].abandoned_rate / 3
                                        )),
                                        (g += parseInt(n[N].orders_nw)),
                                        (v += parseInt(n[N].orders_sw)),
                                        (b += parseInt(n[N].orders_c)),
                                        (f += parseInt(n[N].orders_ne)),
                                        (E += parseInt(n[N].orders_se)));
                                (t = s + c + o),
                                    p.push(
                                        { id: "01", value: f },
                                        { id: "02", value: g },
                                        { id: "03", value: E },
                                        { id: "04", value: v },
                                        { id: "05", value: b }
                                    ),
                                    (r = a),
                                    e.setState({
                                        amRevenue: T(s),
                                        ebRevenue: T(c),
                                        etRevenue: T(o),
                                        totalRevenue: T(t),
                                        productViews: T(i),
                                        purchaseRate: d,
                                        checkoutRate: m,
                                        abandonedRate: u,
                                        ordersTrendStore: h,
                                        ordersTrendRegion: p,
                                        selectedValue: r,
                                    });
                            }),
                            (e.updateDashboard = function(a) {
                                e.getData(a.value),
                                    e.setState({ selectedValue: a.value });
                            }),
                            (e.state = {
                                items: [],
                                dropdownOptions: [],
                                selectedValue: null,
                                amRevenue: null,
                                ebRevenue: null,
                                etRevenue: null,
                                totalRevenue: null,
                                productViews: null,
                                purchaseRate: " ",
                                checkoutRate: " ",
                                abandonedRate: " ",
                                ordersTrendStore: [],
                            }),
                            e
                        );
                    }
                    return (
                        Object(m.a)(a, e),
                        Object(o.a)(a, [
                            {
                                key: "componentDidMount",
                                value: function() {
                                    var e = this;
                                    fetch(D)
                                        .then(function(e) {
                                            return e.json();
                                        })
                                        .then(function(a) {
                                            for (
                                                var t = a.valueRanges[0].values,
                                                    r = [],
                                                    n = 1;
                                                n < t.length;
                                                n++
                                            ) {
                                                for (
                                                    var l = {}, s = 0;
                                                    s < t[n].length;
                                                    s++
                                                )
                                                    l[t[0][s]] = t[n][s];
                                                r.push(l);
                                            }
                                            for (
                                                var c = [], o = 0;
                                                o < r.length;
                                                o++
                                            )
                                                c.push(r[o].month);
                                            (c = Array.from(
                                                new Set(c)
                                            ).reverse()),
                                                e.setState(
                                                    {
                                                        items: r,
                                                        dropdownOptions: c,
                                                        selectedValue:
                                                            "Jan 2019",
                                                    },
                                                    function() {
                                                        return e.getData(
                                                            "Jan 2019"
                                                        );
                                                    }
                                                );
                                        });
                                },
                            },
                            {
                                key: "render",
                                value: function() {
                                    return n.a.createElement(
                                        v,
                                        null,
                                        n.a.createElement(
                                            b,
                                            {
                                                className:
                                                    "navbar navbar-expand-lg fixed-top is-white is-dark-text",
                                            },
                                            n.a.createElement(
                                                v,
                                                {
                                                    className:
                                                        "navbar-brand h1 mb-0 text-large font-medium",
                                                },
                                                "Olist Dashboard"
                                            ),
                                            n.a.createElement(
                                                v,
                                                {
                                                    className:
                                                        "navbar-nav ml-auto",
                                                },
                                                n.a.createElement(
                                                    v,
                                                    {
                                                        className:
                                                            "user-detail-section",
                                                    },
                                                    n.a.createElement(
                                                        "span",
                                                        { className: "pr-2" },
                                                        "Hi, Sean"
                                                    ),
                                                    n.a.createElement(
                                                        "span",
                                                        {
                                                            className:
                                                                "img-container",
                                                        },
                                                        n.a.createElement(
                                                            "img",
                                                            {
                                                                src: j.a,
                                                                className:
                                                                    "rounded-circle",
                                                                alt: "user",
                                                            }
                                                        )
                                                    )
                                                )
                                            )
                                        ),
                                        n.a.createElement(
                                            b,
                                            {
                                                className:
                                                    "navbar fixed-top nav-secondary is-dark is-light-text",
                                            },
                                            n.a.createElement(
                                                v,
                                                { className: "text-medium" },
                                                "Summary"
                                            ),
                                            n.a.createElement(
                                                v,
                                                {
                                                    className:
                                                        "navbar-nav ml-auto",
                                                },
                                                n.a.createElement(A.a, {
                                                    className:
                                                        "pr-2 custom-dropdown",
                                                    options: this.state
                                                        .dropdownOptions,
                                                    onChange: this
                                                        .updateDashboard,
                                                    value: this.state
                                                        .selectedValue,
                                                    placeholder:
                                                        "Select an option",
                                                })
                                            )
                                        ),
                                        n.a.createElement(
                                            v,
                                            {
                                                className:
                                                    "container-fluid pr-5 pl-5 pt-5 pb-5",
                                            },
                                            n.a.createElement(
                                                v,
                                                { className: "row" },
                                                n.a.createElement(
                                                    v,
                                                    {
                                                        className:
                                                            "col-lg-3 col-sm-6 is-light-text mb-4",
                                                    },
                                                    n.a.createElement(
                                                        v,
                                                        {
                                                            className:
                                                                "card grid-card is-card-dark",
                                                        },
                                                        n.a.createElement(
                                                            v,
                                                            {
                                                                className:
                                                                    "card-heading",
                                                            },
                                                            n.a.createElement(
                                                                v,
                                                                {
                                                                    className:
                                                                        "is-dark-text-light letter-spacing text-small",
                                                                },
                                                                "Total Revenue"
                                                            )
                                                        ),
                                                        n.a.createElement(
                                                            v,
                                                            {
                                                                className:
                                                                    "card-value pt-4 text-x-large",
                                                            },
                                                            n.a.createElement(
                                                                "span",
                                                                {
                                                                    className:
                                                                        "text-large pr-1",
                                                                },
                                                                "$"
                                                            ),
                                                            this.state
                                                                .totalRevenue
                                                        )
                                                    )
                                                ),
                                                n.a.createElement(
                                                    v,
                                                    {
                                                        className:
                                                            "col-lg-3 col-sm-6 is-light-text mb-4",
                                                    },
                                                    n.a.createElement(
                                                        v,
                                                        {
                                                            className:
                                                                "card grid-card is-card-dark",
                                                        },
                                                        n.a.createElement(
                                                            v,
                                                            {
                                                                className:
                                                                    "card-heading",
                                                            },
                                                            n.a.createElement(
                                                                v,
                                                                {
                                                                    className:
                                                                        "is-dark-text-light letter-spacing text-small",
                                                                },
                                                                "Total order"
                                                            ),
                                                            n.a.createElement(
                                                                v,
                                                                {
                                                                    className:
                                                                        "card-heading-brand",
                                                                },
                                                                n.a.createElement(
                                                                    "i",
                                                                    {
                                                                        className:
                                                                            "fab fa-amazon text-large",
                                                                    }
                                                                )
                                                            )
                                                        ),
                                                        n.a.createElement(
                                                            v,
                                                            {
                                                                className:
                                                                    "card-value pt-4 text-x-large",
                                                            },
                                                            n.a.createElement(
                                                                "span",
                                                                {
                                                                    className:
                                                                        "text-large pr-1",
                                                                },
                                                                "$"
                                                            ),
                                                            this.state.amRevenue
                                                        )
                                                    )
                                                ),
                                                n.a.createElement(
                                                    v,
                                                    {
                                                        className:
                                                            "col-lg-3 col-sm-6 is-light-text mb-4",
                                                    },
                                                    n.a.createElement(
                                                        v,
                                                        {
                                                            className:
                                                                "card grid-card is-card-dark",
                                                        },
                                                        n.a.createElement(
                                                            v,
                                                            {
                                                                className:
                                                                    "card-heading",
                                                            },
                                                            n.a.createElement(
                                                                v,
                                                                {
                                                                    className:
                                                                        "is-dark-text-light letter-spacing text-small",
                                                                },
                                                                "Total Customer"
                                                            ),
                                                            n.a.createElement(
                                                                v,
                                                                {
                                                                    className:
                                                                        "card-heading-brand",
                                                                },
                                                                n.a.createElement(
                                                                    "i",
                                                                    {
                                                                        className:
                                                                            "fab fa-ebay text-x-large logo-adjust",
                                                                    }
                                                                )
                                                            )
                                                        ),
                                                        n.a.createElement(
                                                            v,
                                                            {
                                                                className:
                                                                    "card-value pt-4 text-x-large",
                                                            },
                                                            n.a.createElement(
                                                                "span",
                                                                {
                                                                    className:
                                                                        "text-large pr-1",
                                                                },
                                                                "$"
                                                            ),
                                                            this.state.ebRevenue
                                                        )
                                                    )
                                                )
                                            ),
                                            n.a.createElement(
                                                v,
                                                { className: "row" },
                                                n.a.createElement(
                                                    v,
                                                    {
                                                        className:
                                                            "col-md-4 col-lg-3 is-light-text mb-4",
                                                    },
                                                    n.a.createElement(
                                                        v,
                                                        {
                                                            className:
                                                                "card grid-card is-card-dark",
                                                        },
                                                        n.a.createElement(
                                                            v,
                                                            {
                                                                className:
                                                                    "card-heading mb-3",
                                                            },
                                                            n.a.createElement(
                                                                v,
                                                                {
                                                                    className:
                                                                        "is-dark-text-light letter-spacing text-small",
                                                                },
                                                                "Product Views"
                                                            )
                                                        ),
                                                        n.a.createElement(
                                                            v,
                                                            {
                                                                className:
                                                                    "card-value pt-4 text-x-large",
                                                            },
                                                            this.state
                                                                .productViews,
                                                            n.a.createElement(
                                                                "span",
                                                                {
                                                                    className:
                                                                        "text-medium pl-2 is-dark-text-light",
                                                                },
                                                                "views"
                                                            )
                                                        )
                                                    )
                                                ),
                                                n.a.createElement(
                                                    v,
                                                    {
                                                        className:
                                                            "col-md-8 col-lg-9 is-light-text mb-4",
                                                    },
                                                    n.a.createElement(
                                                        v,
                                                        {
                                                            className:
                                                                "card is-card-dark chart-card",
                                                        },
                                                        n.a.createElement(
                                                            v,
                                                            {
                                                                className:
                                                                    "row full-height",
                                                            },
                                                            n.a.createElement(
                                                                v,
                                                                {
                                                                    className:
                                                                        "col-sm-4 full height",
                                                                },
                                                                n.a.createElement(
                                                                    v,
                                                                    {
                                                                        className:
                                                                            "chart-container full-height",
                                                                    },
                                                                    n.a.createElement(
                                                                        C.a,
                                                                        {
                                                                            type:
                                                                                "doughnut2d",
                                                                            width:
                                                                                "100%",
                                                                            height:
                                                                                "100%",
                                                                            dataFormat:
                                                                                "json",
                                                                            containerBackgroundOpacity:
                                                                                "0",
                                                                            dataSource: {
                                                                                chart: {
                                                                                    caption:
                                                                                        "Purchase Rate",
                                                                                    theme:
                                                                                        "ecommerce",
                                                                                    defaultCenterLabel: "".concat(
                                                                                        this
                                                                                            .state
                                                                                            .purchaseRate,
                                                                                        "%"
                                                                                    ),
                                                                                    paletteColors:
                                                                                        "#3B70C4, #000000",
                                                                                },
                                                                                data: [
                                                                                    {
                                                                                        label:
                                                                                            "active",
                                                                                        value: "".concat(
                                                                                            this
                                                                                                .state
                                                                                                .purchaseRate
                                                                                        ),
                                                                                    },
                                                                                    {
                                                                                        label:
                                                                                            "inactive",
                                                                                        alpha: 5,
                                                                                        value: "".concat(
                                                                                            100 -
                                                                                                this
                                                                                                    .state
                                                                                                    .purchaseRate
                                                                                        ),
                                                                                    },
                                                                                ],
                                                                            },
                                                                        }
                                                                    )
                                                                )
                                                            ),
                                                            n.a.createElement(
                                                                v,
                                                                {
                                                                    className:
                                                                        "col-sm-4 full-height border-left border-right",
                                                                },
                                                                n.a.createElement(
                                                                    v,
                                                                    {
                                                                        className:
                                                                            "chart-container full-height",
                                                                    },
                                                                    n.a.createElement(
                                                                        C.a,
                                                                        {
                                                                            type:
                                                                                "doughnut2d",
                                                                            width:
                                                                                "100%",
                                                                            height:
                                                                                "100%",
                                                                            dataFormat:
                                                                                "json",
                                                                            containerBackgroundOpacity:
                                                                                "0",
                                                                            dataSource: {
                                                                                chart: {
                                                                                    caption:
                                                                                        "Checkout Rate",
                                                                                    theme:
                                                                                        "ecommerce",
                                                                                    defaultCenterLabel: "".concat(
                                                                                        this
                                                                                            .state
                                                                                            .checkoutRate,
                                                                                        "%"
                                                                                    ),
                                                                                    paletteColors:
                                                                                        "#41B6C4, #000000",
                                                                                },
                                                                                data: [
                                                                                    {
                                                                                        label:
                                                                                            "active",
                                                                                        value: "".concat(
                                                                                            this
                                                                                                .state
                                                                                                .checkoutRate
                                                                                        ),
                                                                                    },
                                                                                    {
                                                                                        label:
                                                                                            "inactive",
                                                                                        alpha: 5,
                                                                                        value: "".concat(
                                                                                            100 -
                                                                                                this
                                                                                                    .state
                                                                                                    .checkoutRate
                                                                                        ),
                                                                                    },
                                                                                ],
                                                                            },
                                                                        }
                                                                    )
                                                                )
                                                            ),
                                                            n.a.createElement(
                                                                v,
                                                                {
                                                                    className:
                                                                        "col-sm-4 full-height",
                                                                },
                                                                n.a.createElement(
                                                                    v,
                                                                    {
                                                                        className:
                                                                            "chart-container full-height",
                                                                    },
                                                                    n.a.createElement(
                                                                        C.a,
                                                                        {
                                                                            type:
                                                                                "doughnut2d",
                                                                            width:
                                                                                "100%",
                                                                            height:
                                                                                "100%",
                                                                            dataFormat:
                                                                                "json",
                                                                            containerBackgroundOpacity:
                                                                                "0",
                                                                            dataSource: {
                                                                                chart: {
                                                                                    caption:
                                                                                        "Abandoned Cart Rate",
                                                                                    theme:
                                                                                        "ecommerce",
                                                                                    defaultCenterLabel: "".concat(
                                                                                        this
                                                                                            .state
                                                                                            .abandonedRate,
                                                                                        "%"
                                                                                    ),
                                                                                    paletteColors:
                                                                                        "#EDF8B1, #000000",
                                                                                },
                                                                                data: [
                                                                                    {
                                                                                        label:
                                                                                            "active",
                                                                                        value: "".concat(
                                                                                            this
                                                                                                .state
                                                                                                .abandonedRate
                                                                                        ),
                                                                                    },
                                                                                    {
                                                                                        label:
                                                                                            "inactive",
                                                                                        alpha: 5,
                                                                                        value: "".concat(
                                                                                            100 -
                                                                                                this
                                                                                                    .state
                                                                                                    .abandonedRate
                                                                                        ),
                                                                                    },
                                                                                ],
                                                                            },
                                                                        }
                                                                    )
                                                                )
                                                            )
                                                        )
                                                    )
                                                )
                                            ),
                                            n.a.createElement(
                                                v,
                                                {
                                                    className: "row",
                                                    style: {
                                                        minHeight: "400px",
                                                    },
                                                },
                                                n.a.createElement(
                                                    v,
                                                    {
                                                        className:
                                                            "col-md-6 mb-4",
                                                    },
                                                    n.a.createElement(
                                                        v,
                                                        {
                                                            className:
                                                                "card is-card-dark chart-card",
                                                        },
                                                        n.a.createElement(
                                                            v,
                                                            {
                                                                className:
                                                                    "chart-container large full-height",
                                                            },
                                                            n.a.createElement(
                                                                C.a,
                                                                {
                                                                    type:
                                                                        "bar2d",
                                                                    width:
                                                                        "100%",
                                                                    height:
                                                                        "100%",
                                                                    dataFormat:
                                                                        "json",
                                                                    containerBackgroundOpacity:
                                                                        "0",
                                                                    dataEmptyMessage:
                                                                        "Loading Data...",
                                                                    dataSource: {
                                                                        chart: {
                                                                            theme:
                                                                                "ecommerce",
                                                                            caption:
                                                                                "Orders Trend",
                                                                            subCaption:
                                                                                "By Stores",
                                                                        },
                                                                        data: this
                                                                            .state
                                                                            .ordersTrendStore,
                                                                    },
                                                                }
                                                            )
                                                        )
                                                    )
                                                ),
                                                n.a.createElement(
                                                    v,
                                                    {
                                                        className:
                                                            "col-md-6 mb-4",
                                                    },
                                                    n.a.createElement(
                                                        v,
                                                        {
                                                            className:
                                                                "card is-card-dark chart-card",
                                                        },
                                                        n.a.createElement(
                                                            v,
                                                            {
                                                                className:
                                                                    "chart-container large full-height",
                                                            },
                                                            n.a.createElement(
                                                                C.a,
                                                                {
                                                                    type:
                                                                        "brazilregion",
                                                                    width:
                                                                        "100%",
                                                                    height:
                                                                        "100%",
                                                                    dataFormat:
                                                                        "json",
                                                                    containerBackgroundOpacity:
                                                                        "0",
                                                                    dataEmptyMessage:
                                                                        "Loading Data...",
                                                                    dataSource: {
                                                                        chart: {
                                                                            theme:
                                                                                "ecommerce",
                                                                            caption:
                                                                                "Orders Trend",
                                                                            subCaption:
                                                                                "By Region",
                                                                        },
                                                                        colorrange: {
                                                                            code:
                                                                                "#F64F4B",
                                                                            minvalue:
                                                                                "0",
                                                                            gradient:
                                                                                "1",
                                                                            color: [
                                                                                {
                                                                                    minValue:
                                                                                        "10",
                                                                                    maxvalue:
                                                                                        "25",
                                                                                    code:
                                                                                        "#EDF8B1",
                                                                                },
                                                                                {
                                                                                    minvalue:
                                                                                        "25",
                                                                                    maxvalue:
                                                                                        "50",
                                                                                    code:
                                                                                        "#18D380",
                                                                                },
                                                                            ],
                                                                        },
                                                                        data: this
                                                                            .state
                                                                            .ordersTrendRegion,
                                                                    },
                                                                }
                                                            )
                                                        )
                                                    )
                                                )
                                            )
                                        )
                                    );
                                },
                            },
                        ]),
                        a
                    );
                })(r.Component);
            Boolean(
                "localhost" === window.location.hostname ||
                    "[::1]" === window.location.hostname ||
                    window.location.hostname.match(
                        /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
                    )
            );
            t(42), t(44), t(46), t(48);
            s.a.render(
                n.a.createElement(I, null),
                document.getElementById("root")
            ),
                "serviceWorker" in navigator &&
                    navigator.serviceWorker.ready.then(function(e) {
                        e.unregister();
                    });
        },
    },
    [[23, 2, 1]],
]);
//# sourceMappingURL=main.b112cc24.chunk.js.map
