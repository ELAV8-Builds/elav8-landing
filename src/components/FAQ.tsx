import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Is my data stored?',
    answer:
      'No. ELAV8 processes message content in memory only — nothing is persisted. We never store your conversations, messages, or sensitive data. Only anonymized analytics and user preferences are retained.',
  },
  {
    question: 'How do response suggestions work?',
    answer:
      "When someone sends a message in Slack, ELAV8 analyzes the context and generates 2-3 response options personalized to your communication style. These appear as ephemeral messages — private suggestions only you can see. Click 'Use This' to paste one into your reply.",
  },
  {
    question: 'Can I customize my AI personality?',
    answer:
      'Absolutely. Each user has a StyleProfile that learns your tone, preferred message length, and emoji habits. You can also manually adjust these settings with `/elav8 settings`. The AI adapts to sound like you, not a generic bot.',
  },
  {
    question: 'What integrations are available?',
    answer:
      'Built-in: Slack Search, Gmail, Google Docs, Google Calendar, Notion, and Freshdesk. Plus, any REST API can be connected via our Custom API Builder — just point it at an OpenAPI spec and the AI generates the integration automatically.',
  },
  {
    question: "How is ELAV8 different from Slack's built-in AI?",
    answer:
      "Slack's native AI is pull-based — you ask it questions. ELAV8 is push-based — it proactively delivers personalized suggestions to each team member. Every person gets different suggestions based on their StyleProfile and connected integrations.",
  },
  {
    question: 'Is there a free plan?',
    answer:
      'Yes! The Free plan supports up to 5 users with 100 suggestions per day and Slack Search. No credit card required.',
  },
];

function FAQItem({
  question,
  answer,
  index,
}: {
  question: string;
  answer: string;
  index: number;
}) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.08, duration: 0.4 }}
      className="glass-card-hover"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left"
      >
        <span className="font-semibold text-white text-sm sm:text-base">
          {question}
        </span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25, ease: 'easeInOut' }}
          className="flex-shrink-0"
        >
          <ChevronDown className="w-5 h-5 text-surface-400" />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-sm text-surface-400 leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="section-padding">
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
            <span className="gradient-text">Frequently Asked Questions</span>
          </h2>
        </motion.div>

        {/* FAQ items */}
        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
