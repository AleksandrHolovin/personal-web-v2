'use client';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from 'next-themes';
import { ThemeType } from '@/common/enums';
import { AnimatePresence, motion, HTMLMotionProps } from 'framer-motion';
import {
	HOME_ITEMS_ANIMATION_DURATION,
	NAVIGATION_ANIMATION_DELAY,
} from '@/common/constants';

const ICON_SIZE = 30;
const ANIMATION_STYLE: HTMLMotionProps<'div'> = {
	initial: { x: 300, opacity: 0 },
	animate: { x: 0, opacity: 1 },
	exit: { x: -300, opacity: 0 },
	style: { position: 'absolute' },
};

export const ThemeSwitch = () => {
	const { setTheme, resolvedTheme } = useTheme();

	const icon =
		resolvedTheme === ThemeType.Dark ? (
			<motion.div key="light-theme" {...ANIMATION_STYLE}>
				<FiSun
					onClick={() => setTheme('light')}
					color="white"
					size={ICON_SIZE}
				/>
			</motion.div>
		) : (
			<motion.div key="dark-theme" {...ANIMATION_STYLE}>
				<FiMoon
					onClick={() => setTheme('dark')}
					color="black"
					size={ICON_SIZE}
				/>
			</motion.div>
		);

	return (
		<div className="fixed left-[50px] top-[20px] cursor-pointer">
			<AnimatePresence>
				<motion.div
					key="entering"
					initial={{ y: -300, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{
						delay: NAVIGATION_ANIMATION_DELAY,
						duration: HOME_ITEMS_ANIMATION_DURATION,
					}}>
					{icon}
				</motion.div>
			</AnimatePresence>
		</div>
	);
};
