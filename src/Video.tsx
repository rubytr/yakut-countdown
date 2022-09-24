import {registerRoot, Composition} from 'remotion';
import {Yakut} from './Yakut';
import {Logo} from './Yakut/Logo';

export const Video: React.FC = () => {
	return (
		<>
			<Composition
				id="Video"
				component={Yakut}
				durationInFrames={900}
				fps={30}
				width={1920}
				height={1080}
				defaultProps={{
          backgroundColor: 'black',
					titleText: 'Yakut başlıyor...',
					titleColor: 'white',
				}}
			/>
			<Composition
				id="Logo"
				component={Logo}
				durationInFrames={200}
				fps={30}
				width={1920}
				height={1080}
			/>
		</>
	);
};
