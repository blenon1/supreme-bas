export const Message = ({ label, placeholder, onChange }) => {
    return (
        <div className="text-sm w-full ">
            <label className="text-border font-semibold">{label}</label>
            <textarea className="w-full h-40 mt-2 p-6 border border-border rounded "
                placeholder={placeholder}
                onChange={onChange}></textarea>
        </div>
    );
};

export const Select = ({ label, options, onchange }) => {
    return (
        <>
            <div className="text-sm w-full">
                <label className="text-border font-semibold">{label}</label>
                <select className="w-full mt-2 px-6 py-4 bg-main border border-border rounded" onChange={onchange}>
                    {
                        options.map((opt, i) => (
                            <option key={i} value={opt.value}>{opt.name}</option>
                        ))
                    }
                </select>
            </div></>

    );
}
export const Input = ({ label, placeholder, type, bg }) => {
    return (
        <>
            <div className="text-sm w-full">
                <label className="text-border font-semibold">{label}</label>
                <input required t
                ype={type} 
                placeholder={placeholder} 
                className={`w-full text-sm mt-2 p-4 border-border rounded text-white ${
                    bg ? 'bg-main': "bg-dry"
                }`}/>
            </div>
            </>
    )
            }