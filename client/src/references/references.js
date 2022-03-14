import React, { useState } from "react";
import "./references-sass/references.sass";

import ReferencesCard from "./references-card";
import LandingButtons from "../landing-buttons/landing-buttons";

function References() {
    const [referenceState, setReferenceState] = useState(0);

    return (
        <div className="references" id="references">
            <div className="container">
                {referenceState == 0 && (
                    <div className="references-state1">
                        <h2 className="references-header">References</h2>
                        <div className="references-description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Purus rutrum donec ultricies cras id ac.
                        </div>
                        <div className="references-cards">
                            <ReferencesCard
                                reference={
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique in pellentesque ultrices et massa neque, convallis lorem. Erat proin in posuere dui accumsan lorem. Diam nunc scelerisque mi vestibulum scelerisque mi ac nisi. Dictumst nunc placerat ultricies pretium."
                                }
                                name={"Emerson Aminoff"}
                                realEstate={"3 bedroom apartmentt in Madrid"}
                            />
                            <ReferencesCard
                                reference={
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique in pellentesque ultrices et massa neque, convallis lorem. Erat proin in posuere dui accumsan lorem. Diam nunc scelerisque mi vestibulum scelerisque mi ac nisi. Dictumst nunc placerat ultricies pretium."
                                }
                                name={"Jocelyn Stanton"}
                                realEstate={"2 bedroom apartmentt in Barcelona"}
                            />
                        </div>
                    </div>
                )}

                {referenceState == 1 && (
                    <div className="references-state2">
                        <h2 className="references-header">References</h2>
                        <div className="references-description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Purus rutrum donec ultricies cras id ac.
                        </div>
                        <div className="references-cards">
                            <ReferencesCard
                                reference={
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique in pellentesque ultrices et massa neque, convallis lorem. Erat proin in posuere dui accumsan lorem. Diam nunc scelerisque mi vestibulum scelerisque mi ac nisi. Dictumst nunc placerat ultricies pretium."
                                }
                                name={"Randy Rosser"}
                                realEstate={"3 bedroom apartmentt in Barcelona"}
                            />
                            <ReferencesCard
                                reference={
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique in pellentesque ultrices et massa neque, convallis lorem. Erat proin in posuere dui accumsan lorem. Diam nunc scelerisque mi vestibulum scelerisque mi ac nisi. Dictumst nunc placerat ultricies pretium."
                                }
                                name={"Haylie Donin"}
                                realEstate={"5 bedroom apartmentt in Madrid"}
                            />
                        </div>
                    </div>
                )}

                {referenceState == 2 && (
                    <div className="references-state2">
                        <h2 className="references-header">References</h2>
                        <div className="references-description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Purus rutrum donec ultricies cras id ac.
                        </div>
                        <div className="references-cards">
                            <ReferencesCard
                                reference={
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique in pellentesque ultrices et massa neque, convallis lorem. Erat proin in posuere dui accumsan lorem. Diam nunc scelerisque mi vestibulum scelerisque mi ac nisi. Dictumst nunc placerat ultricies pretium."
                                }
                                name={"Maren Press"}
                                realEstate={"10 bedroom apartmentt in Madrid"}
                            />
                            <ReferencesCard
                                reference={
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique in pellentesque ultrices et massa neque, convallis lorem. Erat proin in posuere dui accumsan lorem. Diam nunc scelerisque mi vestibulum scelerisque mi ac nisi. Dictumst nunc placerat ultricies pretium."
                                }
                                name={"Miracle Bator"}
                                realEstate={"1 bedroom apartmentt in Barcelona"}
                            />
                        </div>
                    </div>
                )}

                <div className="references-buttons">
                    <LandingButtons
                        setReferenceState={setReferenceState}
                        isReference={true}
                    />
                </div>
            </div>
        </div>
    );
}

export default References;
