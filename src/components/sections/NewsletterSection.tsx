import { EnvelopeIcon } from "@heroicons/react/24/outline";

const NewsletterSection = () => {
  return (
    <section className="relative py-20 bg-gray-900 text-white">
      {/* Diamond Pattern Background */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/diamond-upholstery.png')]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <EnvelopeIcon className="w-16 h-16 text-rose-500 mx-auto mb-6" />
          <h2 className="text-4xl font-playfair font-bold mb-6">
            Join Our Exclusive Circle
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Be the first to access private sales, collection previews, and
            special offers. Receive a complimentary jewelry care kit with your
            first subscription.
          </p>

          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <div className="relative flex-1">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full pl-12 pr-4 py-3 rounded-full bg-white/10 border border-white/20 focus:outline-none focus:border-rose-500 placeholder-gray-400"
              />
              <svg
                className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <button
              type="submit"
              className="bg-rose-500 hover:bg-rose-600 px-8 py-3 rounded-full transition-colors whitespace-nowrap"
            >
              Join Now
            </button>
          </form>

          <p className="text-sm text-gray-400 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
