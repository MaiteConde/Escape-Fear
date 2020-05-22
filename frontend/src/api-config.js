let backendHost;
if(process.env.NODE_ENV==="production"){
    backendHost='https://social-media-api2.herokuapp.com/'
}else{
    backendHost='http://localhost:8000/api/v1'
}

export const API_URL = `${backendHost}/`;
export const IMAGES_URL = `${backendHost}/images/`;