import React, { useEffect, useRef } from 'react';
import {
  GlobeIllustration,
  CodeIllustration,
  DatabaseIllustration,
  CloudIllustration,
  PhoneIllustration,
  ShieldIllustration,
  AnimatedDot,
} from './AnimatedIllustrations';

const Technologies = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.scroll-animate');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const techCategories = [
    {
      illustration: GlobeIllustration,
      title: 'Frontend',
      technologies: ['React', 'Vue.js', 'Angular', 'TypeScript', 'JavaScript', 'HTML5/CSS3']
    },
    {
      illustration: CodeIllustration,
      title: 'Backend',
      technologies: ['Node.js', 'Python', 'Java', 'PHP', '.NET', 'Go']
    },
    {
      illustration: DatabaseIllustration,
      title: 'Database',
      technologies: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Firebase', 'Supabase']
    },
    {
      illustration: CloudIllustration,
      title: 'Cloud & DevOps',
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Jenkins']
    },
    {
      illustration: PhoneIllustration,
      title: 'Mobile',
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Xamarin', 'Ionic']
    },
    {
      illustration: ShieldIllustration,
      title: 'Security',
      technologies: ['OAuth', 'JWT', 'SSL/TLS', 'Encryption', 'Penetration Testing', 'GDPR Compliance']
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16 scroll-animate opacity-0 translate-y-8 transition-all duration-700">
          <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-800 px-4 py-2 rounded-full text-sm font-semibold">
            <AnimatedDot className="h-4 w-4" />
            <span>Technologies We Use</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-ink">
            Cutting-Edge Tech Stack
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We leverage the latest technologies and frameworks to build robust, scalable, and future-proof solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((category, index) => {
            const Illustration = category.illustration;
            return (
              <div
                key={index}
                className="group bg-gradient-to-br from-slate-50 to-primary-50 border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:border-primary-200 scroll-animate opacity-0 translate-y-8"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="space-y-6">
                  <div className="h-16 w-16 bg-gradient-to-br from-primary-500 to-primary-800 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Illustration className="h-8 w-8 text-white" />
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-ink">
                      {category.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {category.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm text-gray-700 hover:border-primary-300 hover:text-primary-700 transition-colors cursor-default"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Technologies;
