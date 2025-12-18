'use client';

import { motion } from 'motion/react';
import { Target, TrendingUp, Zap } from 'lucide-react';

import { Container } from '../container';

const features = [
    {
        icon: Target,
        title: 'Focused Conversion',
        description:
            'A landing page is built around a single goal — converting visitors into leads or customers through a clear message and strong call to action.',
    },
    {
        icon: TrendingUp,
        title: 'Higher Conversion Rates',
        description:
            'Professionally designed landing pages significantly increase conversion rates by guiding users through a structured and persuasive user journey.',
    },
    {
        icon: Zap,
        title: 'Fast & Optimized',
        description:
            'We create fast-loading, lightweight landing pages optimized for performance, SEO, and marketing campaigns across all devices.',
    },
];

type Feature = (typeof features)[number];

function FeatureCard({
    feature,
    className = '',
}: {
    feature: Feature;
    className?: string;
}) {
    const Icon = feature.icon;

    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className={`relative group cursor-pointer select-none border rounded-2xl border-gray-200 hover:border-[#ff3f81] bg-white ${className}`}
        >
            <div className="h-full p-6 sm:p-8">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-[#131632] flex items-center justify-center mb-4 sm:mb-6">
                    <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>

                <h3 className="text-[#ff3f81] mb-2 sm:mb-3 font-bold text-lg sm:text-xl">
                    {feature.title}
                </h3>

                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    {feature.description}
                </p>
            </div>
        </motion.div>
    );
}

export function LandingSection() {
    return (
        <section className="py-14 sm:py-20">
            <Container className="flex flex-col md:flex-row gap-10 md:gap-5">
                <div className="w-full relative text-center md:text-left">
                    <span className="uppercase tracking-wide text-sm text-[#ff3f81] font-semibold block mb-3 select-none">
                        Landing page
                    </span>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-6">
                        Why does your business need it?
                    </h2>

                    <p className="text-base sm:text-lg md:text-xl opacity-80 mb-10 max-w-full md:max-w-[750px] text-[#131632] mx-auto md:mx-0">
                        A landing page is a powerful marketing tool designed to turn traffic into
                        results. It delivers a focused message, highlights your value proposition,
                        and encourages visitors to take action — whether it’s a purchase, sign-up,
                        or request.
                    </p>

                    <div className="text-[72px] sm:text-[120px] md:text-[150px] font-bold select-none opacity-20 absolute left-1/2 md:left-0 -translate-x-1/2 md:translate-x-0 md:bottom-1/7 bottom-[-10%] pointer-events-none">
                        <span className="text-[#ff3f81]">E</span>
                        truend
                        <span className="text-[#ff3f81]">E</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            feature={feature}
                            className={index === 2 ? 'md:col-span-2 w-full' : 'w-full'}
                        />
                    ))}
                </div>
            </Container>
        </section>
    );
}
