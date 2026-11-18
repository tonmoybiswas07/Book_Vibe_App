import Link from "next/link";
import { FiArrowDown, FiArrowUpRight } from "react-icons/fi";

export default function Banner() {
  return (
    <section className="shell hero">
      <div className="hero-copy">
        <span className="eyebrow"><span /> THE READING ROOM</span>
        <h1>Find your next<br /><em>good read.</em></h1>
        <p>Discover books worth getting lost in, save the ones you want to read, and keep track of every page.</p>
        <div className="hero-actions">
          <Link className="button primary" href="#catalog">Explore books <FiArrowDown /></Link>
          <Link className="button hero-link" href="/ListesBooks">My shelf <FiArrowUpRight /></Link>
        </div>
      </div>
    </section>
  );
}
