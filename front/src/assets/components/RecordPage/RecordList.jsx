import "./RecordList.css";
import {
  Box,
  Button,
  TextField,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Autocomplete,
  TextareaAutosize,
  Rating,
} from "@mui/material";

function RecordList({ records }) {
  return (
    <main className="record_page">
      <h1>日々の出来事を記録しよう！ ⇨ </h1>
      <Button variant="contained">投稿</Button>
      <ul className="record_list">
        {records.map((r) => (
          <li key={r.id} className="record_item">
            {/* 共通項目(必須項目の為条件分岐なし) */}
            <div className="record_header">
              <time className="record_date">{r.record_date}</time>
              <span className="record_type">{r.record_type}</span>
              <p className="record_content">{r.record_comment}</p>
              <span className="record_rating">⭐ {r.record_rating}</span>
              <span className="record_mood">気分: {r.record_mood}</span>
            </div>

            {/* オプション項目 (ユーザー任意項目予定)*/}
            {r.record_photo_url && (
              <img
                className="record_photo"
                src={r.record_photo_url}
                alt={`${r.record_type} の写真`}
              />
            )}

            {/* タイプ別オプション */}
            {r.record_type === "食事" && r.meal_type && (
              <p className="record_meal_type">食事区分: {r.meal_type}</p>
            )}
            {r.record_type === "育児" && (
              <div className="record_child">
                {r.child_activity && (
                  <p className="child_activity">活動: {r.child_activity}</p>
                )}
                {r.child_age != null && (
                  <p className="child_age">お子様年齢: {r.child_age}ヶ月</p>
                )}
              </div>
            )}
            {r.record_type === "服装" && r.brand && (
              <p className="record_brand">ブランド: {r.brand}</p>
            )}
            {r.record_type === "髪型" && r.salon && (
              <p className="record_salon">美容室: {r.salon}</p>
            )}
            {r.record_type === "デート" && r.date_place && (
              <p className="record_date_place">場所: {r.date_place}</p>
            )}
          </li>
        ))}
      </ul>
    </main>
  );
}

export default RecordList;
