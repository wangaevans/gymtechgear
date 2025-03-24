'use client'

import React, { useEffect, useState } from "react";
import CookieConsent from "react-cookie-consent";
import Link from "next/link";

interface CookieConsentBannerProps {
  privacyUrl?: string;
  cookieName?: string;
  expiryDays?: number;
}

const CookieConsentBanner: React.FC<CookieConsentBannerProps> = ({
  privacyUrl = "/privacy-policy",
  cookieName = "Cookie Consent",
  expiryDays = 365,
}) => {
  const [showBanner, setShowBanner] = useState<boolean>(false);

  useEffect(() => {
    // Check if cookie exists using the standard js-cookie or document.cookie approach
    const hasCookie = document.cookie.split(';').some(item => item.trim().startsWith(`${cookieName}=`));
    setShowBanner(!hasCookie);
  }, [cookieName]);

  const handleAccept = () => {
    console.log("Cookies accepted");
    // Analytics tracking or other functionality can be initialized here
    window.dispatchEvent(new CustomEvent('cookiesAccepted'));
  };

  const handleDecline = () => {
    console.log("Cookies declined");
    // Clean up any cookies that might have been set already
    window.dispatchEvent(new CustomEvent('cookiesDeclined'));
  };

  if (!showBanner) return null;

  return (
    <CookieConsent
      location="bottom"
      buttonText="Accept All"
      declineButtonText="Decline"
      enableDeclineButton
      cookieName={cookieName}
      expires={expiryDays}
      onAccept={handleAccept}
      onDecline={handleDecline}
      style={{
        background: "rgba(43, 55, 59, 0.95)",
        color: "#FFF",
        padding: "16px",
        boxShadow: "0 -2px 10px rgba(0, 0, 0, 0.2)",
        zIndex: 9999,
        fontSize: "14px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backdropFilter: "blur(5px)",
        borderTop: "1px solid rgba(255, 255, 255, 0.1)",
      }}
      buttonStyle={{
        backgroundColor: "#4CAF50",
        color: "#FFF",
        fontSize: "14px",
        padding: "8px 16px",
        borderRadius: "4px",
        fontWeight: "600",
        border: "none",
        cursor: "pointer",
        transition: "background-color 0.3s ease",
        marginLeft: "15px",
      }}
      declineButtonStyle={{
        backgroundColor: "transparent",
        color: "#FFF",
        fontSize: "14px",
        padding: "8px 16px",
        borderRadius: "4px",
        fontWeight: "600",
        border: "1px solid rgba(255, 255, 255, 0.5)",
        cursor: "pointer",
        transition: "background-color 0.3s ease",
      }}
      buttonWrapperClasses="cookie-consent-buttons"
      contentStyle={{
        flex: 1,
        marginRight: "20px",
      }}
      overlayStyle={{
        background: "rgba(0, 0, 0, 0.5)",
        zIndex: 9998,
      }}
      ButtonComponent="button"
    >
      <div className="cookie-content">
        <h3 style={{ margin: "0 0 8px 0", fontSize: "16px" }}>Cookie Settings</h3>
        <p style={{ margin: "0", lineHeight: "1.5" }}>
          This website uses cookies to enhance your experience and analyze site traffic. 
          By clicking &quot;Accept All&quot;, you consent to our use of cookies as described in our
          <Link href={privacyUrl} style={{ color: "#4CAF50", textDecoration: "underline" }}>
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </CookieConsent>
  );
};

export default CookieConsentBanner;