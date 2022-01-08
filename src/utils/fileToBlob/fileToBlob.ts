export const fileToBlob = () => {
  const makeFileToBlob = (fileContent: File) => {
    return window.URL.createObjectURL(
      new Blob([fileContent], {
        type: fileContent.type,
      }),
    );
  };

  const revokeBlobURL = (url: string) => window.URL.revokeObjectURL(url);

  return { makeFileToBlob, revokeBlobURL };
};
