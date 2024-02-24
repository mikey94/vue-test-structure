import { get_axios } from "./service";

const getCryptoAssetsApi = () => get_axios("https://api.coincap.io/v2/assets");

export { getCryptoAssetsApi };
