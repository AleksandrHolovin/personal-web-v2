'use client';
import { Navigation, ThemeSwitch } from '@/common/components';
import {
	HOME_ITEMS_ANIMATION_DURATION,
	NAVIGATION_ANIMATION_DELAY,
} from '@/common/constants';

export const HomeContainer: React.FC = () => {
	return (
		<>
			<ThemeSwitch
				transitionProps={{
					delay: NAVIGATION_ANIMATION_DELAY,
					duration: HOME_ITEMS_ANIMATION_DURATION,
				}}
				containerStyles="hidden md:block fixed left-[50px] top-[20px] cursor-pointer"
			/>
			<Navigation />
		</>
	);
};
