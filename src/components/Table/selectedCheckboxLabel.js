const selectedCheckboxLabel = (count) => {
  if (count) return `Selected ${count}`;

  return 'None Selected';
};

export default selectedCheckboxLabel;
