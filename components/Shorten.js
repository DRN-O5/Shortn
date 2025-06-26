"use client";
import React from "react";
import { useState, handleChange } from "react";
import Link from "next/link";

const Shorten = () => {
  const [url, setUrl] = useState("");
  const [shorturl, setShorturl] = useState("");
  const [generated, setGenerated] = useState("");

  const generate = async (e) => {
    e.preventDefault();
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      url: url,
      shorturl: shorturl,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("/api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`);
        setUrl("");
        setShorturl("");
        console.log(result);
        alert(result.message);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <div className="mx-auto max-w-3xl mt-10">
        <form className="flex flex-col items-center justify-center p-10 border-1 border-blue-300 bg-blue-300 rounded-2xl">
          <h1 className="text-black flex items-center text-2xl p-2 mb-2 font-bold">
            Generate your short URL
          </h1>
          <input
            value={url}
            type="text"
            placeholder="Enter your long URL"
            className="p-2 border border-gray-300 rounded w-2/3 mb-4 bg-white"
            onChange={(e) => setUrl(e.target.value)}
          />
          <input
            value={shorturl}
            type="text"
            placeholder="Enter your prefered short URL"
            className="p-2 border border-gray-300 rounded w-2/3 mb-4 bg-white"
            onChange={(e) => setShorturl(e.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-700 text-white px-4 py-2 rounded-4xl hover:bg-blue-800 text-bold font-bold"
            onClick={generate}
          >
            Shorten URL
          </button>
          <div>
            <p className="text-black mt-5 p-2 border-1 rounded-2xl w-xl flex items-center justify-center bg-blue-100 border-blue-100">
              {" "}
              <span className="text-blue-700 font-bold">
                {generated ? <Link target="_blank" href={generated}>{generated}</Link> : "No URL generated yet"}
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Shorten;
