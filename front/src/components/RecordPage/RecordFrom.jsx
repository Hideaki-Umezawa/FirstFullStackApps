import { useState, useEffect, useContext, useRef } from "react";
// prettier-ignore
import {Box,Button,TextField,MenuItem,FormControl,InputLabel,Select,Autocomplete,TextareaAutosize,Rating} from "@mui/material";

function RecordFrom({ fetchRecord }) {
  // const [area, setArea] = useState();
  // const [areaError, setAreaError] = useState(false);

  const [record_type, setType] = useState("");
  const [record_mood, setMood] = useState("");
  const [record_comment, setComment] = useState("");
  const [record_rating, setRating] = useState(5);
  const [record_photo_url, setFile] = useState(null);

  // prettier-ignore
  const recordMoodArray = ["楽しい","疲れた","リラックス","ワクワク","悲しい",];
  const recordTypeArray = ["食事", "育児", "服装", "髪型", "デート"];
  //TypeとMoodのスタイル　同じ選択式である為共通で使用
  const TextFieldStyle = {
    width: 300,
    marginBottom: 16,
  };

  //エラー処理コード　時間あればやる　今は選択肢２つの状態を１つの関数で管理しているから分けてあげる必要あり
  // const onChangeArea = (event, value) => {
  //   setArea(value);
  //   if (value) {
  //     // setAreaError(false);
  //     setType(value);
  //   }
  // };

  // const onBlurArea = (event) => {
  //   if (!event.target.value) {
  //     setAreaError(true);
  //   }
  // };

  const handleFileChange = async (e) => {
    const file = e.currentTarget.files[0];
    console.log("🚀 ~ handleFileChange ~ file:", file);

    const formData = new FormData(); // FormData の箱にファイルを詰め込む←ファイルをfetchする時は使わないといけないらしい
    formData.append("image", file); //key image   val file   として格納　　postでimageしか見ない

    const res = await fetch("/api/upload-image", {
      method: "POST",
      body: formData,
    });

    // JSON をパースして URL を取り出す
    const json = await res.json();
    console.log("🚀 ~ handleFileChange ~ json:", json);
    const imageUrl = json.url;

    console.log("😍😍😍😍😍😍アップロード先URL:", imageUrl);
    setFile(imageUrl);
  };

  //各入力項目の状態を　payload　にオブジェクトとして格納しpostする関数　payload内の変数はカラムに合わしてあげる必要有り！
  const handleSubmit = async () => {
    if (record_photo_url) {
      const payload = {
        record_type,
        record_mood,
        record_comment,
        record_rating,
        record_photo_url,
        record_date: new Date(),
      };
      console.log("🚀 ~ handleSubmit ~ payload:", payload);

      const req = await fetch("/api/records", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      console.log("🚀 ~ handleSubmit ~ req:", req);
      await fetchRecord();
    }
    // setType("");
    // setMood("");
    // setComment("");
    // setRating(5);
  };
  return (
    <main className="record_from">
      <h1>今日の出来事を投稿してみよう！</h1>
      <Autocomplete
        options={recordTypeArray}
        onChange={(e) => setType(e.target.innerHTML)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="分類選択"
            style={TextFieldStyle}
            // onBlur={onBlurArea}
            // error={areaError}
            // helperText={areaError ? "分類を入力してください" : ""}
          />
        )}
      />
      <Autocomplete
        options={recordMoodArray}
        onChange={(e) => setMood(e.target.innerHTML)}
        // onChange={onChangeArea}
        renderInput={(params) => (
          <TextField
            {...params}
            label="気分選択"
            style={TextFieldStyle}
            // onBlur={onBlurArea}
            // error={areaError}
            // helperText={areaError ? "気分を入力してください" : ""}
          />
        )}
      />
      <TextareaAutosize
        aria-label="minimum height"
        minRows={10}
        maxRows={30}
        placeholder="コメント欄"
        onChange={(e) => setComment(e.target.value)}
      />
      <Box>
        {/* <input type="file" accept="image/*" /> */}
        <input type="file" accept="image/*" onChange={handleFileChange} />
      </Box>
      <Rating
        name="size-large"
        defaultValue={5}
        size="large"
        onChange={(_, e) => setRating(e)}
      />
      <Button variant="contained" onClick={handleSubmit}>
        投稿
      </Button>
    </main>
  );
}

export default RecordFrom;
