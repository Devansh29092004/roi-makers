'use client';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { CountUp } from '../ui/count-up';
import LogoLoop from '../LogoLoop';

export default function BrandsClients() {
  const stats = [
    { value: 1200, suffix: '+', label: 'Total Clients' },
    { value: 98, suffix: '%', label: 'Client Retention' },
    { value: 50, suffix: '+', label: 'Industries Served' },
    { value: 5, suffix: ' Years', label: 'Average Partnership' },
  ];

  // const content = [
  //   {
  //     title: "Fortune 500 Companies",
  //     description:
  //       "We've partnered with leading Fortune 500 companies to transform their digital presence. Our proven track record includes collaborations with industry giants who trust us to deliver exceptional ROI-driven solutions that scale their businesses globally.",
  //     content: (
  //       <div className="h-full w-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white rounded-4xl">
  //         <div className="text-center space-y-4">
  //           <div className="text-6xl font-bold">500+</div>
  //           <div className="text-xl">Fortune Companies</div>
  //           <div className="grid grid-cols-3 gap-4 mt-8">
  //             {[1, 2, 3, 4, 5, 6].map((i) => (
  //               <div key={i} className="w-20 h-20 bg-white/20 rounded-lg flex items-center justify-center">
  //                 <div className="w-8 h-8 bg-white/40 rounded-md"></div>
  //               </div>
  //             ))}
  //           </div>
  //         </div>
  //       </div>
  //     ),
  //   },
  //   {
  //     title: "Technology Startups",
  //     description:
  //       "From seed-stage startups to unicorn companies, we've helped tech innovators build scalable solutions. Our expertise in cutting-edge technologies and agile methodologies ensures that startups can compete with established players and achieve rapid growth.",
  //     content: (
  //       <div className="h-full w-full bg-black flex items-center justify-center text-white rounded-4xl">
  //         <div className="text-center space-y-4">
  //           <div className="text-6xl font-bold text-orange-500">250+</div>
  //           <div className="text-xl">Tech Startups</div>
  //           <div className="mt-8 space-y-3">
  //             {['AI/ML', 'FinTech', 'HealthTech', 'E-commerce'].map((tech) => (
  //               <div key={tech} className="bg-gray-800 px-4 py-2 rounded-lg border border-orange-500/30">
  //                 {tech}
  //               </div>
  //             ))}
  //           </div>
  //         </div>
  //       </div>
  //     ),
  //   },
  //   {
  //     title: "Healthcare & Medical",
  //     description:
  //       "Trusted by healthcare institutions and medical practices worldwide. We understand the critical nature of healthcare technology and deliver HIPAA-compliant solutions that improve patient care while maintaining the highest security standards.",
  //     content: (
  //       <div className="h-full w-full bg-white flex items-center justify-center text-black rounded-4xl">
  //         <div className="text-center space-y-4">
  //           <div className="text-6xl font-bold text-orange-500">150+</div>
  //           <div className="text-xl">Healthcare Clients</div>
  //           <div className="grid grid-cols-2 gap-4 mt-8">
  //             {['Hospitals', 'Clinics', 'Medical Devices', 'Pharma'].map((sector) => (
  //               <div key={sector} className="bg-gray-100 px-3 py-2 rounded-lg text-sm border border-orange-200">
  //                 {sector}
  //               </div>
  //             ))}
  //           </div>
  //         </div>
  //       </div>
  //     ),
  //   },
  //   {
  //     title: "Financial Services",
  //     description:
  //       "Banking, insurance, and financial technology companies rely on our secure and compliant solutions. We've helped financial institutions modernize their operations while meeting strict regulatory requirements and ensuring customer data protection.",
  //     content: (
  //       <div className="h-full w-full bg-gradient-to-br from-gray-900 to-black flex items-center justify-center text-white rounded-4xl">
  //         <div className="text-center space-y-4">
  //           <div className="text-6xl font-bold text-orange-500">200+</div>
  //           <div className="text-xl">Financial Clients</div>
  //           <div className="mt-8 grid grid-cols-2 gap-3">
  //             {['Banks', 'Insurance', 'FinTech', 'Investment'].map((type) => (
  //               <div key={type} className="bg-orange-500/10 border border-orange-500/30 px-3 py-2 rounded-lg text-sm">
  //                 {type}
  //               </div>
  //             ))}
  //           </div>
  //         </div>
  //       </div>
  //     ),
  //   },
  //   {
  //     title: "E-commerce & Retail",
  //     description:
  //       "From small boutiques to major retail chains, we've powered e-commerce success stories. Our solutions drive conversion rates, improve user experience, and integrate seamlessly with existing retail operations to maximize revenue growth.",
  //     content: (
  //       <div className="h-full w-full bg-orange-500 flex items-center justify-center text-white rounded-4xl">
  //         <div className="text-center space-y-4">
  //           <div className="text-6xl font-bold">300+</div>
  //           <div className="text-xl">Retail Brands</div>
  //           <div className="mt-8">
  //             <div className="text-4xl font-bold mb-2">$50M+</div>
  //             <div className="text-sm opacity-90">Revenue Generated</div>
  //           </div>
  //         </div>
  //       </div>
  //     ),
  //   },
  // ];

  return (
    <section className={cn( "relative w-full overflow-hidden",
      "py-12 md:py-16 lg:py-20"
    )}
    style={{ backgroundColor: '#E9E4D7' }}
    >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-12 lg:mb-16"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black mb-4 md:mb-6">
            Brands Our <span className="text-orange-500">Clients</span>
          </h1>
          <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed px-4">
            Trusted by industry leaders across diverse sectors. Our clients range from innovative startups 
            to Fortune 500 companies, all achieving exceptional results with our ROI-driven solutions.
          </p>
        </motion.div>
     
      <div className="max-w-full mx-auto px-4">
        {/* Stats Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="space-y-2"
            >
              <div className="text-5xl md:text-4xl font-bold text-orange-500">
                <CountUp value={stat.value} suffix={stat.suffix} duration={2} />
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
        <LogoLoop
                      logos={[
                        { src: "/images/stack/1.jpg", alt: "Brand 1" },
                        { src: "/images/stack/2.jpg", alt: "Brand 2" },
                        { src: "/images/stack/3.jpg", alt: "Brand 3" },
                        { src: "/images/stack/4.jpg", alt: "Brand 4" },
                        { src: "/images/stack/5.jpg", alt: "Brand 5" },
                        { src: "/images/stack/6.jpg", alt: "Brand 6" },
                      ]}
                      speed={80}
                      direction="left"
                      logoHeight={80}
                      gap={60}
                      pauseOnHover={true}
                      fadeOut={true}
                      scaleOnHover={true}
                      className="w-full"
                    />

        {/* Sticky Scroll Component */}
        {/* <StickyScroll content={content} /> */}
      </div>
    </section>
  );
}