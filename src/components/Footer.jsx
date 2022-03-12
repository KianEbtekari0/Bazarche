import React, { Component } from 'react';

class Footer extends Component {
    state = {  } 
    render() { 
        return (
            <footer>
                <div class="container-footer">
                    <div class="content_footer">
                        <div class="social_media">
                            <a href="#"><i class='bx bxl-facebook-square'></i></a>
                                <a href="#"><i class='bx bxl-github'></i></a>
                                <a href="#"><i class='bx bxl-linkedin-square'></i></a>
                            <a href="#"><i class='bx bxl-instagram-alt'></i></a>
                        </div>
                        <div class="service_area">
                            <ul class="service_header">
                                <li class="service_name">خدمات</li>
                                    <li><a href="#">مشاوره</a></li>
                                        <li><a href="#">توسعه</a></li>
                                    <li><a href="#">ابر</a></li>
                                <li><a href="#">توسعه دهید و حمایت کردن</a></li>
                            </ul>
                            <ul class="service_header">
                                <li class="service_name">صنایع</li>
                                    <li><a href="#">دارایی، مالیات، سرمایه گذاری</a></li>
                                        <li><a href="#">بخش عمومی</a></li>
                                    <li><a href="#">دفتر هوشمند</a></li>
                                <li><a href="#">خرده فروشی</a></li>
                            </ul>
                            <ul class="service_header">
                                <li class="service_name">شرکت</li>
                                    <li><a href="#">درباره ما</a></li>
                                        <li><a href="#">وبلاگ</a></li>
                                    <li><a href="#">مخاطب</a></li>
                                <li><a href="#">به ما بپیوند</a></li>
                            </ul>
                            <ul class="service_header">
                                <li class="service_name">کمپانی</li>
                                    <li><a href="#">ایده</a></li>
                                        <li><a href="#">بازارچه</a></li>
                                    <li><a href="#">بلاگ</a></li>
                                <li><a href="#">گزارش باگ</a></li>
                            </ul>
                        </div>
                    </div>
                    <hr />
                    <div class="footer_bottom">
                        <div class="copy_right">
                                <a href=""><i class='bx bxs-copyright'></i></a>
                            <span>2022 Coding By Arman And kian Ebtekari</span>
                        </div>
                        <div class="tou">
                            <a href="#">از ما</a>
                                <a href="#">حفظ حریم خصوصی</a>
                            <a href="#"> کوکی</a>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}
 
export default Footer;
