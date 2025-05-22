import { useState, useEffect, useContext, useRef } from "react";
// prettier-ignore
import {Modal,Box,Button,TextField,MenuItem,FormControl,InputLabel,Select,Autocomplete,TextareaAutosize,Rating} from "@mui/material";

function RecordFrom({ fetchRecord }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // const [area, setArea] = useState();
  // const [areaError, setAreaError] = useState(false);

  const [record_type, setType] = useState("");
  const [record_mood, setMood] = useState("");
  const [record_comment, setComment] = useState("");
  const [record_rating, setRating] = useState(5);
  const [record_photo_url, setFile] = useState(null);
  // const fileInputRef = useRef(null);

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

      setType("");
      setMood("");
      setComment("");
      setRating(5);
      setFile(null);
    }
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          marginTop: "50px",
          height: 70,
        }}
      >
        <h1>日々の出来事を記録しよう！ ⇨</h1>
        <Button
          sx={{
            backgroundColor: "rgb(177, 243, 249)",
            width: 150,
            marginTop: "20px",
          }}
          onClick={handleOpen}
        >
          フォームを開く
        </Button>
      </Box>

      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            borderRadius: 2,
            boxShadow: 24,
            p: 4,
          }}
        >
          <Autocomplete
            value={record_type}
            options={recordTypeArray}
            onChange={(val, e) => setType(e)}
            renderInput={(params) => (
              <TextField {...params} label="分類選択" style={TextFieldStyle} />
            )}
          />
          <Autocomplete
            value={record_mood}
            options={recordMoodArray}
            onChange={(val, e) => setMood(e)}
            renderInput={(params) => (
              <TextField {...params} label="気分選択" style={TextFieldStyle} />
            )}
          />
          <TextareaAutosize
            value={record_comment}
            aria-label="minimum height"
            minRows={5}
            maxRows={10}
            placeholder="コメント欄"
            style={{ width: "100%", marginTop: "1rem" }}
            onChange={(e) => setComment(e.target.value)}
          />
          <Box sx={{ mt: 2 }}>
            <input type="file" accept="image/*" onChange={handleFileChange} />
          </Box>
          <Box sx={{ mt: 2 }}>
            <Rating
              value={record_rating}
              name="size-large"
              defaultValue={5}
              size="large"
              onChange={(_, newValue) => setRating(newValue)}
            />
          </Box>
          <Button variant="contained" onClick={handleSubmit} sx={{ mt: 2 }}>
            投稿
          </Button>
        </Box>
      </Modal>
    </>
  );
}

export default RecordFrom;
