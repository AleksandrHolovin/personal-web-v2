'use client';
import { HTMLMotionProps, motion } from 'framer-motion';
import './styles.css';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const ANIMATION_STYLE: HTMLMotionProps<'div'> = {
	initial: { y: -300, opacity: 0 },
	exit: { y: -300, opacity: 0 },
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
					text-[15vw] 
					py-[5px] 
					leading-[11vw] 
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
