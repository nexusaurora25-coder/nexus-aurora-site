import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useSEO } from '../utils/seo';

const NotFound = () => {
  useSEO({
    title: 'Page not found',
    description: 'The page you were looking for does not exist on the Nexus Aurora website.',
    noindex: true,
  });

  return (
    <section className="pt-32 pb-24 bg-paper">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <p className="font-mono text-sm tracking-wider text-primary-600">404</p>
        <h1 className="text-3xl md:text-4xl font-bold text-ink">This page doesn't exist</h1>
        <p className="text-gray-600 leading-relaxed">
          The link may be old or mistyped. Try our services or get in touch with the team in Kota Kinabalu.
        </p>
        <div className="flex flex-wrap justify-center gap-4 pt-2">
          <Link
            to="/services"
            className="group inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-primary-700 transition-colors"
          >
            View services
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 border border-primary-200 text-primary-700 px-6 py-3 rounded-full font-semibold hover:bg-primary-50 transition-colors"
          >
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
