import {Composition} from 'remotion';
import {YakutIntro} from './YakutIntro';
import {Countdown} from './YakutIntro/Countdown';
import {Logo} from './YakutIntro/Logo';
import {Title} from './YakutIntro/Title';

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition
				id="YakutIntro"
				component={YakutIntro}
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
			<Composition
				id="Countdown"
				component={Countdown}
				durationInFrames={200}
				fps={30}
				width={1920}
				height={1080}
			/>
			<Composition
				id="Title"
				component={Title}
				durationInFrames={100}
				fps={30}
				width={1920}
				height={1080}
				defaultProps={{
					titleText: 'Welcome to Remotion',
					titleColor: 'black',
				}}
			/>
		</>
	);
};
