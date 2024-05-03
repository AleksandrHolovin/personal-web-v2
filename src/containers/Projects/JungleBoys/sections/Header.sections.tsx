import HeaderImage from '@/assets/jungle-boys/header-img.png';
import '../styles.css';

export const HeaderSection: React.FC = () => {
	return (
		<section className="relative bg-[red]">
			<img
				className="w-[100vw] h-[600px] object-cover"
				src={HeaderImage.src}
				alt="jungle-boys-main-image"
			/>
			<span
				className="
                    absolute 
                    top-[-70px] 
                    right-[20px] 
                    text-[100px]
                    uppercase 
					font-nav
					blank-text
                    ">
				Jungle Boys
			</span>
		</section>
	);
};
