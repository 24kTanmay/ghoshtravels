'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const reviews = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Siliguri",
    rating: 5,
    review: "Excellent service! The car was clean and well-maintained. The driver was professional and knew all the best routes. Highly recommend for Darjeeling trips.",
    date: "2 weeks ago"
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    location: "Kolkata",
    rating: 5,
    review: "Used their service for a family trip to Gangtok. The Innova was spacious and comfortable. Great experience from booking to drop-off.",
    date: "1 month ago"
  },
  {
    id: 3,
    name: "Anita Das",
    location: "Siliguri",
    rating: 4,
    review: "Very reliable service. Booked last minute for a business trip and they arranged everything quickly. Will definitely use again.",
    date: "3 weeks ago"
  },
  {
    id: 4,
    name: "Vikram Singh",
    location: "Delhi",
    rating: 5,
    review: "Outstanding service for our honeymoon trip to Darjeeling. The luxury car was perfect and the driver was very courteous. Memorable experience!",
    date: "1 week ago"
  }
]

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          size={16}
          className={`${
            index < rating
              ? 'text-yellow-400 fill-yellow-400'
              : 'text-gray-300'
          }`}
        />
      ))}
    </div>
  )
}

export default function CustomerReviews() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            What Our <span className="bg-gradient-to-r from-purple-500 to-purple-600 bg-clip-text text-transparent">Customers</span> Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real experiences from travelers who trusted us with their journeys
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <StarRating rating={review.rating} />
                <span className="text-sm text-gray-500">{review.date}</span>
              </div>
              
              <p className="text-gray-700 mb-4 leading-relaxed">
                "{review.review}"
              </p>
              
              <div className="border-t border-gray-200 pt-4">
                <h4 className="font-semibold text-gray-900">{review.name}</h4>
                <p className="text-sm text-gray-500">{review.location}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="px-8 py-3 border-2 border-purple-500 text-purple-600 font-semibold rounded-lg hover:bg-purple-50 hover:border-purple-600 transition-all duration-300">
            Read More Reviews
          </button>
        </motion.div>
      </div>
    </section>
  )
}