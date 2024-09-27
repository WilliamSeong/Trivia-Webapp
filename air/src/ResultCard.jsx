import he from "he";
import {Fragment, useState} from "react";
import Styled from "styled-components";
import RedDot from "./assets/reddot.png"
import GreenDot from "./assets/greendot.png"

const StyledDiv = Styled.div`
    background-color: ${props => props.theme.colors};
    width: 75vw;
    height: auto;
    margin: auto;
    border-radius: 100px;
    padding: 10px;
`;

export default function ResultCard ({review, results, progress}) {
    const [Index, setIndex] = useState(0);

    const len = review.length - 1;

    function Increment() {
        if (Index === len) {
            console.log(Index);
        } else {
            setIndex(Index + 1);
            console.log(Index);
        }
    }
    function Decrement() {
        if (Index === 0) {
            console.log(Index);
        } else {
            setIndex(Index - 1);
            console.log(Index);
        }
    }
    return (
        <>
            {
                (review[Index][3] === "true") ? (
                    <StyledDiv theme={{colors: "#d3ffee"}}>
                        <div>
                            {
                                progress.map((item, index) => (
                                    <Fragment key={index} style={{margin: 0}}>
                                        {(item === " X ") ? (
                                            <span style={{ display: "inline-block" }}>
                                                &nbsp;
                                                <img style={{ width: "2vw" }} src={RedDot} alt="red dot" />
                                                &nbsp;
                                            </span>
                                        ) : (item === " ✓ ") ? (
                                            <span style={{display: "inline-block"}}>
                                                &nbsp;
                                                <img style={{width: "2vw"}} src={GreenDot} alt="green dot"/>
                                                &nbsp;
                                            </span>
                                        ) : (
                                            <span style={{display: "inline-block"}}>
                                                <h1>&nbsp;?&nbsp;</h1>
                                            </span>
                                        )}
                                        {(index % 10 === 9) && <div style={{clear: "both"}}></div>}
                                    </Fragment>
                                ))
                            }
                        </div>
                        <button onClick={() => Decrement()}>&lt;</button>
                        <span style={{color: "black"}}>{Index + 1}</span>
                        <button onClick={() => Increment()}>&gt;</button>
                        <h1>{he.decode(review[Index][0])}</h1>
                        <h2>{he.decode(review[Index][1])}&#10004;</h2>
                        {
                            review[Index][2].map((item) => (
                                <div key={item}>
                                    <h2>{he.decode(item)}</h2>
                                </div>
                            ))
                        }

                    </StyledDiv>
                ) : (
                    <StyledDiv theme={{colors: "#ffbfbf"}}>
                        <div>
                            {
                                progress.map((item, index) => (
                                    <Fragment key={index} style={{margin: 0}}>
                                        {(item === " X ") ? (
                                            <span style={{ display: "inline-block" }}>
                                                &nbsp;
                                                <img style={{ width: "2vw" }} src={RedDot} alt="red dot" />
                                                &nbsp;
                                            </span>
                                        ) : (item === " ✓ ") ? (
                                            <span style={{ display: "inline-block" }}>
                                                &nbsp;
                                                <img style={{ width: "2vw" }} src={GreenDot} alt="green dot" />
                                                &nbsp;
                                            </span>
                                        ) : (
                                            <span style={{ display: "inline-block" }}>
                                                <h1>&nbsp;?&nbsp;</h1>
                                            </span>
                                        )}
                                        {(index % 10 === 9) && <div style={{ clear: "both" }}></div>}
                                    </Fragment>
                                ))
                            }
                        </div>
                        <button onClick={() => Decrement()}>&lt;</button>
                        <span style={{color: "black"}}>{Index + 1}</span>
                        <button onClick={() => Increment()}>&gt;</button>
                        <h1>{he.decode(review[Index][0])}</h1>
                        <h2>{he.decode(review[Index][1])}&#10004;</h2>
                        {
                            review[Index][2].map((item) => (
                                <div key={item}>
                                    <h2>{he.decode(item)}</h2>
                                </div>
                            ))
                        }
                    </StyledDiv>
                )
            }
        </>
    )
}