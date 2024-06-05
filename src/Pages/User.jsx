import List from "../Components/List"
import data from "../data/index.json"

function User() {
  return (
  <div className="content">
    <h1 className="text-4xl font-bold mb-10">Nastavení účtu</h1>
    <div className="flex flex-wrap">
      <List />
      <div className="user rounded-md w-full md:ml-10">
        <div className="p-5 md:p-10">
          <div className="mb-8">
            <h3 className="text-lg md:text-xl font-bold mb-5 md:mb-10">Kontaktní údaje</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {data?.inputs?.map((item, index) => {
                return (
                  <div key={index} className="w-full">
                    <div className="relative w-full h-10 mb-4">
                      <input
                      type="text"
                      className={item.inputClass}
                      placeholder={item.label}
                      />
                      <label className={item.labelClass}>
                      {item.label}
                        <span className="text-[#dd3333]">*</span>
                      </label>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        <h3 className="text-lg md:text-xl font-bold mb-5 md:mb-10">Fakturační údaje</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {data?.inputs2?.map((item, index) => {
          return (
              <div key={index} className="w-full">
                <div className="relative w-full h-10 mb-4">
                  <input
                  type="text"
                  className={item.inputClass}
                  placeholder={item.label}
                  />
                  <label className={item.labelClass}>
                  {item.label}
                    <span className="text-[#dd3333]">*</span>
                  </label>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col md:flex-row">
        <button className="btn rounded-md">Uložit změny</button>
        </div>
        </div>  
      </div>
    </div>
  </div>
  )
}

export default User;