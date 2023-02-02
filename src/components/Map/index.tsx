import { useRouter } from "next/router";
import { useState } from "react";
import * as C from "./styles";
import { MapContainer, Marker, TileLayer } from "react-leaflet";

interface locationProps {
  latitude: number;
  longitude: number;
}

export interface Place {
  id: string;
  name: string;
  slug: string;
  location: locationProps;
}

interface MapProps {
  places?: Place[];
}

export const Map = ({ places }: MapProps) => {
  const [placesFilter, setPlacesFilter] = useState(places);
  const router = useRouter();

  const handleFlinted = (e: string) => {
    const filter = places?.filter((place) => {
      const formatName = place.name;
      return formatName.includes(e);
    });

    return setPlacesFilter(filter);
  };

  return (
    <>
      <C.Filter type="search" onChange={(e) => handleFlinted(e.target.value)} />
      <MapContainer
        center={[51.505, -0.09]}
        zoom={3}
        scrollWheelZoom={true}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <>
          {placesFilter?.map((place, i) => {
            return (
              <Marker
                eventHandlers={{
                  click: () => {
                    router.push(`/places/${place.slug}`);
                  }
                }}
                key={`place-${place.id}`}
                position={[place.location.latitude, place.location.longitude]}
                title={place.name}
              />
            );
          })}
        </>
      </MapContainer>
    </>
  );
};
