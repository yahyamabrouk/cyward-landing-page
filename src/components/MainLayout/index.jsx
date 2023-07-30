import './index.css';
import heroIMG from '../../assets/img/HeroIMG.png';
import DataSecurityIMG from '../../assets/img/DataSecurityIMG.png'
import TacklingThreatsIMG from '../../assets/img/TacklingThreatsIMG.png'
import arrow from '../../assets/img/arrow.png'
import cards from '../constants/cards';
import offers from '../constants/offers';
import Card from '../Card';
import Offer from '../Offer';
import { useState } from 'react';

function MainLayout() {
    const [activeID, setActiveID] = useState(2)
    return (
        <>
            <div className="section-container">
                <div className="cyber-security">
                    <div className="description-container">
                        <div className="description-title">
                            Your Ultimate
                            Cybersecurity Solution
                        </div>
                        <div className='description-txt'>
                            Enhance your organization's security with our comprehensive cybersecurity services. We specialize in network security, intrusion detection, and incident response.
                        </div>
                        <div className="buttons-container">

                            <button className='get-started-btn'>
                                Get Started
                            </button>
                            <button className='learn-more-btn'>
                                Learn More
                            </button>
                        </div>

                    </div>
                    <div className="img-container">
                        <img src={heroIMG} />
                    </div>
                </div>
            </div>
            <div className='achievments'>
                <div className="achievments-description-container">
                    <div className="achievement-title">
                        CyWard impresses
                        every time
                    </div>
                    <div className="achievments-description">
                        Cyward:  Where excellence meets satisfaction. Our dedicated team and innovative solutions consistently exceed expectations, ensuring exceptional results and unmatched satisfaction.
                    </div>
                </div>
                <div className="cards-container">
                    {cards.map((card) => <Card img={card.img} desc={card.desc} key={card.id} number={card.number} />)}
                </div>
            </div>
            <div className="data-security-container">
                <div className="img-container">
                    <img src={DataSecurityIMG} />
                </div>
                <div className="data-security">
                    <div className="description-container">
                        <div className="description-title">
                            Data Security
                        </div>
                        <div className='description-txt'>
                            Safeguard your valuable assets and protect against unauthorized access with data security. Ensure data security to protect valuable assets and mitigate risks for your organization.
                        </div>

                    </div>

                </div>
            </div>
            <div className="modern-security-container">
                <div className="modern-security">
                    <div className="description-container">
                        <div className="description-title">
                            Tackling Modern
                            Security Threats
                        </div>
                        <div className='description-txt'>
                            Today's fast-paced business environment presents challenges for companies in terms of IT and employee productivity and security.
                        </div>

                    </div>
                    <div className="modern-security-card-container">
                        <div className="modern-security-card">
                            <div className="modern-security-card-title">
                                <div className='arrow-img-container'>
                                    <img src={arrow} />
                                </div>
                                <p>Making an Impact</p>
                            </div>
                        </div>
                        <div className="modern-securty-card-description">
                            Breaches in cybersecurity can cause significant financial losses and operational disruptions for businesses. Moreover, they can negatively impact a company's reputation, leading to a loss of customer trust and decreased sales.
                        </div>
                    </div>
                </div>
                <div className="img-container">
                    <img src={TacklingThreatsIMG} />
                </div>

            </div>
            <div className="pricing-section-container">
                <div className="pricing-title">
                    <p className='pricing'>Pricing Packages</p>
                    <p className='pricing-description'>Choose the perfect pricing package for your testing needs at CyWard. We offer customized options to fit your unique requirements.</p>
                </div>
                <div className="offer-cards-container">
                    {offers.map((offer) => <Offer id={offer?.id} setActiveID={setActiveID} activeID={activeID} title={offer?.title} img={offer.img} type={offer?.type} storage={offer?.storage} users={offer?.users} price={offer?.price} key={offer?.id} />)}
                </div>
            </div>
        </>

    );
}

export default MainLayout;
