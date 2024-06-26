import { ThemeSwitch } from '@/common/components/ThemeSwitch/ThemeSwitch';
import { HOME_ITEMS_ANIMATION_DURATION } from '@/common/constants';

export default function ProjectsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<ThemeSwitch
				transitionProps={{
					duration: HOME_ITEMS_ANIMATION_DURATION,
				}}
				containerStyles="hidden md:block fixed right-[50px] top-[20px] cursor-pointer"
			/>
			<div className="mt-[200px]">{children}</div>
		</>
	);
}
