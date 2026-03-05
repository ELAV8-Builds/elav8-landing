import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MessageSquare, Cpu, Zap } from 'lucide-react';

const steps = [
  {
    number: 1,
    icon: MessageSquare,
    title: 'Message Sent',
    description:
      'A team member sends a message in any Slack channel or thread.',
  },
  {
    number: 2,
    icon: Cpu,
    title: 'AI Analyzes',
    description:
      'ELAV8 analyzes context, checks connected integrations, and generates personalized suggestions for each team member.',
  },
  {
    number: 3,
    icon: Zap,
    title: 'Suggestions Delivered',
    description:
      'Each team member receives private, ephemeral response options tailored to their communication style.',
  },
];

const stepVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
  }),
};

export default function HowItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="how-it-works" className="section-padding relative">
      <div className="section-container relative z-10">
        {/* Section heading */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm font-semibold uppercase tracking-widest text-primary-400 mb-3"
          >
            How It Works
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance"
          >
            How <span className="gradient-text">ELAV8</span> Works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-surface-400 text-lg"
          >
            Three steps to smarter team communication
          </motion.p>
        </div>

        {/* Steps */}
        <div ref={ref} className="relative">
          {/* Connecting line (desktop only) */}
          <div className="hidden lg:block absolute top-16 left-[16.66%] right-[16.66%] h-px">
            <div className="w-full h-full bg-gradient-to-r from-primary-500/40 via-accent-500/40 to-primary-500/40" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  custom={idx}
                  variants={stepVariants}
                  initial="hidden"
                  animate={inView ? 'visible' : 'hidden'}
                  className="flex flex-col items-center text-center"
                >
                  {/* Number badge */}
                  <div className="relative mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-xl font-bold text-white shadow-lg shadow-primary-500/20">
                      {step.number}
                    </div>
                    {/* Icon floating beside badge */}
                    <div className="absolute -right-3 -bottom-2 w-8 h-8 rounded-lg bg-surface-900 border border-white/[0.1] flex items-center justify-center">
                      <Icon size={14} className="text-primary-400" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-surface-400 leading-relaxed max-w-xs">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mock Slack message UI */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-20 max-w-2xl mx-auto"
        >
          <div className="glass-card overflow-hidden">
            {/* Slack header bar */}
            <div className="px-5 py-3 border-b border-white/[0.06] flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/70" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <span className="w-3 h-3 rounded-full bg-green-500/70" />
              <span className="ml-3 text-sm text-surface-500"># product-team</span>
            </div>

            <div className="p-5 space-y-4">
              {/* Incoming message */}
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center text-xs font-bold text-white flex-shrink-0">
                  SK
                </div>
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-sm font-semibold text-white">Sarah K.</span>
                    <span className="text-xs text-surface-600">10:32 AM</span>
                  </div>
                  <p className="text-sm text-surface-300 mt-0.5">
                    Can someone review the updated onboarding flow? I pushed the changes to staging.
                  </p>
                </div>
              </div>

              {/* Ephemeral suggestion block */}
              <div className="ml-12 rounded-xl border border-primary-500/20 bg-primary-500/[0.04] p-4">
                <div className="flex items-center gap-2 mb-2.5">
                  <Zap size={14} className="text-primary-400" />
                  <span className="text-xs font-medium text-primary-400">
                    ELAV8 &mdash; Only visible to you
                  </span>
                </div>
                <div className="space-y-2">
                  <button className="w-full text-left text-sm text-surface-300 hover:text-white bg-white/[0.03] hover:bg-white/[0.06] rounded-lg px-3 py-2 transition-colors border border-white/[0.04]">
                    "I'll take a look this afternoon! Want me to focus on anything specific?"
                  </button>
                  <button className="w-full text-left text-sm text-surface-300 hover:text-white bg-white/[0.03] hover:bg-white/[0.06] rounded-lg px-3 py-2 transition-colors border border-white/[0.04]">
                    "Nice! I can review it now. Let me check the flow and leave notes."
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
