'use client'

import { Speaker } from "@/sanity/schemas/speaker";
import { useState } from "react";
import Carousel from "../carousel/carousel";
import Speakersbox from "../common/Speakersbox";


export default function HomeContainer({
    speakers
}: {
    speakers: Speaker[]
}) {
    const [showModal, setShowModal] = useState(false)
    const [currWorkshop, setCurrWorkshop] = useState({});
    const [currSpeaker, setCurrSpeaker] = useState({});

    return (
        <>
            <br></br>
            {/* <Carousel>
                <Workshopbox
                    setCurrWorkshop={setCurrWorkshop}
                    setShowModal={setShowModal}
                    title={'FFmpeg Workshop'}
                    image={'/r1.png'}
                    date={'27 Jan'}
                    time={'3hrs'}
                    description={
                        'Kerala Rustaceans is a group that aims to create a community of Rust enthusiasts who can learn, collaborate and share knowledge on projects related to Rust. The group also aims to promote the use of Rust in the state and to attract more developers to the language. They usually organise events, meetups, and hackathons to discuss and learn about the latest developments in Rust'
                    }
                    organizer={'CSEA'}
                    organizerLogo={'/csea-small.png'}
                />
                <Workshopbox
                    setShowModal={setShowModal}
                    setCurrWorkshop={setCurrWorkshop}
                    title={'FFmpeg Workshop'}
                    image={'/r1.png'}
                    date={'27 Jan'}
                    time={'3hrs'}
                    description={
                        'Kerala Rustaceans is a group that aims to create a community of Rust enthusiasts who can learn, collaborate and share knowledge on projects related to Rust. The group also aims to promote the use of Rust in the state and to attract more developers to the language. They usually organise events, meetups, and hackathons to discuss and learn about the latest developments in Rust'
                    }
                    organizer={'CSEA'}
                    organizerLogo={'/csea-small.png'}
                />
                <Workshopbox
                    setCurrWorkshop={setCurrWorkshop}
                    setShowModal={setShowModal}
                    title={'FFmpeg Workshop'}
                    image={'/r1.png'}
                    date={'27 Jan'}
                    time={'3hrs'}
                    description={
                        'Kerala Rustaceans is a group that aims to create a community of Rust enthusiasts who can learn, collaborate and share knowledge on projects related to Rust. The group also aims to promote the use of Rust in the state and to attract more developers to the language. They usually organise events, meetups, and hackathons to discuss and learn about the latest developments in Rust'
                    }
                    organizer={'CSEA'}
                    organizerLogo={'/csea-small.png'}
                />
                <Workshopbox
                    setCurrWorkshop={setCurrWorkshop}
                    setShowModal={setShowModal}
                    title={'FFmpeg Workshop'}
                    image={'/r1.png'}
                    date={'27 Jan'}
                    time={'3hrs'}
                    description={
                        'Kerala Rustaceans is a group that aims to create a community of Rust enthusiasts who can learn, collaborate and share knowledge on projects related to Rust. The group also aims to promote the use of Rust in the state and to attract more developers to the language. They usually organise events, meetups, and hackathons to discuss and learn about the latest developments in Rust'
                    }
                    organizer={'CSEA'}
                    organizerLogo={'/csea-small.png'}
                />
            </Carousel> */}
            <br></br>
            <Carousel>
                {speakers.map((speaker, idx) => (
                    <Speakersbox
                        key={idx}
                        setCurrSpeaker={setCurrSpeaker}
                        setShowModal={setShowModal}
                        speaker={speaker} />
                ))}
            </Carousel>
        </>
    )
}