import Master from './../../layouts/Master'
import React from "react";
import Link from "next/link"
import fetch from 'isomorphic-unfetch';
// import Router from 'next/router';
import renderHTML from 'react-render-html';

import './../../static/sass/pages/article.scss'

class ArticleDetail extends React.Component {
    //
    static async getInitialProps({query}) {
        const res = await fetch(`https://codethue.net/api/article/detail/${query.slug}`);
        const data = await res.json();
       
        console.log(data.article);
        return {
            article : data.article,
            articleSuggest : data.articleSuggest
        };
    }

    render() {
        return (
            <Master>
                <section className="section-content padding-y">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-9">
                                <div className="list_article">
                                    <div className="title_heading">
                                        <h1>{this.props.article.a_name}</h1>
                                        <p>By Admin <i>{this.props.article.created_at}</i></p>
                                    </div>
                                    <div className="article_content"> 
                                         {renderHTML(this.props.article.a_content)}
                                    </div>
                                       
                                </div>
                            </div>   
                            <div className="col-sm-3">
                                <h4> Bài viết cùng chuyên mục</h4>
                                <div className="list_article">
                                {this.props.articleSuggest.map((article,key) => (
                                        <div className="list_article_item sidebar_detail" key={key}>
                                            <div className="item_content">
                                                <h3>
                                                    <Link href={`/article/detail?slug=${article.a_slug}`} as={`/bai-viet/${article.a_slug}`}>
                                                        <a>{article.a_name}</a>
                                                    </Link>
                                                </h3>
                                                <span>{article.created_at} - 116 lượt xem</span>
                                            </div>
                                            <Link href={`/article/detail?slug=${article.a_slug}`} as={`/bai-viet/${article.a_slug}`}>
                                                <a className="item_avatar">
                                                    <img src="https://123job.vn/uploads/2019/05/22/2019_05_22______9a159264e73f80e572a10c40f1dfbc56.jpg"  alt={article.a_name} />
                                                </a>
                                            </Link>
                                        </div>            
                                    ))} 
                                </div>
                            </div>   
                        </div>
                    </div>
                </section>
            </Master>
        )
    }
}
export default ArticleDetail;