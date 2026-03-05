import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png"

export default function Header() {
    const navigate = useNavigate();

    return (
        <header className="flex justify-around">
            <img src={logo} alt="logo" className="w-40" onClick={() => navigate("/")} />
            <h3>Primeiro Projeto TUIUTI</h3>
            <div>
                <button
                    onClick={() => navigate("/Logar")}
                    className="border-2 border-[#137FA8] bg-[#274E5D] me-4 h-10 px-3 rounded-2xl font-bold text-[#212121]"
                >
                    Logar
                </button>
                <button
                    onClick={() => navigate("/Cadastrar")}
                    className="border-2 border-[#137FA8] bg-[#274E5D] me-4 h-10 px-3 rounded-2xl font-bold text-[#212121]"
                >
                    Cadastrar
                </button>
            </div>
        </header>
    )
}