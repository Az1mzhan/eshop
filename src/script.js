'use strict';

class Card extends React.Component
{
    render() {
        return (
            <div className="card">
                <img src={this.props.img_src} alt={this.props.title} className="card-img-top" />
                <div className="card-body">
                    <div className="card-title">{this.props.title}</div>
                    <div className="headset card-text">{this.props.device_type}</div>
                </div>
            </div>
        );
    }
}

let domContainer = document.querySelector('#app');
let root = ReactDOM.createRoot(domContainer);

const brand = "Shopify";
const titles = ["Hardware", "Devices", "Accessories"];
const nav_list = titles.map((elem) =>
    <a href="#">{elem}</a>
);

const elem =
    (
        <div className="page-container">
            <nav className="d-flex position-sticky">
                <a className="nav-title">{brand}</a>
                <div className="d-flex myNav" id="nav-collapse">
                    {nav_list}
                    <a className="icon">
                        <i className="fa fa-bars"></i>
                    </a>
                </div>
            </nav>
            <div className="d-flex justify-content-center" id="flex-table">
                <Card img_src="img/hyperx_cloud_core_7.1.jpg" title="HyperX Cloud Core 7.1" device_type="Headset" />
                <Card img_src="img/hyperx_alpha.jpg" title="HyperX Alpha" device_type="Headset" />
                <Card img_src="img/hyperx_cloud_orbit.jpg" title="HyperX Cloud Orbit" device_type="Headset" />
                <Card img_src="img/logitech_g433.jpg" title="Logitech G433" device_type="Headset" />
                <Card img_src="img/logitech_g935.jpg" title="Logitech G935" device_type="Headset" />
                <Card img_src="img/logitech_g_pro_x.jpg" title="Logitech G Pro X" device_type="Headset" />
                <Card img_src="img/xtrfy_h2.jpg" title="Xtrfy H2" device_type="Headset" />
                <Card img_src="img/dark_project_hs-2.jpg" title="Dark Project HS-2" device_type="Headset" />
                <Card img_src="img/hator_hypergang_evo.png" title="Hator Hypergang EVO" device_type="Headset" />
            </div>
        </div>
    )
root.render(elem);
//ReactDOM.render(<LikeButton />, domContainer);