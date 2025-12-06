'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Footer from '@/components/global/Footer';
import { CountUp } from '@/components/ui/count-up';

const stats = [
	{ label: 'Campaigns Shipped', value: 480 },
	{ label: 'Avg. ROAS Lift', value: 3.4, suffix: 'x' },
	{ label: 'In-House Specialists', value: 42 },
	{ label: 'Global Markets', value: 17 },
];

const milestones = [
	{
		year: '2019',
		title: 'Performance-first roots',
		desc: 'ROI Makers launched as a boutique collective laser-focused on profitable growth for funded startups.',
	},
	{
		year: '2021',
		title: 'Creative × Media Lab',
		desc: 'Expanded into a full creative lab pairing motion design, CRO, and media science to ship faster experiments.',
	},
	{
		year: '2023',
		title: 'Global launch partners',
		desc: 'Brought in localized talent across EMEA & APAC to orchestrate 24/7 launches and multi-market learnings.',
	},
	{
		year: 'Now',
		title: 'Embedded growth teams',
		desc: 'Operate as the always-on growth engine for consumer, fintech, and SaaS brands scaling past Series B.',
	},
];

const leaders = [
	{
		name: 'Aarav Khanna',
		title: 'Founder & Growth Lead',
		image: '/team/1.webp',
		bio: 'Former growth PM at Series-C startups. Obsessed with unit economics and creative velocity.',
	},
	{
		name: 'Maya Bose',
		title: 'Head of Creative Systems',
		image: '/team/2.webp',
		bio: 'Award-winning director who transitioned from film to performance storytelling.',
	},
	{
		name: 'Raghav Desai',
		title: 'Strategy Director',
		image: '/team/3.webp',
		bio: 'Ex-consultant specializing in go-to-market blueprints for multi-region launches.',
	},
];

const stackShots = ['/images/stack/1.webp', '/images/stack/4.webp'];

const values = [
	{
		title: 'Relentless Curiosity',
		description: 'We question assumptions, test hypotheses, and let data reshape our thinking.',
		icon: '🔬',
	},
	{
		title: 'Craft Meets Speed',
		description: 'Beautiful work that ships fast. No compromises between quality and velocity.',
		icon: '⚡',
	},
	{
		title: 'Transparent Partnership',
		description: 'Open books, honest feedback, and shared accountability. We grow together.',
		icon: '🤝',
	},
	{
		title: 'Compound Learning',
		description: 'Every campaign feeds our collective knowledge base. Insights scale infinitely.',
		icon: '📈',
	},
];

export default function About() {
	return (
		<main className="min-h-screen w-full boska-font" style={{ backgroundColor: '#E9E4D7' }}>
			{/* Hero Section */}
			<section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="text-center mb-16"
				>
					<p className="uppercase tracking-[0.5em] text-xs font-semibold text-[#8c7b62] clash-display-font">About ROI Makers</p>
					<h1 className="mt-6 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[#060010]">
						We Build Growth<br />Engines
					</h1>
					<p className="mt-8 text-lg sm:text-xl md:text-2xl text-[#312619]/80 max-w-3xl mx-auto archivo-font leading-relaxed">
						A band of strategists, analysts, filmmakers, and creative technologists who design systems that compound
						revenue, not just impressions.
					</p>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.2 }}
					className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] items-start"
				>
					<div className="space-y-8">
						<div className="bg-white/70 rounded-[32px] border border-[#060010]/10 p-8 md:p-10 shadow-[0_25px_80px_-50px_rgba(6,0,16,0.3)]">
							<h2 className="text-3xl md:text-4xl font-bold text-[#060010] mb-6">
								Building soulful brands with relentless performance discipline.
							</h2>
							<p className="text-base md:text-lg text-[#312619]/80 archivo-font leading-relaxed">
								We craft ads, landing experiences, films, data dashboards—every artifact serves one purpose: accelerate
								measurable growth. Our multidisciplinary pods pair strategists with creatives, media scientists with
								analysts, all united by a ruthless focus on outcomes.
							</p>
						</div>
						<div className="grid gap-6 sm:grid-cols-2">
							<div className="rounded-[28px] border border-[#060010]/10 bg-white/70 p-6 shadow-[0_20px_60px_-40px_rgba(6,0,16,0.25)]">
								<p className="text-xs uppercase tracking-[0.35em] text-[#8c7b62] clash-display-font">Headquarters</p>
								<p className="mt-3 text-2xl font-bold text-[#060010]">Indore · MP</p>
								<p className="text-sm text-[#312619]/70 archivo-font mt-1">218-B Trade Center, South Tukoganj</p>
							</div>
							<div className="rounded-[28px] border border-[#060010]/10 bg-[#060010] text-[#E9E4D7] p-6">
								<p className="text-xs uppercase tracking-[0.35em] text-[#ff9933] clash-display-font">Focus</p>
								<p className="mt-3 text-2xl font-bold">Full-funnel pods</p>
								<p className="text-sm text-[#E9E4D7]/80 archivo-font mt-1">Strategy · Creative · Media · CRO</p>
							</div>
						</div>
					</div>
					<div className="grid gap-6">
						{stackShots.map((src, idx) => (
							<motion.div
								key={src}
								initial={{ opacity: 0, x: 20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.6, delay: 0.3 + idx * 0.1 }}
								className={`relative aspect-[4/3] rounded-[32px] overflow-hidden border border-[#060010]/10 bg-white shadow-[0_25px_80px_-50px_rgba(6,0,16,0.3)] ${
									idx === 1 ? 'translate-x-6 sm:translate-x-10' : ''
								}`}
							>
								<Image src={src} alt="Studio documentation" fill priority={idx === 0} className="object-cover" />
								<div className="absolute inset-0 bg-gradient-to-t from-[#060010]/60 via-transparent to-transparent" />
							</motion.div>
						))}
					</div>
				</motion.div>
			</section>

			{/* Stats Section */}
			<section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
				<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
					{stats.map((stat, idx) => (
						<motion.div
							key={stat.label}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: idx * 0.1 }}
							viewport={{ once: true }}
							className="rounded-[28px] border border-[#060010]/10 bg-white/80 p-8 text-center shadow-[0_20px_60px_-40px_rgba(6,0,16,0.25)]"
						>
						<p className="text-5xl font-black text-[#060010]">
							<CountUp value={stat.value} duration={2} />
							{stat.suffix || '+'}
						</p>
							<p className="mt-3 text-xs uppercase tracking-[0.3em] text-[#8c7b62] clash-display-font">{stat.label}</p>
						</motion.div>
					))}
				</div>
			</section>

			{/* Values Section */}
			<section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="text-center mb-12"
				>
					<p className="uppercase tracking-[0.5em] text-xs font-semibold text-[#8c7b62] clash-display-font">Our Values</p>
					<h2 className="mt-4 text-4xl md:text-5xl font-bold text-[#060010]">What Drives Us</h2>
				</motion.div>
				<div className="grid gap-6 md:grid-cols-2">
					{values.map((value, idx) => (
						<motion.div
							key={value.title}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: idx * 0.1 }}
							viewport={{ once: true }}
							className="rounded-[28px] border border-[#060010]/10 bg-white/70 p-8 shadow-[0_20px_60px_-40px_rgba(6,0,16,0.25)] hover:shadow-[0_30px_90px_-40px_rgba(6,0,16,0.4)] transition-shadow duration-300"
						>
							<div className="text-4xl mb-4">{value.icon}</div>
							<h3 className="text-2xl font-bold text-[#060010] mb-3">{value.title}</h3>
							<p className="text-base text-[#312619]/80 archivo-font leading-relaxed">{value.description}</p>
						</motion.div>
					))}
				</div>
			</section>

			{/* Timeline Section */}
			<section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid gap-10 lg:grid-cols-[0.85fr_1fr] items-start">
				<motion.div
					initial={{ opacity: 0, x: -30 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
				>
					<p className="uppercase tracking-[0.5em] text-xs font-semibold text-[#8c7b62] clash-display-font">How we work</p>
					<h2 className="mt-4 text-3xl sm:text-4xl font-bold text-[#060010]">
						Operating systems built for compounding learning.
					</h2>
					<p className="mt-6 text-[#312619]/80 archivo-font leading-relaxed">
						We embed with founders, marketing leaders, and product teams to architect a single source of truth for
						performance. Every sprint unites creative experimentation, channel science, and revenue analytics.
					</p>
					<ul className="mt-8 space-y-3 text-sm uppercase tracking-[0.25em] text-[#8c7b62] clash-display-font">
						<li className="flex items-center gap-3">
							<span className="w-1.5 h-1.5 bg-[#8c7b62] rounded-full" />
							Audience intelligence mapping
						</li>
						<li className="flex items-center gap-3">
							<span className="w-1.5 h-1.5 bg-[#8c7b62] rounded-full" />
							Creative engineering & storyboarding
						</li>
						<li className="flex items-center gap-3">
							<span className="w-1.5 h-1.5 bg-[#8c7b62] rounded-full" />
							Media simulations and routing
						</li>
						<li className="flex items-center gap-3">
							<span className="w-1.5 h-1.5 bg-[#8c7b62] rounded-full" />
							CRO & lifecycle playbooks
						</li>
					</ul>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, x: 30 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="rounded-[32px] border border-[#060010]/10 bg-white/80 p-8 shadow-[0_25px_80px_-50px_rgba(6,0,16,0.3)]"
				>
					<div className="space-y-8">
						{milestones.map((item, idx) => (
							<motion.div
								key={item.year}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: idx * 0.1 }}
								viewport={{ once: true }}
								className="flex gap-6"
							>
								<div className="text-[#8c7b62] font-black text-2xl min-w-[4rem] clash-display-font">{item.year}</div>
								<div>
									<p className="text-xl font-bold text-[#060010]">{item.title}</p>
									<p className="text-sm text-[#312619]/80 archivo-font mt-2 leading-relaxed">{item.desc}</p>
								</div>
							</motion.div>
						))}
					</div>
				</motion.div>
			</section>

			{/* Leadership Section */}
			<section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between mb-12"
				>
					<div>
						<p className="uppercase tracking-[0.5em] text-xs font-semibold text-[#8c7b62] clash-display-font">Leadership</p>
						<h2 className="mt-3 text-4xl sm:text-5xl font-bold text-[#060010]">
							Humans behind the<br />growth machine.
						</h2>
					</div>
					<p className="text-sm text-[#312619]/80 archivo-font max-w-xl leading-relaxed">
						Multidisciplinary pods pair strategists, creatives, media scientists, analysts, and engineers. Leadership
						keeps every pod ruthless about outcomes while protecting the craft.
					</p>
				</motion.div>
				<div className="grid gap-8 md:grid-cols-3">
					{leaders.map((leader, idx) => (
						<motion.div
							key={leader.name}
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: idx * 0.1 }}
							viewport={{ once: true }}
							className="group rounded-[32px] border border-[#060010]/10 bg-white overflow-hidden shadow-[0_25px_80px_-50px_rgba(6,0,16,0.3)] hover:shadow-[0_30px_90px_-40px_rgba(6,0,16,0.5)] transition-all duration-300"
						>
							<div className="relative h-80 overflow-hidden">
								<Image
									src={leader.image}
									alt={leader.name}
									fill
									className="object-cover transition-transform duration-700 group-hover:scale-110"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-[#060010]/80 via-[#060010]/20 to-transparent" />
							</div>
							<div className="p-6">
								<p className="text-xl font-bold text-[#060010]">{leader.name}</p>
								<p className="text-xs uppercase tracking-[0.3em] text-[#8c7b62] clash-display-font mt-1">
									{leader.title}
								</p>
								<p className="text-sm text-[#312619]/80 archivo-font mt-4 leading-relaxed">{leader.bio}</p>
							</div>
						</motion.div>
					))}
				</div>
			</section>

			{/* CTA Section */}
			<section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="bg-[#060010] text-[#E9E4D7] rounded-[40px] p-12 md:p-16 text-center shadow-2xl"
				>
					<h2 className="text-3xl md:text-5xl font-bold mb-6">Join Our Mission</h2>
					<p className="text-lg md:text-xl mb-8 text-[#E9E4D7]/80 archivo-font max-w-2xl mx-auto">
						We're always looking for talented individuals who share our passion for growth and creativity.
					</p>
					<div className="flex flex-wrap justify-center gap-4">
						<a
							href="/careers"
							className="inline-flex items-center gap-3 px-8 py-4 bg-[#E9E4D7] text-[#060010] rounded-full font-semibold text-sm uppercase tracking-wider clash-display-font hover:bg-white transition-all duration-300 hover:scale-105 shadow-lg"
						>
							View Careers <span aria-hidden>→</span>
						</a>
						<a
							href="/contact"
							className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-[#E9E4D7] text-[#E9E4D7] rounded-full font-semibold text-sm uppercase tracking-wider clash-display-font hover:bg-[#E9E4D7] hover:text-[#060010] transition-all duration-300 hover:scale-105"
						>
							Get in Touch
						</a>
					</div>
				</motion.div>
			</section>

			<Footer />
		</main>
	);
}