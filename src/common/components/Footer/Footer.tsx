'use client';
import {
	HOME_ITEMS_ANIMATION_DURATION,
	NAVIGATION_ANIMATION_DELAY,
} from '@/common/constants';
import { FooterLink } from './components/FooterLink';
import { HTMLMotionProps, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

const ANIMATION_STYLE: HTMLMotionProps<'div'> = {
	initial: { y: 300, opacity: 0 },
	animate: { y: 0, opacity: 1 },
};

export const Footer: React.FC = () => {
	const pathname = usePathname();

	const isHomeRoute = pathname === '/';
	const delay = isHomeRoute ? NAVIGATION_ANIMATION_DELAY : 0;

	return (
		<footer
			className={`
			hidden
			md:flex 
			text-appBlack
			dark:text-white
			w-screen 
			h-[100px]
			fixed 
			bottom-0 
			px-[50px] 
			py-[20px] 
			items-center 
			justify-between 
			text-sm
			z-50`}>
			<div className="flex gap-10">
				<motion.div
					key="data"
					transition={{
						delay,
						duration: HOME_ITEMS_ANIMATION_DURATION,
					}}
					{...ANIMATION_STYLE}>
					<div>Oleksandr Holovin</div>
					<div>Web Development</div>
				</motion.div>
				<motion.div
					key="contact"
					transition={{
						delay: delay + 0.1,
						duration: HOME_ITEMS_ANIMATION_DURATION,
					}}
					{...ANIMATION_STYLE}>
					<div>Kharkiv</div>
					<div className="font-bold">oleksandr@holovin.com</div>
				</motion.div>
				<motion.div
					key="internal-links"
					transition={{
						delay: delay + 0.2,
						duration: HOME_ITEMS_ANIMATION_DURATION,
					}}
					{...ANIMATION_STYLE}>
					<FooterLink number="01" label="about" link="about" />
					<FooterLink number="02" label="journal" link="journal" />
				</motion.div>
			</div>
			<motion.div
				key="external-links"
				transition={{
					delay: delay + 0.3,
					duration: HOME_ITEMS_ANIMATION_DURATION,
				}}
				{...ANIMATION_STYLE}>
				<FooterLink number="03" label="twitter" link="twitter" />
				<FooterLink number="04" label="instagram" link="instagram" />
				<FooterLink number="05" label="linkedin" link="linkedin" />
			</motion.div>
		</footer>
	);
};
