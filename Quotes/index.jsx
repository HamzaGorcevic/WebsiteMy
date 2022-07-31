import { useState } from "react";
import { useEffect } from "react";
import api from "../api/api";

const Quote = () => {
    const [quote, setQuote] = useState({});
    const[value,setValue] = useState('history')

  //   useEffect(() => {
  //     api.get("/random").then((result) => {
  //       const data = result.data;

  //       setQuote(data);
  //     });
  //   }, []);

  const fetchQuote = async (el) => {
    try {
      const result = await api.get(`/random?tags=${value}`);
      const data = result.data;
        setQuote(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, [value]);
    

  return (
      <div>
      <select name="Se" id="" onChange={(e) => { setValue(e.target.value) }}>
        <option value="Chose tag" selected disabled >Chose your tag</option>
              <option value="history">historyt</option>
              <option value="technology">Technoglogy</option>
        </select>
          <div className="d-flex bg-primary flex-column">
              
            <p> {quote && quote.content}</p>
          <div>by : " {quote && quote.author} "</div>
        </div>
    </div>
  );
};

export default Quote;
 