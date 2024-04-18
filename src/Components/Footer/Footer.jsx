import homeImg from "../../assets/images/home.jpg";

const Footer = () => {
  return (
    
    <footer className="footer px-20 py-10 bg-blue-950 text-yellow-50 transition flex justify-between" data-aos="fade-up" data-aos-delay="300">
      <aside>
        <img className="w-20 h-20" src={homeImg} alt="" />
        <p>Luxury Real state<br />Providing reliable tech since 1992</p>
      </aside>
      <nav>
        <h6 className="footer-title">Home</h6>
        <a className="link link-hover">Gallery</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </footer>
  );
};

export default Footer;
