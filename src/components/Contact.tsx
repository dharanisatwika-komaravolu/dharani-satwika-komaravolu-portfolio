
import React from 'react';
import { Mail, MapPin, Send, Github, Linkedin, ExternalLink } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type FormData = z.infer<typeof formSchema>;

const Contact = () => {
  const { toast } = useToast();
  
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = async (data: FormData) => {
    console.log('Form submitted with data:', data);
    
    try {
      // Create a mailto link with the form data
      const subject = encodeURIComponent(`Contact Form: ${data.subject}`);
      const body = encodeURIComponent(
        `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`
      );
      const mailtoLink = `mailto:dharanisatwika2907@gmail.com?subject=${subject}&body=${body}`;
      
      // Open the user's default email client
      window.location.href = mailtoLink;
      
      toast({
        title: "Message Prepared!",
        description: "Your email client should open with the message ready to send.",
      });
      
      // Reset form
      form.reset();
    } catch (error) {
      console.error('Error preparing message:', error);
      toast({
        title: "Error",
        description: "There was an issue preparing your message. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss how we can create something amazing together.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Get In Touch</h3>
                <p className="text-gray-600 leading-relaxed mb-8">
                  I'm always excited to work on new projects and collaborate with talented individuals. 
                  Whether you have a project in mind or just want to connect, feel free to reach out!
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center group">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Email</h4>
                    <p className="text-gray-600">dharanisatwika2907@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center group">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Location</h4>
                    <p className="text-gray-600">Arlington, Texas</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-8">
                <h4 className="font-semibold text-gray-800 mb-4">Connect With Me</h4>
                <div className="flex gap-4">
                  <a 
                    href="mailto:dharanisatwika2907@gmail.com"
                    className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg text-white hover:scale-110 transition-transform duration-300"
                  >
                    <Mail className="w-6 h-6" />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/dharani-komaravolu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg text-white hover:scale-110 transition-transform duration-300"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a 
                    href="https://github.com/dharanisatwika-komaravolu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg text-white hover:scale-110 transition-transform duration-300"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-xl shadow-lg">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your Name" {...field} />
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
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input placeholder="your@email.com" type="email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <FormControl>
                          <Input placeholder="Project Discussion" {...field} />
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
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell me about your project..."
                            className="min-h-[120px] resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <button
                    type="submit"
                    disabled={form.formState.isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white py-3 px-6 rounded-lg font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send className="w-5 h-5" />
                    {form.formState.isSubmitting ? 'Preparing Message...' : 'Send Message'}
                  </button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
