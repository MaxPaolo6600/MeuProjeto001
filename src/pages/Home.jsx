import { useNavigate } from "react-router-dom";
import Header from "../components/Header"

export default function Home() {
    const navigate = useNavigate();
    return (
        <>
            <Header />
            <main className="container mx-auto">
                <div className="flex items-center flex-col">
                    <h1>Essa é a página Home, crie sua conta</h1>
                    <button className="text-white w-100 rounded-2xl bg-linear-to-bl from-violet-500 to-fuchsia-500" onClick={() => navigate("/Cadastrar")}>AQUI</button>
                </div>
            </main>
        </>
    )
}