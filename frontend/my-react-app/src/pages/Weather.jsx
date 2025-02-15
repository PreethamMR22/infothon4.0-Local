import { CloudRain } from "lucide-react";

const Weather = () => {
  return (
    <div className="p-5">
      <h1 className="text-2xl font-semibold mb-4">Weather Forecast</h1>
      <div className="flex items-center space-x-4">
        <CloudRain size={40} className="text-blue-600" />
        <p className="text-gray-700">Get real-time weather updates for your farm.</p>
      </div>
    </div>
  );
};

export default Weather;
