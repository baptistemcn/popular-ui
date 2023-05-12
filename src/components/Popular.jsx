export const Popular = () => {
  const languages = ["All", "JavaScript", "Ruby", "Java", "CSS", "Python"];

  return (
    <select>
      {languages.map((language) => (
        <option key={language} value={language}>
          {language}
        </option>
      ))}
    </select>
  );
};
