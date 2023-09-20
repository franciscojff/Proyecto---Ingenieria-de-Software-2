import './App.css';

function App() {
  return (
    <form>
  <div className="form-group">
    <label for="rut">RUT</label>
    <input type="text" className="form-control" id="rut" />
  </div>
  <div className="form-group">
    <label for="password">Contraseña</label>
    <input type="password" className="form-control" id="password" />
  </div>
  <button type="submit" className="btn btn-primary">Iniciar sesión</button>
  <a href="/forgot-password">Recuperar contraseña</a>
</form>
  );
}

export default App;
