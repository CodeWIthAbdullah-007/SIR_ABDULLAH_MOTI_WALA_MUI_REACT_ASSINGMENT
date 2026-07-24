import {
    Box,
    Button,
    Container,
    Paper,
    TextField,
    Typography,
    IconButton,
} from "@mui/material";
import { DarkMode, LightMode } from "@mui/icons-material";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

export default function Login({ setUser, toggleTheme }) {
    const navigate = useNavigate();
    const theme = useTheme();
    const [form, setForm] = useState({ email: "", password: "" });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.email || !form.password) return;
        setUser(form);
        navigate("/dashboard");
    };

    return (
        <Box
            sx={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
            }}
        >
            <Container maxWidth="sm">
                <Paper elevation={6} sx={{ p: 4, borderRadius: 3, position: "relative" }}>

                    <IconButton
                        onClick={toggleTheme}
                        sx={{ position: "absolute", top: 10, right: 10 }}
                    >
                        {theme.palette.mode === "dark" ? <LightMode /> : <DarkMode />}
                    </IconButton>

                    <Typography variant="h5" mb={3}>
                        Sign In
                    </Typography>

                    <Box component="form" onSubmit={handleSubmit}>
                        <TextField
                            fullWidth
                            label="Email"
                            name="email"
                            margin="normal"
                            onChange={handleChange}
                        />
                        <TextField
                            fullWidth
                            label="Password"
                            type="password"
                            name="password"
                            margin="normal"
                            onChange={handleChange}
                        />

                        <Button fullWidth type="submit" variant="contained" sx={{ mt: 3 }}>
                            Login
                        </Button>
                    </Box>

                    <Typography mt={2}>
                        Don’t have account? <Link to="/signup">Create one</Link>
                    </Typography>
                </Paper>
            </Container>
        </Box>
    );
}