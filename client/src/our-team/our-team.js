import React, { useState, useRef } from "react";

import "./our-team/our-team.sass";

import OurTeamCard from "./out-team-card";
import LandingButtons from "../landing-buttons/landing-buttons";

import person1 from "./our-team-img/person1.png";
import person2 from "./our-team-img/person2.png";
import person3 from "./our-team-img/person3.png";
import person4 from "./our-team-img/person4.png";
import person5 from "./our-team-img/person5.png";

function OurTeam() {
    const [teamState, setTeamState] = useState(0);

    return (
        <div className="our-team" id="our-team">
            <div className="container">
                {teamState == 0 && (
                    <div className="our-team__state1">
                        <div className="our-team__upper">
                            <OurTeamCard
                                image={person1}
                                name={"Davis Carder"}
                                position={"Super duper position"}
                            />
                            <OurTeamCard
                                image={person2}
                                name={"Maren Press"}
                                position={"Super duper position"}
                            />

                            <div className="our-team__upper_info">
                                <h2 className="our-team__upper_info_header">
                                    Our Team
                                </h2>
                                <div className="our-team__upper_info_description">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Doloribus, non. Voluptas
                                    magnam explicabo fugit reiciendis.
                                </div>
                            </div>
                        </div>

                        <div className="our-team__lower">
                            <OurTeamCard
                                image={person3}
                                name={"Randy Rosser"}
                                position={"Super duper position"}
                            />
                            <OurTeamCard
                                image={person4}
                                name={"Haylie Donin"}
                                position={"Super duper position"}
                            />
                            <OurTeamCard
                                image={person5}
                                name={"Miracle Bator"}
                                position={"Super duper position"}
                            />
                        </div>
                    </div>
                )}
                {teamState == 1 && (
                    <div className="our-team__state2">
                        <div className="our-team__upper">
                            <div className="our-team__upper_info">
                                <h2 className="our-team__upper_info_header">
                                    Our Team
                                </h2>
                                <div className="our-team__upper_info_description">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Doloribus, non. Voluptas
                                    magnam explicabo fugit reiciendis.
                                </div>
                            </div>
                            <OurTeamCard
                                image={person2}
                                name={"Maren Press"}
                                position={"Super duper position"}
                            />
                            <OurTeamCard
                                image={person3}
                                name={"Randy Rosser"}
                                position={"Super duper position"}
                            />
                        </div>

                        <div className="our-team__lower">
                            <OurTeamCard
                                image={person4}
                                name={"Haylie Donin"}
                                position={"Super duper position"}
                            />
                            <OurTeamCard
                                image={person5}
                                name={"Miracle Bator"}
                                position={"Super duper position"}
                            />
                            <OurTeamCard
                                image={person1}
                                name={"Davis Carder"}
                                position={"Super duper position"}
                            />
                        </div>
                    </div>
                )}
                {teamState == 2 && (
                    <div className="our-team__state3">
                        <div className="our-team__upper">
                            <OurTeamCard
                                image={person3}
                                name={"Randy Rosser"}
                                position={"Super duper position"}
                            />
                            <div className="our-team__upper_info">
                                <h2 className="our-team__upper_info_header">
                                    Our Team
                                </h2>
                                <div className="our-team__upper_info_description">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Doloribus, non. Voluptas
                                    magnam explicabo fugit reiciendis.
                                </div>
                            </div>
                            <OurTeamCard
                                image={person4}
                                name={"Haylie Donin"}
                                position={"Super duper position"}
                            />
                        </div>

                        <div className="our-team__lower">
                            <OurTeamCard
                                image={person5}
                                name={"Miracle Bator"}
                                position={"Super duper position"}
                            />
                            <OurTeamCard
                                image={person1}
                                name={"Davis Carder"}
                                position={"Super duper position"}
                            />
                            <OurTeamCard
                                image={person2}
                                name={"Maren Press"}
                                position={"Super duper position"}
                            />
                        </div>
                    </div>
                )}
                <div className="our-team__buttons">
                    <LandingButtons setTeamState={setTeamState} isTeam={true} />
                </div>
            </div>
        </div>
    );
}

export default OurTeam;
