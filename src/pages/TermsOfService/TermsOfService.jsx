import { useState } from "react";
import styles from "./TermsOfService.module.scss";

export default function TermsOfService() {
  const [lastUpdated] = useState("July 2026");

  return (
    <div className={styles.termsContainer || ""}>
      <header className={styles.termsHeader || ""}>
        <h1>Terms of Service</h1>
        <p>Last Updated: {lastUpdated}</p>
      </header>

      <section className={styles.termsBody || ""}>
        <p>
          Welcome to my application. I am <strong>Anirban Sinha</strong> ("I," "me," or "my"). By accessing or using my services,
          website, or applications, you agree to be bound by these Terms of Service ("Terms"). Please
          read them carefully. If you do not agree to these terms, please do not use the service.
        </p>

        <h2>1. Payment Processing and Stripe</h2>
        <p>
          I use <strong>Stripe, Inc.</strong> ("Stripe") as a third-party payment gateway provider to facilitate
          secure credit card and alternative payment transactions. By making a purchase or setting up a payout
          mechanism through my platform, you agree to comply with and be bound by the{" "}
          <a href="https://stripe.com/legal/consumer" target="_blank" rel="noopener noreferrer">
            Stripe Consumer Terms of Service
          </a>{" "}
          and the{" "}
          <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer">
            Stripe Privacy Policy
          </a>.
        </p>
        <p>
          You authorize me to share necessary transaction data and personal identifiers with Stripe to securely
          process your payments, manage subscriptions, and prevent fraudulent actions.
        </p>

        <h2>2. Billing, Accounts, and Information Accuracy</h2>
        <p>
          To complete transactions via Stripe, you must provide current, complete, and accurate purchase and account
          information. You agree to promptly update your account and other data, including your email address
          and payment details, so that I can complete your transactions and contact you as needed.
        </p>

        <h2>3. Chargebacks, Disputes, and Refunds</h2>
        <p>
          If you believe a charge was made erroneously or without authorization, please contact me directly before filing a formal dispute.
          Frivolous chargebacks or payment disputes initiated directly with your bank via Stripe can lead to immediate account
          suspension or termination while the investigation is underway.
        </p>
        <p>
          Refund policies for services rendered are handled at my discretion unless governed by a separate, explicitly stated policy,
          but all monetary returns will be processed back through Stripe to the original payment method used.
        </p>

        <h2>4. Security and Data Protection</h2>
        <p>
          I do not store full credit card or bank account details on my servers. All sensitive financial data is tokenized
          and securely managed directly by Stripe using industry-standard PCI-DSS compliance protocols. You are responsible
          for maintaining the confidentiality of your login credentials to prevent unauthorized payment requests.
        </p>

        <h2>5. Limitation of Liability</h2>
        <p>
          To the maximum extent permitted by applicable law, I shall not be liable for any damages
          resulting from Stripe's operational downtime, processing delays, network errors, or security breaches affecting
          Stripe's independent infrastructure. The service is provided "as is" and "as available" without warranties of any kind.
        </p>

        <h2>6. Changes to These Terms</h2>
        <p>
          I reserve the right to update or modify these Terms at any time. Any changes will be posted on this page with an
          updated "Last Updated" date. Continued use of my site or services after changes are posted constitutes your acceptance
          of the revised Terms.
        </p>
      </section>
    </div>
  );
}