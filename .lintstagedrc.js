module.exports = {
  '*.{ts,js}?(x)': (filenames) => {
    const files = filenames.join(' ');
    return [
      `yarn type-check`,
      `eslint ${files} --fix`,
      `git add ${files}`,
    ];
  },
};
