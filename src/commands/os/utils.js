import os from 'os';

const getCpuSpeed = (speed) => {
  const isSpeedInHz = speed >= 100;
  if (isSpeedInHz) return speed / 1000;
  return speed / 10;
};

export const getCPUs = () => {
  const cpus = os.cpus();
  const formattedCPUsData = {};
  const CPUsCount = cpus.length;

  for (let index = 0; index < CPUsCount; index++) {
    const { model, speed } = cpus[index];
    formattedCPUsData[index + 1] = {
      model: model.split(' CPU')[0],
      speed: `${getCpuSpeed(speed)} GHz`,
    };
  }

  return [formattedCPUsData, CPUsCount];
};
