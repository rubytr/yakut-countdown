import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {Yakut} from './Yakut';

export const Logo: React.FC<{
	transitionStart: number;
}> = ({transitionStart}) => {
	const videoConfig = useVideoConfig();
	const frame = useCurrentFrame();

	return (
		<div
			style={{
				position: 'absolute',
				width: videoConfig.width,
				height: videoConfig.height,
			}}
		>
			<Yakut width={500} height={500} />
		</div>
	);
};
