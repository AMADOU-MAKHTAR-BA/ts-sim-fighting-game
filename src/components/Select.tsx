
const Select = ({ label, name, value, onChange, options }: TypeSelectProps) => {

  return (
    <div className="w-full m-1.5 p-1.5">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-0.5">
        {label}
      </label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-2 border border-gray-300 rounded-xl
                   bg-white text-gray-800
                   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                   hover:border-blue-400
                   transition duration-200 ease-in-out shadow-sm"
      >
        <option value="" disabled>
          -- Sélectionner --
        </option>
        {options.map((opt, index) => (
          <option key={index} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;