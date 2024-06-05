import List from "../Components/List"
import data from "../data/index.json"

function Invoice() {
  return (
  <div className="content">
    <h1 className="text-4xl font-bold mb-10">Faktury</h1>
    <div className="flex flex-wrap">
      <List />
      <table className="table-auto bg-[#ffffff] w-full 2xl:w-3/4 rounded-md ml-0 md:ml-10 mb-5 p-2 md:p-5">
        <thead className="border-b border-[#DFE2E2]">
          <tr className="text-xs md:text-sm lg:text-base">
            <th className="text-left p-1 md:p-2 lg:p-4">Číslo faktury</th>
            <th className="text-left p-1 md:p-2 lg:p-4">Číslo objednávky</th>
            <th className="text-left p-1 md:p-2 lg:p-4">Cena celkem</th>
            <th className="text-right p-1 md:p-2 lg:p-4">Stažení</th>
          </tr>
        </thead>
        {data?.invoices?.map((item, index) => (
          <tbody key={index} className="text-xs md:text-sm lg:text-base">
            <tr>
              <td className="text-[#737373] p-1 md:p-2 lg:p-4">{item.inv}</td>
              <td className="text-[#737373] p-1 md:p-2 lg:p-4">{item.order}</td>
              <td className="text-[#737373] p-1 md:p-2 lg:p-4">-{item.price}</td>
              <td className="text-[#3B82F6] text-xs md:text-sm lg-text-xs text-right p-1 md:p-2 lg:p-4">
                <a href="#">
                  <i className="fa-solid fa-download"></i>
                  <span className="ml-1 md:ml-2">Stáhnout</span>
                </a>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  </div>
  )
}

export default Invoice;