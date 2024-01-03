// 可以通过工具将json数据转为ts类型
export interface VideoItem {
  aid: number;
  author: Author;
  bvid: string;
  corner_mark: number;
  ctime: number;
  duration: number;
  enable_vt: number;
  hot_desc: string;
  pic: string;
  pubdate: number;
  stat: Stat;
  tags: string[];
  title: string;
  tname: string;
  type_id: number;
}

export interface Author {
  face: string;
  mid: number;
  name: string;
}

export interface Stat {
  aid: number;
  coin: number;
  danmaku: number;
  dislike: number;
  favorite: number;
  his_rank: number;
  like: number;
  now_rank: number;
  reply: number;
  share: number;
  view: number;
  vt: number;
  vv: number;
}
