/* eslint-disable react-hooks/rules-of-hooks */
import getGifs from "../services/getGifs";
import { useEffect, useState } from "react";

export function useGifs({ keyword } = { keyword: null }) {
  const [loading, setLoading] = useState(false);
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    setLoading(true);

    const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'coding';

    getGifs({ keyword: keywordToUse }).then(response => {
      setGifs(response);
      setLoading(false);
      if(keyword) localStorage.setItem('lastKeyword', keyword);
    }).catch(e => console.log(e));
  }, [keyword]);

  return { loading, gifs }
}
