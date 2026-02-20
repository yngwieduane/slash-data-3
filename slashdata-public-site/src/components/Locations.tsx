import { MapPin, Navigation, Phone, Star } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';

export function Locations() {
  const [selectedLocation, setSelectedLocation] = useState<string>('abu-dhabi');

  const locations = [
    {
      id: 'abu-dhabi',
      city: 'Abu Dhabi',
      isHeadquarters: true,
      address: 'ADGM, Al Maryah Island',
      fullAddress: '21st Floor, Al Khatem Tower, ADGM Square, Al Maryah Island',
      description: "Our headquarters in the heart of Abu Dhabi's financial district",
      mapCoordinates: { lat: 24.5005, lng: 54.3917 },
      mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3631.234!2d54.3917!3d24.5005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDMwJzAxLjgiTiA1NMKwMjMnMzAuMSJF!5e0!3m2!1sen!2sae!4v1234567890123!5m2!1sen!2sae&markers=color:red%7C24.5005,54.3917'
    },
    {
      id: 'dubai',
      city: 'Dubai',
      isHeadquarters: false,
      address: 'Emaar Square',
      fullAddress: '702, 7th Floor, Building Number 4',
      description: 'Strategic location in the heart of Dubai',
      mapCoordinates: { lat: 25.1972, lng: 55.2744 },
      mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.234!2d55.2744!3d25.1972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDExJzQ5LjkiTiA1NcKwMTYnMjcuOCJF!5e0!3m2!1sen!2sae!4v1234567890123!5m2!1sen!2sae&markers=color:red%7C25.1972,55.2744'
    },
    {
      id: 'sharjah',
      city: 'Sharjah',
      isHeadquarters: false,
      address: 'Al Durrah Tower - Al Majaz 3',
      fullAddress: 'Al Durrah Tower - Al Majaz 3 - Sharjah',
      description: 'Expanding our presence in Sharjah',
      mapCoordinates: { lat: 25.3289, lng: 55.3888 },
      mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.234!2d55.3888!3d25.3289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5b4e0d0e0e0d%3A0x1234567890abcdef!2sAl%20Durrah%20Tower%20-%20Al%20Majaz%203%20-%20Sharjah!5e0!3m2!1sen!2sae!4v1234567890123!5m2!1sen!2sae'
    }
  ];

  const selectedLocationData = locations.find(loc => loc.id === selectedLocation)!;

  return (
    <div id="locations" className="py-16 md:py-24 bg-[#000000] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00c7c5]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00c7c5]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#00c7c5]/20 to-[#00c7c5]/10 rounded-full mb-6 border border-[#00c7c5]/30">
            <MapPin size={16} className="text-[#00c7c5]" />
            <span className="text-sm text-[#00c7c5] tracking-wide">OUR LOCATIONS</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#ffffff] mb-4">
            Find Us Across <span className="text-[#00c7c5]">UAE</span>
          </h2>
          <p className="text-[#ffffff]/60 max-w-2xl mx-auto">
            Strategically located to serve our partners across the Emirates
          </p>
        </motion.div>

        {/* Location Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
        >
          {locations.map((location) => (
            <button
              key={location.id}
              onClick={() => setSelectedLocation(location.id)}
              className={`group relative px-8 py-3.5 rounded-2xl transition-all duration-300 overflow-hidden ${selectedLocation === location.id
                ? 'bg-[#00c7c5] text-[#000000] shadow-lg shadow-[#00c7c5]/50'
                : 'bg-[#ffffff]/5 text-[#ffffff] hover:bg-[#ffffff]/10 border border-[#ffffff]/10'
                }`}
            >
              <div className="relative z-10 flex items-center gap-2.5">
                {location.isHeadquarters && (
                  <Star
                    size={16}
                    fill={selectedLocation === location.id ? "#000000" : "#00c7c5"}
                    className={selectedLocation === location.id ? "text-[#000000]" : "text-[#00c7c5]"}
                  />
                )}
                <span className="font-medium">{location.city}</span>
              </div>
              {selectedLocation !== location.id && (
                <div className="absolute inset-0 bg-gradient-to-r from-[#00c7c5]/0 via-[#00c7c5]/5 to-[#00c7c5]/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              )}
            </button>
          ))}
        </motion.div>

        {/* Map Container */}
        <motion.div
          className="bg-gradient-to-br from-[#ffffff]/10 to-[#ffffff]/5 rounded-3xl overflow-hidden border border-[#00c7c5]/20 relative shadow-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
        >
          <div className="relative w-full h-[500px] md:h-[600px]">
            <iframe
              src={selectedLocationData.mapEmbed}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>

            {/* Custom Location Pin */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full pointer-events-none z-20">
              <div className="relative animate-bounce-slow">
                {/* Pin Shadow */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-2 bg-[#000000]/30 rounded-full blur-sm"></div>

                {/* Pin Icon */}
                <div className="relative">
                  <svg width="48" height="56" viewBox="0 0 48 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Pin Shape */}
                    <path
                      d="M24 0C13.5066 0 5 8.50659 5 19C5 32.25 24 56 24 56C24 56 43 32.25 43 19C43 8.50659 34.4934 0 24 0Z"
                      fill="#00c7c5"
                    />
                    <path
                      d="M24 0C13.5066 0 5 8.50659 5 19C5 32.25 24 56 24 56C24 56 43 32.25 43 19C43 8.50659 34.4934 0 24 0Z"
                      stroke="#000000"
                      strokeWidth="2"
                    />
                    {/* Inner Circle */}
                    <circle cx="24" cy="19" r="8" fill="#000000" />
                    <circle cx="24" cy="19" r="5" fill="#ffffff" />
                  </svg>

                  {/* Pulse Effect */}
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-6 h-6 bg-[#00c7c5] rounded-full animate-ping opacity-75"></div>
                </div>
              </div>
            </div>

            {/* Location Card Overlay */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="relative w-full h-full flex items-end justify-start p-6 md:p-8">
                {/* Subtle Gradient */}
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#000000]/60 to-transparent"></div>

                {/* Compact Location Card */}
                <div className="relative z-10 pointer-events-auto">
                  <div className="bg-[#ffffff]/10 backdrop-blur-xl rounded-2xl border border-[#ffffff]/20 p-4 md:p-5 shadow-xl min-w-[320px] md:min-w-[400px]">
                    {/* City & Badge */}
                    <div className="flex items-center gap-2 mb-3">
                      <h3 className="text-2xl text-[#ffffff]">
                        {selectedLocationData.city}
                      </h3>
                      {selectedLocationData.isHeadquarters && (
                        <span className="inline-flex items-center gap-1 bg-[#00c7c5]/20 px-2 py-0.5 rounded-md border border-[#00c7c5]/40">
                          <Star size={12} fill="#00c7c5" className="text-[#00c7c5]" />
                          <span className="text-xs text-[#00c7c5]">HQ</span>
                        </span>
                      )}
                    </div>

                    {/* Address */}
                    <div className="mb-4">
                      <p className="text-sm text-[#ffffff]/90 mb-1">
                        {selectedLocationData.address}
                      </p>
                      {selectedLocationData.fullAddress && (
                        <p className="text-xs text-[#ffffff]/50">
                          {selectedLocationData.fullAddress}
                        </p>
                      )}
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-2 pointer-events-auto">
                      <a
                        href={selectedLocationData.id === 'sharjah' ? 'https://maps.app.goo.gl/Lf99nXmtQFb4JR2m8?g_st=aw' : `https://www.google.com/maps/search/?api=1&query=${selectedLocationData.mapCoordinates.lat},${selectedLocationData.mapCoordinates.lng}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#00c7c5] text-[#000000] rounded-lg hover:bg-[#00a09e] transition-colors text-sm"
                      >
                        <Navigation size={14} />
                        <span>Directions</span>
                      </a>
                      <a
                        href="tel:800-73282"
                        className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#ffffff]/10 text-[#ffffff] rounded-lg hover:bg-[#ffffff]/20 transition-colors border border-[#ffffff]/20 text-sm"
                      >
                        <Phone size={14} />
                        <span>Contact</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}