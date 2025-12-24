import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        <Link href="/">
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </motion.div>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="font-heading text-4xl font-bold text-primary mb-2">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

          <div className="prose prose-stone dark:prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                The Hula Binder ("we," "our," or "us") is committed to protecting the privacy of our users. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our hālau management platform and related services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Information We Collect</h2>
              <h3 className="text-xl font-semibold text-foreground mb-2">Personal Information</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                When you register for an account or use our services, we may collect:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Name and contact information (email address, phone number)</li>
                <li>Hālau name and organization details</li>
                <li>Billing and payment information</li>
                <li>Student and attendance records you choose to input</li>
                <li>Communications with our support team</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-2 mt-6">Usage Data</h3>
              <p className="text-muted-foreground leading-relaxed">
                We automatically collect certain information when you access our platform, including your IP address, browser type, device information, pages visited, and features used.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and send related information</li>
                <li>Send administrative notifications and updates</li>
                <li>Respond to your comments, questions, and support requests</li>
                <li>Monitor and analyze usage patterns to enhance user experience</li>
                <li>Protect against unauthorized access and ensure platform security</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Data Sharing and Disclosure</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We do not sell your personal information. We may share your information in the following circumstances:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li><strong>Service Providers:</strong> With third-party vendors who assist in providing our services (payment processing, hosting, analytics)</li>
                <li><strong>Legal Requirements:</strong> When required by law or to respond to legal process</li>
                <li><strong>Protection of Rights:</strong> To protect our rights, privacy, safety, or property</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. This includes encryption of data in transit and at rest, regular security assessments, and access controls.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Data Retention</h2>
              <p className="text-muted-foreground leading-relaxed">
                We retain your personal information for as long as your account is active or as needed to provide you services. We will retain and use your information as necessary to comply with legal obligations, resolve disputes, and enforce our agreements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Depending on your location, you may have the following rights regarding your personal information:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Access and receive a copy of your data</li>
                <li>Correct inaccurate or incomplete information</li>
                <li>Request deletion of your personal information</li>
                <li>Object to or restrict certain processing activities</li>
                <li>Data portability (receive your data in a structured format)</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Cookies and Tracking</h2>
              <p className="text-muted-foreground leading-relaxed">
                We use cookies and similar tracking technologies to enhance your experience, analyze usage, and assist in our marketing efforts. You can control cookie preferences through your browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Children's Privacy</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our services are not directed to individuals under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Changes to This Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this Privacy Policy periodically.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about this Privacy Policy or our data practices, please contact us at:
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                <strong>The Hula Binder</strong><br />
                Email: <a href="mailto:arleen@haumeatechnologies.com" className="text-primary hover:underline">arleen@haumeatechnologies.com</a>
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
