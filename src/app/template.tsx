'use client';
import {
	Footer,
	Logo,
	// MobileNavigation,
	ThemeSwitch,
} from '@/common/components';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

export const MobileNavigation = dynamic(
	() => import('./../common/components/MobileNavigation/MobileNavigation'),
	{
		ssr: false,
	},
);

const variants = {
	hidden: { opacity: 0, x: 0, y: 0 },
	enter: { opacity: 1, x: 0, y: 0 },
};

export default function Template({ children }: { children: React.ReactNode }) {
	return (
		<motion.main
			variants={variants}
			initial="hidden"
			exit="hidden"
			animate="enter"
			transition={{ type: 'linear', duration: 0.25 }}
			key="LandingPage">
			<ThemeSwitch />
			<MobileNavigation />
			<Footer />
			<Logo />
			{children}
		</motion.main>
	);
}
