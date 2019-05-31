import Master from './../../layouts/Master'
import React from "react";
import Link from "next/link"
import fetch from 'isomorphic-unfetch';
import Router from 'next/router';

import './../../static/sass/pages/article.scss'

class Article extends React.Component {
    static async getInitialProps({query}) {
        let page = 1;
        console.log(query.page,'Query')
        if (query.page) page = query.page;
        const res = await fetch(`https://codethue.net/api/article/list?page=${page}`);
        const articles = await res.json();

        return {
            data  : articles.data,
            total : articles.total,
            page : parseInt(page),
            total_page : parseInt(articles.last_page)
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
                                        <h1>Danh sách bài viết</h1>
                                        <p>Có tổng số {this.props.total} bài viết <b>{this.props.page}</b> / <b>{this.props.total_page}</b></p>
                                    </div>
                                    {this.props.data.map((article,key) => (
                                        <div className="list_article_item" key={key}>
                                            <div className="item_content">
                                                <h3>
                                                    <Link href={`article/detail?slug=${article.a_slug}`} as={`bai-viet/${article.a_slug}`}>
                                                        <a>{article.a_name}</a>
                                                    </Link>
                                                </h3>
                                                <p>{article.a_description}</p>
                                                <span>{article.created_at} - 116 lượt xem</span>
                                            </div>
                                            <Link href="">
                                                <a className="item_avatar">
                                                    <img src="https://123job.vn/uploads/2019/05/22/2019_05_22______9a159264e73f80e572a10c40f1dfbc56.jpg"  alt={article.a_name} />
                                                </a>
                                            </Link>
                                        </div>            
                                    ))}
                                    <div className="paginate">
                                        <ul>
                                            <li>
                                                <Link href={`/article?page=${this.props.page - 1}`}>
                                                    <a className={this.props.page <= 1 ? 'disabled' : '' }><i className="fa fa-angle-double-left"></i> Trang Trước</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href={`/article?page=${this.props.page +1}`}>
                                                    <a className={this.props.page >= this.props.total_page ? "disabled" : "" }>Trang Sau <i className="fa fa-angle-double-right"></i></a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>    
                                </div>
                            </div>   
                            <div className="col-sm-3">
                                
                            </div>   
                        </div>
                    </div>
                </section>
            </Master>
        )
    }
}
export default Article;