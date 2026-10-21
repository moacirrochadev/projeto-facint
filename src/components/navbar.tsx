import { ArrowDown, ArrowUp, Bell, CircleUser, Menu, Sun } from "lucide-react";

export function Navbar() {
  const curso = "Análise e Desenvolvimento de Sistemas"; // Nome do curso
  const nomeDoAluno = "Moacir Rocha de Oliveira Neto"; // Nome do aluno
  const numeroDeMatricula = "123456789"; // Número de matrícula

  return (
    <div className="h-full  px-2 flex items-center justify-around gap-2 flex-1 bg-white border-b-2 border-zinc-200">
      <Menu id="menuIcon" className="size-7 cursor-pointer" />
      <div className="flex flex-1 justify-between items-center p-2">
        <img src="/logo.png" alt="Logo" className="w-32" />
        <div className="flex gap-2">
          <div className="flex gap-0">
            <ArrowUp size={20} />
            <ArrowDown size={20} />
          </div>
          <div className="flex gap-2">
            <p>{curso}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex gap-3">
            <Sun />
            <Bell />
          </div>
          <div className="flex flex-col text-sm w-75 h-10 items-end">
            {nomeDoAluno} {/* Substitua pelo nome do aluno */}
            <p>
              RA: {numeroDeMatricula} {/* Substitua pelo número de matrícula */}
            </p>
          </div>
          <CircleUser className="size-7" />
        </div>
      </div>
    </div>
  );
}
