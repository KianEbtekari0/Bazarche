import React, { Component } from 'react';
import logo from "./image/logo.png";
import { NavLink } from "react-router-dom";

class Cards extends Component {
    state = {  } 
    render() { 
        return (
            <body>
                <div className="page2">
                    <div class="container-3 reveal"  id="container-3">
                        <div class="card1" id="card">
                            <div class="content">
                                <h3>Shoes</h3>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.   
                                    Perferendis possimus quia deserunt, nisi, fuga sequi odit alias quam earum sed blanditiis quo,
                                    mollitia quisquam ex.Ratione sed suscipit ad earum!</p>
                                <a href="#">ارسال پیام</a>
                            </div>
                        </div>
                        <div class="card2" id="card">
                            <div class="content">
                                <h3>Shoes</h3>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.   
                                    Perferendis possimus quia deserunt, nisi, fuga sequi odit alias quam earum sed blanditiis quo,
                                    mollitia quisquam ex.Ratione sed suscipit ad earum!</p>
                                <a href="#">ارسال پیام</a>
                            </div>
                        </div>
                        <div class="card3" id="card" data-aos="zoom-in" data-aos-anchor-placement="bottom-bottom" data-tilt>
                            <div class="content">
                                <h3>Shoes</h3>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.   
                                    Perferendis possimus quia deserunt, nisi, fuga sequi odit alias quam earum sed blanditiis quo,
                                    mollitia quisquam ex.Ratione sed suscipit ad earum!</p>
                                <a href="#">Buy</a>
                            </div>
                        </div>
                    </div>
                        <div class="container-3"  id="container-3">
                            <div class="card1" id="card">
                                <div class="content">
                                    <h3>Shoes</h3>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.   
                                        Perferendis possimus quia deserunt, nisi, fuga sequi odit alias quam earum sed blanditiis quo,
                                        mollitia quisquam ex.Ratione sed suscipit ad earum!</p>
                                    <a href="#">ارسال پیام</a>
                                </div>
                            </div>
                            <div class="card2" id="card">
                                <div class="content">
                                    <h3>Shoes</h3>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.   
                                        Perferendis possimus quia deserunt, nisi, fuga sequi odit alias quam earum sed blanditiis quo,
                                        mollitia quisquam ex.Ratione sed suscipit ad earum!</p>
                                    <a href="#">ارسال پیام</a>
                                </div>
                            </div>
                            <div class="card3" id="card">
                                <div class="content">
                                    <h3>Shoes</h3>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.   
                                        Perferendis possimus quia deserunt, nisi, fuga sequi odit alias quam earum sed blanditiis quo,
                                        mollitia quisquam ex.Ratione sed suscipit ad earum!</p>
                                    <a href="#">ارسال پیام</a>
                                </div>
                            </div>
                        </div>
                </div>
            </body>
        );
    }
}
 
export default Cards;