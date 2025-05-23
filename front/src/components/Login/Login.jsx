import {
  Avatar,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Link,
  Paper,
  Stack,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import "./Login.css";
import { useContext } from "react";
// import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
// import { teal } from "@mui/material/colors";

const Container = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  backgroundColor: "#f0f0f0",
});

const LoginCard = styled("div")({
  backgroundColor: "#fff",
  padding: "20px",
  borderRadius: "10px",
  boxShadow: "0 0 10px rgba(0,0,0,0.1)",
});

function Login() {
  //   const { user, login } = useContext("");
  return (
    <Container>
      <LoginCard>
        <Typography variant="h5" gutterBottom>
          ログイン
        </Typography>
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          label="ユーザー名"
        />
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          label="パスワード"
          type="password"
        />
        <Button variant="contained" color="primary" fullWidth>
          ログイン
        </Button>
      </LoginCard>
    </Container>
  );
}

export default Login;
