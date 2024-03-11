class UnsplashApi {
    constructor() {
        this.baseURL = 'https://api.unsplash.com/';
        this.clientID = 'Client-ID ';
        this.axiosNesne = axios.create({
            baseURL: this.baseURL,
            headers: {
                Authorization: this.clientID
            },
            params: {
                query: 'animal',
                count: 1
               
            }
        });
    }
    async randomResimGetir() {
        try {
            const resimResponse = await this.axiosNesne.get('/photos/random');
            console.log(resimResponse.data[0].urls.regular);
            return resimResponse.data[0].urls.regular;
        } catch (err) {
            console.log(err.response);
            return 'https://miro.medium.com/v2/resize:fit:1358/1*MIrLuyiCDpdNbnFYxYlKtA.png';
        }

    }
}