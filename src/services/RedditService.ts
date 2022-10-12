import axios from "axios";
import RedditResponse from "../models/RedditResponse";

/*const key: string = process.env.REACT_APP_GIPHY_KEY || ""; */

export const getRedditResults = (): Promise<RedditResponse> => {
  return axios.get("https://www.reddit.com/r/aww/.json").then((response) => {
    return response.data; //.data is not part of the response parameter, if any - it is Axios keyword.
  });
};

/*export const getGifsBySearchTerm = (
  searchTerm: string
): Promise<GiphyResponse> => {
  return axios
    .get("https://api.giphy.com/v1/gifs/search", {
      params: { api_key: key, q: searchTerm },
    })
    .then((response) => {
      return response.data;
    });
}; */
