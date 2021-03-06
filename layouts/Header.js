import Link  from "next/link";

const Header = () => {
    return (
        <header className="section-header">
            <nav className="navbar navbar-top navbar-expand-lg navbar-dark bg-secondary">
                <div className="container">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarsExample07">
                        <ul className="navbar-nav mr-auto">
                            <li><a href="#" className="nav-link"> <i className="fab fa-facebook"></i> </a></li>
                            <li><a href="#" className="nav-link"> <i className="fab fa-instagram"></i> </a></li>
                            <li><a href="#" className="nav-link"> <i className="fab fa-twitter"></i> </a></li>
                        </ul>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link as="/san-pham" href="/product" prefetch>
                                    <a className="nav-link" > Sản Phẩm </a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link as="/bai-viet" href="/article" prefetch>
                                    <a className="nav-link" > Tin Tức </a>
                                </Link>
                            </li>
                            {/* <li className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown"> USD </a>
                                <ul className="dropdown-menu dropdown-menu-right">
                                    <li><a className="dropdown-item" href="#">EUR</a></li>
                                    <li><a className="dropdown-item" href="#">AED</a></li>
                                    <li><a className="dropdown-item" href="#">RUBL </a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">   Language </a>
                                <ul className="dropdown-menu dropdown-menu-right">
                                    <li><a className="dropdown-item" href="#">English</a></li>
                                    <li><a className="dropdown-item" href="#">Arabic</a></li>
                                    <li><a className="dropdown-item" href="#">Russian </a></li>
                                </ul>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>
            <section className="header-main shadow-sm">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-3 col-sm-4">
                            <div className="brand-wrap">
                                <img className="logo" src="/static/images/logo-dark.png"/>                                
                                <h2 className="logo-text">LOGO</h2>
                            </div>
                        </div>
                        <div className="col-lg-4 col-xl-5 col-sm-8">
                            <form action="#" className="search-wrap">
                                <div className="input-group w-100">
                                    <input type="text" className="form-control" placeholder="Search" />
                                    <select className="custom-select"  name="category_name">
                                        <option value="">All type</option>
                                        <option value="codex">Special</option>
                                        <option value="comments">Only best</option>
                                        <option value="content">Latest</option>
                                    </select>
                                    <div className="input-group-append">
                                        <button className="btn btn-primary" type="submit">
                                        <i className="fa fa-search"></i>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-lg-5 col-xl-4 col-sm-12">
                            <div className="widgets-wrap float-right">
                                <a href="#" className="widget-header mr-3">
                                    <div className="icontext">
                                        <div className="icon-wrap"><i className="icon-sm round border fa fa-shopping-cart"></i></div>
                                        <div className="text-wrap">
                                            <span className="small badge badge-danger">0</span>
                                            <div>Cart</div>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="widget-header mr-3">
                                    <div className="icontext">
                                        <div className="icon-wrap"><i className="icon-sm round border fa fa-heart"></i></div>
                                        <div className="text-wrap">
                                            <small>Wish</small>
                                            <div>List</div>
                                        </div>
                                    </div>
                                </a>
                                <div className="widget-header dropdown">
                                    <a href="#" data-toggle="dropdown" data-offset="20,10">
                                        <div className="icontext">
                                            <div className="icon-wrap"><i className="icon-sm round border fa fa-user"></i></div>
                                            <div className="text-wrap">
                                                <small>Sign in | Join</small>
                                                <div>My account <i className="fa fa-caret-down"></i> </div>
                                            </div>
                                        </div>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right">
                                        <form className="px-4 py-3">
                                            <div className="form-group">
                                                <label>Email address</label>
                                                <input type="email" className="form-control" placeholder="email@example.com" />
                                            </div>
                                            <div className="form-group">
                                                <label>Password</label>
                                                <input type="password" className="form-control" placeholder="Password" />
                                            </div>
                                            <button type="submit" className="btn btn-primary">Sign in</button>
                                        </form>
                                        <hr className="dropdown-divider" />
                                        <a className="dropdown-item" >Have account? Sign up</a>
                                        <a className="dropdown-item" >Forgot password?</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </header>
    )
};

export default Header;