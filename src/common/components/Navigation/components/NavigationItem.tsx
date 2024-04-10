'use client';
import './styles.css';

interface INavigationItemProps {
	label: string;
	link: string;
}
export const NavigationItem: React.FC<INavigationItemProps> = ({
	label,
	// link,
}) => {
	return (
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
	);
};
