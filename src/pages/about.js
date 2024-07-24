import Link from 'next/link';

const About = () => (
  <div style={{height:'100vh'}}>
    <Navbar />
    <h1>About Page</h1>
  </div>
);

const Navbar = () => (
  <nav>
    <Link href="/">Home</Link> | 
    <Link href="/about">About</Link> | 
    <Link href="/contact">Contact</Link>
  </nav>
);

export default About;
