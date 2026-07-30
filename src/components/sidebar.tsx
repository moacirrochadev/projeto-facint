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
	Menu,
	NotebookPen,
	RotateCcw,
} from "lucide-react";

export function Sidebar() {
	return (
		<div>
			<Menu
				id="menuIcon"
				className="size-7 cursor-pointer"
				onClick={toggleSidebar}
			/>
			<ul className="p-4 text-md pl-2 hidden" id="sidebar">
				<li>
					<FileText className="size-5 inline-block mr-2" />
					Meus dados
				</li>
				<li>
					<Folder className="size-5 inline-block mr-2" />
					Meus documentos
				</li>
				<li>
					<Book className="size-5 inline-block mr-2" />
					Atividades acadêmicas
				</li>
				<li>
					<Computer className="size-5 inline-block mr-2" />
					Sala de aula
				</li>
				<li>
					<Activity className="size-5 inline-block mr-2" />
					Nivelamento
				</li>
				<li>
					<NotebookPen className="size-5 inline-block mr-2" />
					Notas e Frequência
				</li>
				<li>
					<BadgeDollarSign className="size-5 inline-block mr-2" />
					Financeiro
				</li>
				<li>
					<FilePlus className="size-5 inline-block mr-2" />
					Requerimentos
				</li>
				<li>
					<RotateCcw className="size-5 inline-block mr-2" />
					Rematrícula on-line
				</li>
				<li>
					<CircleCheck className="size-5 inline-block mr-2" />
					Avaliação institucional
				</li>
				<li>
					<Calendar className="size-5 inline-block mr-2" />
					Calendário acadêmico
				</li>
				<li>
					<ChartColumn className="size-5 inline-block mr-2" />
					Relatórios/Declarações
				</li>
				<li>
					<BookOpen className="size-5 inline-block mr-2" />
					Manual do aluno
				</li>
			</ul>
		</div>
	);
}

// Função para alternar a visibilidade da sidebar
function toggleSidebar() {
	const sidebar = document.getElementById("sidebar");
	if (sidebar) {
		sidebar.classList.toggle("hidden");
	} else {
		console.error("Sidebar element not found");
	}
}

// Quando abrir a sidebar, adicionar um event listener para fechar a sidebar ao clicar fora dela
document.addEventListener("click", (event) => {
	const sidebar = document.getElementById("sidebar");
	const menuIcon = document.getElementById("menuIcon");
	if (sidebar && menuIcon) {
		if (
			!sidebar.contains(event.target as Node) &&
			!menuIcon.contains(event.target as Node)
		) {
			sidebar.classList.add("hidden");
		}
	}
});

// Quando abrir a sidebar, adicionar um event listener para fechar a sidebar ao pressionar a tecla "Escape"
document.addEventListener("keydown", (event) => {
	const sidebar = document.getElementById("sidebar");
	if (sidebar && event.key === "Escape") {
		sidebar.classList.add("hidden");
	}
});

// Quando abrir a sidebar, ela deve sobrepor o conteúdo principal, e não empurrar o conteúdo para o lado. Para isso, podemos usar a propriedade CSS "position: absolute" para posicionar a sidebar sobre o conteúdo principal. Além disso, podemos adicionar um fundo semitransparente para a sidebar para destacar o menu e melhorar a usabilidade. Aqui está um exemplo de como fazer isso:

// CSS para a sidebar
/*
#sidebar {
    position: absolute;
    top: 0;
    left: 0;
    width: 200px;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.9); // Fundo semitransparente
    z-index: 1000; // Certifique-se de que a sidebar fique acima do conteúdo principal
}
*/
