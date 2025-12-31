'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'

const reviews = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Traveled to Darjeeling",
    rating: 5,
    review: "Excellent service! The car was clean and well-maintained. The driver was professional and knew all the best routes. Highly recommend for Darjeeling trips.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya"
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    location: "Traveled to Gangtok",
    rating: 5,
    review: "Used their service for a family trip to Gangtok. The Innova was spacious and comfortable. Great experience from booking to drop-off.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rajesh"
  },
  {
    id: 3,
    name: "Anita Das",
    location: "Traveled to Kalimpong",
    rating: 4,
    review: "Very reliable service. Booked last minute for a business trip and they arranged everything quickly. Will definitely use again.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Anita"
  },
  {
    id: 4,
    name: "Vikram Singh",
    location: "Traveled to Dooars",
    rating: 5,
    review: "Outstanding service for our honeymoon trip to Darjeeling. The luxury car was perfect and the driver was very courteous. Memorable experience!",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Vikram"
  }
]

export default function CustomerReviews() {
  const [swiper, setSwiper] = useState<SwiperType | null>(null)

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F5F5F0] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-newsreader font-bold mb-4 text-gray-900 leading-tight">
            What Our <span className="text-brand-forest italic">Travelers</span> Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real stories from travelers who explored the Himalayas with us
          </p>
        </motion.div>

        <div className="testimonial-swiper-container relative">
          <Swiper
            modules={[Navigation, Pagination, EffectCoverflow]}
            onSwiper={setSwiper}
            centeredSlides={true}
            slidesPerView={'auto'}
            spaceBetween={2}
            loop={true}
            className="!overflow-visible"
          >
            {reviews.map((review) => (
              <SwiperSlide key={review.id} className="!w-full max-w-[650px]">
                {({ isActive }) => (
                  <div 
                    className={`
                      bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100 
                      transition-all duration-500 transform h-[240px]
                      flex flex-col md:flex-row gap-6 md:gap-8 items-start relative overflow-hidden
                      ${isActive ? 'opacity-100 scale-100 shadow-xl' : 'opacity-40 scale-90 pointer-events-none'}
                      hover:shadow-2xl
                    `}
                  >
                    {/* Left Column: Custom Stylized Opening Quote Mark (66) */}
                    <div className="hidden md:block flex-shrink-0 mt-1">
                      <svg width="36" height="28" viewBox="0 0 45 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#E5E7EB] fill-current">
                        <path d="M0 21C0 10.5 9.5625 1.6875 19.125 0V5.34375C14.625 6.9375 10.6875 10.875 10.6875 16.875H19.125V36H0V21Z" />
                        <path d="M25.875 21C25.875 10.5 35.4375 1.6875 45 0V5.34375C40.5 6.9375 36.5625 10.875 36.5625 16.875H45V36H25.875V21Z" />
                      </svg>
                    </div>

                    {/* Right Column: Content */}
                    <div className="flex-1 text-left flex flex-col h-full overflow-hidden">
                      <div className="flex gap-1 mb-3">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} size={14} className="text-brand-accent fill-brand-accent" />
                        ))}
                      </div>

                      <p className="text-base md:text-lg text-gray-800 font-normal leading-snug mb-4 line-clamp-3">
                        "{review.review}"
                      </p>

                      <div className="flex items-center gap-3 mt-auto">
                        <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-brand-cream shadow-sm">
                          <img 
                            src={review.avatar} 
                            alt={review.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-gray-900 leading-none mb-1">
                            {review.name}
                          </h4>
                          <p className="text-[10px] text-gray-500 font-medium tracking-wide">
                            {review.location}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Arrows */}
          <div className="flex justify-center gap-6 mt-12">
            <button
              onClick={() => swiper?.slidePrev()}
              className="w-12 h-12 rounded-full bg-[#E5E7EB] flex items-center justify-center text-gray-900 hover:bg-gray-300 transition-all duration-300"
              aria-label="Previous review"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => swiper?.slideNext()}
              className="w-12 h-12 rounded-full bg-[#E5E7EB] flex items-center justify-center text-gray-900 hover:bg-gray-300 transition-all duration-300"
              aria-label="Next review"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}