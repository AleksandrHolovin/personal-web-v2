import { Footer, Logo, Navigation } from '@/common/components';

export const HomeContainer: React.FC = () => {
	return (
		<div className="bg-appGreen">
			<Footer />
			<Logo />
			<Navigation />
		</div>
	);
};
