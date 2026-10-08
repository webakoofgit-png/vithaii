import { ArrowUp, MapPin, Mail, Phone, Clock3 } from "lucide-react";
import { ArrowLink, SectionLabel } from "./shared";

const whatsapp = "https://wa.me/919075967211";

export function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="partner-cta"><div><h2>Built for homes.<br />Ready for business.</h2><span>For consumers, retailers, distributors, HoReCa customers and business partners.</span></div><div className="partner-actions"><ArrowLink href="#contact-details" tone="gold">Partner with Vittahii</ArrowLink><ArrowLink href={whatsapp} tone="light">WhatsApp us</ArrowLink></div></div>
      <div className="contact-main" id="contact-details"><div className="contact-intro"><SectionLabel>Contact</SectionLabel><h2>Let’s begin<br />a conversation.</h2><p>Whether you’re a customer, retailer, distributor or business partner, we’d be happy to connect.</p><div className="contact-actions"><ArrowLink href="mailto:admin@jkpurefoods.com" tone="gold">Contact us</ArrowLink></div></div>
        <address className="contact-details"><a href="https://maps.google.com/?q=18.339996,73.839622" target="_blank" rel="noreferrer"><MapPin aria-hidden="true" /><span>Pune, Maharashtra, India</span></a><div><Phone aria-hidden="true" /><span><a href="tel:+919075967211">9075967211</a> · <a href="tel:+919529063559">9529063559</a></span></div><a href="mailto:admin@jkpurefoods.com"><Mail aria-hidden="true" /><span>admin@jkpurefoods.com</span></a><div><Clock3 aria-hidden="true" /><span>Monday – Saturday · 9:00 AM – 6:00 PM</span></div></address>
      </div>
      <div className="floating-actions"><a className="whatsapp-float" href={whatsapp} aria-label="Chat with Vittahii on WhatsApp"><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.611-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.479-8.413" /></svg></a><a className="scroll-top-float" href="#top" aria-label="Scroll to top"><ArrowUp aria-hidden="true" /></a></div>
    </section>
  );
}
