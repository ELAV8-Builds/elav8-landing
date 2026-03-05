import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

interface Tier {
  name: string;
  price: string;
  period: string;
  features: string[];
  cta: string;
  ctaStyle: string;
  popular?: boolean;
}

const tiers: Tier[] = [
  {
    name: 'Free',
    price: '$0',
    period: '/mo',
    features: [
      'Up to 5 users',
      '100 suggestions/day',
      'Slack Search integration',
      'Basic StyleProfile',
      'Community support',
    ],
    cta: 'Get Started Free',
    ctaStyle: 'btn-secondary',
  },
  {
    name: 'Pro',
    price: '$8',
    period: '/user/mo',
    features: [
      'Unlimited users',
      'Unlimited suggestions',
      'All integrations (Gmail, Docs, Calendar, Notion, Freshdesk)',
      'Custom API builder',
      'Advanced StyleProfile',
      'Priority support',
      'Analytics dashboard',
    ],
    cta: 'Start Pro Trial',
    ctaStyle: 'btn-primary',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: ' pricing',
    features: [
      'Everything in Pro',
      'SSO / SAML',
      'Dedicated support engineer',
      'Custom AI model selection',
      'SLA guarantees',
      'Compliance & audit features',
      'On-premises option',
    ],
    cta: 'Contact Sales',
    ctaStyle: 'btn-secondary',
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: 'easeOut' },
  }),
};

export default function Pricing() {
  return (
    <section id="pricing" className="section-padding">
      <div className="section-container">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance">
            <span className="gradient-text">Simple, Transparent Pricing</span>
          </h2>
          <p className="text-surface-400 text-lg max-w-2xl mx-auto">
            Start free, scale as you grow
          </p>
        </motion.div>

        {/* Tier cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-start">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              custom={i}
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className={`relative glass-card p-8 flex flex-col ${
                tier.popular
                  ? 'md:scale-105 border-primary-500/40 shadow-lg shadow-primary-500/10'
                  : ''
              }`}
            >
              {/* Gradient top border for popular */}
              {tier.popular && (
                <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500 rounded-t-2xl" />
              )}

              {/* Popular badge */}
              {tier.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-semibold bg-gradient-to-r from-primary-500 to-accent-500 text-white px-4 py-1 rounded-full">
                  Most Popular
                </span>
              )}

              {/* Tier name & price */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-surface-300 mb-2">
                  {tier.name}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-white">{tier.price}</span>
                  <span className="text-surface-400 text-sm">{tier.period}</span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-1">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-surface-300">
                    <Check className="w-4 h-4 text-primary-400 mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a href="#" className={`${tier.ctaStyle} w-full text-center text-sm`}>
                {tier.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
