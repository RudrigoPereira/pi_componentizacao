import React, { useState } from "react";
import "./RedefinirSenha.css";

export default function RedefinirSenha() {
    const [novaSenha, setNovaSenha] = useState("");
    const [confirmarSenha, setConfirmarSenha] = useState("");
    const [senhaRedefinida, setSenhaRedefinida] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        // Aqui você pode adicionar a lógica para verificar e redefinir a senha
        // Por exemplo, você pode fazer uma requisição à API para verificar as informações e atualizar a senha

        // Exemplo de ação fictícia que simula a redefinição da senha:
        if (novaSenha === confirmarSenha) {
            setTimeout(() => {
                setSenhaRedefinida(true);
            }, 2000);
        }
    };

    if (senhaRedefinida) {
        return (
            <div>
                <h2>Redefinição de Senha</h2>
                <p>A sua senha foi redefinida com sucesso.</p>
            </div>
        );
    }

    return (
        <div>
            <h2>Redefinição de Senha</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="novaSenha">Nova Senha:</label>
                <input
                    type="password"
                    id="novaSenha"
                    name="novaSenha"
                    placeholder="Digite a nova senha"
                    required
                    value={novaSenha}
                    onChange={(event) => setNovaSenha(event.target.value)}
                />

                <label htmlFor="confirmarSenha">Confirmar Senha:</label>
                <input
                    type="password"
                    id="confirmarSenha"
                    name="confirmarSenha"
                    placeholder="Confirme a nova senha"
                    required
                    value={confirmarSenha}
                    onChange={(event) => setConfirmarSenha(event.target.value)}
                />

                <input type="submit" value="Redefinir Senha" />
            </form>
        </div>
    );
}
