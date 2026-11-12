import "./Footer.css";
function Footer({ theme }) {

  return (
    <footer className={`custom-footer ${theme}`}>

      <p className="mb-0">
        © 2026 Makeup Products. All Rights Reserved.
      </p>

    </footer>
  );
}

export default Footer;