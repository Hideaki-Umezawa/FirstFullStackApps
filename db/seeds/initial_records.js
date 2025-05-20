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
      record_comment: "パンケーキと紅茶がふわふわで美味しかった！",
      record_photo_url: "/uploads/pancake.png",
      record_rating: 5,
      record_mood: "ワクワク",
      meal_type: "朝食",
    },
    {
      record_date: "2025-06-02",
      record_type: "育児",
      record_comment: "赤ちゃんと絵本の読み聞かせ。ぐずることなく集中していた",
      record_photo_url: "/uploads/storytime.png",
      record_rating: 4,
      record_mood: "リラックス",
      child_activity: "絵本の読み聞かせ",
      child_age: 8,
    },
    {
      record_date: "2025-06-03",
      record_type: "服装",
      record_comment: "春のワンピースコーデ花柄が映えて気分も上がった",
      record_photo_url: "/uploads/outfit.png",
      record_rating: 5,
      record_mood: "楽しい",
      brand: "GU",
    },
    {
      record_date: "2025-06-04",
      record_type: "髪型",
      record_comment: "ロングからショートボブにチェンジ！軽くてすっきり！",
      record_photo_url: "/uploads/bob.png",
      record_rating: 4,
      record_mood: "楽しい",
      salon: "おまかせ",
    },
    {
      record_date: "2025-06-05",
      record_type: "デート",
      record_comment: "夕暮れの公園ピクニック！景色も雰囲気も最高だった",
      record_photo_url: "/uploads/picnic.png",
      record_rating: 5,
      record_mood: "楽しい",
      date_place: "中央公園",
    },
  ]);
};
