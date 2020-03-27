import * as React from 'react';
import QRCode from 'qrcode';
import useProfileUrl from '../../hooks/useInviteUrl';

const QRCOde: React.FC = () => {
  const canvasRef = React.useRef(null);
  const { absoluteUrl } = useProfileUrl();

  React.useEffect(() => {
    const canvas = canvasRef.current;

    if (absoluteUrl) {
      QRCode.toCanvas(canvas, absoluteUrl, {
        errorCorrectionLevel: 'L'
      });
    }
  });

  return <canvas ref={canvasRef} width={200} height={200} />;
};

export default QRCOde;
