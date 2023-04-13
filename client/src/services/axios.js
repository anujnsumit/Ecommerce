import axios from 'axios';

const API_URL =process.env.REACT_APP_API 

const Service = axios.create({
    baseURL: API_URL,
    headers: {
        Accept: 'application/json',
    },
});

Service.interceptors.request.use(
    config => {
        const accessToken = localStorage.getItem('accessToken');
        if (accessToken) {
            config.headers.common = { Authorization: `Bearer ${accessToken}` };
        }
        return config;
    },
    error => {
        Promise.reject(error.response || error.message);
    }
);

Service.interceptors.response.use(
    response => {
        return response;
    },
   async(error) => {
        let originalRequest = error.config;
        let refreshToken = localStorage.getItem('refreshToken');
        // const username = EmailDecoder(); // decode email from jwt token subject
        if (
            refreshToken &&
            error.response.status === 403 &&
            !originalRequest._retry 
            // &&
            // username
        ) {
            originalRequest._retry = true;
            return await axios
                .post(`${API_URL}/authentication/refresh`, {
                    refreshToken: refreshToken,
                    // username,
                })
                .then(res => {
                    if (res.status === 200) {
                        localStorage.setItem(
                            'accessToken',
                            res.data.accessToken
                        );
                        localStorage.setItem(
                            'refreshToken',
                            res.data.refreshToken
                        );

                        originalRequest.headers[
                            'Authorization'
                        ] = `Bearer ${res.data.accessToken}`;

                        return axios(originalRequest);
                    }
                })
                .catch(() => {
                    localStorage.clear();
                    // location.reload();
                });
        }
        return Promise.reject(error.response || error.message);
    }
);

export default Service;