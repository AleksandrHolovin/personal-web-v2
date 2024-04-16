'use client';
import { AnimatePresence, HTMLMotionProps, motion } from 'framer-motion';
import {
	HOME_ITEMS_ANIMATION_DURATION,
	NAVIGATION_ANIMATION_DELAY,
} from '@/common/constants';
import { Bars3Icon } from '@heroicons/react/24/solid';
import { useState } from 'react';

const ANIMATION_STYLE: HTMLMotionProps<'div'> = {
	initial: { opacity: 0 },
	animate: { opacity: 1 },
	exit: { opacity: 0 },
};

const MobileNavigation: React.FC = () => {
	const [open, setOpen] = useState(false);
	return (
		<>
			<button
				onClick={() => setOpen(!open)}
				className="appearance-none fixed md:hidden left-[50px] top-[20px] cursor-pointer">
				<motion.div
					key="entering"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						delay: NAVIGATION_ANIMATION_DELAY,
						duration: HOME_ITEMS_ANIMATION_DURATION,
					}}>
					<Bars3Icon className="h-6 w-6 text-appBlack dark:text-white" />
				</motion.div>
			</button>
			<AnimatePresence>
				{open && (
					<motion.div
						style={{
							background: 'red',
							position: 'absolute',
							zIndex: 10000,
							top: 0,
							bottom: 0,
							left: 0,
							right: 0,
						}}
						{...ANIMATION_STYLE}>
						hello world
						<button onClick={() => setOpen(!open)}>CLOSE</button>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
};
export default MobileNavigation;
