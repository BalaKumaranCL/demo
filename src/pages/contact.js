import Image from 'next/image';
import Link from 'next/link';

const Contact = () => (
  <div style={{height:'100vh'}}>
    <Navbar />
    <h1>Contact Page</h1>
      <Image
      src='/freshness-beauty-nature-wet-drops-generated-by-ai.jpg'
      alt='Nature'
    />
  </div>
);

const Navbar = () => (
  <nav>
    <Link href="/">Home</Link> | 
    <Link href="/about">About</Link> | 
    <Link href="/contact">Contact</Link>
  </nav>
);

export default Contact;
