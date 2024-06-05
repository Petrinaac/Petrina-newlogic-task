import data from "../data/index.json"
import List from "../Components/List"

function Order() {
  return (
    <div className="content m-30">
      <h1 className="text-4xl font-bold mb-10">Moje objednávky</h1>
      <div className="flex flex-wrap">
        <List />
        <div className="2xl:w-3/4 w-full">
          {data?.orders?.map((item, index) => {
            return (
            <div key={index} className="order rounded-md mb-5 p-3 md:p-5 w-full md:ml-10">
              <div className="flex flex-col md:flex-row justify-between mb-5">
                <h3 className="text-lg md:text-xl font-bold">Číslo objednávky: {item.number}2200245834</h3>
                <span className="text-xs font-bold text-[#16A34A] text-left md:text-right">Zaplaceno</span>
              </div>
              <div className="flex flex-col md:flex-row justify-between mb-5">
                <div className="text-left mb-3 md:mb-0">
                  <span className="text-sm md:text-base"><span className="font-medium">Datum objednávky:</span><span className="text-[#737373]"> {item.date}</span></span><br />
                  <span className="text-sm md:text-base"><span className="font-medium">Cena celkem:</span><span className="text-[#737373]"> {item.price} Kč</span></span>
                </div>
                <div className="text-left md:text-right">
                  <span className="text-sm md:text-base text-[#3B82F6]">Potřebujete poradit?</span><br />
                  <span className="text-sm md:text-base">314 004 540 (po-pá: 8:00-16:00)</span>
                </div>
              </div>
              <div className="flex flex-col md:flex-row">
                <button className="btn rounded-md mb-2 md:mb-0 md:mr-5">Detail</button>
                <button className="flex items-center justify-center"><span className="mr-2">Zopakovat</span><i className="fa-solid fa-arrow-rotate-left"></i></button>
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default Order;