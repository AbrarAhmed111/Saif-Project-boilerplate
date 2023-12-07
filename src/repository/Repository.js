// chrome.exe --user-data-dir="C://Chrome dev session" --disable-web-security
// We are creating this Repository to use url and token everywhere
import axios from "axios";
const baseDomain = "http://192.168.18.106:10000/";
const baseURL = `${baseDomain}`;



let axiosObj;
axiosObj = axios.create({
    baseURL,
});

axiosObj.interceptors.request.use(
  (config) => {
    // Dynamically set the token for each request
    const ls = JSON.parse(localStorage.getItem("authUser"));
    console.log("ls__", ls);
    console.log("ls", ls?.user.AccessToken);
    const token = ls?.user.AccessToken || "";
    config.headers.token = token;
    return config;
  },
  (error) => {
    console.log("ERROR: ", error)
    return Promise.reject(error);  
   
  }
);
export default axiosObj;


// const getToken = () => {                  //this is token used in header for security purpose
//     let ls = JSON.parse(localStorage.getItem("authUser"));
//     // console.log("ls__", ls);
//     console.log("ls", ls?.user.AccessToken);
//     if (ls && ls?.user.AccessToken != null) {
//       return ls?.user.AccessToken;
//     } else {
//       return "";
//     }
//   };