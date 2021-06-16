import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';

export const Yakut: React.FC<{
  width: number;
  height: number;
}> = ({width, height}) => {
	const config = useVideoConfig();
  const frame = useCurrentFrame();

  const rotate = interpolate(
		spring({
      frame,
      fps: config.fps,
      config: {
        mass: 10,
        damping: 60
      }
    }),
		[0, 1],
		[0, 720]
	);

  const translation = interpolate(
		spring({
			frame: frame,
			fps: config.fps * 2,
			config: {
				damping: 0,
				mass: 10,
			},
		}),
		[0, 1],
		[0, 8]
	);

	return (
		<svg
			viewBox={`0 0 191 196`}
      width={width}
      height={height}
			style={{
				position: 'absolute',
        left: `50vw`,
        top: `20vh`,
				transform: `translateX(-50%) rotateY(${rotate}deg)`,
        transformOrigin: `center`
			}}
		>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M95.0708 186.556L10.0034 97.8149L38.6577 51.009H95.1792L151.599 51.009L180.247 97.8149L95.1792 186.556V186.669L95.125 186.612L95.0708 186.669V186.556Z" fill="#EB5757"/>
      <path d="M58.3575 98.4677L10.0034 97.7961L95.7423 186.669L58.3575 98.4677Z" fill="white" fill-opacity="0.2"/>
      <path d="M58.3575 98.4676L38.6577 51.009L10.0034 97.7961L58.3575 98.4676Z" fill="white" fill-opacity="0.5"/>
      <path d="M132.232 98.4676L151.708 51.009L180.586 97.7961L132.232 98.4676Z" fill="white" fill-opacity="0.2"/>
      <path d="M151.708 51.0091L132.232 98.4677L95.5184 51.009L151.708 51.0091Z" fill="#292C36" fill-opacity="0.1"/>
      <path d="M38.6576 51.0091L58.3574 98.4677L95.5184 51.009L38.6576 51.0091Z" fill="#292C36" fill-opacity="0.02"/>
      <path d="M58.3574 98.4676L95.5184 51.009L132.232 98.4676H58.3574Z" fill="white" fill-opacity="0.2"/>
      <path d="M132.232 98.4677L180.362 97.7961L95.0706 186.669L132.232 98.4677Z" fill="#292C36" fill-opacity="0.2"/>
      <path d="M64.7371 157.187H67.1779V158.37H64.7371V157.187Z" fill="#828A9E"/>
      <path d="M37.397 157.187H39.8378V158.37H37.397V157.187Z" fill="#828A9E"/>
      <path d="M64.2663 157.883V163.838C64.2663 170.424 58.9274 175.763 52.3416 175.763C45.7559 175.763 40.417 170.424 40.417 163.838V157.883H64.2663Z" fill="#484C59"/>
      <path d="M64.2663 138.257V157.883H40.417V138.257C40.4164 137.507 40.4868 136.758 40.6272 136.021C40.8089 135.062 41.1096 134.13 41.5225 133.245C44.2928 127.269 51.3835 124.67 57.3595 127.44C58.6291 128.029 59.7855 128.836 60.7752 129.826C62.4626 131.517 63.6053 133.675 64.0561 136.021C64.1964 136.758 64.2669 137.507 64.2663 138.257V138.257Z" fill="#DBD8DD"/>
      <path d="M66.8398 156.379V159.382H68.1357V163.914C68.136 172.654 61.0519 179.739 52.3129 179.739C43.5739 179.74 36.4892 172.655 36.4889 163.916C36.4889 163.915 36.4889 163.915 36.4889 163.914V159.383H37.9902V156.38H33.4862V163.918C33.4862 174.316 41.9157 182.746 52.3138 182.746C62.7119 182.746 71.1414 174.316 71.1414 163.918V156.379H66.8398Z" fill="#62667C"/>
      <path d="M39.3518 156.379H65.3361V159.383H39.3518V156.379Z" fill="#62667C"/>
      <path d="M64.0554 136.021H56.3763C55.6098 136.003 55.0032 135.367 55.0215 134.6C55.0391 133.859 55.6356 133.263 56.3763 133.245H63.1601C63.5728 134.13 63.8736 135.062 64.0554 136.021Z" fill="#828A9E"/>
      <path d="M64.2664 138.917V141.694H56.3764C55.61 141.693 54.9888 141.072 54.9888 140.305C54.9927 139.54 55.6115 138.921 56.3764 138.917L64.2664 138.917Z" fill="#828A9E"/>
      <path d="M64.2664 144.589V147.365H56.3764C55.6107 147.362 54.991 146.742 54.9888 145.976C54.993 145.212 55.6118 144.593 56.3764 144.589H64.2664Z" fill="#828A9E"/>
      <path d="M64.2664 150.257V153.039H56.3764C55.6107 153.037 54.991 152.417 54.9888 151.651V151.645C54.9909 150.879 55.6107 150.259 56.3764 150.256L64.2664 150.257Z" fill="#828A9E"/>
      <path d="M49.6946 134.632C49.6946 135.399 49.0731 136.021 48.3063 136.021H40.6272C40.809 135.062 41.1096 134.129 41.5225 133.244H48.3063C49.0711 133.248 49.6902 133.867 49.6946 134.632Z" fill="#828A9E"/>
      <path d="M49.6946 140.306C49.6946 141.073 49.0731 141.694 48.3062 141.694H40.417V138.917H48.3062C48.6739 138.918 49.026 139.065 49.2852 139.326C49.5484 139.584 49.696 139.937 49.6946 140.306Z" fill="#828A9E"/>
      <path d="M49.6946 145.979C49.6925 146.745 49.0721 147.365 48.3062 147.367H40.417V144.589H48.3062C48.6738 144.59 49.026 144.737 49.2852 144.997C49.5488 145.256 49.6964 145.61 49.6946 145.979Z" fill="#828A9E"/>
      <path d="M49.6946 151.645V151.651C49.6925 152.417 49.0721 153.037 48.3062 153.04H40.417V150.257H48.3062C49.0717 150.259 49.6918 150.879 49.6946 151.645Z" fill="#828A9E"/>
      <path d="M49.6581 181.017H54.9657V191.133H49.6581V181.017Z" fill="#62667C"/>
      <path d="M37.7122 195.007C37.7122 192.868 39.4466 191.133 41.5862 191.133H62.7157C64.8553 191.133 66.5897 192.868 66.5897 195.007V195.007H37.7122V195.007Z" fill="#62667C"/>
      <rect x="0.255859" y="78.8618" width="36.0632" height="58.84" rx="18.0316" fill="#292C36"/>
      <rect x="154.27" y="80.4888" width="36.0632" height="58.84" rx="18.0316" fill="#292C36"/>
      <path d="M175.962 80.6243C175.962 59.3738 167.521 38.9936 152.494 23.9671C137.468 8.94072 117.088 0.498964 95.8369 0.498962C74.5864 0.498961 54.2062 8.94072 39.1797 23.9671C24.1533 38.9936 15.7116 59.3738 15.7115 80.6243L20.1295 80.6243C20.1295 60.5455 28.1058 41.289 42.3037 27.0911C56.5016 12.8932 75.7581 4.91693 95.8369 4.91693C115.916 4.91693 135.172 12.8932 149.37 27.0911C163.568 41.289 171.544 60.5455 171.544 80.6243H175.962Z" fill="#484C59"/>
    </svg>
	);
};