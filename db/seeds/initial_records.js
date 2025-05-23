/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex("records").del();
  await knex("records").insert([
    {
      record_date: "2025-06-01",
      record_type: "食事",
      record_comment: "コーヒーめちゃうま",
      record_photo_url: "https://i.ibb.co/k2bVrZLP/6b13d77d4703.jpg",
      record_rating: 5,
      record_mood: "ワクワク",
      meal_type: "朝食",
    },
    {
      record_date: "2025-06-02",
      record_type: "育児",
      record_comment: "赤ちゃんと公園で遊んできた 子供の成長は早い！",
      record_photo_url: "https://i.ibb.co/h1FZb2CR/4a4affc1de4d.jpg",
      record_rating: 4,
      record_mood: "リラックス",
      child_activity: "公園で遊び",
      child_age: 2,
    },
    {
      record_date: "2025-06-03",
      record_type: "服装",
      record_comment: "仕事着のNo.1コード",
      record_photo_url: "https://i.ibb.co/SX10ZT6F/61d518c5312a.jpg",
      record_rating: 5,
      record_mood: "楽しい",
      brand: "GU",
    },
    {
      record_date: "2025-06-04",
      record_type: "髪型",
      record_comment: "今日の美容室の店員さん大当たり",
      record_photo_url:
        "https://imgbp.hotp.jp/magazine/media/item_images/images/157/545/260/original/ad3c2473-1e46-45b1-9d14-84637a776a42.jpg",
      record_rating: 4,
      record_mood: "楽しい",
      salon: "おまかせ",
    },
    {
      record_date: "2025-06-05",
      record_type: "食事",
      record_comment: "焼肉パーティーした。めちゃうまだった",
      record_photo_url:
        "https://as1.ftcdn.net/v2/jpg/05/02/69/00/1000_F_502690033_qmZLw884d9z00wbABWqE6R7sSTlwBC4p.jpg",
      record_rating: 5,
      record_mood: "楽しい",
      date_place: "家",
    },
  ]);
};
