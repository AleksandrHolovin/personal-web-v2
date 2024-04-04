'use client';
import './styles.css';

interface INavigationItemProps {
	label: string;
	link: string;
}
export const NavigationItem: React.FC<INavigationItemProps> = ({
	label,
	link,
}) => {
	return (
		<div className="link-wrapper text-[140px] text-appBlack py-[5px] leading-[125px] font-bold uppercase font-nav">
			{label}
		</div>
	);
};
