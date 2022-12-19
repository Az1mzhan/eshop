'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Card = function (_React$Component) {
    _inherits(Card, _React$Component);

    function Card() {
        _classCallCheck(this, Card);

        return _possibleConstructorReturn(this, (Card.__proto__ || Object.getPrototypeOf(Card)).apply(this, arguments));
    }

    _createClass(Card, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "card" },
                React.createElement("img", { src: this.props.img_src, alt: this.props.title, className: "card-img-top" }),
                React.createElement(
                    "div",
                    { className: "card-body" },
                    React.createElement(
                        "div",
                        { className: "card-title" },
                        this.props.title
                    ),
                    React.createElement(
                        "div",
                        { className: "headset card-text" },
                        this.props.device_type
                    )
                )
            );
        }
    }]);

    return Card;
}(React.Component);

var domContainer = document.querySelector('#app');
var root = ReactDOM.createRoot(domContainer);

var brand = "Shopify";
var titles = ["Hardware", "Devices", "Accessories"];
var nav_list = titles.map(function (elem) {
    return React.createElement(
        "a",
        { href: "#" },
        elem
    );
});

var elem = React.createElement(
    "div",
    { className: "page-container" },
    React.createElement(
        "nav",
        { className: "d-flex position-sticky" },
        React.createElement(
            "a",
            { className: "nav-title" },
            brand
        ),
        React.createElement(
            "div",
            { className: "d-flex myNav", id: "nav-collapse" },
            nav_list,
            React.createElement(
                "a",
                { className: "icon" },
                React.createElement("i", { className: "fa fa-bars" })
            )
        )
    ),
    React.createElement(
        "div",
        { className: "d-flex justify-content-center", id: "flex-table" },
        React.createElement(Card, { img_src: "img/hyperx_cloud_core_7.1.jpg", title: "HyperX Cloud Core 7.1", device_type: "Headset" }),
        React.createElement(Card, { img_src: "img/hyperx_alpha.jpg", title: "HyperX Alpha", device_type: "Headset" }),
        React.createElement(Card, { img_src: "img/hyperx_cloud_orbit.jpg", title: "HyperX Cloud Orbit", device_type: "Headset" }),
        React.createElement(Card, { img_src: "img/logitech_g433.jpg", title: "Logitech G433", device_type: "Headset" }),
        React.createElement(Card, { img_src: "img/logitech_g935.jpg", title: "Logitech G935", device_type: "Headset" }),
        React.createElement(Card, { img_src: "img/logitech_g_pro_x.jpg", title: "Logitech G Pro X", device_type: "Headset" }),
        React.createElement(Card, { img_src: "img/xtrfy_h2.jpg", title: "Xtrfy H2", device_type: "Headset" }),
        React.createElement(Card, { img_src: "img/dark_project_hs-2.jpg", title: "Dark Project HS-2", device_type: "Headset" }),
        React.createElement(Card, { img_src: "img/hator_hypergang_evo.png", title: "Hator Hypergang EVO", device_type: "Headset" })
    )
);
root.render(elem);
//ReactDOM.render(<LikeButton />, domContainer);