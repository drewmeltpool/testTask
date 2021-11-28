import { useEffect, useState } from 'react';

type WeatherType = {
  city: string;
  units: 'metric' | 'standard' | 'imperial' | 'units';
};

const useWeather = ({ city, units }: WeatherType) => {
  const [weather, setWeather] = useState<any>();
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      try {
        const data = await fetch(
          `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&APPID=7d7d2998ae5b1aa6117b08a5c354b08c`
        ).then((d) => d.json());
        setWeather(data);
      } catch (error) {
        setError(true);
      }
    })();
  }, [city, units]);

  return [weather, error];
};

export default useWeather;
