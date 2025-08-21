export default function Hero() {
  return (
    <section className="bg-blue-50 min-h-[60vh] sm:min-h-[80vh] md:min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-8">
      
      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 md:mb-8">
        Welcome to MyApp
      </h1>
      
      {/* Paragraph */}
      <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 sm:mb-8 md:mb-10 max-w-xs sm:max-w-md md:max-w-xl">
        Explore our amazing products and services. Scroll down to discover more.
      </p>
      
      {/* Button */}
      <a
        href="/products"
        className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-base sm:text-lg md:text-xl"
      >
        View Products
      </a>
    </section>
  );
}
