import {interpolate, Sequence, Audio, useCurrentFrame, useVideoConfig} from 'remotion';
import {Logo} from './Yakut/Logo';
import {Title} from './Yakut/Title';
import audio from './break-the-road.mp3';

export const Yakut: React.FC<{
	titleText: string;
	titleColor: string;
  backgroundColor: string;
}> = ({titleText, titleColor, backgroundColor}) => {
	const frame = useCurrentFrame();
	const videoConfig = useVideoConfig();

	const opacity = interpolate(
		frame,
		[videoConfig.durationInFrames - 25, videoConfig.durationInFrames - 15],
		[1, 0],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);
	const transitionStart = 25;

  const sequences = [];

  for (let index = 0; index < videoConfig.durationInFrames / 120; index++) {
    console.log(index);
    sequences.push(
	<Sequence from={index * 120} durationInFrames={120}>
		<Sequence from={0} >
			<Logo transitionStart={10}/>
		</Sequence>
		<Sequence from={transitionStart + 10} >
			<Title titleText={titleText} titleColor={titleColor} />
		</Sequence>
	</Sequence>
    )
  }

	return (
		<div style={{flex: 1, backgroundColor}}>
			<div style={{opacity}}>
				{sequences}
				<Audio
					src={audio}
					startFrom={0} // if composition is 30fps, then it will start at 2s
					endAt={Infinity} // if composition is 30fps, then it will end at 4s
        />
			</div>
		</div>
	);
};
