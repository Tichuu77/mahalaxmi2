export default function FloatingActionButtons() {
  return (
    <>
      {/* Call Button - Left */}
      <div className="fixed bottom-8 left-6 md:left-8 z-40">
        <a
          href="tel:+918766887828"
          target="_blank"
          rel="noopener noreferrer"
          className="relative group"
          aria-label="Call"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full animate-pulse opacity-75"></div>
          <div className="relative  w-10 h-10 md:w-16 md:h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110">
            <svg
              className="w-4 h-4 md:w-8 md:h-8 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              ></path>
            </svg>
          </div>
        </a>
      </div>

      {/* WhatsApp Button - Right */}
      <div className="fixed bottom-8 right-6 md:right-8 z-40">
        <a
          href="https://wa.me/918766887828"
          target="_blank"
          rel="noopener noreferrer"
          className="relative group"
          aria-label="Chat on WhatsApp"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full animate-pulse opacity-75"></div>
          <div className="relative w-10 h-10 md:w-16 md:h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110">
            <svg
              className="w-4 h-4 md:w-8 md:h-8 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M20.52 3.48A11.873 11.873 0 0012 .5C6.201.5 1.5 5.2 1.5 11c0 1.937.513 3.813 1.489 5.474L.5 23.5l6.17-1.62A11.471 11.471 0 0012 22.5c5.799 0 10.5-4.7 10.5-10.5 0-2.82-1.1-5.476-3.98-7.52zM12 20.5c-1.37 0-2.71-.36-3.9-.99l-.28-.15-3.68.97.99-3.57-.18-.29A8.709 8.709 0 013.5 11c0-4.7 3.8-8.5 8.5-8.5 4.7 0 8.5 3.8 8.5 8.5 0 4.7-3.8 8.5-8.5 8.5zM17.03 14.47c-.26-.13-1.54-.76-1.78-.85-.24-.09-.42-.13-.6.13-.18.26-.7.85-.86 1.03-.16.18-.32.2-.59.07-.26-.13-1.1-.41-2.1-1.29-.78-.69-1.3-1.54-1.45-1.8-.15-.26-.02-.4.11-.53.11-.11.26-.3.39-.45.13-.15.17-.26.26-.43.09-.17.04-.32-.02-.45-.07-.13-.6-1.43-.82-1.97-.22-.52-.44-.45-.6-.46l-.51-.01c-.17 0-.45.06-.69.32-.24.26-.92.9-.92 2.2 0 1.3.94 2.55 1.07 2.73.13.18 1.85 2.95 4.48 4.03 3.13 1.29 3.13.86 3.69.8.56-.06 1.78-.72 2.03-1.41.25-.69.25-1.28.18-1.41-.07-.13-.26-.21-.53-.34z"></path>
            </svg>
          </div>
        </a>
      </div>
    </>
  )
}
