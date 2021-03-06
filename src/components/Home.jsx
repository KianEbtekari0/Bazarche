import React, { Component } from 'react';
import store from "./image/store.png";
import sourosh from "./image/sourosh.png";

class Home extends Component {
    state = {  } 
    render() { 
        return (
            <body>
                <div className="container-4">
                    <div className='welcome'>
                        <h1 className='welcome-text-1'> به بازارچه چه خوش امدید</h1> <br />
                        <div className="more">
                            <h4 className='welcome-text-2'>اینجا بازارچه است. شما میتوانید در اینجا محصولات خود را بارگزاری کنید</h4> <br />
                            <h4 className='welcome-text-2'>.تا همه ان را مشاهده کنند و از محصولات شما خرید کنند</h4>
                        </div>
                    </div>
                    <img src={store} alt="" className='illustration' />
                </div>

                <section>
                    <div className="container2" id='container'>
                        <h1>چگونه محصولات خود را بارگذاری کنیم؟</h1>
                        <h4>شما می توانید با زدن بر روی برنامه سروش در پایین این نوشته به پیوی من در سروش بروید و به من پیام دهید تا من محصولات شما را در سایت در بخش محصولات قرار دهم</h4>
                        <div className="icon-sourosh">
                            <a href="https://splus.ir/joinchannel/Dd6APY4o09CziZJe71EIRpkc"><img src={sourosh} alt="icon" className='icon' /></a>
                        </div>
                    </div>
                </section>

                    <h1 className='trends'>برترین محصولات</h1>

            </body>
        );
    }
}

export default Home;
