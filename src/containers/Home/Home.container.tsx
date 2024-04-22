'use client';
import { Navigation, ThemeSwitch } from '@/common/components';
import {
	HOME_ITEMS_ANIMATION_DURATION,
	NAVIGATION_ANIMATION_DELAY,
} from '@/common/constants';
import { useTheme } from 'next-themes';

export const HomeContainer: React.FC = () => {
	const { setTheme, resolvedTheme } = useTheme();
	console.log(resolvedTheme);

	return (
		<>
			<ThemeSwitch
				transitionProps={{
					delay: NAVIGATION_ANIMATION_DELAY,
					duration: HOME_ITEMS_ANIMATION_DURATION,
				}}
				containerStyles="hidden md:block fixed left-[50px] top-[20px]"
			/>
			<Navigation />
		</>
	);
};
