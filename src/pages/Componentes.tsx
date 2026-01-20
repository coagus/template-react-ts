import { useState } from "react";
import Container from "../components/Container";
import InputText from "../components/InputText";
import TextField from "../components/TextField";

const Componentes = () => {
  const [outlinedValue, setOutlinedValue] = useState("");
  const [filledValue, setFilledValue] = useState("");
  const [standardValue, setStandardValue] = useState("");
  const [errorValue, setErrorValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [multilineValue, setMultilineValue] = useState("");

  return (
    <Container title="Componentes" path="home / componentes">
      <div className="space-y-8 p-6">
        <div>
          <h1 className="text-2xl font-bold text-theme-primary mb-4">Input Simple</h1>
          <InputText placeholder="Ingresa tu nombre" type="text" onChange={() => {}} />
        </div>

        <div>
          <h1 className="text-2xl font-bold text-theme-primary mb-4">TextField - Variantes</h1>
          <div className="space-y-4">
            <div>
              <h2 className="text-lg font-semibold text-theme-secondary mb-2">Outlined (por defecto)</h2>
              <TextField
                label="Outlined"
                variant="outlined"
                value={outlinedValue}
                onChange={(e) => setOutlinedValue(e.target.value)}
                placeholder="Ingresa texto"
              />
            </div>

            <div>
              <h2 className="text-lg font-semibold text-theme-secondary mb-2">Filled</h2>
              <TextField
                label="Filled"
                variant="filled"
                value={filledValue}
                onChange={(e) => setFilledValue(e.target.value)}
                placeholder="Ingresa texto"
              />
            </div>

            <div>
              <h2 className="text-lg font-semibold text-theme-secondary mb-2">Standard</h2>
              <TextField
                label="Standard"
                variant="standard"
                value={standardValue}
                onChange={(e) => setStandardValue(e.target.value)}
                placeholder="Ingresa texto"
              />
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-2xl font-bold text-theme-primary mb-4">TextField - Estados</h1>
          <div className="space-y-4">
            <div>
              <h2 className="text-lg font-semibold text-theme-secondary mb-2">Required</h2>
              <TextField
                label="Required"
                variant="outlined"
                required
                placeholder="Campo obligatorio"
              />
            </div>

            <div>
              <h2 className="text-lg font-semibold text-theme-secondary mb-2">Disabled</h2>
              <TextField
                label="Disabled"
                variant="outlined"
                disabled
                defaultValue="Valor deshabilitado"
              />
            </div>

            <div>
              <h2 className="text-lg font-semibold text-theme-secondary mb-2">Error</h2>
              <TextField
                label="Error"
                variant="outlined"
                error
                helperText="Este campo tiene un error"
                value={errorValue}
                onChange={(e) => setErrorValue(e.target.value)}
              />
            </div>

            <div>
              <h2 className="text-lg font-semibold text-theme-secondary mb-2">Password</h2>
              <TextField
                label="Password"
                variant="outlined"
                type="password"
                value={passwordValue}
                onChange={(e) => setPasswordValue(e.target.value)}
                helperText="Ingresa tu contraseña"
              />
            </div>

            <div>
              <h2 className="text-lg font-semibold text-theme-secondary mb-2">Read Only</h2>
              <TextField
                label="Read Only"
                variant="outlined"
                readOnly
                defaultValue="Solo lectura"
              />
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-2xl font-bold text-theme-primary mb-4">TextField - Multiline</h1>
          <div className="space-y-4">
            <div>
              <TextField
                label="Multiline"
                variant="outlined"
                multiline
                rows={4}
                value={multilineValue}
                onChange={(e) => setMultilineValue(e.target.value)}
                placeholder="Escribe varias líneas..."
              />
            </div>

            <div>
              <TextField
                label="Multiline con min/max rows"
                variant="outlined"
                multiline
                minRows={3}
                maxRows={6}
                placeholder="Se expande automáticamente"
              />
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-2xl font-bold text-theme-primary mb-4">TextField - Tamaños</h1>
          <div className="space-y-4">
            <div>
              <TextField
                label="Small"
                variant="outlined"
                size="small"
                placeholder="Tamaño pequeño"
              />
            </div>

            <div>
              <TextField
                label="Medium (por defecto)"
                variant="outlined"
                size="medium"
                placeholder="Tamaño mediano"
              />
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-2xl font-bold text-theme-primary mb-4">TextField - Full Width</h1>
          <TextField
            label="Full Width"
            variant="outlined"
            fullWidth
            placeholder="Ocupa todo el ancho disponible"
          />
        </div>
      </div>
    </Container>
  );
};

export default Componentes;