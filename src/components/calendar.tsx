import {
	ChevronLeft,
	ChevronRight
} from "lucide-react";
import { useEffect, useState } from "react";

type CalendarEvent = {
	id: string;
	date: string;
	title: string;
	time: string;
	description: string;
	color: string;
};

type EventFormState = {
	date: string;
	title: string;
	time: string;
	description: string;
	color: string;
};

type CalendarCell = {
	id: string;
	date: Date | null;
};

const STORAGE_KEY = "facint-calendar-events";
const WEEKDAY_LABELS = ["D", "S", "T", "Q", "Q", "S", "S"];
const EVENT_COLORS = [
	{ label: "Azul", value: "#2563eb" },
	{ label: "Verde", value: "#16a34a" },
	{ label: "Laranja", value: "#f97316" },
	{ label: "Vermelho", value: "#dc2626" },
	{ label: "Roxo", value: "#7c3aed" },
];

function getDateKey(date: Date) {
	const year = date.getFullYear();
	const month = String(date.getMonth() + 1).padStart(2, "0");
	const day = String(date.getDate()).padStart(2, "0");

	return `${year}-${month}-${day}`;
}

function formatMonthYear(date: Date) {
	return new Intl.DateTimeFormat("pt-BR", {
		month: "long",
		year: "numeric",
	}).format(date);
}

function buildMonthDays(referenceDate: Date) {
	const year = referenceDate.getFullYear();
	const month = referenceDate.getMonth();
	const firstDayOfMonth = new Date(year, month, 1);
	const startDay = firstDayOfMonth.getDay();
	const daysInMonth = new Date(year, month + 1, 0).getDate();
	const days: CalendarCell[] = [];
	let cellIndex = 0;

	for (let index = 0; index < startDay; index += 1) {
		days.push({
			id: `${year}-${month}-pad-${cellIndex}`,
			date: null,
		});
		cellIndex += 1;
	}

	for (let day = 1; day <= daysInMonth; day += 1) {
		days.push({
			id: `${year}-${month}-${day}`,
			date: new Date(year, month, day),
		});
		cellIndex += 1;
	}

	while (days.length % 7 !== 0) {
		days.push({
			id: `${year}-${month}-pad-${cellIndex}`,
			date: null,
		});
		cellIndex += 1;
	}

	return days;
}

function createEmptyForm(date: string): EventFormState {
	return {
		date,
		title: "",
		time: "08:00",
		description: "",
		color: EVENT_COLORS[0].value,
	};
}

export function Calendar() {
	const [referenceDate, setReferenceDate] = useState(() => new Date());
	const [selectedDate, setSelectedDate] = useState(() =>
		getDateKey(new Date()),
	);
	const [events, setEvents] = useState<CalendarEvent[]>([]);
	const [_formState, setFormState] = useState<EventFormState>(() =>
		createEmptyForm(getDateKey(new Date())),
	);
	const [isStorageReady, setIsStorageReady] = useState(false);

	useEffect(() => {
		const storedEvents = window.localStorage.getItem(STORAGE_KEY);

		if (!storedEvents) {
			return;
		}

		try {
			const parsedEvents = JSON.parse(storedEvents) as CalendarEvent[];
			setEvents(Array.isArray(parsedEvents) ? parsedEvents : []);
		} catch {
			setEvents([]);
		}

		setIsStorageReady(true);
	}, []);

	useEffect(() => {
		if (!isStorageReady) {
			return;
		}

		window.localStorage.setItem(STORAGE_KEY, JSON.stringify(events));
	}, [events, isStorageReady]);

	useEffect(() => {
		setFormState((currentForm) =>
			currentForm.date === selectedDate
				? currentForm
				: createEmptyForm(selectedDate),
		);
	}, [selectedDate]);

	const monthDays = buildMonthDays(referenceDate);
	
	const todayKey = getDateKey(new Date());

	function moveMonth(offset: number) {
		setReferenceDate((currentDate) => {
			const nextDate = new Date(
				currentDate.getFullYear(),
				currentDate.getMonth() + offset,
				1,
			);
			setSelectedDate(getDateKey(nextDate));

			return nextDate;
		});
	}

	return (
		<div className="m-1 space-y-6 px-4 pb-8 bg-white">
			<div className="flex flex-col gap-2 text-center">
				<h2 className="text-2xl font-semibold">
					Calendário acadêmico
				</h2>
			</div>

			<div>
				<section className="md:w-120 mx-auto rounded-2xl border border-slate-200 p-4 shadow-sm">
					<div className="mb-4 flex items-center justify-between gap-3">
						<button
							type="button"
							onClick={() => moveMonth(-1)}
							className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition hover:bg-slate-100"
							aria-label="Mês anterior"
						>
							<ChevronLeft className="size-5 text-zinc-50" />
						</button>
						<div className="text-center">
							<p className="text-xs uppercase tracking-[0.2em] font-semibold">
								Mês atual
							</p>
							<h3 className="text-lg font-semibold capitalize ">
								{formatMonthYear(referenceDate)}
							</h3>
						</div>
						<button
							type="button"
							onClick={() => moveMonth(1)}
							className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition hover:bg-slate-100"
							aria-label="Próximo mês"
						>
							<ChevronRight className="size-5 text-zinc-50" />
						</button>
					</div>

					<div className="grid grid-cols-7 gap-2 text-center text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
						{WEEKDAY_LABELS.map((label) => (
							<div key={label} className="py-2">
								{label}
							</div>
						))}
					</div>

					<div className="mt-1 grid grid-cols-7 gap-2">
						{monthDays.map((cell) => {
							if (!cell.date) {
								return (
									<div
										key={cell.id}
										className="min-h-10 rounded-2xl border border-dashed border-slate-100 bg-slate-50/60"
									/>
								);
							}

							const day = cell.date;
							const dayKey = getDateKey(day);
							const dayEvents = events.filter(
								(calendarEvent) => calendarEvent.date === dayKey,
							);
							const isSelected = dayKey === selectedDate;
							// const isToday = dayKey === todayKey;

							return (
								<button
									key={cell.id}
									type="button"
									onClick={() => setSelectedDate(dayKey)}
									className={`min-h-10 h-30 w-15 rounded-2xl border p-2 text-left transition ${
										isSelected
											? "border-slate-900 bg-slate-900 text-white shadow-lg"
											: "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50"
									}`}
								>
									<div className="flex items-center justify-between">
										<span
											className={`text-sm font-semibold ${isSelected ? "text-white" : "text-slate-900"}`}
										>
											{day.getDate()}
										</span>
										{/* {isToday ? (
											<span
												className={`rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.2em] ${isSelected ? "bg-white/20 text-white" : "bg-slate-100 text-slate-600"}`}
											>
												hoje
											</span>
										) : null} */}
									</div>
									<div className="mt-2 space-y-1">
										{dayEvents.slice(0, 2).map((calendarEvent) => (
											<div
												key={calendarEvent.id}
												className={`truncate rounded-lg px-2 py-1 text-[11px] font-medium ${isSelected ? "bg-white/15 text-white" : "bg-slate-100 text-slate-700"}`}
												style={{
													borderLeft: `3px solid ${calendarEvent.color}`,
												}}
											>
												{calendarEvent.time} · {calendarEvent.title}
											</div>
										))}
										{dayEvents.length > 2 ? (
											<p
												className={`text-[11px] font-medium ${isSelected ? "text-white/80" : "text-slate-500"}`}
											>
												+{dayEvents.length - 2} eventos
											</p>
										) : null}
									</div>
								</button>
							);
						})}
					</div>
				</section>
			</div>
		</div>
	);
}
