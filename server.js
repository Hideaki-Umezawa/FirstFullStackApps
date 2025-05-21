const path = require("path");
const express = require("express");
const db = require("./db/index");
const app = express();
// const fetch = global.fetch || require("node-fetch");

const multer = require("multer");
const upload = multer(); // メモリストレージ

const PORT = process.env.PORT || 3000;

console.log("🚀 ~ process.env.IMGBB_API_KEY:", process.env.IMGBB_API_KEY);

app.use(express.json({ limit: "10mb" }));
app.use(express.static(path.join(__dirname, "/public")));

app.use("/api/ping", (req, res) => {
  res.send("running");
});

app.get("/api/records", async (req, res) => {
  try {
    const list = await db("records").select("*").orderBy("created_at", "desc");
    res.status(200).json(list);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/api/records", async (req, res) => {
  const [newList] = await db("records").insert(req.body).returning("*");
  res.status(201).json(newList);
});

//postされた画像をURLにして返す　　　express-fileupload／formidable／busboy とかでもいけそう？
app.post("/api/upload-image", upload.single("image"), async (req, res) => {
  console.log("/api/upload-image呼ばれた！");

  // reqを文字列型にする　　URLSearchParamsしてるから必要
  const base64 = req.file.buffer.toString("base64");

  // バイナリ以外の方法は multipartからform-dataに切り替えてheaders

  //  URLSearchParams に詰める
  //10日間（864000秒）
  const params = new URLSearchParams({
    image: base64,
    expiration: "864000",
  });

  // imgbb API へ POST
  const imgbbRes = await fetch(
    `https://api.imgbb.com/1/upload?key=${process.env.IMGBB_API_KEY}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params,
    }
  );

  const json = await imgbbRes.json();
  // ④ 返ってきた JSON をそのまま返す—or—URL だけ返す
  return res.json({ url: json.data.url });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
