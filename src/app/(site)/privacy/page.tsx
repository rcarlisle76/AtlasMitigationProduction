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
            <p className="mt-3 font-semibold">
              We do not use this number for marketing, promotions, or sales
              solicitation of any kind.
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-xl font-semibold">
              4. SMS / Text Messaging Terms &amp; Conditions
            </h2>
            <p className="mt-3">
              By providing your phone number and engaging with our business, you
              consent to receive SMS text messages from us through our business
              number{" "}
              <a
                href="tel:+17705881119"
                className="font-semibold hover:text-atlas-primary transition-colors"
              >
                (770) 588-1119
              </a>
              .
            </p>

            <p className="mt-4">
              <strong>Opt-In Process:</strong> Contacts opt in on our website
              contact page at{" "}
              <Link
                href="/contact"
                className="text-atlas-primary hover:underline"
              >
                https://atlasmitigation.com
              </Link>{" "}
              by checking a box to agree to receive informational messages from
              Atlas Mitigation and Restoration LLC. No mobile opt-in information
              is shared with third parties.
            </p>

            <p className="mt-4">
              <strong>Message Types:</strong> Messages sent through this number
              are limited to the following types:
            </p>
            <ul className="mt-2 list-disc space-y-2 pl-6">
              <li>
                <strong>Estimate Coordination:</strong> Scheduling and confirming
                appointments for property assessments and estimates
              </li>
              <li>
                <strong>Job Site Scheduling:</strong> Communicating arrival
                times, visit confirmations, and schedule changes
              </li>
              <li>
                <strong>Job Progress Updates:</strong> Notifications and updates
                regarding the status of active restoration work
              </li>
              <li>
                <strong>Internal Team Communications:</strong> Crew-to-crew
                messaging related to active job sites and assignments
              </li>
              <li>
                <strong>Follow-Up Communications:</strong> Messages related to
                completed work, documentation, or insurance coordination
              </li>
            </ul>

            <p className="mt-4">
              <strong>Message Frequency:</strong> You may receive between{" "}
              <strong>1 to 100 messages per month</strong> depending on the
              number of active jobs, scheduled appointments, and ongoing service
              updates associated with your property or project.
            </p>

            <p className="mt-4">
              <strong>Rates:</strong> Atlas Mitigation does not charge for SMS
              messages. However, <strong>standard message and data rates may
              apply</strong> depending on your mobile carrier and plan. Please
              contact your carrier for details regarding your messaging plan.
            </p>

            <p className="mt-4">
              <strong>Opt-In Confirmation:</strong> When you opt in, you will
              receive the following confirmation message: &ldquo;You are now
              opted in to receive messages from Atlas Mitigation and Restoration
              LLC. Msg &amp; data rates may apply. Msg frequency varies
              (1-100/mo). Reply STOP to cancel, HELP for help.&rdquo;
            </p>

            <p className="mt-4">
              <strong>Opt-Out:</strong> You may opt out of receiving SMS messages
              at any time by replying <strong>STOP</strong> to any message. You
              will receive the following confirmation: &ldquo;You have been
              unsubscribed from Atlas Mitigation messages. No further messages
              will be sent. Reply START to re-subscribe.&rdquo; To re-enroll,
              reply <strong>START</strong> and you will receive: &ldquo;You have
              been re-subscribed to Atlas Mitigation messages. Msg &amp; data
              rates may apply.&rdquo;
            </p>

            <p className="mt-4">
              <strong>Help:</strong> Reply <strong>HELP</strong> to any message
              to receive: &ldquo;Atlas Mitigation: For help, call (770) 588-1119
              or email info@atlasmitigation.com. Msg &amp; data rates may apply.
              Reply STOP to cancel.&rdquo;
            </p>

            <p className="mt-4 font-semibold">
              We do not use this number for marketing, promotions, or sales
              solicitation of any kind.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-xl font-semibold">
              5. How We Share Your Information
            </h2>
            <p className="mt-3">
              We do <strong>not</strong> sell, rent, or share your personal
              information with third parties for marketing purposes. Your
              information may only be shared in the following limited
              circumstances:
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
                <span>5437 Due West Rd, Powder Springs, GA 30127</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4 text-atlas-primary" />
                <a
                  href="tel:+17705881119"
                  className="hover:text-atlas-primary transition-colors"
                >
                  (770) 588-1119
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
