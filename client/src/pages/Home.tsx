import { motion } from "framer-motion";
import { 
  Users, 
  Calendar, 
  BookOpen, 
  MessageCircle, 
  Video, 
  Music, 
  Shield, 
  Heart, 
  Clock, 
  Award,
  Menu,
  X,
  ChevronRight,
  Check
} from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import heroImage from '@assets/Screenshot_2025-12-24_at_12.32.20_PM_1766615579256.png';
import logoImage from '@assets/Screenshot_2025-12-24_at_1.26.50_PM_1766618920179.png';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen font-sans bg-background text-foreground overflow-x-hidden selection:bg-primary/20">
      
      {/* Navigation - Transparent over hero */}
      <nav className="fixed w-full z-50 bg-black/30 backdrop-blur-sm">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full bg-white/90 flex items-center justify-center overflow-hidden shadow-lg">
              <img 
                src={logoImage} 
                alt="The Hula Binder Logo" 
                className="w-7 h-7 object-cover"
              />
            </div>
            <span className="font-heading font-bold text-xl tracking-tight text-white drop-shadow-md">The Hula Binder</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('features')} className="text-sm font-medium text-white/90 hover:text-white transition-colors drop-shadow-sm">Features</button>
            <button onClick={() => scrollToSection('benefits')} className="text-sm font-medium text-white/90 hover:text-white transition-colors drop-shadow-sm">Benefits</button>
            <button onClick={() => scrollToSection('pricing')} className="text-sm font-medium text-white/90 hover:text-white transition-colors drop-shadow-sm">Pricing</button>
            <Link href="/contact">
              <Button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border border-white/30 shadow-lg">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden p-2 text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-black/80 backdrop-blur-md border-b border-white/10 p-6 flex flex-col gap-4 animate-in slide-in-from-top-5">
            <button onClick={() => scrollToSection('features')} className="text-left font-medium py-2 text-white">Features</button>
            <button onClick={() => scrollToSection('benefits')} className="text-left font-medium py-2 text-white">Benefits</button>
            <button onClick={() => scrollToSection('pricing')} className="text-left font-medium py-2 text-white">Pricing</button>
            <Link href="/contact">
              <Button className="w-full bg-white/20 text-white border border-white/30">Get Started</Button>
            </Link>
          </div>
        )}
      </nav>

      {/* Hero Section with Image Background */}
      <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
        {/* Image Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/40 z-10" /> {/* Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-black/20 z-10" />
          <img 
            src={heroImage}
            alt="Hula dancers performing kahiko at Merrie Monarch"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container relative z-20 px-6 text-center text-white max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm text-sm font-medium mb-6">
              Designed for Kumu Hula
            </span>
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 drop-shadow-lg">
              Support Your Hālau's <br/>
              <span className="text-primary-foreground italic">Growth & Legacy</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
              Handle the administrative burden of running a hālau, allowing you to focus more time and energy on what matters most: teaching hula and preserving culture.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="h-14 px-8 text-lg bg-primary hover:bg-primary/90 text-white border-0 shadow-xl shadow-black/20">
                  Start Your Journey
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cultural Values / Mission */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <BookOpen className="w-12 h-12 text-primary mx-auto mb-6 opacity-80" />
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-6">
            Preserving Tradition in a Digital Age
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            "The Hula Binder platform is designed to support—never replace—the essential work you do in passing on our sacred traditions. We provide a secure space to document mele, oli, and choreography while respecting cultural protocols."
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 bg-stone-50 dark:bg-stone-950/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold tracking-wider uppercase text-sm">Key Features</span>
            <h2 className="font-heading text-4xl font-bold mt-2 text-foreground">Everything Your Hālau Needs</h2>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              { 
                icon: Users, 
                title: "Haumāna Management", 
                desc: "Comprehensive profiles, progress tracking, tuition payments and online registration forms." 
              },
              { 
                icon: Check, 
                title: "Attendance & Engagement", 
                desc: "Digital check-in, participation tracking, and retention insights." 
              },
              { 
                icon: Music, 
                title: "Class Documentation", 
                desc: "Organize mele, oli, choreography notes, and cultural teachings securely." 
              },
              { 
                icon: MessageCircle, 
                title: "Communication Hub", 
                desc: "Direct messaging with students and parents and announcements." 
              },
              { 
                icon: Video, 
                title: "Video & Audio Library", 
                desc: "Secure storage for instructional videos with domain-level privacy." 
              },
              { 
                icon: Calendar, 
                title: "Event Coordination", 
                desc: "Competition prep, costume tracking, and performance scheduling." 
              }
            ].map((feature, i) => (
              <motion.div key={i} variants={fadeIn}>
                <Card className="h-full border-none shadow-md hover:shadow-xl transition-shadow duration-300 bg-card">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                      <feature.icon className="w-6 h-6" />
                    </div>
                    <CardTitle className="font-heading text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Security / Video Feature Spotlight */}
      <section className="py-24 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border">
                {/* Abstract UI representation */}
                <div className="aspect-video bg-stone-900 flex items-center justify-center relative">
                   <div className="absolute inset-0 bg-black/40 z-10 flex flex-col items-center justify-center text-white">
                      <Shield className="w-16 h-16 mb-4 text-primary opacity-80" />
                      <span className="font-heading text-xl">Secure Content Vault</span>
                   </div>
                   <img 
                    src="https://images.unsplash.com/photo-1505245844436-22a3f7a5554f?q=80&w=1200&auto=format&fit=crop" 
                    alt="Abstract Texture" 
                    className="w-full h-full object-cover opacity-30"
                   />
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <h3 className="text-accent font-semibold tracking-wider uppercase mb-2">Security First</h3>
              <h2 className="font-heading text-4xl font-bold mb-6 text-foreground">Protect Your Teachings</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Your hālau's choreography, mele, and oli represent years of cultural knowledge. Our platform integrates with video services that provide robust privacy controls.
              </p>
              <ul className="space-y-4">
                {[
                  "Domain-Level Privacy: Videos ONLY accessible through your platform",
                  "Access Control: Syncs with student active status",
                  "No Public Listing: Never appears in search results",
                  "Download Prevention: Protects against unauthorized distribution"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-1 min-w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-24 bg-stone-100 dark:bg-stone-900 text-foreground relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-foreground">Why Kumu Choose The Hula Binder</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center p-8 rounded-2xl bg-background border border-border shadow-sm hover:shadow-md transition-shadow">
              <Clock className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="font-heading text-xl font-bold mb-3 text-foreground">Save Time</h3>
              <p className="text-muted-foreground">Reduce administrative work by 5-10 hours per week, giving you more time to teach.</p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-background border border-border shadow-sm hover:shadow-md transition-shadow">
              <Heart className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="font-heading text-xl font-bold mb-3 text-foreground">Improve Retention</h3>
              <p className="text-muted-foreground">Better communication and engagement tracking helps identify at-risk students early.</p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-background border border-border shadow-sm hover:shadow-md transition-shadow">
              <Award className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="font-heading text-xl font-bold mb-3 text-foreground">Preserve Legacy</h3>
              <p className="text-muted-foreground">Systematically document your teachings and choreography for future generations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
             <span className="text-primary font-semibold tracking-wider uppercase text-sm">Investment</span>
            <h2 className="font-heading text-4xl font-bold mt-2">Flexible Pricing for Your Hālau</h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Choose the plan that fits your size. Video hosting is separated to keep costs fair and predictable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Starter */}
            <Card className="border shadow-lg relative bg-card">
              <CardHeader className="pb-8">
                <CardTitle className="font-heading text-2xl text-primary">Hālau Starter</CardTitle>
                <div className="flex items-baseline gap-1 mt-4">
                  <span className="text-4xl font-bold">$85</span>
                  <span className="text-muted-foreground">/mo</span>
                </div>
                <CardDescription className="mt-2">For growing hālau up to 30 students</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {['Up to 30 Students', 'Online Registration', 'Attendance Tracking', 'Online Tuition Payment', 'Curriculum Documentation', 'Email Support'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm">
                      <Check className="w-4 h-4 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="pt-8">
                <Link href="/signup?plan=starter">
                  <Button className="w-full" variant="outline">Select Starter</Button>
                </Link>
              </CardFooter>
            </Card>

            {/* Professional */}
            <Card className="border-2 border-primary shadow-2xl relative scale-105 z-10 bg-card">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </div>
              <CardHeader className="pb-8">
                <CardTitle className="font-heading text-2xl text-primary">Hālau Professional</CardTitle>
                <div className="flex items-baseline gap-1 mt-4">
                  <span className="text-4xl font-bold">$140</span>
                  <span className="text-muted-foreground">/mo</span>
                </div>
                <CardDescription className="mt-2">For established hālau up to 100 students</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {['Up to 100 Students', 'All Starter Features', 'Parent Portal', 'Competition Prep Tools', 'Custom Branding', 'Priority Support'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm">
                      <Check className="w-4 h-4 text-primary" />
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="pt-8">
                <Link href="/signup?plan=professional">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white">Select Professional</Button>
                </Link>
              </CardFooter>
            </Card>

            {/* Enterprise */}
            <Card className="border shadow-lg bg-card">
              <CardHeader className="pb-8">
                <CardTitle className="font-heading text-2xl text-primary">Hālau Enterprise</CardTitle>
                <div className="flex items-baseline gap-1 mt-4">
                  <span className="text-4xl font-bold">$250</span>
                  <span className="text-muted-foreground">/mo</span>
                </div>
                <CardDescription className="mt-2">Unlimited growth & multiple locations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {['Unlimited Students', 'Multiple Locations', 'Quarterly Success Review', '4-hour Response Time'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm">
                      <Check className="w-4 h-4 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="pt-8">
                <Link href="/signup?plan=enterprise">
                  <Button className="w-full" variant="outline">Select Enterprise</Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
          
          <div className="mt-12 p-6 bg-stone-100 dark:bg-stone-900 rounded-xl max-w-4xl mx-auto border border-stone-200 dark:border-stone-800">
             <div className="flex flex-col md:flex-row items-start md:items-center gap-4 justify-between">
                <div>
                  <h4 className="font-heading font-bold text-lg mb-1">Video Hosting Add-ons</h4>
                  <p className="text-sm text-muted-foreground">Keep your content secure with our integrated video partners.</p>
                </div>
                <div className="flex flex-col gap-2 w-full md:w-auto">
                   <div className="flex justify-between items-center gap-8 border-b border-stone-300 pb-2">
                      <span className="text-sm font-medium">Vimeo Starter (Privacy)</span>
                      <span className="font-bold">+$12/mo</span>
                   </div>
                   <div className="flex justify-between items-center gap-8">
                      <span className="text-sm font-medium">Vimeo Advanced (Live Streaming)</span>
                      <span className="font-bold">+$65/mo</span>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* CTA / Footer */}
      <footer className="bg-stone-900 text-stone-300 py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
               <div className="flex items-center gap-2 mb-6">
                  <div className="w-9 h-9 rounded-full bg-white/90 flex items-center justify-center overflow-hidden">
                    <img 
                      src={logoImage} 
                      alt="The Hula Binder Logo" 
                      className="w-7 h-7 object-cover"
                    />
                  </div>
                  <span className="font-heading font-bold text-xl text-white">The Hula Binder</span>
               </div>
               <p className="text-stone-400 max-w-sm mb-6">
                 Empowering Kumu Hula to manage their hālau with efficiency while respecting cultural traditions.
               </p>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6">Platform</h4>
              <ul className="space-y-4 text-sm">
                <li><a href="#" className="hover:text-primary transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Security</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6">Contact</h4>
              <ul className="space-y-4 text-sm">
                <li><Link href="/contact" className="hover:text-primary transition-colors">Schedule Demo</Link></li>
                <li><a href="#" className="hover:text-primary transition-colors">Support</a></li>
                <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-500">
            <p>&copy; {new Date().getFullYear()} The Hula Binder. All rights reserved.</p>
            <p>Site Design by <a href="https://haumeatechnologies.com/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Haumea Technologies</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
}
