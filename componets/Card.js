import React from "react";
import { dateToLabel, timeToLabel } from "../lib/dateToLabel";

export default ({ item }) => {
  const { mission_name, launch_date_local, launch_site, ships, links } = item;
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto">
      <img
        className="w-full h-40"
        src={
          ships.length > 0
            ? ships[0].image
            : "https://place-hold.it/300x200?text=No%20Image&fontsize=23"
        }
        alt="Sunset in the mountains"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{mission_name}</div>
        <p className="text-gray-700 text-base">{launch_site.site_name_long}</p>
      </div>

      <div className="px-6 py-4">
        {launch_date_local && (
          <>
            <span className="font-bold">Fecha y hora de lanzamiento:</span>
            <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              {`${dateToLabel(launch_date_local)}  `}
              {`${timeToLabel(launch_date_local)} hrs`}
            </span>
          </>
        )}
      </div>
      <div className="px-6 py-4">
        {links.wikipedia && (
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            <a href={`${links.wikipedia}`}>
              <i className="ml-2 fa fa-link"> Wikipedia</i>
            </a>
          </span>
        )}
      </div>
    </div>
  );
};
