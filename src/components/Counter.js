import React, { useState, useEffect } from "react";
import "./Counter.css";
import axios from "axios";
const Counter = () => {
    const [counter, setCounter] = useState(0);
    const [myJoke, setJoke] = useState({});
    const incrementNumber = () => {
        setCounter(counter + 1);
    };
    const httpCall = async () => {
        const response = await axios.get("https://api.jokes.one/jod", {
            "Content-type": "application/json",
            'Access-Control-Allow-Origin': '*'

        });
        const results = JSON.stringify(response);
        const parsedData = JSON.parse(results);
        console.log("results", results);
        const { jokes: [jokeObj] } = parsedData.data.contents;
        if (jokeObj) {
            console.log("setting joke");
            setJoke(jokeObj.joke);
            console.log("this is the joke", myJoke);
            return myJoke;
        } else {
            setJoke("no joke yet haha");
        }
    };
    const clearJokes = () => { setJoke({}); };
    useEffect(() => {

    }, [myJoke]);
    console.log();
    return (
        <div className="main-div" >
            <h1 className="header">Counter Joke View</h1>
            <div className="counter-div">
                <h3 className="counter-header">Functional Counter</h3>
                <button className="btn-counter" onClick={() => incrementNumber()}>click me to increase the number</button>
                <div className="cnt-dsp">{counter}</div>
            </div>

            <div className="joke-div">
                <h3>Click on the button below for the joke of the day</h3>
                <button onClick={() => httpCall()}>Jokes on you ;)</button>
                <p>{myJoke.text}</p>
            </div>
            <div className="clear-joke">
                <h3>Done with the jokes click the button below to clear it.</h3>
                <button onClick={() => clearJokes()}>get the joke off my screen</button>
                {myJoke.text ? <></> : <p>you cleared the jokes</p>}
            </div>
        </div >
    );
};

export default Counter;