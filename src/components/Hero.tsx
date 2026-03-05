import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MessageSquare, ArrowRight } from 'lucide-react';

const highlights = [
  { text: '6+', label: 'Integrations' },
  { text: 'Push', label: 'Based Delivery' },
  { text: 'Zero', label: 'Data Stored' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' },
  }),
};

export default function Hero() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="hero" className="relative section-padding pt-32 sm:pt-40 lg:pt-48 overflow-hidden">
      {/* Animated gradient orb */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] lg:w-[800px] lg:h-[800px] pointer-events-none">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-500/30 via-accent-500/20 to-primary-600/10 blur-[120px] animate-float" />
      </div>

      <div ref={ref} className="section-container relative z-10 text-center">
        {/* Headline */}
        <motion.h1
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-balance max-w-4xl mx-auto leading-[1.1]"
        >
          Your Team's{' '}
          <span className="gradient-text">AI-Powered</span>{' '}
          Response Engine
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="mt-6 text-lg sm:text-xl text-surface-400 max-w-2xl mx-auto text-balance leading-relaxed"
        >
          ELAV8 delivers personalized response suggestions to every team member
          in Slack &mdash; powered by AI, tailored to each person's style.
        </motion.p>

        {/* CTAs */}
        <motion.div
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#pricing" className="btn-primary text-base">
            <MessageSquare size={18} />
            Add to Slack
          </a>
          <a href="#how-it-works" className="btn-secondary text-base">
            See How It Works
            <ArrowRight size={16} />
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="mt-16 flex items-center justify-center gap-8 sm:gap-16"
        >
          {highlights.map((item) => (
            <div key={item.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white">
                {item.text}
              </div>
              <div className="mt-1 text-sm text-surface-500">{item.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
