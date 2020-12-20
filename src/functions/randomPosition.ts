interface IResponse {
  x: number;
  y: number;
}

const randomPosition = (): IResponse => {
  const x = Math.floor(Math.random() * 800);
  const y = Math.floor(Math.random() * 300);

  return { x, y };
};

export default randomPosition;
