import React, { useState} from "react";
import { popular } from "/src/data";
import { Newscard } from '/src/components/news/newscard';
import '/src/components/news/news.css';

export const News = () => {
    const [items, setItems] = useState(popular);
    return (
        <>
                <section className="news">
                   
                    <div className="container">
                        {items.map((item) => {
                            return <Newscard key={item.id} items={item}></Newscard>
                         
                        })}
                    
                    </div>
                </section>
        </>
    )
}