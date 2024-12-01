import React from 'react';

const About = () => {
  return (
    <div className="flex items-center justify-center h-auto bg-gradient-to-r from-[#8B5E3C] to-[#D2B48C] text-center p-4 font_2">
      <div className="w-10/12 mx-auto p-6 bg-white bg-opacity-80 rounded-lg shadow-xl">
        <h1 className="text-3xl md:text-4xl font-semibold text-[#8B5E3C] mb-4 font_1">
          About Us
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-[#2C3E50]">
          Welcome to our coffee shop! We are passionate about serving the best quality coffee in a warm and cozy environment.
          Our mission is to create a place where coffee lovers can enjoy not only amazing brews but also great company and relaxing vibes.
        </p>
        <p className="mt-4 text-base sm:text-lg md:text-xl text-[#2C3E50]">
          Our team is dedicated to sourcing the finest beans, roasting them to perfection, and crafting your favorite beverages with care.
          Join us for a cup of coffee and experience the difference.
        </p>

        <section className="my-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#8B5E3C] mb-4  font_1">
            Our Story
          </h2>
          <p className="text-lg sm:text-xl text-[#2C3E50] leading-relaxed">
            Our journey started with a simple idea: to offer the finest coffee with a focus on quality and community.
            We started as a small café, but over the years, our passion for coffee and dedication to excellence allowed us to grow.
            Today, we are proud to offer a wide variety of coffee blends and a welcoming atmosphere where everyone feels like family.
          </p>
        </section>

        {/* Our Values Section */}
 <section className="mb-12">
  <h2 className="text-3xl md:text-4xl font-semibold text-[#8B5E3C] mb-6 font_1">
    Our Values
  </h2>
  
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {/* Card 1 - Quality */}
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105">
      <h3 className="text-2xl font-semibold text-[#8B5E3C] mb-3">Quality</h3>
      <p className="text-lg text-[#2C3E50] leading-relaxed">
        We only source the finest beans to ensure every cup is exceptional.
      </p>
    </div>

    {/* Card 2 - Community */}
   

    {/* Card 3 - Sustainability */}
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105">
      <h3 className="text-2xl font-semibold text-[#8B5E3C] mb-3">Sustainability</h3>
      <p className="text-lg text-[#2C3E50] leading-relaxed">
        We are committed to sustainable practices in every step of our process.
      </p>
    </div>

    {/* Card 4 - Innovation */}
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105">
      <h3 className="text-2xl font-semibold text-[#8B5E3C] mb-3">Innovation</h3>
      <p className="text-lg text-[#2C3E50] leading-relaxed">
        We are constantly exploring new ways to bring creativity into your coffee experience.
      </p>
    </div>
  </div>
</section>

        {/* Join Us Section */}
        <section className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#8B5E3C] mb-6 font_1">
            Join Us for a Cup of Coffee
          </h2>
          <p className="text-lg sm:text-xl text-[#2C3E50] mb-6">
            We would love for you to join us for a cup of coffee, whether you're looking to relax, work, or catch up with friends.
            Our team is always here to make your experience memorable.
          </p>
          <button className="bg-[#8B5E3C] text-white py-2 px-6 rounded-full hover:bg-[#D2B48C] transition duration-300">
            Visit Us Today
          </button>
        </section>
      </div>
    </div>
  );
}

export default About;
