import { MapPin, Mail, Phone, Clock3 } from "lucide-react";
import { ArrowLink, SectionLabel } from "./shared";

const whatsapp = "https://wa.me/919075967211";

export function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="partner-cta"><div><h2>Built for homes.<br />Ready for business.</h2><span>For consumers, retailers, distributors, HoReCa customers and business partners.</span></div><div className="partner-actions"><ArrowLink href="#contact-details" tone="gold">Partner with Vittahii</ArrowLink><ArrowLink href={whatsapp} tone="light">WhatsApp us</ArrowLink></div></div>
      <div className="contact-main" id="contact-details"><div className="contact-intro"><SectionLabel>Contact</SectionLabel><h2>Let’s begin<br />a conversation.</h2><p>Whether you’re a customer, retailer, distributor or business partner, we’d be happy to connect.</p><div className="contact-actions"><ArrowLink href="mailto:admin@jkpurefoods.com" tone="gold">Contact us</ArrowLink><ArrowLink href={whatsapp} tone="light">WhatsApp us</ArrowLink></div></div>
        <address className="contact-details"><a href="https://maps.google.com/?q=18.339996,73.839622"><MapPin aria-hidden="true" /><span>Pune, Maharashtra, India</span></a><div><Phone aria-hidden="true" /><span><a href="tel:+919075967211">9075967211</a> · <a href="tel:+919529063559">9529063559</a></span></div><a href="mailto:admin@jkpurefoods.com"><Mail aria-hidden="true" /><span>admin@jkpurefoods.com</span></a><div><Clock3 aria-hidden="true" /><span>Monday – Saturday · 9:00 AM – 6:00 PM</span></div></address>
      </div>
      <a className="whatsapp-float" href={whatsapp} aria-label="Chat with Vittahii on WhatsApp"><svg viewBox="0 0 32 32" fill="none" aria-hidden="true"><path d="M26 15.5a10.3 10.3 0 0 1-15.2 9L5 26l1.6-5.6A10.3 10.3 0 1 1 26 15.5Z" stroke="currentColor" strokeWidth="1.6" /><path d="M12 10.7c-.4-.9-.7-.9-1-.9-.5 0-1.6 1.1-1.6 2.5 0 2.7 4.2 7.1 7.8 8 .9.2 2.6-.8 2.8-1.8.1-.5 0-.7-.4-.9l-2.1-1c-.4-.2-.6-.1-.9.3l-.8 1c-.2.2-.4.2-.8 0-1.4-.7-2.5-1.7-3.2-3-.2-.4-.2-.5.1-.8l.6-.8c.2-.3.2-.5.1-.8l-.6-1.8Z" fill="currentColor" /></svg></a>
    </section>
  );
}
