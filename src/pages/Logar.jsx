import Header from "../components/Header"
import { supabase } from "../supabaseClient"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Logar() {
    const navigate = useNavigate();
    const [form, setForm] = useState({email: "", senha: ""});

    async function logar(e) {
        e.preventDefault();
        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email: form.email,
                password: form.senha
            });
            if (error) {
                return;
            }
            alert("Você está logado!");
            setForm({
                email: "",
                senha: ""
            });
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="min-h-screen bg-[#262B2D]">
            <Header />
            <form
                onSubmit={logar}
                className="space-y-5 max-w-md mx-auto mt-20"
            >
                <div>
                    <label className="text-white text-sm">
                        E-mail
                    </label>
                    <input
                        type="email"
                        value={form.email}
                        onChange={(e) =>
                            setForm({ ...form, email: e.target.value })
                        }
                        className="w-full rounded-lg bg-[#D9D9D9] px-4 py-3"
                    />
                </div>
                <div>
                    <label className="text-white text-sm">
                        Senha
                    </label>
                    <input
                        type="password"
                        value={form.senha}
                        onChange={(e) =>
                            setForm({ ...form, senha: e.target.value })
                        }
                        className="w-full rounded-lg bg-[#D9D9D9] px-4 py-3"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-[#212121] text-white py-3 rounded-lg"
                >
                    Entrar
                </button>
            </form>
        </div>
    )
}