import { useEffect, useRef, useState } from "react";
import { useCurrentFrame, useVideoConfig } from "remotion";

import Tick from "@pqina/flip";
import "@pqina/flip/dist/flip.min.css";

export const Countdown : React.FC<{
}> = ({}) => {
	const videoConfig = useVideoConfig();
  const frame = useCurrentFrame();
  const tickRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    Tick.DOM.create(tickRef.current);

    return () => {
      Tick.DOM.destroy(tickRef.current);
    }
  }, []);

  return (
    <div
      ref={tickRef}
      className="tick"
      data-value={(videoConfig.durationInFrames - frame) / videoConfig.fps}
      data-transform="floor -> pad('00')"
      style={{
        position: 'absolute',
        top: videoConfig.height / 3,
        width: videoConfig.width,
        height: videoConfig.height / 2,
        fontSize: '10em',
        fontFamily: 'monospace',
      }}
    >
      <div data-repeat="true" data-layout="horizontal center" aria-hidden="true">
        <span data-view="flip" >Tick</span>
      </div>
    </div>
  );
};
