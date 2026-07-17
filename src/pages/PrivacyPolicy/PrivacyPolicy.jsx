import { useEffect, useState } from "react";
import styles from "./PrivacyPolicy.module.scss";
import { apiUrl } from "../../../config";

export default function PrivacyPolicy() {
  const [lastUpdated, setLastUpdated] = useState("July 2026");

  return (
    <div className={styles.termsContainer || ""}>
      <header className={styles.termsHeader || ""}>
        <h1>Privacy Policy</h1>
        <p>Last Updated: {lastUpdated}</p>
      </header>

      <section className={styles.termsBody || ""}>
        <p>
          Hi, I am <strong>Anirban Sinha</strong> ("I," "me," or "my"). I value your privacy. This
          Privacy Policy explains how I collect, use, disclose, and safeguard your information when you
          visit my website or use my payment-related services.
        </p>

        <h2>1. Information I Collect</h2>
        <p>
          I collect information that you provide directly when you create an account, make a
          purchase, or communicate with me. This may include:
        </p>
        <ul>
          <li><strong>Personal Identifiers:</strong> Name, email address, billing address, and phone number.</li>
          <li><strong>Transaction Details:</strong> Information about the products or services you purchase, purchase amount, and date.</li>
        </ul>

        <h2>2. Payment Processing & Stripe Data</h2>
        <p>
          All payments on this platform are processed securely via <strong>Stripe, Inc.</strong> ("Stripe").
          When you execute a payment, your credit card details, CVV, and financial account credentials
          are sent <strong>directly</strong> to Stripe's encrypted servers.
        </p>
        <p>
          I do not store, process, or have access to your raw credit card numbers. Stripe uses and processes
          this details according to the{" "}
          <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer">
            Stripe Privacy Policy
          </a>.
        </p>

        <h2>3. How I Use Your Information</h2>
        <p>
          I use the information I collect to operate my application efficiently, including to:
        </p>
        <ul>
          <li>Process transactions and send purchase confirmations.</li>
          <li>Detect, prevent, and mitigate fraudulent activities or security vulnerabilities.</li>
          <li>Comply with financial regulations, tax obligations, and legal industry requirements.</li>
          <li>Provide customer support and resolve payment issues.</li>
        </ul>

        <h2>4. Sharing Your Information</h2>
        <p>
          I do not sell your personal data. I share your information only with trusted service
          providers necessary to run this application:
        </p>
        <ul>
          <li><strong>Stripe:</strong> To handle payment processing, subscription tracking, and identity verification.</li>
          <li><strong>Legal Authorities:</strong> If required by law, subpoena, or standard regulatory procedures to protect my rights or fight fraud.</li>
        </ul>

        <h2>5. Data Security</h2>
        <p>
          I deploy robust administrative and technical measures to protect your personal information from loss,
          theft, or unauthorized exploitation. However, please remember that no transmission method over the internet
          is 100% secure. Because of this, I leverage Stripe's tokenization systems so your financial data stays completely siloed from my core servers.
        </p>

        <h2>6. Your Privacy Rights</h2>
        <p>
          Depending on your location, you may have specific rights regarding your personal data, including the right to
          request access to, correction of, or erasure of your personal records. To exercise these rights, please contact
          me via my support channels.
        </p>

        <h2>7. Updates to This Policy</h2>
        <p>
          I may modify this Privacy Policy from time to time to align with changing regulations or application features.
          I will notify you of changes by updating the "Last Updated" date at the top of this page.
        </p>
      </section>
    </div>
  );
}