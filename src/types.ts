export interface ItvShowState {
  label: string;
  id: number;
}

export interface ItvShowApi {
  score: number;
  show: {
    name: string;
    id: string;
  };
}

export interface fetchTvShowApi {
  name: string;
  image: {
    [string: string]: string;
  };
  summary: string;
  premiered: string;
}
