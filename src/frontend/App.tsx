function App() {
  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-b from-green-400 to-green-900">
      <div className="text-white text-4xl font-bold text-center">
        <p className="border-b-2 pb-2">Dimensionador</p>

        <div className="mt-10 text-base font-normal">
          <form className="flex flex-col items-center">
            <label htmlFor="Inverter"> Selecione um inversor:</label>
            <select
              id="Inverter"
              name="Inverter"
              className="mt-1 mb-4 p-1 rounded text-black bg-white"
            >
              <option value="inversor1">Min</option>
              <option value="inversor2">Mid</option>
              <option value="inversor3">Max</option>
            </select>
            <label htmlFor="Voc">Tensão CC do módulo:</label>
            <input
              type="number"
              id="Voc"
              name="Voc"
              className="mt-1 mb-4 p-1 rounded text-black bg-white"
            />

            <label htmlFor="Isc">Corrente CC do módulo:</label>
            <input
              type="number"
              id="Isc"
              name="Isc"
              className="mt-1 mb-4 p-1 rounded text-black bg-white"
            />

            <button
              type="submit"
              className="bg-white text-black px-4 py-2 rounded hover:bg-blue-400 transition-colors duration-200"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
      <p className="text-red-500">Teste</p>
    </div>
  );
}

export default App;