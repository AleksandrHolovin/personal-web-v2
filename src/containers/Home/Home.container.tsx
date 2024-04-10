'use client';
import { Footer, Logo, Navigation, ThemeSwitch } from '@/common/components';

export const HomeContainer: React.FC = () => {
	return (
		<div>
			<ThemeSwitch />
			<Footer />
			<Logo />
			<Navigation />
		</div>
	);
};
