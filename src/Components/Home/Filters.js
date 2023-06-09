import React, { useState, Fragment } from 'react'
import { Listbox, Transition  } from '@headlessui/react'
import { CgSelect} from "react-icons/cg";



const YearData = [
    { title: "Sort By Year" },
    { title: "1700-1800" },
    { title: "1800-1900" },
    { title: "1900-2000" },
    { title: "2000-2010" },
    { title: " 2010-2030" },

]
const TimesData = [
    { title: "Sort By Hours" },
    { title: "1 - 5 Hours" },
    { title: "5 - 10 Hours" },
    { title: "10 - 15 Hours" },
    { title: "15 - 20 Hours" },
]

const RatesData = [
    { title: "Sort By Rates" },
    { title: "1 Star" },
    { title: "2 Star" },
    { title: "3 Star" },
    { title: "4 Star" },
    { title: "5 Star" },
]

function Filters() {
    const [catergory, setCatergory] = useState({ title: "category " });
    const [year, setYear] = useState(YearData[0]);
    const [time, setTime] = useState(TimesData[0]);
    const [rate, setRate] = useState(RatesData[0]);

    const Filter = [
        {
            value: catergory,
            onChange: setCatergory,
           
        },
        {
            value: year,
            onChange: setYear,
            items: YearData,
        },
        {
            value: time,
            onChange: setTime,
            items: TimesData,
        },
        {
            value: rate,
            onChange: setRate,
            items: RatesData,
        }
    ]
    return (
        <div className='my-6 bg-dry border text-dryGray border-gray-800 grid md:grid-cols-4 grid-cols-2 lg:gap-12 gap-2 rounded p-6'>
            {
                Filter.map((item, index) => (
                    <Listbox key={index} value={item.value} onChange={item.onChange}>
                        <div className="relative">
                            <Listbox.Button className="relative w-full  text-white border border-gray-800 bg-main rounded-lg cursor-default py-4 pl-6 pr-10 text-left  text-xs">
                                <span className="block truncate">{item.value.title}</span>
                                <span className="absolute inset-y-0 right-0 flex items-center pointer-events-none pr-2">
                                    <CgSelect className="h-5 w-5" ariaHidden="true"/>
                                </span>
                            </Listbox.Button>
                            <Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
                                <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-main rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                    {
                                        item.items.map((iterm, i) => (
                                            <Listbox.Option key={i} className={({active}) => `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                                active ? 'text-white bg-gray-900' : 'text-main'}`} value={iterm}>
                                                
                                           </Listbox.Option>
                                        ))

                                    }
                                </Listbox.Options>
                            </Transition>
                        </div>
                    </Listbox>
                ))
            }
        </div>
    )
}

export default Filters