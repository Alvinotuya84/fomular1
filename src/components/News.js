import React from "react";
import '../components/style.css'
import c1 from '../assets/c1.jpg';
import c2 from '../assets/c2.jpeg';
import c3 from '../assets/c3.jpg';
import c4 from '../assets/c4.jpg';
import c5 from '../assets/c5.jpg';
import c6 from '../assets/c6.jpg';
import c7 from '../assets/c7.jpg';
import c8 from '../assets/c8.jpeg';
import c9 from '../assets/c9.jpeg';

export default function News() {

    return (
        <div>
            <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col">
                    <div class="card">
                        <img src={c1} class="card-img-top" alt="..." />
                        <div class="card-body">
                            
                            <p class="card-text"><a href="https://www.autosport.com/formula-e/news/ex-f1-racer-jarno-trulli-steps-down-from-racing-in-formula-e-5002232/5002232/">Ex-F1 racer Jarno Trulli steps down from racing in Formula E.</a></p>
                            <h6 class="card-title">Formula 1</h6>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src={c2} class="card-img-top" alt="..." />
                        <div class="card-body">
                            
                            <p class="card-text"><a href="https://au.motorsport.com/f1/news/rosberg-f1-tyre-blowouts-need-to-be-sorted-before-monza/2946480/">Nico Rosberg demands actions over Pirelli F1 type blowouts for Monza .</a></p>
                            <h6 class="card-title">Formula 1</h6>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src={c3} class="card-img-top" alt="..." />
                        <div class="card-body">
                            
                            <p class="card-text"><a href="https://racer.com/2015/08/23/pirelli-advice-ignored-two-years-ago/">Pirelli says F1 teams ignored request for tyre limits in 2013.</a></p>
                            <h6 class="card-title">Formula 1</h6>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src={c4} class="card-img-top" alt="..." />
                        <div class="card-body">
                            
                            <p class="card-text"><a href="https://www.skysports.com/f1/news/12479/8889239/jenson-button-failed-to-score-the-podium-finish-he-had-hoped-for-at-the-belgian-gp">McLaren F1 team's JensonButton calls BelgianGP.</a></p>
                            <h6 class="card-title">Formula 1</h6>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src={c5} class="card-img-top" alt="..." />
                        <div class="card-body">
                            
                            <p class="card-text"><a href="https://www.autosport.com/formula2/news/pierre-gasly-surprised-by-daniel-de-jong-move-before-gp2-crash-5002278/5002278/">Pierre Gasly surprised by Daniel de Jong move before GP2 crash.</a></p>
                            <h6 class="card-title">Formula 1</h6>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src={c6} class="card-img-top" alt="..." />
                        <div class="card-body">
                            
                            <p class="card-text"><a href="https://www.motorsport.com/indycar/news/justin-wilson-in-a-coma-condition-critical/638186/">Justin Wilson airlifted to hospital after Pocono IndyCar crash.</a></p>
                            <h6 class="card-title">Formula 1</h6>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src={c7} class="card-img-top" alt="..." />
                        <div class="card-body">
                           
                            <p class="card-text"><a href="https://www.autosport.com/btcc/news/rob-austin-racing-btcc-team-to-drop-audi-a4s-in-2016-5002048/5002048/">BTCC suspends one of Rob Austin Racing's TOCA BTCC licences.</a></p>
                            <h6 class="card-title">Formula 1</h6>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src={c8} class="card-img-top" alt="..." />
                        <div class="card-body">
                            
                            <p class="card-text"><a href="https://www.auto123.com/en/news/f1-fia-bans-team-radio-instructions-in-formula-1/58995/">FIA forced to clarity Formula 1 radio clampdown ambiguities.</a></p>
                            <h6 class="card-title">Formula 1</h6>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src={c9} class="card-img-top" alt="..." />
                        <div class="card-body">
                            
                            <p class="card-text"><a href="https://www.autosport.com/f1/news/former-formula-1-team-boss-and-racing-driver-guy-ligier-dies-5002257/5002257/">Former Formula 1 team boss and racing driver Guy Ligier dies .</a></p>
                            <h6 class="card-title">Formula 1</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}