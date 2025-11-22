import Image from 'next/image';

const stats = [
	{ label: 'Campaigns Shipped', value: '480+' },
	{ label: 'Avg. ROAS Lift', value: '3.4x' },
	{ label: 'In-House Specialists', value: '42' },
	{ label: 'Global Markets', value: '17' },
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
	},
	{
		name: 'Maya Bose',
		title: 'Head of Creative Systems',
		image: '/team/2.webp',
	},
	{
		name: 'Raghav Desai',
		title: 'Strategy Director',
		image: '/team/3.webp',
	},
];

const stackShots = ['/images/stack/1.webp', '/images/stack/4.webp'];

export default function About() {
	return (
		<main className="min-h-screen w-full bg-[#E9E4D7] text-[#060010]">
			<section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
				<div>
					<p className="uppercase tracking-[0.35em] text-xs font-semibold text-[#B36619]">About ROI Makers</p>
					<h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-black leading-tight">
						Building soulful brands with relentless performance discipline.
					</h1>
					<p className="mt-6 text-lg sm:text-xl text-[#3B2B1F] leading-relaxed">
						We are a band of strategists, analysts, filmmakers, and creative technologists who design systems that compound
						revenue, not just impressions. Every artifact we craft—ads, landing experiences, films, data dashboards—serves one
						purpose: accelerate measurable growth.
					</p>
					<div className="mt-8 grid gap-4 sm:grid-cols-2">
						<div className="rounded-3xl border border-[#CC7722]/30 bg-white/70 p-6 shadow-[0_25px_70px_-40px_rgba(0,0,0,0.6)]">
							<p className="text-sm uppercase tracking-widest text-[#B36619]">Headquarters</p>
							<p className="mt-2 text-2xl font-semibold">Indore · MP</p>
							<p className="text-sm text-[#70523C]">218-B Trade Center, South Tukoganj</p>
						</div>
						<div className="rounded-3xl border border-[#CC7722]/30 bg-[#060010] text-[#E9E4D7] p-6">
							<p className="text-sm uppercase tracking-widest text-[#FF9933]">Focus</p>
							<p className="mt-2 text-2xl font-semibold">Full-funnel growth pods</p>
							<p className="text-sm text-[#E9E4D7]/80">Strategy · Creative · Media · CRO · Analytics</p>
						</div>
					</div>
				</div>
				<div className="grid gap-6">
					{stackShots.map((src, idx) => (
						<div
							key={src}
							className={`relative aspect-[4/3] rounded-[32px] overflow-hidden border border-[#CC7722]/30 bg-white ${
								idx === 1 ? 'translate-x-6 sm:translate-x-10' : ''
							}`}
						>
							<Image src={src} alt="Studio documentation" fill priority={idx === 0} className="object-cover" />
							<div className="absolute inset-0 bg-gradient-to-t from-[#060010]/60 via-transparent to-transparent" />
						</div>
					))}
				</div>
			</section>

			<section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
				<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
					{stats.map((stat) => (
						<div key={stat.label} className="rounded-3xl border border-[#CC7722]/30 bg-white/80 p-6 text-center">
							<p className="text-4xl font-black tracking-tight">{stat.value}</p>
							<p className="mt-2 text-sm uppercase tracking-[0.25em] text-[#70523C]">{stat.label}</p>
						</div>
					))}
				</div>
			</section>

			<section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 grid gap-10 lg:grid-cols-[0.85fr_1fr] items-center">
				<div>
					<p className="uppercase tracking-[0.35em] text-xs font-semibold text-[#B36619]">How we work</p>
					<h2 className="mt-4 text-3xl sm:text-4xl font-black">Operating systems built for compounding learning.</h2>
					<p className="mt-4 text-[#3B2B1F] leading-relaxed">
						We embed with founders, marketing leaders, and product teams to architect a single source of truth for performance. Every sprint unites creative
						experimentation, channel science, landing experience tests, and revenue analytics so decisions move faster than market noise.
					</p>
					<ul className="mt-6 space-y-3 text-sm uppercase tracking-[0.3em] text-[#70523C]">
						<li>Audience intelligence & opportunity mapping</li>
						<li>Creative engineering & rapid storyboarding</li>
						<li>Media simulations and budget routing</li>
						<li>CRO & lifecycle playbooks</li>
					</ul>
				</div>
				<div className="rounded-[40px] border border-[#CC7722]/30 bg-white/80 p-6">
					<div className="space-y-6">
						{milestones.map((item) => (
							<div key={item.year} className="flex gap-6">
								<div className="text-[#B36619] font-black text-2xl min-w-[4rem]">{item.year}</div>
								<div>
									<p className="text-xl font-semibold">{item.title}</p>
									<p className="text-sm text-[#3B2B1F] mt-2 leading-relaxed">{item.desc}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
				<div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
					<div>
						<p className="uppercase tracking-[0.35em] text-xs font-semibold text-[#B36619]">Leadership</p>
						<h2 className="mt-3 text-3xl sm:text-4xl font-black">Humans behind the growth machine.</h2>
					</div>
					<p className="text-sm text-[#3B2B1F] max-w-xl">
						Multidisciplinary pods pair strategists, creatives, media scientists, analysts, and engineers. Leadership keeps every pod ruthless about outcomes
						while protecting the craft.
					</p>
				</div>
				<div className="mt-10 grid gap-6 md:grid-cols-3">
					{leaders.map((leader) => (
						<div key={leader.name} className="rounded-[32px] border border-[#CC7722]/30 bg-white overflow-hidden">
							<div className="relative h-72">
								<Image src={leader.image} alt={leader.name} fill className="object-cover" />
								<div className="absolute inset-0 bg-gradient-to-t from-[#060010]/70 via-transparent to-transparent" />
							</div>
							<div className="p-6">
								<p className="text-xl font-semibold">{leader.name}</p>
								<p className="text-sm uppercase tracking-[0.25em] text-[#70523C]">{leader.title}</p>
							</div>
						</div>
					))}
				</div>
			</section>
		</main>
	);
}