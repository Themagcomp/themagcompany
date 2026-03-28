const milestones = [
  {
    date: "April 2026",
    title: "Kickstarter Campaign",
    desc: "Launch day — back the Maglight M1 and join the journey.",
    color: "text-red-400",
  },
  {
    date: "May 2026",
    title: "Order Parts & Begin Production",
    desc: "Components are sourced and manufacturing begins.",
    color: "text-yellow-400",
  },
  {
    date: "June 2026",
    title: "Finalize Commercial Design",
    desc: "Final production design locked in based on backer feedback.",
    color: "text-green-400",
  },
  {
    date: "July 2026",
    title: "Finish Production",
    desc: "Assembly complete and quality tested.",
    color: "text-blue-400",
  },
  {
    date: "August 2026",
    title: "Shipment Begins",
    desc: "Maglight M1 units ship to backers worldwide.",
    color: "text-purple-400",
  },
];

const goals = [
  {
    amount: "$5,000",
    title: "Silicone Upgrade",
    desc: "TPU parts upgraded to injection molded silicone for a premium feel and better weather resistance.",
  },
  {
    amount: "$25,000",
    title: "Case Upgrade",
    desc: "All resin printed parts upgraded to injection molded parts for consistent quality and strength.",
  },
  {
    amount: "$50,000",
    title: "Color Options",
    desc: "Four new colors: Red, Blue, Purple, and White — express yourself with your Maglight.",
  },
];

export default function Roadmap() {
  return (
    <section id="roadmap" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-accent text-sm font-medium tracking-widest uppercase mb-4">
            <span className="w-8 h-px bg-accent" />
            Roadmap
            <span className="w-8 h-px bg-accent" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            The <span className="gradient-text">journey</span> ahead
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto mb-24">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-card-border md:-translate-x-px" />

          {milestones.map((milestone, i) => (
            <div
              key={milestone.date}
              className={`relative flex items-start gap-8 mb-12 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-accent -translate-x-1.5 mt-2 z-10" />

              {/* Content */}
              <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                <div className={`text-sm font-semibold ${milestone.color} mb-1`}>
                  {milestone.date}
                </div>
                <div className="text-lg font-bold text-foreground">{milestone.title}</div>
                <p className="text-zinc-400 mt-1">{milestone.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stretch goals */}
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold">Stretch Goals</h3>
          <p className="text-zinc-400 mt-2">Unlock upgrades as we reach funding milestones</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {goals.map((goal) => (
            <div key={goal.amount} className="feature-card rounded-2xl bg-card-bg p-8 text-center flex flex-col gap-3">
              <div className="text-3xl font-bold text-accent">{goal.amount}</div>
              <div className="text-lg font-semibold">{goal.title}</div>
              <p className="text-sm text-zinc-400">{goal.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
