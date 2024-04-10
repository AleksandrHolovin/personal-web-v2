import './styles.css';

export const Logo: React.FC = () => {
	const rowStyles =
		'text-appBlack dark:text-white text-appBlack font-bold text-[60px] leading-[45px] hover-wrapper';

	return (
		<div className="cursor-pointer fixed bottom-[110px] left-[50px] font-logo">
			<div className={rowStyles}>HO</div>
			<div className={rowStyles}>LOV</div>
			<div className={rowStyles}>IN.</div>
		</div>
	);
};
