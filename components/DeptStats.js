function DeptStats() {
  return (
    <>
      <div className="grid gap-5 grid-cols-12">
        {/* <div className="col-start-2 col-end-12 lg:col-start-4 lg:col-end-10 h-24 bg-gradient-to-r to-orange-ramaiah from-pink-ramaiah rounded-br-2xl rounded-bl-2xl shadow-md inline-flex justify-between lg:justify-evenly space-x-2 text-white"> */}
        <div className="hidden lg:inline-flex lg:col-start-4 lg:col-end-10 h-24 bg-gradient-to-r to-orange-ramaiah from-pink-ramaiah rounded-br-2xl rounded-bl-2xl shadow-md justify-between lg:justify-evenly space-x-2 text-white">
          <div className="flex flex-col self-center text-center">
            <div className="font-heading text-3xl">3 Years</div>
            <div>NBA Accredited</div>
          </div>
          <div className="flex flex-col self-center text-center">
            <div className="font-heading text-3xl">3 Years</div>
            <div>NBA Accredited</div>
          </div>
          <div className="flex flex-col self-center text-center">
            <div className="font-heading text-3xl">3 Years</div>
            <div>NBA Accredited</div>
          </div>
          <div className="flex flex-col self-center text-center">
            <div className="font-heading text-3xl">3 Years</div>
            <div>NBA Accredited</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DeptStats;
