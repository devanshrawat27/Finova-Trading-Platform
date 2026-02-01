import React from 'react';

function Hero() {
    return (
        <div className='container mt-4'>

            <div className='row text-center mb-4 border-bottom'>
                <h3>Charges</h3>
                <p className='text-muted'>List of all charges and taxes</p>
            </div>

            <div className='row text-center'>

                <div className='col-md-4'>
                    <img src='/media/images/pricing0.svg' width="120" className='mb-2' />
                    <h5>Free equity delivery</h5>
                    <p className='text-muted small'>
                        All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.
                    </p>
                </div>

                <div className='col-md-4'>
                    <img src='/media/images/pricing20.svg' width="120" className='mb-2' />
                    <h5>Intraday and F&O trades</h5>
                    <p className='text-muted small'>
                        Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity,
                        currency, and commodity trades. Flat ₹20 on all option trades.
                    </p>
                </div>

                <div className='col-md-4'>
                    <img src='/media/images/pricing0.svg' width="120" className='mb-2' />
                    <h5>Free direct MF</h5>
                    <p className='text-muted small'>
                        All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.
                    </p>
                </div>

            </div>

        </div>
    );
}

export default Hero;
