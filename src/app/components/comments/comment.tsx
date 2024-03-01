"use client";

import { useContext } from "react";

import { LevelContext, LevelContextProvider } from "./level-context";

export default function Comment({ data }) {
  const level = useContext(LevelContext);

  return (
    <article style={{ marginLeft: `${level * 40}px` }}>
      <h3>{data.comment}</h3>
      {data.replies?.length > 0 && (
        <LevelContextProvider>
          {data.replies.map(function renderComment(data) {
            return <Comment key={data.id} data={data} />;
          })}
        </LevelContextProvider>
      )}
    </article>
  );
}
