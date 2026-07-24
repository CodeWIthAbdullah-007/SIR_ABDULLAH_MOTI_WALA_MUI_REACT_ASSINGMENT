import {
    Box,
    Button,
    Container,
    Paper,
    TextField,
    Typography,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/");
    };

    return (
        <Box
            sx={{
                minHeight: "100vh",
                background: "linear-gradient(135deg,#43cea2,#185a9d)",
                display: "flex",
                alignItems: "center",
            }}
        >
            <Container maxWidth="sm">
                <Paper elevation={6} sx={{ p: 4, borderRadius: 3 }}>
                    <Typography variant="h5" fontWeight={600} mb={3}>
                        Create Account
                    </Typography>

                    <Box component="form" onSubmit={handleSubmit}>
                        <TextField
                            fullWidth
                            label="Full Name"
                            name="name"
                            margin="normal"
                            onChange={handleChange}
                        />
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

                        <Button
                            fullWidth
                            type="submit"
                            variant="contained"
                            sx={{ mt: 3, borderRadius: 2 }}
                        >
                            Signup
                        </Button>
                    </Box>
                </Paper>
            </Container>
        </Box>
    );
}