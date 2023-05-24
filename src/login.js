import "./login.css";

export default function Login() {
  return (
    <div className="Login">
      <form>
        <label for="login">Login:</label>
        <input type="text" id="username" name="username" placeholder="E-mail" required />
        <input type="password" id="password" name="password" placeholder="Senha" required />
        <a href="#" class="esqueceu">Esqueceu sua senha?</a>
        <p>
          <input type="submit" value="Entrar" />
        </p>

        <div class="links">
          Ainda não tem conta?
          <a href="#"> Cadastre-se</a>
        </div>
      </form>
    </div>
  );
}

