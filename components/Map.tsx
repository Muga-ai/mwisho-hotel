const Map = () => {
  return (
    <div className="w-full h-[400px] mt-10 rounded-lg overflow-hidden shadow-lg">
      <iframe
        src="https://www.google.com/maps?q=Shop+20A+NextGen+Mall+Mombasa+Road+Siaya+Town&output=embed"
        className="w-full h-full border-0"
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Map;