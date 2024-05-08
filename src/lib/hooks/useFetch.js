function useFetch(url, options) {
  return new Promise((resolve, reject) => {
    fetch(url, options)
      .then((resp) => resolve(resp.json()))
      .catch((err) => reject(err));
  });
}

export default useFetch;
