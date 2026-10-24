import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { LegalCard, LegalPage, LegalSection } from "@/components/legal/LegalPage";
import { site } from "@/lib/content";
import { breadcrumbSchema, pageMetadata, webPageSchema } from "@/lib/seo";

const desc = `How ${site.name} collects, uses and protects information when you contact us or use our AI, data and software services.`;

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description: desc,
  path: "/privacy",
  keywords: ["RoboPylot privacy", "privacy policy"],
});

export default function PrivacyPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({ path: "/privacy", title: "Privacy Policy", description: desc }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Privacy Policy", path: "/privacy" },
          ]),
        ]}
      />
      <LegalPage title="Privacy Policy" effective="25/10/2026">
        <LegalSection title="1. Information We Collect">
          <p>
            We collect information you provide directly to us, such as when you contact us, request
            a discovery call, or use our AI automation services. This may include:
          </p>
          <ul>
            <li>Name, email address, and contact information</li>
            <li>Business information and requirements</li>
            <li>Communication preferences</li>
            <li>Technical data related to our AI services</li>
          </ul>
        </LegalSection>

        <LegalSection title="2. How We Use Your Information">
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide and improve our AI automation services</li>
            <li>Communicate with you about our services</li>
            <li>Process transactions and send related information</li>
            <li>Send marketing communications (with your consent)</li>
            <li>Comply with legal obligations</li>
          </ul>
        </LegalSection>

        <LegalSection title="3. Information Sharing">
          <p>
            We do not sell, trade, or otherwise transfer your personal information to third parties
            without your consent, except as described in this policy. We may share information with:
          </p>
          <ul>
            <li>Service providers who assist in our operations</li>
            <li>Legal authorities when required by law</li>
            <li>Business partners with your explicit consent</li>
          </ul>
        </LegalSection>

        <LegalSection title="4. Data Security">
          <p>
            We implement appropriate security measures to protect your personal information against
            unauthorized access, alteration, disclosure, or destruction. However, no method of
            transmission over the internet is 100% secure.
          </p>
        </LegalSection>

        <LegalSection title="5. Your Rights">
          <p>You have the right to:</p>
          <ul>
            <li>Access and update your personal information</li>
            <li>Request deletion of your data</li>
            <li>Opt out of marketing communications</li>
            <li>Request data portability</li>
          </ul>
        </LegalSection>

        <LegalSection title="6. Contact Us">
          <p>If you have any questions about this Privacy Policy, please contact us at:</p>
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
