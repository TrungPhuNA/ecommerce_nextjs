import React from 'react';
import Link from 'next/link';
import Head from "next/head";

import Header from "./Header";
import Footer from "./Footer";

function Master(props) {
    return (
        <div>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
                <meta name="author" content="Bootstrap-ecommerce by Vosidiy"/>
                <title>Đây là layout master</title>
                <link rel="shortcut icon" type="image/x-icon" href="images/favicon.ico" />
                <script src="/static/js/jquery-2.0.0.min.js" type="text/javascript"></script>
                <script src="/static/js/bootstrap.bundle.min.js" type="text/javascript"></script>
                <link href="/static/css/bootstrap.css" rel="stylesheet" type="text/css"/>
                <link href="/static/fonts/fontawesome/css/fontawesome-all.min.css" type="text/css" rel="stylesheet"/>
                <script src="/static/plugins/fancybox/fancybox.min.js" type="text/javascript"></script>
                <link href="/static/plugins/fancybox/fancybox.min.css" type="text/css" rel="stylesheet" />
                <link href="/static/plugins/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet"/>
                <link href="/static/plugins/owlcarousel/assets/owl.theme.default.css" rel="stylesheet"/>
                <script src="/static/plugins/owlcarousel/owl.carousel.min.js"></script>
                <link href="/static/css/ui.css" rel="stylesheet" type="text/css"/>
                <link href="/static/css/responsive.css" rel="stylesheet" media="only screen and (max-width: 1200px)" />
            </Head>
            <Header/>
            <div className="container">
                {props.children}
                <Footer/>
            </div>

        </div>
    )
}
export default Master;