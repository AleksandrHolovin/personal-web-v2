'use client';
import { AnimatePresence, HTMLMotionProps, motion } from 'framer-motion';
import './styles.css';
import {
	HOME_ITEMS_ANIMATION_DURATION,
	NAVIGATION_ANIMATION_DELAY,
} from '@/common/constants';

const ANIMATION_STYLE: HTMLMotionProps<'div'> = {
	initial: { x: -300, opacity: 0 },
	animate: { x: 0, opacity: 1 },
};

export const HomeLogo: React.FC = () => {
	const rowStyles =
		'text-appBlack dark:text-white text-appBlack font-bold text-[60px] leading-[45px] hover-wrapper';

	return (
		<div
			className="
			hidden
			md:block
			cursor-pointer 
			fixed bottom-[110px] 
			left-[50px] 
			font-logo">
			<AnimatePresence>
				<motion.div
					key="logo-ho"
					transition={{
						delay: NAVIGATION_ANIMATION_DELAY,
						duration: HOME_ITEMS_ANIMATION_DURATION,
					}}
					{...ANIMATION_STYLE}>
					<div className={rowStyles}>HO</div>
				</motion.div>
				<motion.div
					key="logo-lov"
					transition={{
						delay: NAVIGATION_ANIMATION_DELAY + 0.1,
						duration: HOME_ITEMS_ANIMATION_DURATION,
					}}
					{...ANIMATION_STYLE}>
					<div className={rowStyles}>LOV</div>
				</motion.div>
				<motion.div
					key="dark-in"
					transition={{
						delay: NAVIGATION_ANIMATION_DELAY + 0.2,
						duration: HOME_ITEMS_ANIMATION_DURATION,
					}}
					{...ANIMATION_STYLE}>
					<div className={rowStyles}>IN.</div>
				</motion.div>
			</AnimatePresence>
		</div>
	);
};
