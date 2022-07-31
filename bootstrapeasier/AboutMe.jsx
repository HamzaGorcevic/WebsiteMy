import { useState } from "react"


export default function AboutMe() {
    const [show, setShow] = useState(false)
    const [mode,setMode] = useState(false)
    
    return <div className="container-fluid bg-primary d-flex justify-content-center align-items-center" style={{ height: '99vh'}}>
        <div className="d-flex container justify-content-between">
            <div className ={`AboutMeText rounded ${mode ? 'dark':'light'}`}>
                <h1 className="text-warning">Some random title</h1>
                <div className="bg-warning mb-4 rounded" style={{height:3}}></div>
                <p  style={{fontWeight:'500'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima aspernatur perferendis nisi dolorum quia natus? Ducimus ipsum aspernatur in laborum obcaecati, dolore error tempora dignissimos officiis, explicabo, ut qui vel?
                    <span id="showMoreContent">{show ? 'Minima aspernatur perferendis nisi. Minima aspernatur dolorum quia natus? Ducimus ipsum aspernatur in laborum obcaecati':''}</span>
                </p>
                <li className="showMore w-25 " onClick={() => { setShow(!show) }} >{show ? 'Show less' : 'Show more'}</li>
                <div className=" w-100 d-flex flex-row-reverse divBtns">
                    <button onClick={()=>{setMode(!mode)}} className="btn btn-outline-secondary mode m-2">Change mode</button>
                    
                </div>
            </div>
            <div className="hackerDiv container bg-warning p-2 m-0 rounded" style={{width:'50%',height:'50%'}}>
                <img style={{width:"100%"}} className="hacker rounded" src="https://npr.brightspotcdn.com/dims4/default/d6e92b8/2147483647/strip/true/crop/960x640+0+0/resize/880x587!/quality/90/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2Flegacy%2Fsites%2Fkunm%2Ffiles%2F201801%2FAnonymous.jpg" alt="" />
            </div>
        </div>

    </div>
}