import React from "react";
import a from "../../images/memory1.png";
import b from "../../images/memory2.png";
import c from "../../images/memory3.png";
import d from "../../images/memory4.png";
import e from "../../images/memory5.png";
import f from "../../images/memory6.png";
import "./memories.css";  // Importing the CSS file

const Memories = () => {
    return (
        <div>
            <h1>Memories</h1>
            <section
                className="a"
                style={{
                    backgroundImage: `url(${a})`,
                }}
            ></section>
            <div className="images-container">
                <section
                    className="b"
                    style={{
                        backgroundImage: `url(${b})`,
                    }}
                ></section>
                <section
                    className="c"
                    style={{
                        backgroundImage: `url(${c})`,
                    }}
                ></section>
                <section
                    className="d"
                    style={{
                        backgroundImage: `url(${d})`,
                    }}
                ></section>
                <section
                    className="e"
                    style={{
                        backgroundImage: `url(${e})`,
                    }}
                ></section>
                <section
                    className="f"
                    style={{
                        backgroundImage: `url(${f})`,
                    }}
                ></section>
            </div>
        </div>
    );
}

export default Memories;
