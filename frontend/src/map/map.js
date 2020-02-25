import React, { useState, useRef } from "react";
import useSwr from "swr";
import GoogleMapReact from "google-map-react";
import useSupercluster from "use-supercluster";
import "./map.css";

const url = 'http://localhost:4000/points'
const fetcher = (...args) => fetch(...args).then(response => response.json());
const Marker = ({ children }) => children;

export default function App() {
  const mapRef = useRef();
  const [bounds, setBounds] = useState(null);
  const [zoom, setZoom] = useState(10);
  const { data, error } = useSwr(url, { fetcher });
  const locations = data && !error ? data.slice(0, 5000) : [];

  const points = locations.map((location, index) => ({
    type: "Feature",
    properties: { cluster: false },
    geometry: {
      type: "Point",
      coordinates: [
        parseFloat(location.longitude),
        parseFloat(location.latitude)
      ]
    }
  }));

  const { clusters, supercluster } = useSupercluster({
    points,
    bounds,
    zoom,
    options: { radius: 80, maxZoom: 20 }
  });

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDIXIBIuCxjS1eU7CtTfnrHtEI-7CM9aVQ" }}
        defaultCenter={{ lat: -23.620452, lng: -46.617136 }}
        defaultZoom={8}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map }) => {
          mapRef.current = map;
        }}
        onChange={({ zoom, bounds }) => {
          setZoom(zoom);
          setBounds([
            bounds.nw.lng,
            bounds.se.lat,
            bounds.se.lng,
            bounds.nw.lat
          ]);
        }}
      >
        {clusters.map((cluster, index) => {
          const [longitude, latitude] = cluster.geometry.coordinates;
          const {
            cluster: isCluster,
            point_count: pointCount
          } = cluster.properties;

          if (isCluster) {
            return (
              <Marker
                key={`cluster-${cluster.id}`}
                lat={latitude}
                lng={longitude}
              >
                <div
                  className="cluster-marker"
                  style={{
                    width: `${10 + (pointCount / points.length) * 20}px`,
                    height: `${10 + (pointCount / points.length) * 20}px`
                  }}
                  onClick={() => {
                    const expansionZoom = Math.min(
                      supercluster.getClusterExpansionZoom(cluster.id),
                      20
                    );
                    mapRef.current.setZoom(expansionZoom);
                    mapRef.current.panTo({ lat: latitude, lng: longitude });
                  }}
                >
                  {pointCount}
                </div>
              </Marker>
            );
          }
          
          return (
            <Marker
              key={`point-${index}`}
              lat={latitude}
              lng={longitude}
            >
              
              <button className="point-marker">
                <img src="/ponto.png" alt="point doesn't pay" />
              </button>
              
            </Marker>
            
          );
        })}
      </GoogleMapReact>
    </div>
  );
}
