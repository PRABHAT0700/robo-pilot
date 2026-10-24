import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { LegalCard, LegalPage, LegalSection } from "@/components/legal/LegalPage";
import { site } from "@/lib/content";
import { breadcrumbSchema, pageMetadata, webPageSchema } from "@/lib/seo";

const desc = `Terms of use for ${site.name} AI agents, machine learning, mobile apps and consulting services.`;

export const metadata: Metadata = pageMetadata({
  title: "Terms & Conditions",
  description: desc,
  path: "/terms",
  keywords: ["RoboPylot terms", "terms and conditions"],
});

export default function TermsPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({ path: "/terms", title: "Terms & Conditions", description: desc }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Terms & Conditions", path: "/terms" },
          ]),
        ]}
      />
      <LegalPage title="Terms & Conditions" effective="25/10/2026">
        <LegalSection title="1. Acceptance of Terms">
          <p>
            By accessing and using {site.name}&apos;s AI automation services, you accept and agree
            to be bound by the terms and provision of this agreement. If you do not agree to abide
            by the above, please do not use this service.
          </p>
        </LegalSection>

        <LegalSection title="2. Service Description">
          <p>{site.name} provides AI automation solutions, including but not limited to:</p>
          <ul>
            <li>AI Agent Building and Development</li>
            <li>Custom ML Model Development</li>
            <li>AI Application Integration</li>
            <li>Consulting and Strategy Services</li>
            <li>Industry-specific AI Solutions</li>
          </ul>
        </LegalSection>

        <LegalSection title="3. User Responsibilities">
          <p>Users agree to:</p>
          <ul>
            <li>Provide accurate and complete information</li>
            <li>Use services only for lawful purposes</li>
            <li>Maintain the confidentiality of account credentials</li>
            <li>Comply with all applicable laws and regulations</li>
            <li>Not interfere with or disrupt the services</li>
          </ul>
        </LegalSection>

        <LegalSection title="4. Intellectual Property">
          <p>
            All content, features, and functionality of our services are owned by {site.name} and
            are protected by international copyright, trademark, and other intellectual property
            laws. Custom solutions developed for clients remain the property of the respective
            client.
          </p>
        </LegalSection>

        <LegalSection title="5. Payment Terms">
          <p>Payment terms are established in individual service agreements. Generally:</p>
          <ul>
            <li>Fees are due as specified in your service agreement</li>
            <li>Late payments may incur additional charges</li>
            <li>Refunds are subject to our refund policy</li>
            <li>All fees are exclusive of applicable taxes</li>
          </ul>
        </LegalSection>

        <LegalSection title="6. Limitation of Liability">
          <p>
            {site.name} shall not be liable for any indirect, incidental, special, consequential, or
            punitive damages, including without limitation, loss of profits, data, use, goodwill, or
            other intangible losses, resulting from your use of the services.
          </p>
        </LegalSection>

        <LegalSection title="7. Termination">
          <p>
            Either party may terminate the service agreement with appropriate notice as specified in
            individual contracts. Upon termination, access to services will be discontinued, and any
            outstanding fees become immediately due.
          </p>
        </LegalSection>

        <LegalSection title="8. Contact Information">
          <p>For questions regarding these terms, please contact us:</p>
          <LegalCard>
            <p>
              <strong>{site.name}</strong>
              <br />
              Email: <a href={`mailto:${site.email}`}>{site.email}</a>
              <br />
              Phone: <a href={site.phoneTel}>{site.phone}</a>
              {site.phoneAlt ? (
                <>
                  <br />
                  Alt: <a href={site.phoneAltTel}>{site.phoneAlt}</a>
                </>
              ) : null}
              <br />
              {site.address}
            </p>
          </LegalCard>
        </LegalSection>
      </LegalPage>
    </>
  );
}
