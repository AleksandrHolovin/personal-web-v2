import './styles.css';

export const Logo: React.FC = () => {
	return (
		<div className="cursor-pointer fixed bottom-[110px] left-[50px] font-logo">
			<div className="text-white font-bold text-[60px] leading-[45px] hover-wrapper">
				HO
			</div>
			<div className="text-white font-bold text-[60px] leading-[45px] hover-wrapper">
				LOV
			</div>
			<div className="text-white font-bold text-[60px] leading-[45px] hover-wrapper">
				IN.
			</div>
		</div>
	);
};
