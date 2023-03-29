import React, { useEffect, useState } from "react";
import ArticleCardImage from "./card";

export function ArtistCard({compName, period, image }) {

    return (

      <ArticleCardImage 
            title={compName}
            image={image}
            category={period}
      />
    )

}