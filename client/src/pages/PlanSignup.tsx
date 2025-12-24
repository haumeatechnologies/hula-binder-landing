import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { ArrowLeft, Send } from "lucide-react";
import { Link, useSearch } from "wouter";
import { useState } from "react";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  halauName: z.string().min(2, {
    message: "Hālau name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().optional(),
  plan: z.string(),
  message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const planDetails: Record<string, { name: string; price: string; description: string }> = {
  starter: {
    name: "Hālau Starter",
    price: "$85/month",
    description: "For growing hālau up to 30 students"
  },
  professional: {
    name: "Hālau Professional",
    price: "$140/month",
    description: "For established hālau up to 100 students"
  },
  enterprise: {
    name: "Hālau Enterprise",
    price: "$250/month",
    description: "Unlimited growth & multiple locations"
  }
};

export default function PlanSignup() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const searchString = useSearch();
  const params = new URLSearchParams(searchString);
  const planParam = params.get("plan") || "starter";
  const plan = planDetails[planParam] || planDetails.starter;

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      halauName: "",
      email: "aloha@hula.com",
      phone: "",
      plan: plan.name,
      message: "",
    },
  });

  async function onSubmit(values: FormData) {
    setIsSubmitting(true);
    
    try {
      const response = await fetch("/api/plan-signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: values.name,
          halauName: values.halauName,
          email: values.email,
          phone: values.phone || null,
          plan: values.plan,
          message: values.message || null,
        }),
      });

      if (response.ok) {
        toast({
          title: "Request Sent!",
          description: "Mahalo! We will be in touch shortly to set up your plan.",
        });
        form.reset();
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-background dark:from-stone-950 dark:to-background py-12 px-6">
      <div className="container max-w-2xl mx-auto">
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
          <Card className="shadow-xl border-stone-200 dark:border-stone-800">
            <CardHeader className="text-center pb-2">
              <CardTitle className="font-heading text-3xl text-primary">Get Started with {plan.name}</CardTitle>
              <CardDescription className="text-lg mt-2">
                {plan.description} - {plan.price}
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" data-netlify="true" name="plan-signup">
                  <input type="hidden" name="form-name" value="plan-signup" />
                  
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your full name" {...field} data-testid="input-name" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="halauName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Hālau Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your hālau name" {...field} data-testid="input-halau-name" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address *</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="your@email.com" {...field} data-testid="input-email" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input type="tel" placeholder="(808) 555-0123" {...field} data-testid="input-phone" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="plan"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Selected Plan</FormLabel>
                        <FormControl>
                          <Input {...field} readOnly className="bg-muted" data-testid="input-plan" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Additional Information</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us about your hālau, number of students, or any questions you have..."
                            className="min-h-[120px] resize-none"
                            {...field}
                            data-testid="input-message"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    className="w-full h-12 text-lg bg-primary hover:bg-primary/90"
                    disabled={isSubmitting}
                    data-testid="button-submit"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Submit Request
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
