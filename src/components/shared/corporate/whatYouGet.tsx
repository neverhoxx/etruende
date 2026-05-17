'use client';

import { motion } from 'motion/react';
import { Sparkles, TrendingUp, Monitor } from 'lucide-react';
import { Container } from '../container';
import { HiOutlineSparkles } from 'react-icons/hi2';

const features = [
    {
        icon: Sparkles,
        title: "Professional presentation",
        description:
            "A clean website that reflects your brand and makes your business look reliable and trustworthy to new clients.",
    },
    {
        icon: TrendingUp,
        title: "Clear structure",
        description:
            "Customers quickly find services, pricing, and contact details. No confusion, no long messages.",
    },
    {
        icon: Monitor,
        title: "Mobile-first experience",
        description:
            "Looks great and works smoothly on phones, tablets, and desktops. Over 60% of visitors come from mobile.",
    },
];

type Feature = (typeof features)[number];

function FeatureCard({ feature, className = '' }: { feature: Feature; className?: string }) {
    const Icon = feature.icon;

    return (
        <motion.div
            whileHover={{ y: -4 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className={`relative group select-none border rounded-2xl border-gray-200 bg-white transition-all duration-300 ${className}`}
        >
            <div className="h-full p-6 sm:p-8">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-[#131632] flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-[#ff3f81] transition-colors duration-300">
                    <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>

                <h3 className="text-[#131632] group-hover:text-[#ff3f81] mb-2 sm:mb-3 font-bold text-lg sm:text-xl transition-colors duration-200">
                    {feature.title}
                </h3>

                <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
                    {feature.description}
                </p>
            </div>
        </motion.div>
    );
}

export function CorporateSection() {
    return (
        <section className="py-14 sm:py-20 border-y border-[#cae0fc]">
            <Container className="flex flex-col md:flex-row gap-10 md:gap-16">

                <div className="w-full md:w-[45%] relative text-center md:text-left flex flex-col gap-4">
                    <div className="flex items-center gap-2 justify-center md:justify-start">
                        <HiOutlineSparkles className="text-[#ff3f81] text-2xl drop-shadow-[0_0_12px_rgba(255,63,129,0.8)]" />
                        <span className="uppercase tracking-wide text-sm text-[#ff3f81] font-semibold">
                            Business website development
                        </span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1a1a1a]">
                        Why a business website{' '}
                        <span className="text-[#ff3f81]">matters</span>
                    </h2>

                    <div className="md:max-w-[400px] w-1/2 md:w-full h-[3px] rounded bg-gradient-to-r from-[#ff3f81] to-[#131632] shadow-[0_0_12px_rgba(255,63,129,0.6)] mx-auto md:mx-0" />

                    <p className="text-base sm:text-lg text-[#7a7a7a] leading-relaxed">
                        A business website is your main online presence. It explains what you do,
                        builds trust, and makes it easy for customers to contact you.
                    </p>

                    <p className="text-base sm:text-lg text-[#7a7a7a] leading-relaxed">
                        Clean design, fast performance, and basic SEO are included in every project.
                        You get a site that not only looks good, but actually works for your business.
                    </p>

                    <div className="text-[80px] sm:text-[120px] font-bold select-none opacity-[0.07] absolute left-1/2 md:left-0 -translate-x-1/2 md:translate-x-0 bottom-0 pointer-events-none leading-none">
                        <span className="text-[#ff3f81]">E</span>truend<span className="text-[#ff3f81]">E</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full md:w-[55%]">
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            feature={feature}
                            className={index === 2 ? 'md:col-span-2' : ''}
                        />
                    ))}
                </div>

            </Container>
        </section>
    );
}