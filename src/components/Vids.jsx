import React, { useState, useEffect } from "react";
import Card from "./Card";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const Vids = () => {
  const [videos, setVideos] = useState([]);
  const id = "UCiP_JoAO2aNwFXVX-nrTc-w";

  useEffect(() => {
    const fetchResults = async () => {
      const data = await fetchFromAPI(`channels?part=snippet&id=${id}`);

      const videosData = await fetchFromAPI(
        `search?channelId=${id}&part=snippet%2Cid&order=date`
      );

      setVideos(videosData?.items);
    };

    fetchResults();
  }, [id]);
  return (
    <div className="vids">
      <h1 style={{ textAlign: "center" }}>Videos</h1>

    <div className="cards">
      {
        videos.map((item,idx)=>(
            <Card key={idx} video={item} />
        ))
      }
      </div>
    </div>
  );
};

export default Vids;
