import { IVideoItem } from '../components/video_item/video_item';

export interface IProp {}

export class Youtube {
  key: string;
  getRequestOptions: object;

  constructor(key: string) {
    this.key = key;
    this.getRequestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
  }

  async mostPopular(): Promise<IVideoItem> {
    return fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${this.key}`, this.getRequestOptions)
      .then(response => response.json())
      .then(result => result.items)
      .catch(error => console.log('error', error));
  }

  async search(text: string): Promise<IVideoItem> {
    return (
      fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${text}&type=video&key=${this.key}`, this.getRequestOptions)
        .then(response => response.json())
        .then(response => response.items.map((item: { id: { videoId: string } }) => ({ ...item, id: item.id.videoId })))
        //.then(response => response.items.map((item: { id: { videoId: string } }) => ({ ...item, id: item.id.videoId })))
        .then(result => result)
        .catch(error => console.log('error', error))
    );
  }
}
