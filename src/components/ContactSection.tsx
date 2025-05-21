
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/sonner";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      console.log("Form data:", formData);
      setIsSubmitting(false);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      toast("Message sent successfully!", {
        description: "I'll get back to you as soon as possible.",
      });
    }, 1500);
  };

  return (
    <section id="contact" className="section">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Get In Touch</h2>
        <div className="flex flex-col md:flex-row gap-10">
          <div className="md:w-1/3">
            <div className="space-y-6">
              <div className="bg-secondary p-5 border border-gold/20 rounded-lg hover:border-gold/40 transition-all">
                <h3 className="text-xl font-medium mb-2 gold-gradient-text">Contact Information</h3>
                <p className="text-gray-300 mb-4">Feel free to reach out to me. I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.</p>
                <div className="space-y-3 text-gray-300">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center text-gold">
                      📍
                    </div>
                    <span>Jersey City, NJ</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center text-gold">
                      📧
                    </div>
                    <span>divya.vipparla@pace.edu</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center text-gold">
                      🎓
                    </div>
                    <span>Pace University</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-4 pl-2">
                <a href="https://github.com" className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center text-gold hover:bg-gold/30 transition-colors">
                  GH
                </a>
                <a href="https://linkedin.com" className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center text-gold hover:bg-gold/30 transition-colors">
                  LI
                </a>
              </div>
            </div>
          </div>
          <div className="md:w-2/3">
            <form onSubmit={handleSubmit} className="space-y-6 bg-secondary p-6 rounded-lg border border-gold/20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-background border-gold/20 focus:border-gold text-white"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-background border-gold/20 focus:border-gold text-white"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="bg-background border-gold/20 focus:border-gold text-white"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="bg-background border-gold/20 focus:border-gold text-white"
                  required
                ></Textarea>
              </div>
              <div>
                <Button
                  type="submit"
                  className="w-full bg-gold hover:bg-gold/90 text-black"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
