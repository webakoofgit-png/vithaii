import { BrandMark } from "./shared";

const explore = [["Legacy", "#legacy"], ["Our Ghee", "#ghee"], ["Process", "#process"], ["Quality", "#quality"], ["Founder", "#founder"], ["Contact", "#contact"]];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top"><div className="footer-brand"><BrandMark /><p>Rooted In Pure Business</p></div><div className="footer-links"><h2>Explore</h2><nav aria-label="Explore Vittahii">{explore.map(([name, href]) => <a key={href} href={href}>{name}</a>)}</nav></div><div className="footer-links footer-social"><h2>Follow Vittahii</h2><a href="https://www.instagram.com/">Instagram <span>↗</span></a><a href="https://www.facebook.com/">Facebook <span>↗</span></a><a href="https://www.youtube.com/">YouTube <span>↗</span></a></div></div>
      <div className="footer-bottom"><span>© 2026 Vittahii. All Rights Reserved.</span><span>Made in Maharashtra, India.</span></div>
    </footer>
  );
}
