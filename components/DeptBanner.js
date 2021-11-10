export default function DeptBanner({ latestNews, latestEvents }) {
  return (
    <>
      <div className="grid gap-5 grid-cols-12 h-auto lg:h-auto">
        <div className="col-start-1 col-end-13 bg-gray-deptHeader min-h-full">
          <div className="grid gap-5 grid-cols-12 min-h-full">
            <div className="col-span-full lg:col-start-2 lg:col-end-7 bg-bt bg-cover text-center sm:text-2xl font-bold flex">
              <div className="m-auto font-heading lg:text-3xl text-blue-ramaiah">
                DEPARTMENT OF <br />
                BIOTECHNOLOGY
              </div>
            </div>
            <div className="col-span-12 lg:col-start-7 lg:col-end-12 inline-flex text-center text-blue-ramaiah">
              <div className="w-1/2 lg:w-1/2 lg:mr-2">
                <span className="text-xl font-heading ">LATEST NEWS</span>
                <div className="bg-gradient-to-r to-orange-ramaiah from-pink-ramaiah text-white">
                  {latestNews.map((newsItem, i) => {
                    return (
                      <>
                        <span key={i} className="font-heading lg:text-2xl">
                          {newsItem.publishedDate.substring(8, 10)}
                        </span>
                        <span> Nov 2021 </span>
                      </>
                    );
                  })}
                </div>
                <div className="border-b-[1px] border-l-[1px] border-r-[1px] border-gray-500">
                  {latestNews.map((newsItem, i) => {
                    return (
                      <div key={i}>
                        <a href={newsItem.linkURL}> {newsItem.title}</a>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="w-1/2 lg:w-1/2 lg:mr-2 ">
                <span className="text-xl font-heading">LATEST EVENTS</span>
                <div className="bg-gradient-to-r to-orange-ramaiah from-pink-ramaiah text-white">
                  {latestEvents.map((eventItem, i) => {
                    return (
                      <>
                        <span key={i} className="font-heading lg:text-2xl">
                          {eventItem.eventStartDate.substring(8, 10)}
                        </span>
                        <span> Nov 2021 </span>
                      </>
                    );
                  })}
                </div>
                <div className="border-b-[1px] border-l-[1px] border-r-[1px] border-gray-500">
                  {latestEvents.map((eventItem, i) => {
                    return (
                      <div key={i}>
                        <a href={eventItem.linkURL}> {eventItem.title}</a>
                      </div>
                    );
                  })}
                </div>
              </div>
              {/* <div className="w-1/2 bg-gray-600">Latest Events</div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
