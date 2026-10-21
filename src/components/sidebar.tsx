import {
  Activity,
  BadgeDollarSign,
  Book,
  BookOpen,
  Calendar,
  ChartColumn,
  CircleCheck,
  Computer,
  FilePlus,
  FileText,
  Folder,
  NotebookPen,
  PlayCircle,
  RotateCcw,
} from "lucide-react";


export function Sidebar() {
	return (
    <div className="p-2 bg-white w-72 relative">
      <ol className="p-4 text-md pl-2 flex flex-col gap-2">
        <li className="text-lg font-semibold h-8 cursor-pointer hover:bg-zinc-200">
          <FileText className="size-5 inline-block mr-2" />
          Meus dados
        </li>
        <li className="text-lg font-semibold h-8 cursor-pointer hover:bg-zinc-200">
          <PlayCircle className="size-5 inline-block mr-2" />
          Conheça o Portal
        </li>
        <li className="text-lg font-semibold h-8 cursor-pointer hover:bg-zinc-200">
          <Folder className="size-5 inline-block mr-2" />
          Meus documentos
        </li>
        <li className="text-lg font-semibold h-8 cursor-pointer hover:bg-zinc-200">
          <Book className="size-5 inline-block mr-2" />
          Atividades acadêmicas
        </li>
        <li className="text-lg font-semibold h-8 cursor-pointer hover:bg-zinc-200">
          <Computer className="size-5 inline-block mr-2" />
          Sala de aula
        </li>
        <li className="text-lg font-semibold h-8 cursor-pointer hover:bg-zinc-200">
          <Activity className="size-5 inline-block mr-2" />
          Nivelamento
        </li>
        <li className="text-lg font-semibold h-8 cursor-pointer hover:bg-zinc-200">
          <NotebookPen className="size-5 inline-block mr-2" />
          Notas e Frequência
        </li>
        <li className="text-lg font-semibold h-8 cursor-pointer hover:bg-zinc-200">
          <BadgeDollarSign className="size-5 inline-block mr-2" />
          Financeiro
        </li>
        <li className="text-lg font-semibold h-8 cursor-pointer hover:bg-zinc-200">
          <FilePlus className="size-5 inline-block mr-2" />
          Requerimentos
        </li>
        <li className="text-lg font-semibold h-8 cursor-pointer hover:bg-zinc-200">
          <RotateCcw className="size-5 inline-block mr-2" />
          Rematrícula on-line
        </li>
        <li className="text-lg font-semibold h-8 cursor-pointer hover:bg-zinc-200">
          <CircleCheck className="size-5 inline-block mr-2" />
          Avaliação institucional
        </li>
        <li className="text-lg font-semibold h-8 cursor-pointer hover:bg-zinc-200">
          <Calendar className="size-5 inline-block mr-2" />
          Calendário acadêmico
        </li>
        <li className="text-lg font-semibold h-8 cursor-pointer hover:bg-zinc-200">
          <ChartColumn className="size-5 inline-block mr-2" />
          Relatórios/Declarações
        </li>
        <li className="text-lg font-semibold h-8 cursor-pointer hover:bg-zinc-200">
          <BookOpen className="size-5 inline-block mr-2" />
          Manual do aluno
        </li>
      </ol>
    </div>
  );
}
