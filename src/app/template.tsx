'use client';
import {
	Footer,
	HomeLogo,
	MobileNavigation,
	ThemeSwitch,
} from '@/common/components';
import {
	HOME_ITEMS_ANIMATION_DURATION,
	NAVIGATION_ANIMATION_DELAY,
} from '@/common/constants';
import { motion } from 'framer-motion';

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
			{children}
		</motion.main>
	);
}
