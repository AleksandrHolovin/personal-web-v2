'use client';
import { AnimatePresence, HTMLMotionProps, motion } from 'framer-motion';
import './styles.css';
import {
	HOME_ITEMS_ANIMATION_DURATION,
	NAVIGATION_ANIMATION_DELAY,
} from '@/common/constants';
import { usePathname } from 'next/navigation';

const ANIMATION_STYLE: HTMLMotionProps<'div'> = {
	initial: { x: -300, opacity: 0 },
	animate: { x: 0, opacity: 1 },
};

export const HomeLogo: React.FC = () => {
	const pathname = usePathname();

	const isHomeRoute = pathname === '/';
	const delay = isHomeRoute ? NAVIGATION_ANIMATION_DELAY : 0.7;

	const rowStyles =
		'text-appBlack dark:text-white text-appBlack font-bold text-[60px] leading-[45px] hover-wrapper';

	return (
		<motion.div
			className="
			hidden
			md:block
			cursor-pointer 
			fixed bottom-[110px] 
			left-[50px] 
			font-logo"
			animate={!isHomeRoute ? { top: '20px' } : undefined}
			transition={{ duration: 0.7 }}>
			<AnimatePresence>
				<motion.div
					key="logo-ho"
					transition={{
						delay,
						duration: HOME_ITEMS_ANIMATION_DURATION,
					}}
					{...ANIMATION_STYLE}>
					<div className={rowStyles}>HO</div>
				</motion.div>
				<motion.div
					key="logo-lov"
					transition={{
						delay: delay + 0.1,
						duration: HOME_ITEMS_ANIMATION_DURATION,
					}}
					{...ANIMATION_STYLE}>
					<div className={rowStyles}>LOV</div>
				</motion.div>
				<motion.div
					key="dark-in"
					transition={{
						delay: delay + 0.2,
						duration: HOME_ITEMS_ANIMATION_DURATION,
					}}
					{...ANIMATION_STYLE}>
					<div className={rowStyles}>IN.</div>
				</motion.div>
			</AnimatePresence>
		</motion.div>
	);
};
