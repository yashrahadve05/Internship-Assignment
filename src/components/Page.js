import React from "react";
import { useState, useEffect } from "react";
import PageItems from './PageItems'

function Page() {

    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('https://api.sampleapis.com/beers/ale');
            const data = await res.json();
            setData(data);
        };
        fetchData();
    }, []);


    return (
        <>
            <div className="container">
                <div className="grid grid-cols-4 gap-4 align-top">
                    {data.map((data) => {
                        return <div className="col-md-4" key={data.id}>
                            <PageItems price={data.price} name={data.name} average={data.rating.average} reviews={data.rating.reviews} image={data.image} />
                        </div>
                    })}
                </div>
            </div>
        </>
    );
}

export default Page;
