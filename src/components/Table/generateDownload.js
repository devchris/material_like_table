const generateDownload = (data, selected) => {
  let alertString = '';

  Object.keys(selected).forEach((key) => {
    if (selected[key]) {
      const downloadable = data.find((object) => object.name === key);
      if (downloadable.status === 'available') {
        alertString += downloadable.device;
        alertString += '\n';
        alertString += downloadable.path;
        alertString += '\n\n';
      }
    }
  });

  return alertString;
};

export default generateDownload;
