import React from "react";
import Hero from "./Hero";
import Universe from "./Universe";
import LeftSection from "./LeftImage";
import RightSection from "./RightImage";

function Product() {
    return (
        <div>

            <Hero />

            <LeftSection
                imageurl="media/images/kite.png"
                proName="Trade"
                prodesc="A lightning-fast trading platform built for modern investors. Track live markets, place orders instantly, and analyze charts with a clean, intuitive interface — available across web and mobile."
                trydemo="#"
                learn="#"
                gPlay="#"
                appStore="#"
            />

            <RightSection
                imageurl="media/images/console.png"
                proName="Console"
                prodesc="Your personal investment dashboard. Monitor portfolio performance, review transactions, track holdings, and gain meaningful insights with beautifully designed reports."
                learn="#"
            />

            <LeftSection
                imageurl="media/images/coin.png"
                proName="Invest"
                prodesc="Invest in mutual funds and long-term assets with zero commission. Experience simple goal-based investing with direct holdings delivered securely to your account."
                trydemo="#"
                learn="#"
                gPlay="#"
                appStore="#"
            />

            <RightSection
                imageurl="media/images/kite.png"
                proName="APIs"
                prodesc="Build powerful financial applications using our developer-friendly APIs. Integrate trading, portfolio tracking, and analytics into your own platforms with ease."
                learn="#"
            />

            <LeftSection
                imageurl="media/images/varsity.png"
                proName="Finova Learn"
                prodesc="A beginner-friendly learning platform with structured lessons, practical examples, and bite-sized content to help you understand markets and grow confidently."
                trydemo="#"
                learn="#"
                gPlay="#"
                appStore="#"
            />

            <p className="text-center">
                Want to learn more about our technology stack? Explore insights on our{" "}
                <a href="#" style={{ color: "#2962ff", textDecoration: "none" }}>
                    Finova Tech 
                </a> Blog.
            </p>


            <Universe />

        </div>
    );
}

export default Product;
