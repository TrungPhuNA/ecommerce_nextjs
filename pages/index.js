import Master from './../layouts/Master'

class Home extends React.Component {
    render() {
        return (
            <Master>
                <section className="section-main bg padding-top-sm">
                    <div className="container">
                        <div className="row row-sm">
                            <aside className="col-md-3">
                                <div className="card">
                                    <header className="card-header bg-secondary white">
                                        <i className="icon-menu"></i> Danh mục sản phẩm
                                    </header>
                                    <ul className="menu-category">
                                        <li> <a href="#">Food &amp Beverage </a></li>
                                        <li> <a href="#">Home Equipments </a></li>
                                        <li> <a href="#">Machinery Items </a></li>
                                        <li> <a href="#">Toys & Hobbies  </a></li>
                                        <li> <a href="#">Consumer Electronics  </a></li>
                                        <li> <a href="#">Beauty & Personal Care  </a></li>
                                        <li className="has-submenu">
                                            <a href="#">More category  <i className="icon-arrow-right pull-right"></i></a>
                                            <ul className="submenu">
                                                <li> <a href="#">Food &amp Beverage </a></li>
                                                <li> <a href="#">Home Equipments </a></li>
                                                <li> <a href="#">Machinery Items </a></li>
                                                <li> <a href="#">Toys & Hobbies  </a></li>
                                                <li> <a href="#">Consumer Electronics  </a></li>
                                                <li> <a href="#">Home & Garden  </a></li>
                                                <li> <a href="#">Beauty & Personal Care  </a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </aside>
                            <div className="col-md-6">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="owl-init slider-main owl-carousel" data-items="1" data-nav="true" data-dots="false">
                                            <div className="item-slide">
                                                <img src="/static/images/banners/slide1.jpg"/>
                                            </div>
                                            <div className="item-slide">
                                                <img src="/static/images/banners/slide2.jpg" />
                                            </div>
                                            <div className="item-slide">
                                                <img src="/static/images/banners/slide3.jpg" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <aside className="col-md-3">
                                <div className="card bg-white h-100 d-flex flex-column">
                                    <div className="p-3 flex-grow-1">
                                        <p>Some item group</p>
                                        <a href="#" className="btn btn-sm btn-primary round">View more</a>
                                    </div>
                                    <div className="p-3 bg flex-grow-1">
                                        <p>Some item group </p>
                                        <a href="#" className="btn btn-sm btn-primary round">View more</a>
                                    </div>
                                    <div className="p-3 flex-grow-1">
                                        <p>Some item group</p>
                                        <a href="#" className="btn btn-sm btn-primary round">View more</a>
                                    </div>
                                </div>
                            </aside>
                        </div>
                    </div>
                </section>
                <section className="section-content padding-y bg">
                    <div className="container">
                        <div className="card mb-3">
                            <div className="card-body">
                                <header className="section-heading">
                                    <h3 className="title-section">Mô tả trang chủ của bạn</h3>
                                </header>
                                <article>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </p>
                                    <p>Ut enim ad minim veniam,
                                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </p>
                                    <p>Ut enim ad minim veniam,
                                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </p>
                                </article>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <article>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </p>
                                    <br /><br /><br /><br />
                                </article>
                            </div>
                        </div>
                    </div>
                </section>
            </Master>
        )
    }
}
export default Home;