function Footer({ theme }) {

  return (
    <footer className={`text-center py-3 ${theme === "light" ? "bg-light text-dark" : "bg-dark text-light"}`}>

      <p className="mb-0">
        © 2026 Makeup Products. All Rights Reserved.
      </p>

    </footer>
  );
}

export default Footer;