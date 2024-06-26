'use client';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from 'next-themes';
import { ThemeType } from '@/common/enums';
import { AnimatePresence, motion, HTMLMotionProps } from 'framer-motion';

const ICON_SIZE = 30;
const ANIMATION_STYLE: HTMLMotionProps<'div'> = {
	initial: { x: 300, opacity: 0 },
	animate: { x: 0, opacity: 1 },
	exit: { x: -300, opacity: 0 },
};

interface IThemeSwitchProps {
	containerStyles: string;
	transitionProps?: HTMLMotionProps<'div'>['transition'];
}
export const ThemeSwitch: React.FC<IThemeSwitchProps> = ({
	containerStyles,
	transitionProps,
}) => {
	const { setTheme, resolvedTheme } = useTheme();
	const switchHandler = () =>
		setTheme(resolvedTheme === ThemeType.Dark ? 'light' : 'dark');

	const icon =
		resolvedTheme === ThemeType.Dark ? (
			<motion.div key="light-theme" {...ANIMATION_STYLE}>
				<FiSun color="white" size={ICON_SIZE} />
			</motion.div>
		) : (
			<motion.div key="dark-theme" {...ANIMATION_STYLE}>
				<FiMoon color="black" size={ICON_SIZE} />
			</motion.div>
		);

	return (
		<button
			onClick={() => {
				switchHandler();
			}}
			className={`appearance-none cursor-pointer ${containerStyles}`}>
			<AnimatePresence>
				<motion.div
					key="entering"
					initial={{ y: -300, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={transitionProps}>
					{icon}
				</motion.div>
			</AnimatePresence>
		</button>
	);
};
