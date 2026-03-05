import { motion } from 'framer-motion';

const integrations = [
  {
    icon: '🟣',
    name: 'Slack',
    description: 'Built-in search, always available',
  },
  {
    icon: '📧',
    name: 'Gmail',
    description: 'Email search, thread context',
  },
  {
    icon: '📄',
    name: 'Google Docs',
    description: 'Document search, content reference',
  },
  {
    icon: '📅',
    name: 'Google Calendar',
    description: 'Meeting context, scheduling',
  },
  {
    icon: '📝',
    name: 'Notion',
    description: 'Task management, wiki search',
  },
  {
    icon: '🎫',
    name: 'Freshdesk',
    description: 'Ticket search, customer context',
  },
];

const apiBadges = ['OpenAPI', 'REST', 'GraphQL', 'Webhooks'];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: 'easeOut' },
  }),
};

export default function Integrations() {
  return (
    <section id="integrations" className="section-padding bg-radial-accent">
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
            <span className="gradient-text">Connect Everything</span>
          </h2>
          <p className="text-surface-400 text-lg max-w-2xl mx-auto">
            Plug into the tools your team already uses — or build your own
          </p>
        </motion.div>

        {/* Integration cards */}
        <div className="flex gap-4 overflow-x-auto pb-4 lg:grid lg:grid-cols-6 lg:overflow-visible lg:pb-0 mb-16 scrollbar-thin">
          {integrations.map((item, i) => (
            <motion.div
              key={item.name}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="glass-card-hover min-w-[160px] flex-shrink-0 lg:min-w-0 p-5 flex flex-col items-center text-center"
            >
              <span className="text-3xl mb-3">{item.icon}</span>
              <h3 className="font-semibold text-white mb-1 text-sm">{item.name}</h3>
              <p className="text-surface-400 text-xs leading-relaxed mb-3">
                {item.description}
              </p>
              <span className="inline-flex items-center gap-1 text-[10px] font-medium text-primary-400 bg-primary-500/10 border border-primary-500/20 rounded-full px-2.5 py-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-400" />
                Connected
              </span>
            </motion.div>
          ))}
        </div>

        {/* Custom API Builder highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl p-[1px] bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500"
        >
          <div className="glass-card rounded-2xl p-8 sm:p-10 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  Build Custom Integrations in Minutes
                </h3>
                <p className="text-surface-300 leading-relaxed mb-6">
                  Expose any REST API endpoint. Our AI reads the OpenAPI spec and
                  automatically generates a searchable integration. No code required.
                </p>
                <div className="flex flex-wrap gap-2">
                  {apiBadges.map((badge) => (
                    <span
                      key={badge}
                      className="text-xs font-medium text-accent-300 bg-accent-500/10 border border-accent-500/20 rounded-full px-3 py-1"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>

              {/* Code mockup */}
              <div className="bg-surface-950/80 border border-white/[0.08] rounded-xl p-5 font-mono text-sm">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-3 h-3 rounded-full bg-red-500/70" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <span className="w-3 h-3 rounded-full bg-green-500/70" />
                  <span className="ml-2 text-xs text-surface-500">Terminal</span>
                </div>
                <div className="space-y-2">
                  <p className="text-surface-400">
                    <span className="text-primary-400">$</span>{' '}
                    <span className="text-white">/elav8 connect custom my-api</span>{' '}
                    <span className="text-accent-400">https://api.example.com</span>
                  </p>
                  <p className="text-surface-500">
                    ✓ OpenAPI spec detected (v3.1)
                  </p>
                  <p className="text-surface-500">
                    ✓ 14 endpoints indexed
                  </p>
                  <p className="text-green-400">
                    ✓ Integration "my-api" is now searchable
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
