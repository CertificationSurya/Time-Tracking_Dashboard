import axios from "axios";
import { useState, useEffect } from "react";
import { ellipses } from "../../assets";

type EventCardProps = {
  active: string;
  event: string;
  icon: string;
};

type TimeData = {
  current: number;
  previous: number;
};

type Timeframes = {
  [key: string]: TimeData;
  weekly: TimeData;
  monthly: TimeData;
};

interface EventData {
  title: string;
  timeframes: Timeframes;
}

import { fallbackData } from "../../myData/fallbackData.js";

const EventCard: React.FC<EventCardProps> = ({ active, event, icon }) => {
  const [data, setData] = useState<EventData | Record<string, never>>({});

  useEffect(() => {
    axios
      .get(`https://balanced-concrete-chime.glitch.me/${event}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        setData(fallbackData[event]);
        console.log("Oh Noo! Error Occurred", err);
      });
  }, [active, event]);

  // console.log(title, timeframes[active])

  return (
    <div className="card-container br-sm">
      <div className={`icon-container bg-${event}`}>
        <img src={icon} alt="icon" className="icon" />
      </div>

      <div className="card-content p-4 br-sm bg-blue-20">
        <div className="content-top | flex-wrapper">
          <p>{data.title}</p>
          <img src={ellipses} className="ellipses" />
        </div>

        <div className="content-bottom | flex-wrapper pt-4">
          <h1 className="fw-lgt fs-xl">{data.timeframes?.[active]?.current}hrs</h1>
          <p>Last Week - {data.timeframes?.[active]?.previous}hrs</p>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
