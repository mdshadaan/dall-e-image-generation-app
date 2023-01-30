import { useState } from "react";
import { AUTHORIZATION_KEY, IMG_GENERATION_ENDPOINT } from "../../constants";
import Card from "./Card";
import Shimmer from "./Shimmer";


//functions should be defined outside components
//so that on each re-render , function is not defined again and again
const handleCheck = () => {
  console.log('clicked')
}


const Body = (props) => {

  const [searchText, setSearchText] = useState('');
  const [data, setData] = useState([]);
  const [isloading, setIsLoading] = useState(false);

  async function loadData(prompt) {
    const responseBody = {
      prompt: prompt,
      size: '256x256',
      n: 4
    }
    setData([])
    setIsLoading(true);
    const response = await fetch(IMG_GENERATION_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': AUTHORIZATION_KEY

      },
      body: JSON.stringify(responseBody)
    })

    const json = await response.json();
    console.log(json);
    setData(json.data);
    setIsLoading(false)
  }



  return (
    <div className="content">
      <div className="content__search">
        <input type="search" onChange={(e) => setSearchText(e.target.value)} value={searchText} />
        <button className="content__button" onClick={() => loadData(searchText)} disabled={searchText.length === 0} >GENERATE</button>
      </div>
      {isloading && <h2 className="content__loading_text">fetching images ...</h2>}
      {
        (data?.length === 0) ? null : <div className="content__card">
          {data.map(img => <Card url={img.url} />)}
        </div>
      }

    </div>
  )
}


export default Body;