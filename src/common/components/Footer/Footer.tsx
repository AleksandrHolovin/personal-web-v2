import { ThemeType } from '@/common/enums';
import { FooterLink } from './components/FooterLink';
import { useTheme } from 'next-themes';

export const Footer: React.FC = () => {
	return (
		<footer
			className={`
		text-appBlack
		dark:text-white
		w-screen 
		h-[100px]
		fixed 
		bottom-0 
		px-[50px] 
		py-[20px] 
		flex 
		items-center 
		justify-between 
		text-sm
		z-50`}>
			<div className="flex gap-10">
				<div>
					<div>Oleksandr Holovin</div>
					<div>Web Development</div>
				</div>
				<div>
					<div>Kharkiv</div>
					<div className="font-bold">oleksandr@holovin.com</div>
				</div>
				<div>
					<FooterLink number="01" label="about" link="about" />
					<FooterLink number="02" label="journal" link="journal" />
				</div>
			</div>
			<div>
				<FooterLink number="03" label="twitter" link="twitter" />
				<FooterLink number="04" label="instagram" link="instagram" />
				<FooterLink number="05" label="linkedin" link="linkedin" />
			</div>
		</footer>
	);
};
