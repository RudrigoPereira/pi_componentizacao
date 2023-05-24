import "./Cadastro.css";

export function Cadastro() {
    return (
        <div>
            <h2>Cadastro</h2>
            <div className="SignupForm">
                <form>
                    <label htmlFor="name">Nome:</label>
                    <input type="text" id="name" name="name" placeholder="Nome" required />
                    <label htmlFor="email">E-mail:</label>
                    <input type="email" id="email" name="email" placeholder="E-mail" required />
                    <label htmlFor="password">Senha:</label>
                    <input type="password" id="password" name="password" placeholder="Senha" required />
                    <input type="submit" value="Cadastrar" />
                </form>
            </div>
        </div>
    );
}