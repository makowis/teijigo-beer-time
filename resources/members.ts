type HTML = string;

export interface Member {
  name: string;
  charge: HTML; // 担当
  profile: HTML; // 自己紹介
}

const sakamotop = {
  name: 'さかもとP',
  charge: 'なばかりプロデューサー兼テイジゴビールタイマー',
  profile: 'ビール大好き！！！！！！',
};

const noBeerK = {
  name: 'ビール飲まない社員K',
  charge: `人の褌や自分の褌で相撲を取ったりする
<br>
（主にトラックメーカー）`,
  profile: `ビールじゃなくてハイボールなら飲みます。
<br>
定時後ハイボールタイム、よろしこ`,
};

const yukizo = {
  name: 'yokizo',
  charge: `えらそーにする`,
  profile: 'リハビリ中で戦力になれないので、えらそーにしてます。',
};

const mako = {
  name: '管理人MAKO',
  charge: 'サイトの管理とお茶汲み',
  profile: `サイトの管理人です。
<br>
音楽作れないのでホムペ担当になりました。
<br>
昔懐かしい雰囲気のサイトを作って行きたいと思います！`,
};

const shacho = {
  name: 'WestTail',
  charge: 'ProTools見習い',
  profile: `周囲の素晴らしい才能をリスペクトしつつ頑張りたいと思います`,
};

const kero = {
  name: 'ケロ',
  charge: 'ミュージさん',
  profile: `ウィットに富んだフレキシブルな音楽でナウなヤングにバカウケ`,
};

const gutch = {
  name: 'Gutch',
  charge: `曲に効果音を突っ込む`,
  profile: 'ビール飲めない！！！！！',
};

const meeyan = {
  name: 'みーやん',
  charge: `ハモるの大好きはもりびと`,
  profile: 'ボーカルじゃなくてコーラスが得意',
};

const taiwan = {
  name: '台湾豆乳を飲む人',
  charge: `作業に参加しない係`,
  profile: 'ﾆﾎﾝｺﾞワカリマセン',
};

const makky = {
  name: 'マッキー',
  charge: `BPM200以上`,
  profile: 'お酒大好き！！！！！！',
};

const ag = {
  name: 'Ag+',
  charge: `テレアポ`,
  profile: 'どこでもアポとります！',
};

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
];

export default members;
