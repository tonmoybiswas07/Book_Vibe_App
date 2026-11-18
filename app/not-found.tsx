import Link from "next/link";
import { FiArrowLeft, FiBookOpen } from "react-icons/fi";

export default function NotFound() {
  return <section className="shell interior"><div className="empty"><FiBookOpen /><h1>Page not found</h1><Link href="/" className="button primary"><FiArrowLeft /> Back to Book Vibe</Link></div></section>;
}
