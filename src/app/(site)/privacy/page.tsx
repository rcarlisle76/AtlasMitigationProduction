import type { Metadata } from "next"
import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Atlas Mitigation privacy policy. Learn how we collect, use, and protect your personal information in connection with our restoration services.",
  openGraph: {
    title: "Privacy Policy | Atlas Mitigation",
    description:
      "Learn how Atlas Mitigation collects, uses, and protects your personal information.",
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy | Atlas Mitigation",
    description:
      "Learn how Atlas Mitigation collects, uses, and protects your personal information.",
  },
  alternates: {
    canonical: "/privacy",
  },
}

export default function PrivacyPolicyPage() {
  return (
    <main className="py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Effective Date: March 18, 2026
        </p>

        <div className="mt-10 space-y-10 text-foreground/90 leading-relaxed">
          {/* Section 1 */}
          <section>
            <h2 className="text-xl font-semibold">1. Introduction</h2>
            <p className="mt-3">
              This Privacy Policy describes how Atlas Mitigation
              (&ldquo;Company,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or
              &ldquo;our&rdquo;) collects, uses, and protects the personal
              information of our customers and contacts in connection with our
              fire and water damage restoration services. This policy applies to
              communications made via phone calls and SMS/text messages using our
              business phone number(s).
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-xl font-semibold">
              2. Information We Collect
            </h2>
            <p className="mt-3">
              We may collect the following types of information:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>
                <strong>Contact Information:</strong> Name, phone number, email
                address, and service address
              </li>
              <li>
                <strong>Job-Related Information:</strong> Details about requested
                services, estimates, scheduled visits, and job progress
              </li>
              <li>
                <strong>Communication Records:</strong> Records of calls and text
                messages related to your service
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-xl font-semibold">
              3. How We Use Your Information
            </h2>
            <p className="mt-3">
              We use your information solely for legitimate business purposes
              related to the services we provide, including:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>
                Sending and receiving SMS text messages and phone calls to
                coordinate estimates, schedule job site visits, and provide
                updates on job progress
              </li>
              <li>
                Communicating with customers regarding the status of ongoing or
                completed restoration work
              </li>
              <li>
                Internal team communication related to job coordination and
                scheduling
              </li>
            </ul>
            <p className="mt-3">
              We do not use this number for marketing, promotions, or sales
              solicitation of any kind.
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-xl font-semibold">
              4. SMS / Text Messaging
            </h2>
            <p className="mt-3">
              By providing your phone number and engaging with our business, you
              consent to receive SMS text messages from us. These messages will
              only be sent for the following purposes:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>
                Scheduling and confirming estimates or service appointments
              </li>
              <li>
                Providing updates on job site visits and project progress
              </li>
              <li>
                Follow-up communication directly related to restoration work
                performed or requested
              </li>
            </ul>
            <p className="mt-3">
              Message frequency varies based on the nature and status of your
              service. Standard message and data rates may apply. You may opt out
              at any time by replying <strong>STOP</strong> to any message. For
              help, reply <strong>HELP</strong>.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-xl font-semibold">
              5. How We Share Your Information
            </h2>
            <p className="mt-3">
              We do not sell, rent, or share your personal information with third
              parties for marketing purposes. Your information may only be shared
              in the following limited circumstances:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>
                With employees or subcontractors directly involved in performing
                your requested restoration services
              </li>
              <li>
                As required by law or in response to a valid legal process
              </li>
            </ul>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-xl font-semibold">6. Data Security</h2>
            <p className="mt-3">
              We take reasonable measures to protect the personal information you
              share with us. Access to customer information is limited to
              personnel who need it to perform their job duties.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-xl font-semibold">7. Data Retention</h2>
            <p className="mt-3">
              We retain customer contact and job information only as long as
              necessary to fulfill the services requested and to comply with
              applicable legal or business recordkeeping requirements.
            </p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-xl font-semibold">8. Your Rights</h2>
            <p className="mt-3">You may contact us at any time to:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>
                Request access to the personal information we hold about you
              </li>
              <li>Request correction of inaccurate information</li>
              <li>
                Request that we stop contacting you via SMS (reply{" "}
                <strong>STOP</strong> to any text message)
              </li>
            </ul>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-xl font-semibold">9. Contact Us</h2>
            <p className="mt-3">
              If you have questions about this Privacy Policy or how we handle
              your information, please contact us:
            </p>
            <div className="mt-4 rounded-lg border bg-muted/50 p-6 space-y-3">
              <p className="font-semibold">Atlas Mitigation</p>
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="h-4 w-4 text-atlas-primary" />
                <span>1720 Mars Hill Rd, Acworth, GA 30101</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4 text-atlas-primary" />
                <a
                  href="tel:+14048083677"
                  className="hover:text-atlas-primary transition-colors"
                >
                  (404) 808-3677
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4 text-atlas-primary" />
                <a
                  href="mailto:info@atlasmitigation.com"
                  className="hover:text-atlas-primary transition-colors"
                >
                  info@atlasmitigation.com
                </a>
              </div>
            </div>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="text-xl font-semibold">
              10. Changes to This Policy
            </h2>
            <p className="mt-3">
              We may update this Privacy Policy from time to time. Any changes
              will be reflected with a new effective date at the top of this
              document.
            </p>
          </section>
        </div>

        {/* Back link */}
        <div className="mt-12 border-t pt-8">
          <Link
            href="/"
            className="text-sm text-atlas-primary hover:underline"
          >
            &larr; Back to Home
          </Link>
        </div>
      </div>
    </main>
  )
}
