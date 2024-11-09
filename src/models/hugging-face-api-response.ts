import { Sentiment } from "./sentiment";

export type HuggingFaceResponse = {
  // Define the structure of the API response
  [index: number]: Sentiment[];
}