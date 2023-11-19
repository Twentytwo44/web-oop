import React, { useState} from "react";
import { hero } from "/src/data";
import { Card } from "/src/components/hero/card";
import '/src/components/hero/hero.css';

export const Hero = () => {
    const [items, setItems] = useState(hero);
    return (
        <>
                <section className="hero">
                   
                    <div className="container">
                        {items.map((item) => {
                            return <Card key={item.id} items={item}></Card>
                         
                        })}
                    
                    </div>
                </section>
        </>
    )
}