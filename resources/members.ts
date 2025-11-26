import type { HTML } from './discos'
import { html } from './discos'

export interface Member {
  name: string
  charge: HTML // 担当
  profile: HTML // 自己紹介
}

const sakamotop = {
  name: 'さかもとP',
  charge: html('なばかりプロデューサー兼テイジゴビールタイマー'),
  profile: html('ビール大好き！！！！！！'),
}

const noBeerK = {
  name: 'ビール飲まない社員K',
  charge: html(`人の褌や自分の褌で相撲を取ったりする
<br>
（主にトラックメーカー）`),
  profile: html(`ビールじゃなくてハイボールなら飲みます。
<br>
定時後ハイボールタイム、よろしこ`),
}

const yukizo = {
  name: 'yokizo',
  charge: html(`えらそーにする`),
  profile: html('リハビリ中で戦力になれないので、えらそーにしてます。'),
}

const mako = {
  name: '管理人MAKO',
  charge: html('サイトの管理とお茶汲み'),
  profile: html(`サイトの管理人です。
<br>
音楽作れないのでホムペ担当になりました。
<br>
昔懐かしい雰囲気のサイトを作って行きたいと思います！`),
}

const shacho = {
  name: 'WestTail',
  charge: html('ProTools見習い'),
  profile: html(`周囲の素晴らしい才能をリスペクトしつつ頑張りたいと思います`),
}

const kero = {
  name: 'ケロ',
  charge: html('ミュージさん'),
  profile: html(`ウィットに富んだフレキシブルな音楽でナウなヤングにバカウケ`),
}

const gutch = {
  name: 'Gutch',
  charge: html(`曲に効果音を突っ込む`),
  profile: html('ビール飲めない！！！！！'),
}

const meeyan = {
  name: 'みーやん',
  charge: html(`ハモるの大好きはもりびと`),
  profile: html('ボーカルじゃなくてコーラスが得意'),
}

const taiwan = {
  name: '台湾豆乳を飲む人',
  charge: `作業に参加しない係`,
  profile: 'ﾆﾎﾝｺﾞワカリマセン',
}

const makky = {
  name: 'マッキー',
  charge: html(`BPM200以上`),
  profile: html('お酒大好き！！！！！！'),
}

const ag = {
  name: 'Ag+',
  charge: html(`テレアポ`),
  profile: html('どこでもアポとります！'),
}

export const members: Member[] = [
  sakamotop,
  noBeerK,
  yukizo,
  shacho,
  kero,
  gutch,
  meeyan,
  taiwan,
  makky,
  ag,
  mako,
]

export default members
