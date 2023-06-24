import { useEffect, useState } from "react";

export default function Quotes() {
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState(false);
  const [quotes, setQuotes] = useState([
    {
      quote: "",
      author: "",
      category: "",
    },
  ]);

  useEffect(() => {
    let ready = true;
    const fetchQuotes = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("https://api.api-ninjas.com/v1/quotes", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "X-API-Key": "T4e57bd+nZWxSEgR4/XZNg==BOSUQttNXAPifpcW",
          },
        });
        const result = await response.json();
        if (ready) {
          setQuotes(...[], result);
        }
      } catch (error) {
        setErr(true);
      }
      setIsLoading(false);
    };
    fetchQuotes();

    return () => {
      ready = false;
    };
  }, [setIsLoading, setErr]);

  const wrapper = {
    display: "flex",
    "justify-content": "center",
    "align-items": "center",
    padding: "200px 30px",
  };

  return (
    <div className="wrapper" style={wrapper}>
      <div className="quote">
        {isLoading ? "Please Wait we are fetching Quotes" : ""}

        {!err
          ? `${quotes[0].quote}  ${quotes[0].author}`
          : "There is any error in fetching Data"}
      </div>
    </div>
  );
}
