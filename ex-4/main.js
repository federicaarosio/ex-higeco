function fetchData() {
    const apiUrl = 'https://testing.higeco.com/';
    const apiToken = '81b1acef983022068f2c38d6dd7c9bf8';

    axios.get(apiUrl, {
        headers: {
            Authorization: `Bearer ${apiToken}`
        }
    })
    .then(response => {
        console.log('Data:', response.data);
    })
    .catch(error => {
        console.error(error);
    });
}

fetchData();