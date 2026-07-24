import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton,
    Container,
} from "@mui/material";
import { DarkMode, LightMode } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

export default function Dashboard({ user, setUser, toggleTheme }) {
    const navigate = useNavigate();
    const theme = useTheme();

    const handleLogout = () => {
        setUser(null);
        navigate("/");
    };

    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <Typography sx={{ flexGrow: 1 }}>
                        Dashboard
                    </Typography>

                    <IconButton color="inherit" onClick={toggleTheme}>
                        {theme.palette.mode === "dark" ? <LightMode /> : <DarkMode />}
                    </IconButton>

                    <Button color="inherit" onClick={handleLogout}>
                        Logout
                    </Button>
                </Toolbar>
            </AppBar>

            <Container sx={{ mt: 4 }}>
                <Typography variant="h6">
                    Welcome {user?.email}
                </Typography>
            </Container>
        </>
    );
}