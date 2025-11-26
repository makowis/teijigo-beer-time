import type { HTML } from './types'
import { html } from './types'

export type { HTML }
export { html }

export interface Disco {
  title: string // アルバム名
  release: string // リリース日
  displayCredit: boolean // クレジットを表示するか
  youtubeEmbedUrl: string // クロスフェード動画の埋め込みURL
  tracks: TrackInfo[] // 曲情報
}

export interface TrackInfo {
  no: number // No
  name: string // 曲名
  artist: string // アーティスト
  credit?: HTML // クレジット
}

export const libreate: Disco = {
  title: '6th Mini Album 「LIBERATE」',
  release: '2024.10.27',
  displayCredit: true,
  youtubeEmbedUrl:
    'https://www.youtube.com/embed/_ilOox8tQLU?si=vd2RgtYa-roJTja1',
  tracks: [
    {
      no: 1,
      name: '遮断機の向こう側',
      artist: 'comorebi notes',
      credit: html(`作詞・作曲：comorebi notes
               <br />
               歌：AIきりたん (NEUTRINO)`),
    },
    {
      no: 2,
      name: 'きのこ生活',
      artist: 'hayu',
      credit: html(`作詞・作曲：hayu
               <br />
               歌：Synthesizer V AI Megpoid`),
    },
    {
      no: 3,
      name: '秋空',
      artist: 'ビール飲まない社員K',
      credit: html(`作詞・作曲：ビール飲まない社員K
               <br />
               歌：MYK-IV (VoiSona)`),
    },
  ],
}

export const rising: Disco = {
  title: '5th Mini Album 「RISING」',
  release: '2023.10.29',
  displayCredit: true,
  youtubeEmbedUrl: 'https://www.youtube.com/embed/y83GedNBXfQ',
  tracks: [
    {
      no: 1,
      name: 'RISING',
      artist: 'マッキー',
      credit: '作詞・作曲・歌：マッキー',
    },
    {
      no: 2,
      name: 'たまご生活',
      artist: 'hayu',
      credit: html('作曲：hayu'),
    },
    {
      no: 3,
      name: 'Game is...',
      artist: 'ビール飲まない社員K',
      credit: html(`作詞・作曲：ビール飲まない社員K
               <br />
               歌：知声、MYK-IV (VoiSona)`),
    },
    {
      no: 4,
      name: 'はじまりのうた',
      artist: 'comorebi notes',
      credit: html(`作詞・作曲：comorebi notes
               <br />
               歌：花隈千冬 (Synthesizer V Al)`),
    },
  ],
}

export const battle: Disco = {
  title: '4th Mini Album 「BATTLE」',
  release: '2021.4.25',
  displayCredit: true,
  youtubeEmbedUrl: 'https://www.youtube.com/embed/29UhRyb4hJg',
  tracks: [
    {
      no: 1,
      name: '作業中にソフトが落ちた',
      artist: 'マッキー',
      credit: '作詞・作曲・歌：マッキー',
    },
    {
      no: 2,
      name: 'ノラネコ大戦争',
      artist: 'u13',
      credit: html('作曲：u13'),
    },
    {
      no: 3,
      name: 'anatra falcata',
      artist: 'comorebi notes',
      credit: html('作曲：comorebi notes'),
    },
    {
      no: 4,
      name: '旋風',
      artist: 'ビール飲まない社員K',
      credit: html(`作曲：ビール飲まない社員K`),
    },
  ],
}

export const recycle: Disco = {
  title: '3nd Mini Album 「RECYCLE」',
  release: '2019.10.27',
  displayCredit: true,
  youtubeEmbedUrl: 'https://www.youtube.com/embed/L_DAzJq4tgg',
  tracks: [
    {
      no: 1,
      name: 'paellero',
      artist: 'comorebi notes',
      credit: html('作詞・作曲・歌：comorebi notes'),
    },
    {
      no: 2,
      name: 'Carry on',
      artist: 'マッキー',
      credit: html(`作詞・作曲：マッキー
               <br />
               歌：マッキー feat. IA`),
    },
    {
      no: 3,
      name: '大都会フォーエバー',
      artist: 'comorebi notes',
      credit: html(`作詞・作曲：comorebi notes
               <br />
               歌：IA`),
    },
    {
      no: 4,
      name: 'tanabatight',
      artist: 'u13',
      credit: html(`作曲：u13`),
    },
  ],
}

export const ma_start: Disco = {
  title: '2nd Mini Album 「START」',
  release: '2019.04.27',
  displayCredit: true,
  youtubeEmbedUrl: 'https://www.youtube.com/embed/IxTdbkoGM-Q',
  tracks: [
    {
      no: 1,
      name: '桜風狂想',
      artist: 'Pecan nene.',
      credit: html(`作曲：ビール飲まない社員K<br />
               作詞：ビール飲まない社員K、みーやん<br />
               歌：みーやん`),
    },
    {
      no: 2,
      name: '未来ヒーロー',
      artist: 'マッキー',
      credit: html(`作詞・作曲：マッキー<br />
               歌：IA`),
    },
    {
      no: 3,
      name: 'ストロボサイン',
      artist: 'tan3-16',
      credit: html(`作詞・作曲：u13<br />
               編曲：comorebi notes<br />
               歌：フナモトアユミ`),
    },
    {
      no: 4,
      name: '桜花',
      artist: '珍珠奶茶',
      credit: html(`企画：WestTail<br />
               作曲：comorebi notes<br />
               作詞：台湾豆乳を飲む人<br />
               歌：Shiho (the Clock Hands)`),
    },
  ],
}

export const hope: Disco = {
  title: '1st Mini Album「HOPE」',
  release: '2018.10.28',
  displayCredit: false,
  youtubeEmbedUrl: 'https://www.youtube.com/embed/KE3It-tas0Y?rel=0',
  tracks: [
    {
      no: 1,
      name: 'Alive',
      artist: 'WestTail feat. ruha',
    },
    {
      no: 2,
      name: 'cresc.',
      artist: 'きむらじお feat.フナモトアユミ',
    },
    {
      no: 3,
      name: '瞬間',
      artist: '山口真央 feat. すぴか',
    },
    {
      no: 4,
      name: 'Calling',
      artist: 'NY2 feat. フナモトアユミ',
    },
    {
      no: 5,
      name: 'Diary',
      artist: 'u13 feat. フナモトアユミ',
    },
    {
      no: 6,
      name: 'ハルカユーグレハナヤイデ',
      artist: 'comorebi notes',
    },
  ],
}
