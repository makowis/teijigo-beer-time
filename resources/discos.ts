type HTML = string;

export interface Disco {
  title: string // アルバム名
  tracks: TrackInfo[] // 曲情報
}

export interface TrackInfo {
  no: number; // No
  name: string; // 曲名
  artist: string; // アーティスト
  credit?: HTML; // クレジット
}


const recycle = {
  title: '3nd Mini Album 「RECYCLE」',
  tracks: [
    {
      no: 1,
      name: 'paellero',
      artist: 'comorebi notes',
      credit: '作詞・作曲・歌：comorebi notes'
    },
    {
      no: 2,
      name: 'Carry on',
      artist: 'マッキー',
      credit: `作詞・作曲：マッキー
               <br />
               歌：マッキー feat. IA`,
    },
    {
      no: 3,
      name: '大都会フォーエバー',
      artist: 'comorebi notes',
      credit: `作詞・作曲：comorebi notes
               <br />
               歌：IA`
    },
    {
      no: 4,
      name: 'tanabatight',
      artist: 'u13',
      credit: `作曲：u13`
    },
  ]
};

export const discos: Disco[] = [
  recycle,
];

export default recycle;
