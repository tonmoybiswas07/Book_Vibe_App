import Link from "next/link";
import { FiBookOpen } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-inner">
        <Link className="brand" href="/"><span className="brand-icon"><FiBookOpen /></span>Book Vibe<span className="brand-dot">.</span></Link>
        <nav aria-label="Footer"><Link href="/Books">Explore</Link><Link href="/ListesBooks">My shelf</Link><Link href="/readBooks">Reading stats</Link></nav>
      </div>
    </footer>
  );
}
