import http from "./httpService";

export function getOtp(data) {
    return http.post('/user/get-opt', data)
}

export function checkOtp(data) {
    return http.post('/user/check-opt', data)
}