let backendHost;
if(process.env.NODE_ENV==="production"){
    backendHost='https://escape-fear-api.herokuapp.com/api/v1'
}else{
    backendHost='http://localhost:8000/api/v1'
}

export const API_URL = `${backendHost}/`;
export const IMAGES_URL = `${backendHost}/images/`;
