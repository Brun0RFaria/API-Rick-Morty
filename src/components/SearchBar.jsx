function SearchBar({ value, onChange, placeholder }) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      style={{
        width: "100%",
        padding: "12px",
        borderRadius: "8px",
      }}
    />
  );
}

export default SearchBar;