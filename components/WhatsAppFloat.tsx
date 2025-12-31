'use client'

export default function WhatsAppFloat() {
  const phoneNumber = '919733111234' // Synchronized with Official Contact
  const message = 'Hi! I would like to inquire about your tour packages and car rental services.'

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      className="fixed bottom-5 right-5 w-[60px] h-[60px] bg-[#25d366] hover:bg-[#20b358] rounded-full text-center shadow-[2px_2px_5px_rgba(0,0,0,0.3)] z-[999] transition-all duration-300 flex items-center justify-center"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        className="w-[35px] h-[35px]"
      />
    </a>
  )
}
