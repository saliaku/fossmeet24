import PutBg from './PutBg'

const TimeCardv4 = ({ last, eventName, time, speaker, speakerImg, color }) => {
  return (
    <div
      className="timeCard 
                        w-full
                        b-red-100
                        flex
        "
    >
      <div className="timeCardTime md:basis-2/12 basis-3/12 md:text-lg text-md pt-2 flex justify-center">
        {time}
      </div>
      <div className="timeCardShapes md:basis-1/12 basis-1/12 relative flex justify-center">
        <div
          className="rounded-full h-4 w-4 bg-black
                                mt-4 
                                absolute
                "
        />
        {!last && <div className="bg-black h-full w-1 mt-4" />}
      </div>
      <div
        className="timeCardEvent 
                            md:basis-9/12 basis-8/12
                            md:text-lg text-md
                            md:mb-4 mb-6
                            border-black border-2
            "
      >
        <div className="event-name p-2 md:pl-6 pl-4 ">{eventName}</div>
        <div className="speaker p-2 flex items-center bg-black text-sm text-slate-100">
          <PutBg speakerImg={speakerImg} color={color} />
          {speaker}
        </div>
      </div>
    </div>
  )
}

export default TimeCardv4
