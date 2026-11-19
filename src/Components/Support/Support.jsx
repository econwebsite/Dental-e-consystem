import React from "react";
import "./Support.css";
import supportBanner from "../../assets/support/support-banner.png";
import chatSupport from "../../assets/support/chat-support.jpg";
import mailSupport from "../../assets/support/mail-support.jpg";
import tickets from "../../assets/support/tickets.jpg";
import orderSupport from "../../assets/support/Order_Support_Icon.png";
import contacts from "../../assets/support/contacts.jpg";
import rma from "../../assets/support/rma.jpg";
import ticket from "../../assets/support/ticket.jpg";
const Support = () => {
  return (
    <div className="support-page">

      {/* Support Pledge */}
      <section className="support-pledge">
        <div className="pledge-container">

          <div className="pledge-content">
            <h1>OUR SUPPORT PLEDGE</h1>

            <p>
             We at <b>e-con Systems</b>  pledge to the best possible customer support. We support our customers with passion, enthusiasm and complete commitment. We ensure your queries are resolved in the most timely and efficient manner. Our assurance to you - we respond within 1 business day and we stand by our assurance.
            </p>

            <p>
             We are constantly striving to improve our customer's experience. One such initiative is to ensure all the software, firmware, datasheets etc are readily available to you as soon as you receive our products. You can retrieve all the necessary information from  
              <a
                href="https://developer.e-consystems.com"
                target="_blank"
                rel="noreferrer"
              >
                 {" "}  developer.e-consystems.com
              </a>
            </p>

            {/* <p className="hidden">
              Basic installation support is valid for 6 months from purchase.
              For further assistance, consider buying support hours. Please
              contact{" "}
              <a href="mailto:dentalimaging@e-consystems.com">
                dentalimaging@e-consystems.com
              </a>
              .
            </p> */}

            <p>
              We are always open to suggestions and feedback.{" "}
              <a href="https://www.e-consystems.com/e-con-doc1.asp">
                Help us serve you better
              </a>
              .
            </p>
          </div>

          <div className="pledge-image">
            <img
              src={supportBanner}
              alt="Pledge Image"
              title="Pledge Image"
            />
          </div>

        </div>
      </section>

      {/* Main Support Options */}
      <section className="support-options">
        <div className="support-cards">

          {/* Chat Support */}
          <div className="support-card">
            <div className="card-content">
              <div className="card-line"></div>

              <h2>Chat Support</h2>

              <p className="support-time">
                <span>Monday-Friday</span>
                <br />
                11:30 AM UTC to 8:30 PM UTC
              </p>
            </div>

            <div className="card-image">
              <img
                src={chatSupport}
                alt="chat support"
              />
            </div>

            <div className="card-overlay">
              <a
  href="javascript:void($zopim.livechat.say('hi'))"
  className="support-button"
  style={{ fontWeight: "bold", cursor: "pointer" }}
>
                Start Chat
              </a>
            </div>
          </div>

          {/* Mail Support */}
          <div className="support-card">
            <div className="card-content">
              <div className="card-line"></div>

              <h2>Mail Support</h2>

              <p>
                <a href="mailto:dentalimaging@e-consystems.com">
                  <span>For Pre-sales</span>
                  <br />
                  dentalimaging@e-consystems.com
                </a>
              </p>

              <p>
                <a href="mailto:techsupport@e-consystems.com">
                  <span>For Technical Support</span>
                  <br />
                  techsupport@e-consystems.com
                </a>
              </p>
            </div>

            <div className="card-image">
              <img
                src={mailSupport}
                alt="mail support"
              />
            </div>
          </div>

          {/* Support Tickets */}
          <div className="support-card">
            <div className="card-content">
              <div className="card-line"></div>

              <h2>Support Tickets</h2>

              <p className="ticket-description">
                Create Ticket, We will do the rest.
              </p>
            </div>

            <div className="card-image">
              <img
                src={tickets}
                alt="create tickets"
              />
            </div>

            <div className="card-overlay">
              <a
                href="https://www.e-consystems.com/create-ticket.asp"
                className="support-button"
              >
                Create a Ticket
              </a>
            </div>
          </div>

          {/* Order Support */}
          <div className="support-card">
            <div className="card-content">
              <div className="card-line"></div>

              <h2>Order Support</h2>

              <p className="ticket-description">
                Create Ticket, We will do the rest.
              </p>
            </div>

            <div className="card-image">
              <img
                src={orderSupport}
                alt="create tickets"
              />
            </div>

            <div className="card-overlay">
              <a
                href="https://ordersupport.e-consystems.com/portal/en/signin"
                target="_blank"
                rel="noreferrer"
                className="support-button"
              >
                Post-order Queries
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Bottom Support Features */}

{/*  
      <section className="support-features-section">
        <div className="support-features">

     
          <div className="feature-item">
            <a href="https://www.e-consystems.com/getquote.asp">
              <img
                src={contacts}
                alt="contact icon"
              />
            </a>

            <h2>
              <a href="https://www.e-consystems.com/getquote.asp">
                Get Quote
              </a>
            </h2>

            <p>
              We are here to help you!{" "}
              <a href="https://www.e-consystems.com/contactus.asp">
                Contact us
              </a>
            </p>
          </div>

        
          <div className="feature-item">
            <a href="https://www.e-consystems.com/RMA-Policy.asp">
              <img
                src={rma}
                alt="rma icon"
              />
            </a>

            <h2>
              <a
                href="https://www.e-consystems.com/RMA-Policy.asp"
                target="_blank"
                rel="noreferrer"
              >
                RMA / Warranty
              </a>
            </h2>

            <p>
              We help you with{" "}
              <a href="https://www.e-consystems.com/RMA-Policy.asp">
                warranty
              </a>{" "}
              for your product purchased
            </p>
          </div>

          <div className="feature-item">
            <a href="https://www.e-consystems.com/create-ticket.asp">
              <img
                src={ticket}
                alt="ticket icon"
              />
            </a>

            <h2>
              <a href="https://www.e-consystems.com/create-ticket.asp">
                Create a Ticket
              </a>
            </h2>

            <p>
              Create your{" "}
              <a href="https://www.e-consystems.com/create-ticket.asp">
                Ticket
              </a>{" "}
              to get your queries done
            </p>
          </div>

        </div>
      </section>
 */}


    </div>
  );
};

export default Support;