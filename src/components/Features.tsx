import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Sparkles, Puzzle, Shield, Brain, ArrowRight } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    color: 'from-primary-500 to-primary-400',
    bgColor: 'bg-primary-500/10',
    title: 'Personalized Delivery',
    description:
      'Each team member gets AI suggestions matched to their unique communication style. Your tone, your length, your emoji preferences.',
    link: '#how-it-works',
  },
  {
    icon: Puzzle,
    color: 'from-accent-500 to-accent-400',
    bgColor: 'bg-accent-500/10',
    title: 'Smart Integrations',
    description:
      'Connect Gmail, Google Docs, Notion, Freshdesk \u2014 or build custom API integrations in minutes. Data flows to the right person at the right time.',
    link: '#integrations',
  },
  {
    icon: Shield,
    color: 'from-emerald-500 to-emerald-400',
    bgColor: 'bg-emerald-500/10',
    title: 'Enterprise Security',
    description:
      'Zero message storage. AES-256 encryption. Audit logging. Role-based access control. Built for compliance from day one.',
    link: '#faq',
  },
  {
    icon: Brain,
    color: 'from-amber-500 to-amber-400',
    bgColor: 'bg-amber-500/10',
    title: 'Multi-Tier AI',
    description:
      'Fast classification with Haiku. Deep reasoning with Opus. The right AI model for every task \u2014 fast when it needs to be, smart when it matters.',
    link: '#pricing',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function Features() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="features" className="section-padding relative">
      <div className="absolute inset-0 bg-radial-accent pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Section heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm font-semibold uppercase tracking-widest text-primary-400 mb-3"
          >
            Features
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance"
          >
            Built for{' '}
            <span className="gradient-text">Modern Teams</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-surface-400 text-lg"
          >
            Everything you need to supercharge team communication with AI-powered intelligence.
          </motion.p>
        </div>

        {/* Feature cards grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                variants={cardVariants}
                className="glass-card-hover p-8 group"
              >
                {/* Icon */}
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${feature.bgColor} mb-5`}
                >
                  <Icon
                    size={22}
                    className={`bg-gradient-to-br ${feature.color} bg-clip-text`}
                    style={{ color: undefined }}
                  />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-surface-400 leading-relaxed mb-4">
                  {feature.description}
                </p>

                {/* Learn more link */}
                <a
                  href={feature.link}
                  className="inline-flex items-center gap-1.5 text-sm text-primary-400 hover:text-primary-300 transition-colors group/link"
                >
                  Learn more
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover/link:translate-x-0.5"
                  />
                </a>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
