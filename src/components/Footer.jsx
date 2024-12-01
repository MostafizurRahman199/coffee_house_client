import React from 'react';
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#8B5E3C] to-[#D2B48C] text-white py-8 font_2">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 - About */}
          <div>
            <h3 className="text-xl font-semibold mb-4">About Us</h3>
            <p className="text-sm leading-relaxed">
              We are a passionate coffee company committed to quality, sustainability, and community.
            </p>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul>
              <li><a href="/" className="text-sm hover:text-[#3d2a1b]">Home</a></li>
              <li><a href="/about" className="text-sm hover:text-[#3d2a1b]">About</a></li>
              <li><a href="/menu" className="text-sm hover:text-[#3d2a1b]">Menu</a></li>
              <li><a href="/contact" className="text-sm hover:text-[#3d2a1b]">Contact</a></li>
            </ul>
          </div>

          {/* Column 3 - Social Media */}
          <div>
  <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
  <div className="flex space-x-4">
    <SocialIcon
      url="https://facebook.com"
      fgColor="#ffffff"
      bgColor="#8B5E3C"
      className="w-6 h-6"
    />
    <SocialIcon
      url="https://twitter.com"
      fgColor="#ffffff"
      bgColor="#8B5E3C"
      className="w-6 h-6"
    />
    <SocialIcon
      url="https://instagram.com"
      fgColor="#ffffff"
      bgColor="#8B5E3C"
      className="w-6 h-6"
    />
    <SocialIcon
      url="https://youtube.com"
      fgColor="#ffffff"
      bgColor="#8B5E3C"
      className="w-6 h-6"
    />
  </div>
</div>


          {/* Column 4 - Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <p className="text-sm mb-2">123 Coffee Street, City, Country</p>
            <p className="text-sm">Phone: (123) 456-7890</p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t border-white pt-6 text-center">
          <p className="text-sm">&copy; 2024 Coffee House. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
