// ☆ レアリティ定義（dinos_data.js の先頭に追加）
const RARITY = {
  N: "N",   // ノーマル
  R: "R",   // レア
  SR: "SR", // スーパーレア
  UR: "UR", // ウルトラレア
  OR: "OR", // オリジナル(最高レア)
};


const DINOS_THEROPOD_LARGE = [
  {
    id: "t_rex",
    name: "ティラノサウルス",
    group: "獣脚類・大型肉食",
    rarity: RARITY.UR,
    isOriginal: false,
    isReward: false,
    owned: false,
    raised: false,
    image: "img/dinos/ティラノサウルスidle.png",
    classification: "獣脚類",
    habitat: "北アメリカ（アメリカ・カナダ）",
    era: "白亜紀後期",
    size: "全長 約12m",
    description: "超有名な「恐竜の王様」。非常に強いアゴを持ち、大型恐竜でも倒せたと考えられている。",
    trivia: "かむ力は現生動物トップクラスで、骨ごとかみ砕けたかも？",
    comment: "ガオー！ぼくが いちばん！"
  },
  {
    id: "spinosaurus",
    name: "スピノサウルス",
    group: "獣脚類・大型肉食",
    rarity: RARITY.UR,
    isOriginal: false,
    isReward: false,
    owned: false,
    raised: false,
    image: "img/dinos/スピノサウルスidle.png",
    classification: "獣脚類",
    habitat: "北アフリカ（エジプト・モロッコなど）",
    era: "白亜紀前期",
    size: "全長 約15m",
    description: "背中の大きな「せびれ」が目立つ恐竜。水辺に住み、魚を捕まえていた可能性が高い。",
    trivia: "泳ぐのが得意だった説もある、めずらしい恐竜。",
    comment: "さかな だいすき！"
  },
  {
    id: "giganotosaurus",
    name: "ギガノトサウルス",
    group: "獣脚類・大型肉食",
    rarity: RARITY.UR,
    isOriginal: false,
    isReward: false,
    owned: false,
    raised: false,
    image: "img/dinos/ギガノトサウルスidle.png",
    classification: "獣脚類",
    habitat: "アルゼンチン",
    era: "白亜紀後期",
    size: "全長 約13m",
    description: "南米最大クラスの肉食恐竜。ティラノと同じくらいの大きさだった。",
    trivia: "名前の意味は「巨大なトカゲ」。",
    comment: "でっかいぞー！"
  },
  {
    id: "carnotaurus",
    name: "カルノタウルス",
    group: "獣脚類・大型肉食",
    rarity: RARITY.SR,
    isOriginal: false,
    isReward: false,
    owned: false,
    raised: false,
    image: "img/dinos/カルノタウルスidle.png",
    classification: "獣脚類",
    habitat: "アルゼンチン",
    era: "白亜紀後期",
    size: "全長 約8m",
    description: "頭に小さな角を持つ肉食恐竜。とても速く走れたと考えられている。",
    trivia: "前あしがとても小さい恐竜の一種。",
    comment: "つのが チャームポイント！"
  },
  {
    id: "acrocanthosaurus",
    name: "アクロカントサウルス",
    group: "獣脚類・大型肉食",
    rarity: RARITY.R,
    isOriginal: false,
    isReward: false,
    owned: false,
    raised: false,
    image: "img/dinos/アクロカントサウルスidle.png",
    classification: "獣脚類",
    habitat: "アメリカ",
    era: "白亜紀前期",
    size: "全長 約11m",
    description: "背中が高く盛り上がった恐竜。ゴツゴツした体つきが特徴。",
    trivia: "背骨が高く伸びていた理由はいまだ研究中。",
    comment: "せなか ゴツゴツ！"
  },
  {
    id: "allosaurus",
    name: "アロサウルス",
    group: "獣脚類・大型肉食",
    rarity: RARITY.SR,
    isOriginal: false,
    isReward: false,
    owned: false,
    raised: false,
    image: "img/dinos/アロサウルスidle.png",
    classification: "獣脚類",
    habitat: "アメリカ・ポルトガル",
    era: "ジュラ紀後期",
    size: "全長 約9m",
    description: "「ジュラ紀の王者」と呼ばれる有名恐竜。群れで狩りをしていた可能性もある。",
    trivia: "映画にもよく登場するスター恐竜。",
    comment: "ぼくも スター！"
  },
  {
    id: "tarbosaurus",
    name: "タルボサウルス",
    group: "獣脚類・大型肉食",
    rarity: RARITY.R,
    isOriginal: false,
    isReward: false,
    owned: false,
    raised: false,
    image: "img/dinos/タルボサウルスidle.png",
    classification: "獣脚類",
    habitat: "モンゴル",
    era: "白亜紀後期",
    size: "全長 約10m",
    description: "ティラノに似たアジアの大型肉食恐竜。",
    trivia: "ティラノのいとこのような存在といわれる。",
    comment: "アジアの おうさま！"
  },
  {
    id: "megalosaurus",
    name: "メガロサウルス",
    group: "獣脚類・大型肉食",
    rarity: RARITY.R,
    isOriginal: false,
    isReward: false,
    owned: false,
    raised: false,
    image: "img/dinos/メガロサウルスidle.png",
    classification: "獣脚類",
    habitat: "イギリス",
    era: "ジュラ紀中期",
    size: "全長 約9m",
    description: "初めて名前がつけられた恐竜の一種。",
    trivia: "「恐竜」の歴史はこの恐竜から始まった。",
    comment: "なまえ いちばんのベテラン！"
  },
  {
    id: "majangasaurus",
    name: "マジュンガサウルス",
    group: "獣脚類・大型肉食",
    rarity: RARITY.N,
    isOriginal: false,
    isReward: false,
    owned: false,
    raised: false,
    image: "img/dinos/マジュンガサウルスidle.png",
    classification: "獣脚類",
    habitat: "マダガスカル島",
    era: "白亜紀後期",
    size: "",
    description: "頭に小さな角を持つ肉食恐竜。がっしりした体つき。",
    trivia: "仲間をおそった形跡があり、共食いしていた可能性がある。",
    comment: "ボク ちょっと ワイルド。"
  },
  {
    id: "rajasaurus",
    name: "ラジャサウルス",
    group: "獣脚類・大型肉食",
    rarity: RARITY.N,
    isOriginal: false,
    isReward: false,
    owned: false,
    raised: false,
    image: "img/dinos/ラジャサウルスidle.png",
    classification: "獣脚類",
    habitat: "インド",
    era: "白亜紀後期",
    size: "全長 約7m",
    description: "頭に短いツノを持つインドの肉食恐竜。",
    trivia: "名前の意味は「王様トカゲ」。",
    comment: "インドの おうさま だぞ！"
  },
  {
    id: "ceratosaurus",
    name: "ケラトサウルス",
    group: "獣脚類・大型肉食",
    rarity: RARITY.R,
    isOriginal: false,
    isReward: false,
    owned: false,
    raised: false,
    image: "img/dinos/ケラトサウルスidle.png",
    classification: "獣脚類",
    habitat: "北アメリカ",
    era: "ジュラ紀後期",
    size: "全長 約6m",
    description: "鼻のツノが特徴の肉食恐竜。",
    trivia: "ワニに似た体つきで、水辺でもくらしていたかも。",
    comment: "ツノで アピール！"
  },
  {
    id: "dilophosaurus",
    name: "ディロフォサウルス",
    group: "獣脚類・大型肉食",
    rarity: RARITY.R,
    isOriginal: false,
    isReward: false,
    owned: false,
    raised: false,
    image: "img/dinos/ディロフォサウルスidle.png",
    classification: "獣脚類",
    habitat: "アメリカ",
    era: "ジュラ紀前期",
    size: "全長 約6m",
    description: "頭に2本のトサカを持つ古い時代の肉食恐竜。",
    trivia: "映画で描かれる毒を吐く設定はフィクション。",
    comment: "どくは ないよ！"
  },
  {
    id: "neovenator",
    name: "ネオヴェナトル",
    group: "獣脚類・大型肉食",
    rarity: RARITY.R,
    isOriginal: false,
    isReward: false,
    owned: false,
    raised: false,
    image: "img/dinos/ネオヴェナトルidle.png",
    classification: "獣脚類",
    habitat: "イギリス",
    era: "白亜紀前期",
    size: "全長 約7.5m",
    description: "軽量でスピード型の肉食恐竜。",
    trivia: "ヨーロッパの代表的な大型肉食恐竜。",
    comment: "すばやく かけぬける！"
  },
  {
    id: "australovenator",
    name: "アウストラロヴェナトル",
    group: "獣脚類・大型肉食",
    rarity: RARITY.R,
    isOriginal: false,
    isReward: false,
    owned: false,
    raised: false,
    image: "img/dinos/アウストラロヴェナトルidle.png",
    classification: "獣脚類",
    habitat: "オーストラリア",
    era: "白亜紀前期",
    size: "全長 約6m",
    description: "オーストラリア最大級の肉食恐竜。",
    trivia: "島大陸オーストラリアのトップハンターだったかも。",
    comment: "ダウンアンダーの はんたー！"
  },
  {
    id: "baryonyx",
    name: "バリオニクス",
    group: "獣脚類・大型肉食",
    rarity: RARITY.SR,
    isOriginal: false,
    isReward: false,
    owned: false,
    raised: false,
    image: "img/dinos/バリオニクスidle.png",
    classification: "獣脚類",
    habitat: "イギリス",
    era: "白亜紀前期",
    size: "全長 約9m",
    description: "大きなカギヅメを持ち、魚をとるのが得意な恐竜。",
    trivia: "胃の中から魚の化石が見つかっている。",
    comment: "つめで つかまえるよ！"
  },
  {
    id: "suchomimus",
    name: "スコミムス",
    group: "獣脚類・大型肉食",
    rarity: RARITY.SR,
    isOriginal: false,
    isReward: false,
    owned: false,
    raised: false,
    image: "img/dinos/スコミムスidle.png",
    classification: "獣脚類",
    habitat: "ニジェール",
    era: "白亜紀前期",
    size: "全長 約11m",
    description: "細長い口と長い前あしを持つ魚食恐竜。",
    trivia: "ワニのようなアゴで魚をとっていたと考えられる。",
    comment: "さかな つかまえるの プロ！"
  },
  {
    id: "sukurosaurus",
    name: "スクオロサウルス",
    group: "獣脚類・大型肉食",
    rarity: RARITY.N,
    isOriginal: false,
    isReward: false,
    owned: false,
    raised: false,
    image: "img/dinos/スクオロサウルスidle.png",
    classification: "獣脚類",
    habitat: "アルゼンチン",
    era: "白亜紀後期",
    size: "",
    description: "南米で見つかった大型肉食恐竜。近年になって知られてきたタイプ。",
    trivia: "ギガノトサウルス類と同じ仲間と考えられている。",
    comment: "これから もっと わかるよ！"
  },
  {
    id: "eocarcharia",
    name: "エオカルカリア",
    group: "獣脚類・大型肉食",
    rarity: RARITY.N,
    isOriginal: false,
    isReward: false,
    owned: false,
    raised: false,
    image: "img/dinos/エオカルカリアidle.png",
    classification: "獣脚類",
    habitat: "ニジェール",
    era: "白亜紀前期",
    size: "",
    description: "カーカロドントサウルスの仲間とされる肉食恐竜。",
    trivia: "巨大肉食恐竜グループの初期メンバー。",
    comment: "おおがた はんたーの ごせんぞ！"
  },
  {
    id: "therizinosaurus",
    name: "テリジノサウルス",
    group: "獣脚類・大型肉食",
    rarity: RARITY.UR,
    isOriginal: false,
    isReward: false,
    owned: false,
    raised: false,
    image: "img/dinos/テリジノサウルスidle.png",
    classification: "獣脚類",
    habitat: "モンゴル",
    era: "白亜紀後期",
    size: "",
    description: "巨大なカマのようなツメを持つ恐竜。見た目はこわいが、草食寄りだったと考えられる。",
    trivia: "つめの長さは1m級ともいわれる。",
    comment: "ツメは こわいけど おやさい はすき。"
  },
  {
    id: "yutyrannus",
    name: "ユウティラヌス",
    group: "獣脚類・大型肉食",
    rarity: RARITY.UR,
    isOriginal: false,
    isReward: false,
    owned: false,
    raised: false,
    image: "img/dinos/ユウティラヌスidle.png",
    classification: "獣脚類",
    habitat: "中国",
    era: "白亜紀前期",
    size: "",
    description: "体に羽毛が生えていた大型肉食恐竜。",
    trivia: "ティラノ類で羽毛が確認されている貴重な例。",
    comment: "モフモフ の おおぐい！"
  },
  {
    id: "torvosaurus",
    name: "トルボサウルス",
    group: "獣脚類・大型肉食",
    rarity: RARITY.N,
    isOriginal: false,
    isReward: false,
    owned: false,
    raised: false,
    image: "img/dinos/トルボサウルスidle.png",
    classification: "獣脚類",
    habitat: "モンゴル",
    era: "",
    size: "",
    description: "ティラノ類に近いアジアの大型肉食恐竜と考えられる。",
    trivia: "砂漠地帯でくらしていた可能性もある。",
    comment: "さばくの ハンター！"
  },
  {
    id: "shaochilong",
    name: "シャオチロン",
    group: "獣脚類・大型肉食",
    rarity: RARITY.N,
    isOriginal: false,
    isReward: false,
    owned: false,
    raised: false,
    image: "img/dinos/シャオチロンidle.png",
    classification: "獣脚類",
    habitat: "中国",
    era: "",
    size: "",
    description: "小型のティラノ類とされる肉食恐竜。",
    trivia: "化石は少なく、まだナゾが多い。",
    comment: "ちびっこ ティラノ？"
  },
  {
    id: "saurophaganax",
    name: "サウロファガナクス",
    group: "獣脚類・大型肉食",
    rarity: RARITY.SR,
    isOriginal: false,
    isReward: false,
    owned: false,
    raised: false,
    image: "img/dinos/サウロファガナクスidle.png",
    classification: "獣脚類",
    habitat: "アメリカ",
    era: "",
    size: "",
    description: "アロサウルス以上のサイズだった可能性のある巨大肉食恐竜。",
    trivia: "名前の意味は「トカゲを食べる者の王」。",
    comment: "なまえ からして つよそう！"
  },
  {
    id: "triganosaurus",
    name: "トリガノサウルス",
    group: "獣脚類・大型肉食",
    rarity: RARITY.N,
    isOriginal: false,
    isReward: false,
    owned: false,
    raised: false,
    image: "img/dinos/トリガノサウルスidle.png",
    classification: "獣脚類",
    habitat: "インド",
    era: "",
    size: "",
    description: "ラジャサウルスに近いグループと考えられている肉食恐竜。",
    trivia: "化石資料が少なく、研究が進行中。",
    comment: "これから がんばって しらべてもらう！"
  }
];
const DINOS_THEROPOD_RAPTOR = [
  {
    id: "velociraptor",
    name: "ヴェロキラプトル",
    group: "獣脚類・ラプトル系",
    rarity: RARITY.UR,
    isOriginal: false,
    isReward: false,
    owned: false,
    raised: false,
    image: "img/dinos/ヴェロキラプトルidle.png",
    classification: "獣脚類",
    habitat: "モンゴル",
    era: "白亜紀後期",
    size: "全長 約2m",
    description: "すばやく動く小型肉食恐竜。鋭いツメで獲物をしとめた。",
    trivia: "映画のイメージより実際はずっと小さい。",
    comment: "すばやさ なら まけない！"
  },
  {
    id: "deinonychus",
    name: "デイノニクス",
    group: "獣脚類・ラプトル系",
    rarity: RARITY.UR,
    isOriginal: false,
    isReward: false,
    owned: false,
    raised: false,
    image: "img/dinos/デイノニクスidle.png",
    classification: "獣脚類",
    habitat: "アメリカ",
    era: "白亜紀前期",
    size: "全長 約3m",
    description: "大きなかぎづめを使って敵にとびかかるハンター。",
    trivia: "集団で狩りをしていた説がある。",
    comment: "チームワーク ばっちり！"
  },
  {
    id: "utahraptor",
    name: "ユタラプトル",
    group: "獣脚類・ラプトル系",
    rarity: RARITY.UR,
    isOriginal: false,
    isReward: false,
    owned: false,
    raised: false,
    image: "img/dinos/ユタラプトルidle.png",
    classification: "獣脚類",
    habitat: "アメリカ",
    era: "白亜紀前期",
    size: "全長 約6〜7m",
    description: "ラプトル類で最大級。中型恐竜も倒せるパワーを持つ。",
    trivia: "ティラノに近い大きさのラプトルとして知られる。",
    comment: "ちいさい なんて いわせない！"
  },
  {
    id: "dromaeosaurus",
    name: "ドロマエオサウルス",
    group: "獣脚類・ラプトル系",
    rarity: RARITY.R,
    isOriginal: false,
    isReward: false,
    owned: false,
    raised: false,
    image: "img/dinos/ドロマエオサウルスidle.png",
    classification: "獣脚類",
    habitat: "北アメリカ",
    era: "白亜紀後期",
    size: "",
    description: "ラプトル類の代表的な仲間。すばやく走れた小型肉食恐竜。",
    trivia: "名前の意味は「すばやく動くトカゲ」。",
    comment: "ダッシュ が とくい！"
  },
  {
    id: "microraptor",
    name: "ミクロラプトル",
    group: "獣脚類・ラプトル系",
    rarity: RARITY.SR,
    isOriginal: false,
    isReward: false,
    owned: false,
    raised: false,
    image: "img/dinos/ミクロラプトルidle.png",
    classification: "獣脚類",
    habitat: "中国",
    era: "白亜紀前期",
    size: "",
    description: "4本の手足すべてに羽のような毛が生えていた小型恐竜。",
    trivia: "木から木へすべるように飛んでいたかもしれない。",
    comment: "とべる きぶん！"
  },
  {
    id: "mei",
    name: "メイ",
    group: "獣脚類・ラプトル系",
    rarity: RARITY.N,
    isOriginal: false,
    isReward: false,
    owned: false,
    raised: false,
    image: "img/dinos/メイidle.png",
    classification: "獣脚類",
    habitat: "中国",
    era: "",
    size: "",
    description: "丸くなって眠っていた姿のまま見つかった小型恐竜。",
    trivia: "「おやすみポーズ」で保存された珍しい化石。",
    comment: "すやすや…おやすみ…"
  },
  {
    id: "sinornithosaurus",
    name: "シノルニトサウルス",
    group: "獣脚類・ラプトル系",
    rarity: RARITY.R,
    isOriginal: false,
    isReward: false,
    owned: false,
    raised: false,
    image: "img/dinos/シノルニトサウルスidle.png",
    classification: "獣脚類",
    habitat: "中国",
    era: "",
    size: "",
    description: "羽毛があったと考えられるラプトル系恐竜。",
    trivia: "鳥にかなり近い姿をしていた可能性が高い。",
    comment: "ほとんど とり さん？"
  },
  {
    id: "compsognathus",
    name: "コンプソグナトゥス",
    group: "獣脚類・ラプトル系",
    rarity: RARITY.SR,
    isOriginal: false,
    isReward: false,
    owned: false,
    raised: false,
    image: "img/dinos/コンプソグナトゥスidle.png",
    classification: "獣脚類",
    habitat: "ドイツ・フランス",
    era: "",
    size: "ネコくらいの大きさ",
    description: "とても小さな肉食恐竜。すばやく動き、小動物をおそった。",
    trivia: "小型恐竜のアイドル的な存在。",
    comment: "ちいさいって すてき！"
  },
  {
    id: "troodon",
    name: "トロオドン",
    group: "獣脚類・ラプトル系",
    rarity: RARITY.SR,
    isOriginal: false,
    isReward: false,
    owned: false,
    raised: false,
    image: "img/dinos/トロオドンidle.png",
    classification: "獣脚類",
    habitat: "北アメリカ",
    era: "",
    size: "",
    description: "知能が高かったと考えられる小型肉食恐竜。",
    trivia: "とても大きな目を持ち、暗いところでもよく見えたかもしれない。",
    comment: "あたま いいよ？"
  },
  {
    id: "mononykus",
    name: "モノニクス",
    group: "獣脚類・ラプトル系",
    rarity: RARITY.N,
    isOriginal: false,
    isReward: false,
    owned: false,
    raised: false,
    image: "img/dinos/モノニクスidle.png",
    classification: "獣脚類",
    habitat: "モンゴル",
    era: "",
    size: "",
    description: "前あしの指が1本だけという、ふしぎな体の恐竜。",
    trivia: "アリクイのように地面をほってエサをとっていたかもしれない。",
    comment: "ゆび 1ほんで じゅうぶん！"
  },
  {
    id: "bambiraptor",
    name: "バンビラプトル",
    group: "獣脚類・ラプトル系",
    rarity: RARITY.R,
    isOriginal: false,
    isReward: false,
    owned: false,
    raised: false,
    image: "img/dinos/バンビラプトルidle.png",
    classification: "獣脚類",
    habitat: "北アメリカ",
    era: "",
    size: "",
    description: "羽毛が生えていたとされる小型ラプトル。",
    trivia: "成長しても小柄な、かわいい姿のハンター。",
    comment: "ちびっこ ハンター だよ！"
  },
  {
    id: "atrociraptor",
    name: "アトロキラプトル",
    group: "獣脚類・ラプトル系",
    rarity: RARITY.R,
    isOriginal: false,
    isReward: false,
    owned: false,
    raised: false,
    image: "img/dinos/アトロキラプトルidle.png",
    classification: "獣脚類",
    habitat: "カナダ",
    era: "",
    size: "",
    description: "すばやい動きで獲物をおそった小型肉食恐竜。",
    trivia: "寒い地域のハンターだった可能性がある。",
    comment: "さむさ なんて へっちゃら！"
  },
  {
    id: "adasaurus",
    name: "アダサウルス",
    group: "獣脚類・ラプトル系",
    rarity: RARITY.N,
    isOriginal: false,
    isReward: false,
    owned: false,
    raised: false,
    image: "img/dinos/アダサウルスidle.png",
    classification: "獣脚類",
    habitat: "モンゴル",
    era: "",
    size: "",
    description: "ラプトル類の中でもマニアックな一種。",
    trivia: "足のツメの形から、激しいキック攻撃をしていたかもしれない。",
    comment: "マニア には たまらない！？"
  },
  {
    id: "deltadromeus",
    name: "デルタドロメウス",
    group: "獣脚類・ラプトル系",
    rarity: RARITY.R,
    isOriginal: false,
    isReward: false,
    owned: false,
    raised: false,
    image: "img/dinos/デルタドロメウスidle.png",
    classification: "獣脚類",
    habitat: "モロッコ",
    era: "",
    size: "",
    description: "脚が長く、走るのがとても得意だったと考えられる恐竜。",
    trivia: "最速クラスの恐竜だった可能性がある。",
    comment: "トップスピード で かけぬける！"
  },
  {
    id: "afrovenator",
    name: "アフロヴェナトル",
    group: "獣脚類・ラプトル系",
    rarity: RARITY.R,
    isOriginal: false,
    isReward: false,
    owned: false,
    raised: false,
    image: "img/dinos/アフロヴェナトルidle.png",
    classification: "獣脚類",
    habitat: "ニジェール",
    era: "",
    size: "",
    description: "アフリカで見つかった中型の肉食恐竜。",
    trivia: "名前の意味は「アフリカの狩人」。",
    comment: "アフリカ の ハンター！"
  },
  {
    id: "carcharodontosaurus",
    name: "カーカロドントサウルス",
    group: "獣脚類・ラプトル系",
    rarity: RARITY.UR,
    isOriginal: false,
    isReward: false,
    owned: false,
    raised: false,
    image: "img/dinos/カーカロドントサウルスidle.png",
    classification: "獣脚類",
    habitat: "北アフリカ",
    era: "",
    size: "",
    description: "巨大ザメに似たギザギザの歯を持つ大型肉食恐竜。",
    trivia: "ティラノサウルスより大きかったかもしれない超大型ハンター。",
    comment: "キラキラ の は が じまん！"
  }
];
const DINOS_SAUROPOD = [
  {
    id: "brachiosaurus",
    name: "ブラキオサウルス",
    group: "竜脚類（首長竜）",
    rarity: RARITY.UR,
    isOriginal: false,
    isReward: false,
    owned: false,
    raised: false,
    image: "img/dinos/ブラキオサウルスidle.png",
    classification: "竜脚類",
    habitat: "アメリカ・タンザニア",
    era: "ジュラ紀後期",
    size: "全長 約23m",
    description: "前あしが後ろあしより長い、めずらしい体型の恐竜。高い木の葉を食べていた。",
    trivia: "キリンみたいに上を向いて食事をしていたかも。",
    comment: "たかい ところ だいすき！"
  },
  {
    id: "diplodocus",
    name: "ディプロドクス",
    group: "竜脚類（首長竜）",
    rarity: RARITY.SR,
    isOriginal: false,
    isReward: false,
    owned: false,
    raised: false,
    image: "img/dinos/ディプロドクスidle.png",
    classification: "竜脚類",
    habitat: "アメリカ",
    era: "ジュラ紀後期",
    size: "全長 約25m",
    description: "ムチのような長いしっぽが特徴の恐竜。",
    trivia: "しっぽで大きな音を出せたかも？",
    comment: "しっぽ びゅーん！"
  },
  {
    id: "apatosaurus",
    name: "アパトサウルス",
    group: "竜脚類（首長竜）",
    rarity: RARITY.SR,
    isOriginal: false,
    isReward: false,
    owned: false,
    raised: false,
    image: "img/dinos/アパトサウルスidle.png",
    classification: "竜脚類",
    habitat: "アメリカ",
    era: "ジュラ紀後期",
    size: "全長 約22m",
    description: "どっしりした体型の草食恐竜。",
    trivia: "昔は「ブロントサウルス」と同じ恐竜だと思われていた時期も。",
    comment: "おもい けど やさしいよ！"
  },
  {
    id: "barosaurus",
    name: "バロサウルス",
    group: "竜脚類（首長竜）",
    rarity: RARITY.R,
    isOriginal: false,
    isReward: false,
    owned: false,
    raised: false,
    image: "img/dinos/バロサウルスidle.png",
    classification: "竜脚類",
    habitat: "アメリカ",
    era: "",
    size: "",
    description: "首としっぽがとても長い竜脚類。",
    trivia: "からだの半分以上が首としっぽだったかも。",
    comment: "ほそなが〜い からだ！"
  },
  {
    id: "argentinosaurus",
    name: "アルゼンチノサウルス",
    group: "竜脚類（首長竜）",
    rarity: RARITY.SR,
    isOriginal: false,
    isReward: false,
    owned: false,
    raised: false,
    image: "img/dinos/アルゼンチノサウルスidle.png",
    classification: "竜脚類",
    habitat: "アルゼンチン",
    era: "白亜紀後期",
    size: "全長 約35m",
    description: "史上最大級といわれる超巨大恐竜。町1つ分くらいの大きさ。",
    trivia: "体重はゾウ10頭以上だったかも。",
    comment: "ぼく でっかい？"
  },
  {
    id: "patagotitan",
    name: "パタゴティタン",
    group: "竜脚類（首長竜）",
    rarity: RARITY.UR,
    isOriginal: false,
    isReward: false,
    owned: false,
    raised: false,
    image: "img/dinos/パタゴティタンidle.png",
    classification: "竜脚類",
    habitat: "アルゼンチン",
    era: "白亜紀後期",
    size: "",
    description: "アルゼンチノサウルスと並ぶ超巨大恐竜。",
    trivia: "博物館に実物大の骨が展示されている。",
    comment: "でっかい ほね が じまん！"
  },
  {
    id: "sauroposeidon",
    name: "サウロポセイドン",
    group: "竜脚類（首長竜）",
    rarity: RARITY.SR,
    isOriginal: false,
    isReward: false,
    owned: false,
    raised: false,
    image: "img/dinos/サウロポセイドンidle.png",
    classification: "竜脚類",
    habitat: "アメリカ",
    era: "白亜紀前期",
    size: "全長 約30m",
    description: "とくに首が長い恐竜として有名。",
    trivia: "頭はビル3階くらいの高さに届いたかも。",
    comment: "てっぺん みえるよ！"
  },
  {
    id: "dreadnoughtus",
    name: "ドレッドノータス",
    group: "竜脚類（首長竜）",
    rarity: RARITY.SR,
    isOriginal: false,
    isReward: false,
    owned: false,
    raised: false,
    image: "img/dinos/ドレッドノータスidle.png",
    classification: "竜脚類",
    habitat: "アルゼンチン",
    era: "",
    size: "",
    description: "名前の意味は「何も恐れない者」。",
    trivia: "ほぼ全身がそろった化石はとても貴重。",
    comment: "なにも こわくないぞ！"
  },
  {
    id: "mamenchisaurus",
    name: "マメンチサウルス",
    group: "竜脚類（首長竜）",
    rarity: RARITY.R,
    isOriginal: false,
    isReward: false,
    owned: false,
    raised: false,
    image: "img/dinos/マメンチサウルスidle.png",
    classification: "竜脚類",
    habitat: "中国",
    era: "",
    size: "",
    description: "首の長さは恐竜界トップクラス。",
    trivia: "首だけで10m近くあったかも。",
    comment: "くび なが〜い！"
  },
  {
    id: "lebbesaurus",
    name: "レッベサウルス",
    group: "竜脚類（首長竜）",
    rarity: RARITY.N,
    isOriginal: false,
    isReward: false,
    owned: false,
    raised: false,
    image: "img/dinos/レッベサウルスidle.png",
    classification: "竜脚類",
    habitat: "北アフリカ",
    era: "",
    size: "",
    description: "背中にトゲのある珍しいタイプの竜脚類。",
    trivia: "トゲは身を守るためだったかも。",
    comment: "トゲトゲ だけど おとなしいよ。"
  },
  {
    id: "futalognkosaurus",
    name: "フタロンコサウルス",
    group: "竜脚類（首長竜）",
    rarity: RARITY.N,
    isOriginal: false,
    isReward: false,
    owned: false,
    raised: false,
    image: "img/dinos/フタロンコサウルスidle.png",
    classification: "竜脚類",
    habitat: "アルゼンチン",
    era: "",
    size: "",
    description: "長くてしなやかな体型の竜脚類。",
    trivia: "大きいけれど、姿はスマート。",
    comment: "すらっと ジャンボ！"
  },
  {
    id: "malawisaurus",
    name: "マラウイサウルス",
    group: "竜脚類（首長竜）",
    rarity: RARITY.N,
    isOriginal: false,
    isReward: false,
    owned: false,
    raised: false,
    image: "img/dinos/マラウイサウルスidle.png",
    classification: "竜脚類",
    habitat: "マラウイ",
    era: "",
    size: "",
    description: "アフリカの竜脚類。",
    trivia: "名前のまま「マラウイの恐竜」。",
    comment: "アフリカ から こんにちは！"
  },
  {
    id: "amargasaurus",
    name: "アマルガサウルス",
    group: "竜脚類（首長竜）",
    rarity: RARITY.SR,
    isOriginal: false,
    isReward: false,
    owned: false,
    raised: false,
    image: "img/dinos/アマルガサウルスidle.png",
    classification: "竜脚類",
    habitat: "アルゼンチン",
    era: "",
    size: "",
    description: "首に2列のトゲがある、とても個性的な竜脚類。",
    trivia: "トゲのあいだに皮ふが張っていたかもしれない。",
    comment: "でこぼこ ネック が トレードマーク！"
  },
  {
    id: "dicraeosaurus",
    name: "ディクラエオサウルス",
    group: "竜脚類（首長竜）",
    rarity: RARITY.R,
    isOriginal: false,
    isReward: false,
    owned: false,
    raised: false,
    image: "img/dinos/ディクラエオサウルスidle.png",
    classification: "竜脚類",
    habitat: "タンザニア",
    era: "",
    size: "",
    description: "首にV字のトゲがある竜脚類。",
    trivia: "首のトゲは筋肉を支える土台だったかも。",
    comment: "くびの トゲが じまん！"
  },
  {
    id: "saltasaurus",
    name: "サルタサウルス",
    group: "竜脚類（首長竜）",
    rarity: RARITY.R,
    isOriginal: false,
    isReward: false,
    owned: false,
    raised: false,
    image: "img/dinos/サルタサウルスidle.png",
    classification: "竜脚類",
    habitat: "アルゼンチン",
    era: "",
    size: "",
    description: "小型でよろいを持つ竜脚類。",
    trivia: "たまごから生まれた赤ちゃんの化石が有名。",
    comment: "ちいさくても ガードかたいよ！"
  },
  {
    id: "leinkunasaurus",
    name: "レイアロサウルス",
    group: "竜脚類（首長竜）",
    rarity: RARITY.N,
    isOriginal: false,
    isReward: false,
    owned: false,
    raised: false,
    image: "img/dinos/レイアロサウルスidle.png",
    classification: "竜脚類",
    habitat: "南アメリカ",
    era: "",
    size: "",
    description: "サルタサウルス類の仲間とされる竜脚類。",
    trivia: "まだ研究中で、ナゾが多い。",
    comment: "これからの けんきゅう に きたい！"
  }
];
const DINOS_ORNITHOPOD = [
  {
    id: "parasaurolophus",
    name: "パラサウロロフス",
    group: "鳥脚類（草食恐竜）",
    rarity: RARITY.UR,
    isOriginal: false,
    isReward: false,
    owned: false,
    raised: false,
    image: "img/dinos/パラサウロロフスidle.png",
    classification: "鳥脚類",
    habitat: "北アメリカ・アジア",
    era: "白亜紀後期",
    size: "全長 約10m",
    description: "頭の長いトサカが特徴。声を出して仲間と連絡していたかも。",
    trivia: "トサカはラッパのような役目。",
    comment: "ピーーー！"
  },
  {
    id: "corythosaurus",
    name: "コリトサウルス",
    group: "鳥脚類（草食恐竜）",
    rarity: RARITY.R,
    isOriginal: false,
    isReward: false,
    owned: false,
    raised: false,
    image: "img/dinos/コリトサウルスidle.png",
    classification: "鳥脚類",
    habitat: "カナダ",
    era: "",
    size: "",
    description: "ツノのようなトサカを持つ鳥脚類。",
    trivia: "トサカで音をひびかせていたかもしれない。",
    comment: "トサカで メロディ♪"
  },
  {
    id: "lambeosaurus",
    name: "ランベオサウルス",
    group: "鳥脚類（草食恐竜）",
    rarity: RARITY.SR,
    isOriginal: false,
    isReward: false,
    owned: false,
    raised: false,
    image: "img/dinos/ランベオサウルスidle.png",
    classification: "鳥脚類",
    habitat: "カナダ",
    era: "",
    size: "",
    description: "頭のトサカで音を出した可能性がある鳥脚類。",
    trivia: "群れのなかで合図を送りあっていたかも。",
    comment: "トサカで コール＆レスポンス！"
  },
  {
    id: "gryposaurus",
    name: "グリポサウルス",
    group: "鳥脚類（草食恐竜）",
    rarity: RARITY.N,
    isOriginal: false,
    isReward: false,
    owned: false,
    raised: false,
    image: "img/dinos/グリポサウルスidle.png",
    classification: "鳥脚類",
    habitat: "北アメリカ",
    era: "",
    size: "",
    description: "少し曲がったワニのような口を持つ鳥脚類。",
    trivia: "強いアゴでかたい植物も食べていたかも。",
    comment: "くちばし が じまん！"
  },
  {
    id: "saurolophus",
    name: "サウロロフス",
    group: "鳥脚類（草食恐竜）",
    rarity: RARITY.R,
    isOriginal: false,
    isReward: false,
    owned: false,
    raised: false,
    image: "img/dinos/サウロロフスidle.png",
    classification: "鳥脚類",
    habitat: "北アメリカ・モンゴル",
    era: "",
    size: "",
    description: "シンプルなトサカがある鳥脚類。",
    trivia: "水辺で群れを作ってくらしていたと考えられる。",
    comment: "トサカは シンプル イズ ベスト！"
  },
  {
    id: "prosaurolophus",
    name: "プロサウロロフス",
    group: "鳥脚類（草食恐竜）",
    rarity: RARITY.N,
    isOriginal: false,
    isReward: false,
    owned: false,
    raised: false,
    image: "img/dinos/プロサウロロフスidle.png",
    classification: "鳥脚類",
    habitat: "北アメリカ",
    era: "",
    size: "",
    description: "トサカを持つ恐竜の初期タイプとされる鳥脚類。",
    trivia: "後のトサカ持ち恐竜たちのご先祖ポジション。",
    comment: "トサカ けいの せんぞ！"
  },
  {
    id: "iguanodon",
    name: "イグアノドン",
    group: "鳥脚類（草食恐竜）",
    rarity: RARITY.UR,
    isOriginal: false,
    isReward: false,
    owned: false,
    raised: false,
    image: "img/dinos/イグアノドンidle.png",
    classification: "鳥脚類",
    habitat: "ヨーロッパ・アメリカ",
    era: "白亜紀前期",
    size: "",
    description: "最初期に発見された有名な草食恐竜。",
    trivia: "かつてツノだと思われていた骨は、実は親指だった。",
    comment: "グー👍の おやゆび が とくちょう！"
  },
  {
    id: "tenontosaurus",
    name: "テノントサウルス",
    group: "鳥脚類（草食恐竜）",
    rarity: RARITY.R,
    isOriginal: false,
    isReward: false,
    owned: false,
    raised: false,
    image: "img/dinos/テノントサウルスidle.png",
    classification: "鳥脚類",
    habitat: "アメリカ",
    era: "",
    size: "",
    description: "中型サイズで走るのが得意な鳥脚類。",
    trivia: "しっぽの骨が発達していて、バランスをとるのに役立った。",
    comment: "ダッシュ だいすき！"
  },
  {
    id: "edmontosaurus",
    name: "エドモントサウルス",
    group: "鳥脚類（草食恐竜）",
    rarity: RARITY.SR,
    isOriginal: false,
    isReward: false,
    owned: false,
    raised: false,
    image: "img/dinos/エドモントサウルスidle.png",
    classification: "鳥脚類",
    habitat: "北アメリカ",
    era: "",
    size: "",
    description: "くちばしを持つ大型の草食恐竜。",
    trivia: "皮ふまで残った化石が見つかっている。",
    comment: "はだの もよう まで わかっちゃう！"
  },
  {
    id: "maiasura",
    name: "マイアサウラ",
    group: "鳥脚類（草食恐竜）",
    rarity: RARITY.SR,
    isOriginal: false,
    isReward: false,
    owned: false,
    raised: false,
    image: "img/dinos/マイアサウラidle.png",
    classification: "鳥脚類",
    habitat: "アメリカ",
    era: "",
    size: "",
    description: "子育てをしていた恐竜の代表として知られる鳥脚類。",
    trivia: "名前の意味は「よい母トカゲ」。",
    comment: "いいママ してます！"
  },
  {
    id: "shantungosaurus",
    name: "シャントゥンゴサウルス",
    group: "鳥脚類（草食恐竜）",
    rarity: RARITY.UR,
    isOriginal: false,
    isReward: false,
    owned: false,
    raised: false,
    image: "img/dinos/シャントゥンゴサウルスidle.png",
    classification: "鳥脚類",
    habitat: "中国",
    era: "",
    size: "",
    description: "史上最大級の鳥脚類。とても重い体をしていた。",
    trivia: "ティラノサウルスより重かったかもしれない。",
    comment: "おもいけど やさしいジャイアント！"
  },
  {
    id: "dryosaurus",
    name: "ドリオサウルス",
    group: "鳥脚類（草食恐竜）",
    rarity: RARITY.N,
    isOriginal: false,
    isReward: false,
    owned: false,
    raised: false,
    image: "img/dinos/ドリオサウルスidle.png",
    classification: "鳥脚類",
    habitat: "アメリカ・ヨーロッパ",
    era: "",
    size: "",
    description: "すばやく走って敵から逃げるタイプの小型鳥脚類。",
    trivia: "軽い体で森の中をかけ回っていた。",
    comment: "にげあし だけは まけない！"
  },
  {
    id: "muttaburrasaurus",
    name: "ムタブラサウルス",
    group: "鳥脚類（草食恐竜）",
    rarity: RARITY.R,
    isOriginal: false,
    isReward: false,
    owned: false,
    raised: false,
    image: "img/dinos/ムタブラサウルスidle.png",
    classification: "鳥脚類",
    habitat: "オーストラリア",
    era: "",
    size: "",
    description: "南半球オーストラリアで見つかった珍しい鳥脚類。",
    trivia: "大きな鼻のこぶの役割はまだナゾ。",
    comment: "オーストラリア の はっぱ だいすき！"
  },
  {
    id: "camptosaurus",
    name: "カンプトサウルス",
    group: "鳥脚類（草食恐竜）",
    rarity: RARITY.N,
    isOriginal: false,
    isReward: false,
    owned: false,
    raised: false,
    image: "img/dinos/カンプトサウルスidle.png",
    classification: "鳥脚類",
    habitat: "北アメリカ",
    era: "",
    size: "",
    description: "初期の鳥脚類のひとつ。二足歩行と四足歩行を使い分けていた。",
    trivia: "のちのイグアノドンたちのご先祖グループ。",
    comment: "はしったり よつんばい したり！"
  }
];
const DINOS_CERATOPSIA = [
  {
    id: "triceratops",
    name: "トリケラトプス",
    group: "角竜類",
    rarity: RARITY.UR,
    isOriginal: false,
    isReward: false,
    owned: false,
    raised: false,
    image: "img/dinos/トリケラトプスidle.png",
    classification: "角竜類",
    habitat: "北アメリカ（アメリカ・カナダ）",
    era: "白亜紀後期",
    size: "全長 約9m、体重6〜12t",
    description: 
      "3本の角と大きなフリルが特徴の角竜類を代表する恐竜。 "
    + "草原を群れで移動し、角を使って肉食恐竜から身を守ったと考えられる。 "
    + "ティラノサウルスと同時代に生息しており、互いに天敵関係として有名。",
    trivia: 
      "角は戦いだけでなく、仲間同士のアピールにも使われていた可能性がある。 "
    + "フリルは血管が多く、体温調整にも使われていたという説もある。",
    comment: "つの、じまん！ まもるのも、みせるのも、まかせて！"
  },

  {
    id: "protoceratops",
    name: "プロトケラトプス",
    group: "角竜類",
    rarity: RARITY.N,
    isOriginal: false,
    isReward: false,
    owned: false,
    raised: false,
    image: "img/dinos/プロトケラトプスidle.png",
    classification: "角竜類",
    habitat: "モンゴル（ゴビ砂漠）",
    era: "白亜紀後期",
    size: "全長 1.8mほど",
    description:
      "小型の角竜類で、まだ立派な角は持っていないが、フリルの原型が確認できる。 "
    + "乾燥した砂漠地帯で群れ生活をしていたと考えられ、足跡化石も複数見つかっている。",
    trivia:
      "古くから有名な恐竜で、翼竜のプロトタイプとして誤解された時代もある。",
    comment: "ちいさくても がんばるよ！"
  },

  {
    id: "styracosaurus",
    name: "スティラコサウルス",
    group: "角竜類",
    rarity: RARITY.SR,
    isOriginal: false,
    isReward: false,
    owned: false,
    raised: false,
    image: "img/dinos/スティラコサウルスidle.png",
    classification: "角竜類",
    habitat: "北アメリカ",
    era: "白亜紀後期",
    size: "全長 約5.5m",
    description:
      "フリルのまわりに並ぶ長いスパイクが特徴的。 "
    + "外見は非常に派手で、捕食者への威嚇・仲間へのアピールなど多目的に使われたと考えられる。",
    trivia:
      "頭部のスパイクは個体差が大きく“角竜の中でも特に華やか”といわれる。",
    comment: "トゲトゲでも やさしいよ！"
  },

  {
    id: "centrosaurus",
    name: "セントロサウルス",
    group: "角竜類",
    rarity: RARITY.R,
    isOriginal: false,
    isReward: false,
    owned: false,
    raised: false,
    image: "img/dinos/セントロサウルスidle.png",
    classification: "角竜類",
    habitat: "カナダ",
    era: "白亜紀後期",
    size: "全長 約6m",
    description:
      "鼻に1本の大きな角を持ち、フリルは比較的短い。 "
    + "大規模な群れで移動していたとされ、化石地帯では数百頭分の骨が発掘されている。",
    trivia:
      "冠水による大量死が原因とされる“群れの墓場”が有名。",
    comment: "はなのツノ、かっこいいでしょ？"
  },

  {
    id: "pachyrhinosaurus",
    name: "パキリノサウルス",
    group: "角竜類",
    rarity: RARITY.R,
    isOriginal: false,
    isReward: false,
    owned: false,
    raised: false,
    image: "img/dinos/パキリノサウルスidle.png",
    classification: "角竜類",
    habitat: "カナダ・アラスカ",
    era: "白亜紀後期",
    size: "全長 約6m",
    description:
      "角のかわりに鼻先に厚いコブを持っている珍しい角竜。 "
    + "このコブをぶつけ合って争った可能性がある。",
    trivia:
      "寒冷地にも適応していた珍しい角竜。",
    comment: "コブは つよさの あかし！"
  },

  {
    id: "chasmosaurus",
    name: "カスモサウルス",
    group: "角竜類",
    rarity: RARITY.SR,
    isOriginal: false,
    isReward: false,
    owned: false,
    raised: false,
    image: "img/dinos/カスモサウルスidle.png",
    classification: "角竜類",
    habitat: "カナダ",
    era: "白亜紀後期",
    size: "全長 約5m",
    description:
      "大きく開いた穴のあるフリルが特徴で、軽量化と体温調整の役割を持っていたとされる。",
    trivia:
      "長い顔と大きなフリルのシルエットが美しいと人気。",
    comment: "フリル ひらり〜♪"
  },

  {
    id: "diabloceratops",
    name: "ディアブロケラトプス",
    group: "角竜類",
    rarity: RARITY.SR,
    isOriginal: false,
    isReward: false,
    owned: false,
    raised: false,
    image: "img/dinos/ディアブロケラトプスidle.png",
    classification: "角竜類",
    habitat: "アメリカ・ユタ州",
    era: "白亜紀後期",
    size: "全長 約4.5m",
    description:
      "フリルの後方にある“2本の大きな角”が悪魔（ディアブロ）の角のように見えることから命名。 "
    + "凶暴そうな見ためだが、草食で温厚。",
    trivia:
      "角竜類としては古い時代に属しており、基本形態に近い。",
    comment: "おどろかせちゃった？ こわくないよ！"
  },

  {
    id: "nasutoceratops",
    name: "ナスートケラトプス",
    group: "角竜類",
    rarity: RARITY.R,
    isOriginal: false,
    isReward: false,
    owned: false,
    raised: false,
    image: "img/dinos/ナスートケラトプスidle.png",
    classification: "角竜類",
    habitat: "北アメリカ南部",
    era: "白亜紀後期",
    size: "全長 約4.5m",
    description:
      "前方に太く丸い角を持ち、鼻が大きい特徴的な角竜。 "
    + "柔らかい植物を主食としていたと考えられる。",
    trivia:
      "角竜の中ではかなりユニークな“かわいい系”の見た目。",
    comment: "おおきいおはなで くんくん！"
  },

  {
    id: "albertaceratops",
    name: "アルバートケラトプス",
    group: "角竜類",
    rarity: RARITY.N,
    isOriginal: false,
    isReward: false,
    owned: false,
    raised: false,
    image: "img/dinos/アルバートケラトプスidle.png",
    classification: "角竜類",
    habitat: "カナダ（アルバータ州）",
    era: "白亜紀後期",
    size: "全長 約6m",
    description:
      "フリルに沿って並ぶ角列が特徴。中型で標準的な角竜タイプ。",
    trivia:
      "化石はそれほど多くなく、研究中の部分が多い。",
    comment: "まんなかサイズ の つのりゅう！"
  },

  {
    id: "acheroraptor",
    name: "アケロウサウルス",
    group: "角竜類",
    rarity: RARITY.N,
    isOriginal: false,
    isReward: false,
    owned: false,
    raised: false,
    image: "img/dinos/アケロウサウルスidle.png",
    classification: "角竜類",
    habitat: "北アメリカ",
    era: "",
    size: "",
    description:
      "小柄な角竜類。フリルも小さく、角も控えめ。",
    trivia:
      "名前の由来は“冥界の川アケロン”。見た目とは反して格好いい名前。",
    comment: "ちいさくても なまえは かっこいいよ！"
  },

  {
    id: "einiosaurus",
    name: "エイニオサウルス",
    group: "角竜類",
    rarity: RARITY.R,
    isOriginal: false,
    isReward: false,
    owned: false,
    raised: false,
    image: "img/dinos/エイニオサウルスidle.png",
    classification: "角竜類",
    habitat: "モンタナ州",
    era: "白亜紀後期",
    size: "全長 約4.5m",
    description:
      "前向きにカーブした独特の“曲がる角”が特徴。視覚的インパクトが大きい。",
    trivia:
      "この角の形は個体差が大きく、成長とともに曲がり方が変化した可能性がある。",
    comment: "カーブつの の プロ！"
  },

  {
    id: "monoclonius",
    name: "モノクロニウス",
    group: "角竜類",
    rarity: RARITY.N,
    isOriginal: false,
    isReward: false,
    owned: false,
    raised: false,
    image: "img/dinos/モノクロニウスidle.png",
    classification: "角竜類",
    habitat: "カナダ",
    era: "",
    size: "",
    description:
      "“1本角のトカゲ”という意味の名を持つ角竜。 "
    + "長らく分類が混乱しており、研究史が複雑。",
    trivia:
      "現在では“幼体説”も有力で、成長段階で形が大きく変わったとされる。",
    comment: "まだまだ ナゾ おおめ！"
  },

  {
    id: "pentaceratops",
    name: "ペンタケラトプス",
    group: "角竜類",
    rarity: RARITY.SR,
    isOriginal: false,
    isReward: false,
    owned: false,
    raised: false,
    image: "img/dinos/ペンタケラトプスidle.png",
    classification: "角竜類",
    habitat: "アメリカ・ニューメキシコ",
    era: "白亜紀後期",
    size: "全長 約7m",
    description:
      "5本の角を持つ“角竜界の豪華モデル”。巨大なフリルは長さが1.8mにも達する。",
    trivia:
      "フリルの大きさは恐竜最大級で“動く看板”のような役割だった可能性も。",
    comment: "ごほんのつの、ゴーカでしょ！"
  }
];
const DINOS_ARMORED = [
  {
    id: "ankylosaurus",
    name: "アンキロサウルス",
    group: "鎧竜類・剣竜類",
    rarity: RARITY.UR,
    isOriginal: false,
    isReward: false,
    owned: false,
    raised: false,
    image: "img/dinos/アンキロサウルスidle.png",
    classification: "鎧竜類",
    habitat: "北アメリカ",
    era: "白亜紀後期",
    size: "全長 約8m",
    description:
      "全身が頑丈な装甲板で覆われた“戦車のような恐竜”。"
    + "敵に襲われると、しっぽの“ハンマー”で強烈な一撃を加えることができた。",
    trivia:
      "装甲は皮骨（ひこつ）と呼ばれ、ワニの背中と同じ構造。"
    + "ティラノサウルスをも追い払えた武器を持つと言われる。",
    comment: "まもりは ぼくに まかせて！"
  },

  {
    id: "nodosaurus",
    name: "ノドサウルス",
    group: "鎧竜類・剣竜類",
    rarity: RARITY.R,
    isOriginal: false,
    isReward: false,
    owned: false,
    raised: false,
    image: "img/dinos/ノドサウルスidle.png",
    classification: "鎧竜類",
    habitat: "北アメリカ",
    era: "白亜紀前期",
    size: "全長 約5.5m",
    description:
      "アンキロサウルスより軽装で、しっぽハンマーを持たない種類。"
    + "草地で低い植物を食べながらゆったり暮らしていた。",
    trivia:
      "攻撃より“守ること”に特化した体構造。",
    comment: "おだやか そうにみえるでしょ？"
  },

  {
    id: "minmi",
    name: "ミンミ",
    group: "鎧竜類・剣竜類",
    rarity: RARITY.N,
    isOriginal: false,
    isReward: false,
    owned: false,
    raised: false,
    image: "img/dinos/ミンミidle.png",
    classification: "鎧竜類",
    habitat: "オーストラリア",
    era: "白亜紀前期",
    size: "全長 3mほど",
    description:
      "世界で最もよく保存された鎧竜のひとつ。小柄でかわいい体型だが、背中はしっかり装甲で守られている。",
    trivia:
      "オーストラリア唯一の鎧竜として有名。",
    comment: "ちいさくても カッチカチ！"
  },

  {
    id: "polacanthus",
    name: "ポラカンサス",
    group: "鎧竜類・剣竜類",
    rarity: RARITY.R,
    isOriginal: false,
    isReward: false,
    owned: false,
    raised: false,
    image: "img/dinos/ポラカンサスidle.png",
    classification: "鎧竜類",
    habitat: "イギリス",
    era: "白亜紀前期",
    size: "全長 約5m",
    description:
      "背中から腰にかけて強力なトゲが並ぶ、攻撃的な見た目の鎧竜。",
    trivia:
      "後半身の装甲板は特に厚く、肉食恐竜の攻撃にも耐えたとされる。",
    comment: "トゲトゲ だけど なかよくしてね！"
  },

  {
    id: "gastonia",
    name: "ガストニア",
    group: "鎧竜類・剣竜類",
    rarity: RARITY.R,
    isOriginal: false,
    isReward: false,
    owned: false,
    raised: false,
    image: "img/dinos/ガストニアidle.png",
    classification: "鎧竜類",
    habitat: "アメリカ・ユタ州",
    era: "白亜紀前期",
    size: "全長 約5m",
    description:
      "全身にトゲが並ぶ“攻撃的装甲竜”。後ろ足も強く、しっぽでの牽制も行えた。",
    trivia:
      "植物食だが、見た目のインパクトで人気が高い。",
    comment: "トゲいっぱい！ ふれないでね？"
  },

  {
    id: "hylaeosaurus",
    name: "ヒラエオサウルス",
    group: "鎧竜類・剣竜類",
    rarity: RARITY.R,
    isOriginal: false,
    isReward: false,
    owned: false,
    raised: false,
    image: "img/dinos/ヒラエオサウルスidle.png",
    classification: "鎧竜類",
    habitat: "イギリス",
    era: "白亜紀前期",
    size: "全長 約3〜4m",
    description:
      "初期の鎧竜で、まだ軽装タイプ。背中の骨板が特徴。",
    trivia:
      "イギリスの有名研究者マンテルが発見した“恐竜時代初期の仲間”。",
    comment: "はじまりの よろいりゅう！"
  },

  {
    id: "euoplocephalus",
    name: "エウオプロケファルス",
    group: "鎧竜類・剣竜類",
    rarity: RARITY.SR,
    isOriginal: false,
    isReward: false,
    owned: false,
    raised: false,
    image: "img/dinos/エウオプロケファルスidle.png",
    classification: "鎧竜類",
    habitat: "カナダ・モンタナ州",
    era: "白亜紀後期",
    size: "全長 約6m",
    description:
      "アンキロサウルスに近い“しっぽハンマー持ち”の代表格。装甲も厚く非常に頑丈。",
    trivia:
      "ハンマーの威力は、骨を一撃で砕けるほどと言われる。",
    comment: "どっしり！ こうげき より ぼうぎょ！"
  },

  {
    id: "borealopelta",
    name: "ボレアルペルタ",
    group: "鎧竜類・剣竜類",
    rarity: RARITY.SR,
    isOriginal: false,
    isReward: false,
    owned: false,
    raised: false,
    image: "img/dinos/ボレアルペルタidle.png",
    classification: "鎧竜類",
    habitat: "カナダ（アルバータ州）",
    era: "白亜紀前期",
    size: "全長 約5.5m",
    description:
      "史上最も保存状態が良い鎧竜の1つと言われ、皮ふの模様や胃の内容物までわかっている。"
    + "茶〜赤のカモフラージュ色で肉食恐竜から身を守っていたと推測される。",
    trivia:
      "本物そっくりの立体模型が世界中で展示されている。",
    comment: "ばれない いろ が じまんなんだ！"
  },

  {
    id: "stegosaurus",
    name: "ステゴサウルス",
    group: "鎧竜類・剣竜類",
    rarity: RARITY.UR,
    isOriginal: false,
    isReward: false,
    owned: false,
    raised: false,
    image: "img/dinos/ステゴサウルスidle.png",
    classification: "剣竜類",
    habitat: "北アメリカ",
    era: "ジュラ紀後期",
    size: "全長 約9m",
    description:
      "背中の大きな骨板と、しっぽの4本スパイク（“サグワイア”）が特徴。"
    + "骨板は体温調整・威嚇・求愛アピールなど多用途だったと考えられる。",
    trivia:
      "脳が小さいと言われるが、実際には体サイズ比で標準的。",
    comment: "せなかの プレート、かっこいいでしょ？"
  },

  {
    id: "kentrosaurus",
    name: "ケントロサウルス",
    group: "鎧竜類・剣竜類",
    rarity: RARITY.SR,
    isOriginal: false,
    isReward: false,
    owned: false,
    raised: false,
    image: "img/dinos/ケントロサウルスidle.png",
    classification: "剣竜類",
    habitat: "タンザニア",
    era: "ジュラ紀後期",
    size: "全長 約4.5m",
    description:
      "ステゴサウルスの近縁だが、小柄でトゲの数が多い攻撃的デザイン。",
    trivia:
      "しっぽスパイクは肉食恐竜に対して非常に有効だった。",
    comment: "スパイク は ぼくの ぶき！"
  },

  {
    id: "tuojiangosaurus",
    name: "トゥオジャンゴサウルス",
    group: "鎧竜類・剣竜類",
    rarity: RARITY.R,
    isOriginal: false,
    isReward: false,
    owned: false,
    raised: false,
    image: "img/dinos/トゥオジャンゴサウルスidle.png",
    classification: "剣竜類",
    habitat: "中国",
    era: "ジュラ紀後期",
    size: "全長 約7m",
    description:
      "背中の骨板が2列に整然と並ぶ、バランスの良い剣竜。",
    trivia:
      "アジアでは珍しい“本格剣竜”。",
    comment: "せなか きれいに ならんでるでしょ！"
  },

  {
    id: "sauropelta",
    name: "サウロペルタ",
    group: "鎧竜類・剣竜類",
    rarity: RARITY.N,
    isOriginal: false,
    isReward: false,
    owned: false,
    raised: false,
    image: "img/dinos/サウロペルタidle.png",
    classification: "鎧竜類",
    habitat: "アメリカ",
    era: "白亜紀前期",
    size: "全長 約5m",
    description:
      "肩のトゲが特に長く、肉食恐竜にとって“横から襲うと危険”な構造をしている。",
    trivia:
      "トゲを確認できる良質な化石が複数発見されている。",
    comment: "よこからは ダメだよ〜！"
  }
];
const DINOS_PTEROSAURS = [
  {
    id: "pteranodon",
    name: "プテラノドン",
    group: "翼竜",
    rarity: RARITY.UR,
    isOriginal: false,
    isReward: false,
    owned: false,
    raised: false,
    image: "img/dinos/プテラノドンidle.png",
    classification: "翼竜",
    habitat: "北アメリカ（海岸地帯）",
    era: "白亜紀後期",
    size: "翼開長 約7〜9m",
    description:
      "歯がなく、細長いクチバシを持つ代表的な大型翼竜。"
    + "海岸沿いを滑空しながら魚を摂っていたと考えられる。"
    + "頭の後ろに伸びた特徴的なトサカは飛行バランス調整にも使われたとされる。",
    trivia:
      "名前の意味は“翼のある歯のない者”。"
    + "群れを作っていた可能性もある。",
    comment: "すいーっと とぶの、まかせて！"
  },

  {
    id: "pterodactylus",
    name: "プテロダクティルス",
    group: "翼竜",
    rarity: RARITY.N,
    isOriginal: false,
    isReward: false,
    owned: false,
    raised: false,
    image: "img/dinos/プテロダクティルスidle.png",
    classification: "翼竜",
    habitat: "ヨーロッパ",
    era: "ジュラ紀後期",
    size: "翼開長 約1m",
    description:
      "最初に科学的に記載された翼竜。小型で昆虫や小動物をつかまえて生活していたとされる。",
    trivia:
      "“翼竜”のイメージを世界に広めた歴史的存在。",
    comment: "ちいさくても、そらの ちょうしんしゃ！"
  },

  {
    id: "rhamphorhynchus",
    name: "ランフォリンクス",
    group: "翼竜",
    rarity: RARITY.R,
    isOriginal: false,
    isReward: false,
    owned: false,
    raised: false,
    image: "img/dinos/ランフォリンクスidle.png",
    classification: "翼竜",
    habitat: "ヨーロッパ",
    era: "ジュラ紀後期",
    size: "翼開長 約1.8m",
    description:
      "長い尾の先に“ひし形の飾り”があり、飛行中の舵取りに使われたと考えられる。"
    + "主に魚食で、水面近くを飛び回って捕食していた。",
    trivia:
      "尾の形は種類ごとに微妙に違い、研究者たちの注目ポイント。",
    comment: "テールで くるくる まがるよ！"
  },

  {
    id: "dimorphodon",
    name: "ディモルフォドン",
    group: "翼竜",
    rarity: RARITY.R,
    isOriginal: false,
    isReward: false,
    owned: false,
    raised: false,
    image: "img/dinos/ディモルフォドンidle.png",
    classification: "翼竜",
    habitat: "イギリス",
    era: "ジュラ紀前期",
    size: "翼開長 約1.5m",
    description:
      "“2種類の歯（＝ディモルフォ）”を持つ変わった翼竜。"
    + "大きな目と丸い頭で、昆虫から小動物まで幅広く食べていた可能性がある。",
    trivia:
      "頭が重く、長距離よりも短距離飛行に向いていたと言われる。",
    comment: "は の かたちが じまんなんだ！"
  },

  {
    id: "quetzalcoatlus",
    name: "ケツァルコアトルス",
    group: "翼竜",
    rarity: RARITY.SR,
    isOriginal: false,
    isReward: false,
    owned: false,
    raised: false,
    image: "img/dinos/ケツァルコアトルスidle.png",
    classification: "翼竜",
    habitat: "北アメリカ（内陸 dry地帯）",
    era: "白亜紀末期",
    size: "翼開長 約10m以上（最大級）",
    description:
      "史上最大級の飛行生物。大きなキリンほどの高さで、地上で小動物を狩っていた説が有力。"
    + "上昇気流に乗って長距離移動も可能だった。",
    trivia:
      "名前はアステカ神話の“羽毛の蛇ケツァルコアトル”から。",
    comment: "そらの おう って よばれてるよ！"
  },

  {
    id: "tapejara",
    name: "タペジャラ",
    group: "翼竜",
    rarity: RARITY.SR,
    isOriginal: false,
    isReward: false,
    owned: false,
    raised: false,
    image: "img/dinos/タペジャラidle.png",
    classification: "翼竜",
    habitat: "ブラジル",
    era: "白亜紀前期",
    size: "翼開長 約3.5m",
    description:
      "巨大なトサカを持ち、派手な見た目の翼竜。求愛ディスプレイに使われたと考えられる。",
    trivia:
      "仲間内でトサカの色や形をアピールしていた可能性がある。",
    comment: "トサカ、かっこいいでしょ？ じまんなんだ！"
  },

  {
    id: "tupuxuara",
    name: "トゥプクスアラ",
    group: "翼竜",
    rarity: RARITY.SR,
    isOriginal: false,
    isReward: false,
    owned: false,
    raised: false,
    image: "img/dinos/トゥプクスアラidle.png",
    classification: "翼竜",
    habitat: "ブラジル",
    era: "白亜紀前期",
    size: "翼開長 約5.5m",
    description:
      "細長いトサカを持つ大型翼竜で、優雅な滑空を得意としていた。"
    + "魚だけでなく小動物も食べていたとされる。",
    trivia:
      "翼竜の中でも特に“航空能力が高い”とされる一種。",
    comment: "なが〜く とべるよ！"
  },

  {
    id: "anhanguera",
    name: "アンハングエラ",
    group: "翼竜",
    rarity: RARITY.R,
    isOriginal: false,
    isReward: false,
    owned: false,
    raised: false,
    image: "img/dinos/アンハングエラidle.png",
    classification: "翼竜",
    habitat: "ブラジル",
    era: "白亜紀前期",
    size: "翼開長 約4.5m",
    description:
      "口の先に突き出した突起が特徴で、魚を捕らえやすい構造。"
    + "川や湖の上空を飛び回っていたとされる。",
    trivia:
      "化石は保存状態が良いものが多く、研究が進んでいる人気種。",
    comment: "さかな だいすき！"
  }
];
const DINOS_MARINE = [
  {
    id: "mosasaurus",
    name: "モササウルス",
    group: "海棲爬虫類・古生物",
    rarity: RARITY.SR,
    isOriginal: false,
    isReward: false,
    owned: false,
    raised: false,
    image: "img/dinos/モササウルスidle.png",
    classification: "海棲爬虫類（モササウルス科）",
    habitat: "世界各地の浅い海",
    era: "白亜紀末期",
    size: "全長 約13〜18m",
    description:
      "海の頂点捕食者。ワニとヘビの特徴を持ち、巨大なあごで魚・ウミガメ・他の海棲爬虫類までも捕食した。"
    + "海の“王”と呼ばれる存在。",
    trivia:
      "化石は海岸地帯から多く発見され、映画でも大人気。",
    comment: "うみの てっぺんに たつもの！"
  },

  {
    id: "tylosaurus",
    name: "ティロサウルス",
    group: "海棲爬虫類・古生物",
    rarity: RARITY.UR,
    isOriginal: false,
    isReward: false,
    owned: false,
    raised: false,
    image: "img/dinos/ティロサウルスidle.png",
    classification: "海棲爬虫類",
    habitat: "北アメリカ内陸海",
    era: "白亜紀後期",
    size: "全長 約13m",
    description:
      "モササウルスに近い大型種。強力なあごを持ち、高速で泳げた。",
    trivia:
      "胃の中から鳥類・サメの化石が発見されたことも。",
    comment: "スピード も パワー も あるよ！"
  },

  {
    id: "platecarpus",
    name: "プラテカルプス",
    group: "海棲爬虫類・古生物",
    rarity: RARITY.R,
    isOriginal: false,
    isReward: false,
    owned: false,
    raised: false,
    image: "img/dinos/プラテカルプスidle.png",
    classification: "海棲爬虫類",
    habitat: "北アメリカ内陸海",
    era: "白亜紀後期",
    size: "全長 約4.5m",
    description: "高速遊泳を得意とするスマートな体型のモササウルス類。",
    trivia: "胃の中身が残った状態の化石が見つかっている珍しい例。",
    comment: "すいすい〜って はしるよ！"
  },

  {
    id: "kronosaurus",
    name: "クロノサウルス",
    group: "海棲爬虫類・古生物",
    rarity: RARITY.SR,
    isOriginal: false,
    isReward: false,
    owned: false,
    raised: false,
    image: "img/dinos/クロノサウルスidle.png",
    classification: "首長竜（短首タイプ）",
    habitat: "オーストラリア",
    era: "白亜紀前期",
    size: "全長 約10m",
    description:
      "巨大な頭部と強力なアゴを持つ短首竜。海の“怪獣”として知られ、他の海生生物を丸ごと飲み込んだ可能性がある。",
    trivia:
      "名前はギリシャ神話の“クロノス”から。",
    comment: "おおあご が ちからもち！"
  },

  {
    id: "liopleurodon",
    name: "リオプレウロドン",
    group: "海棲爬虫類・古生物",
    rarity: RARITY.R,
    isOriginal: false,
    isReward: false,
    owned: false,
    raised: false,
    image: "img/dinos/リオプレウロドンidle.png",
    classification: "首長竜（短首タイプ）",
    habitat: "ヨーロッパ",
    era: "ジュラ紀中期",
    size: "全長 約7m（過大推定説あり）",
    description:
      "強靭なアゴと大きなヒレで俊敏に泳ぐ捕食者。"
    + "一部ではモササウルスに匹敵する“幻の大怪獣サイズ”の説もあった。",
    trivia:
      "BBCの番組で巨大生物として描かれ話題になった。",
    comment: "はやく およげるよ！"
  },

  {
    id: "plesiosaurus",
    name: "プレシオサウルス",
    group: "海棲爬虫類・古生物",
    rarity: RARITY.N,
    isOriginal: false,
    isReward: false,
    owned: false,
    image: "img/dinos/プレシオサウルスidle.png",
    classification: "首長竜",
    habitat: "ヨーロッパ沿岸",
    era: "ジュラ紀前期",
    size: "全長 約3.5m",
    description:
      "長い首と細長い体で知られる最も有名な首長竜の一種。"
    + "魚をすばやくすくいとって食べていた。",
    trivia:
      "“ネッシー”のモデルとされることが多い。",
    comment: "ながいくびで さかなを キャッチ！"
  },

  {
    id: "elasmosaurus",
    name: "エラスモサウルス",
    group: "海棲爬虫類・古生物",
    rarity: RARITY.SR,
    isOriginal: false,
    isReward: false,
    owned: false,
    image: "img/dinos/エラスモサウルスidle.png",
    classification: "首長竜",
    habitat: "北米内陸海",
    era: "白亜紀後期",
    size: "全長 約14m（首だけで7m以上）",
    description:
      "首が非常に長く、全体の半分以上を占める。"
    + "水面から首だけを出して獲物を探した可能性がある。",
    trivia:
      "昔は“頭がしっぽ側”に復元されるミスもあった。",
    comment: "なが〜い くび が とくちょう！"
  },

  {
    id: "ichthyosaurus",
    name: "イクチオサウルス",
    group: "海棲爬虫類・古生物",
    rarity: RARITY.N,
    isOriginal: false,
    isReward: false,
    image: "img/dinos/イクチオサウルスidle.png",
    classification: "魚竜",
    habitat: "ヨーロッパ広域",
    era: "三畳紀〜ジュラ紀",
    size: "全長 約2m",
    description:
      "イルカに似た体型を持つ魚竜。高速遊泳を得意とし、海の中層で魚を追いかけていた。",
    trivia:
      "化石から“お腹の赤ちゃん”が出てくることもあり、胎生だったと判明している。",
    comment: "すい〜っと およぐよ！"
  },

  {
    id: "shonisaurus",
    name: "ショニサウルス",
    group: "海棲爬虫類・古生物",
    rarity: RARITY.SR,
    isOriginal: false,
    isReward: false,
    image: "img/dinos/ショニサウルスidle.png",
    classification: "魚竜",
    habitat: "アメリカ・ネバダ州",
    era: "三畳紀後期",
    size: "全長 約15m以上（最大級の魚竜）",
    description:
      "クジラのような巨大サイズの魚竜。深海近くまで潜って餌を探していた可能性がある。",
    trivia:
      "多数の化石が一ヶ所で見つかる“巨大魚竜の墓場”が存在する。",
    comment: "おおきいけど、やさしいよ！"
  },

  {
    id: "dunkleosteus",
    name: "ドゥンクレオステウス",
    group: "海棲爬虫類・古生物",
    rarity: RARITY.R,
    isOriginal: false,
    isReward: false,
    image: "img/dinos/ドゥンクレオステウスidle.png",
    classification: "古代魚（甲冑魚）",
    habitat: "古生代デボン紀の海",
    era: "デボン紀",
    size: "全長 6〜10m",
    description:
      "巨大な装甲頭部を持つ最強クラスの古代魚。牙ではなく“ナイフのようなアゴの骨”であらゆる生物を粉砕した。",
    trivia:
      "噛む力はホオジロザメを超えたと推定されている。",
    comment: "あごの パワーに まかせて！"
  },

  {
    id: "helicoprion",
    name: "ヘリコプリオン",
    group: "海棲爬虫類・古生物",
    rarity: RARITY.R,
    isOriginal: false,
    isReward: false,
    image: "img/dinos/ヘリコプリオンidle.png",
    classification: "古代サメ",
    habitat: "全世界の海域",
    era: "ペルム紀",
    size: "全長 約4m",
    description:
      "“歯の渦巻き（トゥース・ホイール）”を持つ奇妙なサメ。"
    + "歯列は捕食時にスライドし、獲物を切り裂いたと考えられる。",
    trivia:
      "見た目復元は時代によって大きく異なり、謎が多い。",
    comment: "ぐるぐるの ハミガキ！ …じゃないよ！"
  },

  {
    id: "anomalocaris",
    name: "アノマロカリス",
    group: "海棲爬虫類・古生物",
    rarity: RARITY.SR,
    isOriginal: false,
    isReward: false,
    image: "img/dinos/アノマロカリスidle.png",
    classification: "古生代軟体節足動物",
    habitat: "カンブリア紀の海",
    era: "カンブリア紀",
    size: "全長 約60cm〜1m",
    description:
      "古生代海洋を支配した捕食者。複眼と鋭い口器で、三葉虫などを捕らえていた。",
    trivia:
      "かつて“3つの生物の化石”と誤解され分かれて説明されていた。",
    comment: "はやくて つかまえられないよ！"
  },

  {
    id: "opabinia",
    name: "オパビニア",
    group: "海棲爬虫類・古生物",
    rarity: RARITY.N,
    isOriginal: false,
    isReward: false,
    image: "img/dinos/オパビニアidle.png",
    classification: "古生代動物",
    habitat: "カンブリア紀浅海",
    era: "カンブリア紀",
    size: "全長 約5〜7cm",
    description:
      "5つの目と長い鼻状の突起を持つ奇妙な生物。"
    + "現代のどの生物にも似ておらず、復元がとても難しい。",
    trivia:
      "最初の復元を見た研究者が“これは冗談か？”と言ったという逸話がある。",
    comment: "め が いっぱい！ まちがえないでね！"
  },

  {
    id: "dimetrodon",
    name: "ディメトロドン",
    group: "海棲爬虫類・古生物",
    rarity: RARITY.R,
    isOriginal: false,
    isReward: false,
    image: "img/dinos/ディメトロドンidle.png",
    classification: "単弓類（哺乳類の祖先グループ）",
    habitat: "北アメリカ",
    era: "二畳紀",
    size: "全長 約3m",
    description:
      "背中の大きな帆が特徴。恐竜ではなく、哺乳類の祖先グループに近い生物。"
    + "帆は体温調整や威嚇に役立ったとされる。",
    trivia:
      "“恐竜以前の最強捕食者”の一種。",
    comment: "せなかの ほ が カッコいいって いわれるよ！"
  },

  {
    id: "edaphosaurus",
    name: "エダフォサウルス",
    group: "海棲爬虫類・古生物",
    rarity: RARITY.N,
    isOriginal: false,
    isReward: false,
    image: "img/dinos/エダフォサウルスidle.png",
    classification: "単弓類",
    habitat: "北アメリカ・ヨーロッパ",
    era: "二畳紀",
    size: "全長 約3m",
    description:
      "ディメトロドンに似るが、こちらは植物食。帆には横向きの突起が並ぶ独特の形状。",
    trivia:
      "同じ帆を持つが、捕食者ではなく温厚な草食性。",
    comment: "おとなしい よ！"
  },

  {
    id: "archelon",
    name: "アーケロン",
    group: "海棲爬虫類・古生物",
    rarity: RARITY.SR,
    isOriginal: false,
    isReward: false,
    image: "img/dinos/アーケロンidle.png",
    classification: "海棲カメ",
    habitat: "北アメリカ内陸海",
    era: "白亜紀後期",
    size: "全長 約4m（史上最大級のカメ）",
    description:
      "巨大な海ガメで、甲羅は柔らかく革のような質感。"
    + "クラゲや貝を食べて暮らしていたとされる。",
    trivia:
      "化石の近くに“サメに襲われた跡”が残る例が多い。",
    comment: "ゆったり のんびり うみさんぽ〜"
  }
];
const DINOS_PRIMITIVE = [
  {
    id: "herrerasaurus",
    name: "ヘレラサウルス",
    group: "原始恐竜",
    rarity: RARITY.R,
    isOriginal: false,
    isReward: false,
    image: "img/dinos/ヘレラサウルスidle.png",
    classification: "原始獣脚類",
    habitat: "アルゼンチン",
    era: "三畳紀後期",
    size: "全長 約4〜5m",
    description:
      "最古級の肉食恐竜の一種。まだ恐竜の特徴が十分に固まっていない“プロトタイプ”的存在。"
    + "群れで小型草食動物を狩っていた可能性がある。",
    trivia:
      "恐竜時代の始まりを象徴する重要種。",
    comment: "はじまりの にくしょく！"
  },

  {
    id: "eoraptor",
    name: "エオラプトル",
    group: "原始恐竜",
    rarity: RARITY.R,
    isOriginal: false,
    isReward: false,
    image: "img/dinos/エオラプトルidle.png",
    classification: "原始恐竜（雑食）",
    habitat: "アルゼンチン",
    era: "三畳紀後期",
    size: "全長 約1m",
    description:
      "最古級の恐竜のひとつ。軽快な小型体型で、肉・虫・植物など何でも食べる雑食タイプ。",
    trivia:
      "“夜明けの盗賊”という意味の名前。",
    comment: "なんでも たべるよ！"
  },

  {
    id: "panphagia",
    name: "パンファギア",
    group: "原始恐竜",
    rarity: RARITY.N,
    isOriginal: false,
    isReward: false,
    image: "img/dinos/パンファギアidle.png",
    classification: "原始竜脚形類",
    habitat: "アルゼンチン",
    era: "三畳紀中期",
    size: "全長 約1.3m",
    description:
      "“すべてを食べる者”という名前の通り、雑食だったと考えられる。体型は後の竜脚類の原型に近い。",
    trivia:
      "研究が進むにつれ、恐竜の進化系統を語る上で重要な種になりつつある。",
    comment: "しょくしゅ ひろいよ！"
  },

  {
    id: "staurikosaurus",
    name: "スタウリコサウルス",
    group: "原始恐竜",
    rarity: RARITY.N,
    isOriginal: false,
    isReward: false,
    image: "img/dinos/スタウリコサウルスidle.png",
    classification: "原始獣脚類",
    habitat: "ブラジル",
    era: "三畳紀後期",
    size: "全長 約2m",
    description:
      "細長い体と鋭い歯を持つ初期の肉食恐竜。バランスのよいプロポーションで素早く走れた。",
    trivia:
      "尾の骨が特殊で、弓のようにしなりやすい構造を持つ。",
    comment: "はやく はしれるよ！"
  },

  {
    id: "saturnalia",
    name: "サトゥルナリア",
    group: "原始恐竜",
    rarity: RARITY.N,
    isOriginal: false,
    isReward: false,
    image: "img/dinos/サトゥルナリアidle.png",
    classification: "初期恐竜（雑食寄り）",
    habitat: "ブラジル",
    era: "三畳紀後期",
    size: "全長 約1.5m",
    description:
      "細身の体で、肉・虫・柔らかい植物などを幅広く食べていた。"
    + "恐竜の多様化初期に現れた代表種。",
    trivia:
      "名前の由来はローマの祭“サトゥルナリア”。",
    comment: "いろいろ たべたいな〜"
  },

  {
    id: "lessemsaurus",
    name: "レッセムサウルス",
    group: "原始恐竜",
    rarity: RARITY.R,
    isOriginal: false,
    isReward: false,
    image: "img/dinos/レッセムサウルスidle.png",
    classification: "初期竜脚形類",
    habitat: "アルゼンチン",
    era: "三畳紀後期",
    size: "全長 約10m",
    description:
      "巨大な体を持つ初期竜脚形類で、すでに大型化の兆しが見られる。"
    + "植物を大量に食べる必要があり、歩きながら低木をむしゃむしゃ食べていた可能性も。",
    trivia:
      "体の大きさに反して、まだ四足歩行と二足歩行を切り替えていた。",
    comment: "おおきいけど、おっとり！"
  },

  {
    id: "procompsognathus",
    name: "プロコンプソグナトゥス",
    group: "原始恐竜",
    rarity: RARITY.N,
    isOriginal: false,
    isReward: false,
    image: "img/dinos/プロコンプソグナトゥスidle.png",
    classification: "原始獣脚類",
    habitat: "ドイツ",
    era: "三畳紀後期",
    size: "全長 約1m",
    description:
      "小型で俊敏な肉食恐竜。昆虫や小動物を主食としていた。",
    trivia:
      "ジュラシック・パークで有名になった“コンピー”の祖先に近い。",
    comment: "ちっちゃい ハンター！"
  },

  {
    id: "massospondylus",
    name: "マッソスポンディルス",
    group: "原始恐竜",
    rarity: RARITY.R,
    isOriginal: false,
    isReward: false,
    image: "img/dinos/マッソスポンディルスidle.png",
    classification: "初期竜脚形類",
    habitat: "南アフリカ",
    era: "ジュラ紀前期",
    size: "全長 約4m",
    description:
      "長い首と器用な前脚を持つ初期竜脚形類。植物をつかんで口へ運べたかもしれない。",
    trivia:
      "子どもの化石が巣と一緒に見つかり、子育てしていた可能性が高い。",
    comment: "おやこ なかよし〜"
  },

  {
    id: "lufengosaurus",
    name: "ルファエンゴサウルス",
    group: "原始恐竜",
    rarity: RARITY.R,
    isOriginal: false,
    isReward: false,
    image: "img/dinos/ルファエンゴサウルスidle.png",
    classification: "初期竜脚形類",
    habitat: "中国",
    era: "ジュラ紀前期",
    size: "全長 約6m",
    description:
      "アジアを代表する初期竜脚類で、二足歩行と四足歩行を併用していた。"
    + "顎が強く、硬い植物も食べられたとされる。",
    trivia:
      "中国初期恐竜研究の象徴的存在。",
    comment: "ごはん いっぱい たべるよ！"
  },

  {
    id: "yunnanosaurus",
    name: "ユンナノサウルス",
    group: "原始恐竜",
    rarity: RARITY.R,
    isOriginal: false,
    isReward: false,
    image: "img/dinos/ユンナノサウルスidle.png",
    classification: "初期竜脚形類",
    habitat: "中国（雲南省）",
    era: "ジュラ紀前期",
    size: "全長 約7m",
    description:
      "中国で多く見つかる普及型の初期竜脚形類。細長い体で動きは軽快だったとされる。",
    trivia:
      "発見数が多く、成長段階の研究に役立っている。",
    comment: "スタンダードな しょきりゅう！"
  }
];
const DINOS_ORIGINAL = [
  {
    id: "mochiraptor",
    name: "モチラプトル",
    group: "特典：獣脚類コンプリート",
    rarity: RARITY.OR,
    isOriginal: true,
    isReward: true,
    image: "img/dinos/モチラプトルidle.png",
    classification: "オリジナル小型肉食",
    habitat: "—（特典のため設定なし）",
    era: "",
    size: "小型・すばやい",
    description:
      "ぷにぷにした見た目で、いつも元気に走り回るスピードタイプのオリジナル肉食竜。"
    + "ミニゲームの操作性を上げる“成功率UP”の特別効果を持つ。",
    trivia:
      "モチのような弾力のある体が特徴で、走ると“もちもち”揺れる。",
    comment: "スピードまかせて！ もちもち〜！"
  },

  {
    id: "fuwasaurus",
    name: "フワサウルス",
    group: "特典：竜脚類コンプリート",
    rarity: RARITY.OR,
    isOriginal: true,
    isReward: true,
    image: "img/dinos/フワサウルスidle.png",
    classification: "オリジナル竜脚類",
    habitat: "",
    era: "",
    size: "大型・ふわふわ質感",
    description:
      "見た目も性格も“のんびり癒し系”の大型恐竜。満足度ゲージの減少がゆっくりになる特別効果を持つ。",
    trivia:
      "体表はふわふわの綿毛のような質感で触ると気持ちいい（という設定）。",
    comment: "のんび〜り、ゆったり〜"
  },

  {
    id: "piyosaurus",
    name: "ピヨザウルス",
    group: "特典：鳥脚類コンプリート",
    rarity: RARITY.OR,
    isOriginal: true,
    isReward: true,
    image: "img/dinos/ピヨザウルスidle.png",
    classification: "オリジナル草食",
    habitat: "",
    era: "",
    size: "小型・高速タイプ",
    description:
      "ぴょんぴょん跳ね回る元気キャラ。ミニゲームの報酬量がアップする特別効果を持つ。",
    trivia:
      "名前の通りヒヨコのように軽く、走ると“ピヨピヨ”鳴くという説（演出）。",
    comment: "ぴょんっ！ ピヨッ！"
  },

  {
    id: "korosaurus",
    name: "コロサウルス",
    group: "特典：角竜類コンプリート",
    rarity: RARITY.OR,
    isOriginal: true,
    isReward: true,
    image: "img/dinos/コロサウルスidle.png",
    classification: "オリジナル角竜",
    habitat: "",
    era: "",
    size: "丸っこいパワー系",
    description:
      "ころっと丸い体型だが実は力持ち。化石ドロップ率がアップする特別効果持ち。",
    trivia:
      "転がるモーションが異常にかわいい（演出用）。",
    comment: "ころころ〜って まかせて！"
  },

  {
    id: "mofsaurus",
    name: "モフサウルス",
    group: "特典：鎧竜・剣竜コンプリート",
    rarity: RARITY.OR,
    isOriginal: true,
    isReward: true,
    image: "img/dinos/モフサウルスidle.png",
    classification: "オリジナル防御竜",
    habitat: "",
    era: "",
    size: "もふもふ・がっしり体系",
    description:
      "ぬいぐるみのようなモフモフ装甲を持つ守護竜。満足度ゲージの減少がさらに遅くなる強力防御系。",
    trivia:
      "モフモフ部分は全部やわらかいので攻撃には向かない（平和的）。",
    comment: "もふっ…まもるよ！"
  },

  {
    id: "luludrago",
    name: "ルルドラゴ",
    group: "特典：翼竜類コンプリート",
    rarity: RARITY.OR,
    isOriginal: true,
    isReward: true,
    image: "img/dinos/ルルドラゴidle.png",
    classification: "オリジナル翼竜",
    habitat: "",
    era: "",
    size: "空中浮遊タイプ",
    description:
      "ふわふわ空中に浮く“空の王子様”的存在。放置報酬ボーナスがつく超便利タイプ。",
    trivia:
      "声が“るるる〜♪”と鳴る（演出）。",
    comment: "るるる〜♪ そらさんぽ〜"
  },

  {
    id: "ponponsaurus",
    name: "ポンポンサウルス",
    group: "特典：海棲類コンプリート",
    rarity: RARITY.OR,
    isOriginal: true,
    isReward: true,
    image: "img/dinos/ポンポンサウルスidle.png",
    classification: "オリジナル水棲",
    habitat: "",
    era: "",
    size: "ぷかぷか浮遊系",
    description:
      "クラゲのようにぷかぷか漂う癒しキャラ。レア化石の出現率がアップする。",
    trivia:
      "体は半透明で“ぽよぽよ”揺れる（水属性演出）。",
    comment: "ぷかぷか〜 ぽよん〜"
  },

  {
    id: "sugardragon",
    name: "シュガードラゴン",
    group: "特典：全分類コンプリート",
    rarity: RARITY.OR,
    isOriginal: true,
    isReward: true,
    image: "img/dinos/シュガードラゴンidle.png",
    classification: "最終報酬ドラゴン",
    habitat: "",
    era: "",
    size: "光る・甘い・虹色ドラゴン",
    description:
      "全分類コンプリートでのみ入手可能の究極オリジナル。虹色に輝く甘い香りのドラゴン。"
    + "ミニゲーム／育成補助／ドロップ率／放置報酬など“全能力を少しずつ底上げ”する唯一の存在。",
    trivia:
      "誕生演出は“虹色のタマゴ”。二つ名は『スイートキング』『夢喰いのドラゴン』『全恐竜の友』など。",
    comment: "あまくて にじいろ。みんなの ともだち！"
  }
];
const DINOS_ALL = [
  ...DINOS_THEROPOD_LARGE,
  ...DINOS_THEROPOD_RAPTOR,
  ...DINOS_SAUROPOD,
  ...DINOS_ORNITHOPOD,
  ...DINOS_CERATOPSIA,
  ...DINOS_ARMORED,
  ...DINOS_PTEROSAURS,
  ...DINOS_MARINE,
  ...DINOS_PRIMITIVE,
  ...DINOS_ORIGINAL,
];
