export function DataArea() {
    return (
        <div className="grid grid-rows-3 sm:flex gap-4 justify-center mt-6 px-4">
            <div className="flex flex-col items-center p-2 rounded-2xl w-60 bg-gray-400">
                <h2 className="text-lg md:text-2xl text-zinc-800 font-semibold">Dados</h2>
                <img src="/porcentagem.svg" alt="" className="sm:w-32 pt-4" />
                <p className="text-lg text-center text-zinc-800 p-4">Parabéns! Seus dados estão completos</p>
            </div>
            <div className="flex flex-col items-center p-2 rounded-2xl w-60 bg-gray-400">
                <h2 className="text-lg md:text-2xl text-zinc-800 font-semibold">Documentos</h2>
                <img src="/porcentagem.svg" alt="" className="sm:w-32 pt-4" />
                <p className="text-lg text-center text-zinc-800 p-4">Parabéns! Seus documentos estão completos</p>
            </div>
            <div className="flex flex-col items-center p-2 rounded-2xl w-60 bg-gray-400">
                <h2 className="text-lg md:text-2xl text-zinc-800 font-semibold">AAC</h2>
                <img src="/porcentagem.svg" alt="" className="sm:w-32 pt-4" />
                <p className="text-lg text-center text-zinc-800 p-4">Complete o cadastro das suas atividades acadêmicas complementares</p>
            </div>
        </div>
    )
}