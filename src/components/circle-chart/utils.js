export const calcRadialEndPoint = ({ startPoint, origin, angle }) => {
  const M = { dx: startPoint[0] - origin[0], dy: startPoint[1] - origin[1] };
  const radius = Math.sqrt(M.dx ** 2 + M.dy ** 2);
  const fi = (origin[1] < startPoint[1] ? -1 : 1) * Math.acos(M.dx / radius);
  const x = radius * Math.cos(fi - angle) + origin[0];
  const y = radius * Math.sin(angle - fi) + origin[1];
  return [x, y];
};

export const calcLinearEndPoint = ({ startPoint, endPoint, mod }) => {
  const M = { dx: endPoint[0] - startPoint[0], dy: endPoint[1] - startPoint[1] };
  const modM = Math.sqrt(M.dx ** 2 + M.dy ** 2);
  return [(mod / modM) * M.dx + startPoint[0], (mod / modM) * M.dy + startPoint[1]];
};

export const renderArc = ({ origin, startPoint, endPoint, anticlockwise }) => {
  const M = { dx: startPoint[0] - origin[0], dy: startPoint[1] - origin[1] };
  const radius = Math.sqrt(M.dx ** 2 + M.dy ** 2);
  const loc = M.dy * (endPoint[0] - startPoint[0]) - M.dx * (endPoint[1] - startPoint[1]);
  const dir = anticlockwise ? -1 * loc : loc;
  const largeArcFlag = dir < 0 ? '0' : '1';
  const sweepFlag = anticlockwise ? '0' : '1';
  return `A ${radius} ${radius} 0 ${largeArcFlag} ${sweepFlag} ${endPoint.join(' ')}`;
};

export const renderLine = (endPoint) => `L ${[endPoint].join(' ')}`;

export const renderCorner = ({ borderRadius, endPoint }) =>
  `A ${borderRadius} ${borderRadius} 0 0 1 ${endPoint.join(' ')}`;

// если offset < 0, то смещение от центра, иначе к центру
export const calcRadialOffset = (origin, segment, offset) => {
  const { cornerPoint0, cornerPoint1 } = segment;
  const xHordMid = (cornerPoint0[0] + cornerPoint1[0]) / 2;
  const yHordMid = (cornerPoint0[1] + cornerPoint1[1]) / 2;
  const radialVector = { dx: origin[0] - xHordMid, dy: origin[1] - yHordMid };
  const magnitude = Math.sqrt(radialVector.dx ** 2 + radialVector.dy ** 2);
  const dx = (offset / magnitude) * radialVector.dx;
  const dy = (offset / magnitude) * radialVector.dy;
  return { dx, dy };
};
