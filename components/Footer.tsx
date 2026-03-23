const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-6 mt-10">
      <div className="text-center">
        <p>Mwisho Mwisho Tourist Hotel</p>
        <p>Siaya Town, Kenya</p>
        <p className="text-sm mt-2">
          © {new Date().getFullYear()} All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;