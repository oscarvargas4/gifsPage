/* eslint-disable react-hooks/rules-of-hooks */
import getGifs from "../services/getGifs";
import { useContext, useEffect, useState } from "react";
import GifsContext from "../context/GifsContext";

export function useGifs({ keyword } = { keyword: null }) {
  const [loading, setLoading] = useState(false);
  const { gifs, setGifs } = useContext(GifsContext);

  useEffect(() => {
    setLoading(true);

    const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'coding';

    getGifs({ keyword: keywordToUse }).then(gifs => {
      setGifs(gifs);
      setLoading(false);
      localStorage.setItem('lastKeyword', keyword);
    }).catch(e => console.log(e));
  }, [keyword, setGifs]);

  return { loading, gifs }
}
