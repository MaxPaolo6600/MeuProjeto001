import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png"

export default function Header() {
    const navigate = useNavigate();

    return (
        <header className="flex justify-around items-center bg-[#212121] h-18">
            {/* <img src={logo} alt="logo" className="w-40" onClick={() => navigate("/")} /> */}
            <h3 className="text-white">Primeiro Projeto TUIUTI</h3>
            <div>
                <button
                    onClick={() => navigate("/Logar")}
                    className="border-2 border-[#274E5D] bg-[#137FA8] me-4 h-10 px-3 rounded-2xl font-bold text-[#212121]"
                >
                    Logar
                </button>
                <button
                    onClick={() => navigate("/Cadastrar")}
                    className="border-2 border-[#274E5D] bg-[#137FA8] me-4 h-10 px-3 rounded-2xl font-bold text-[#212121]"
                >
                    Cadastrar
                </button>
            </div>
        </header>
    )
}