'use client';
import { HTMLMotionProps, motion } from 'framer-motion';
import './styles.css';
import Link from 'next/link';

const ANIMATION_STYLE: HTMLMotionProps<'div'> = {
	initial: { y: -300, opacity: 0 },
	animate: { y: 0, opacity: 1 },
};

interface INavigationItemProps {
	label: string;
	index: number;
	link: string;
}
export const NavigationItem: React.FC<INavigationItemProps> = ({
	label,
	index,
	link,
}) => {
	return (
		<Link href={link}>
			<motion.div
				key={index.toString()}
				transition={{ delay: index / 10, duration: 1 }}
				{...ANIMATION_STYLE}>
				<div
					className="
					text-appBlack 
					dark:text-white
					link-wrapper 
					text-[20vw]
					leading-[15vw] 
					md:text-[15vw] 
					md:leading-[11vw] 
					py-[5px] 
					font-bold 
					uppercase 
					font-nav 
					cursor-pointer">
					{label}
				</div>
			</motion.div>
		</Link>
	);
};
