import React, { useMemo, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Platform,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useFonts, Anta_400Regular } from "@expo-google-fonts/anta";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/footer";

const NAVY = "#03366A";
const YELLOW = "#F2D049";
const SCREEN_BG = "#F5F5F5";
const FOOTER_CLEARANCE = 108;

const MONTH_NAMES = [
  "janeiro",
  "fevereiro",
  "março",
  "abril",
  "maio",
  "junho",
  "julho",
  "agosto",
  "setembro",
  "outubro",
  "novembro",
  "dezembro",
];

const DAYS_OF_WEEK = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"];

type CalendarEvent = {
  id: string;
  title: string;
  dateLabel: string;
  at: Date;
  dotColor: string;
  icon: React.ComponentProps<typeof MaterialIcons>["name"];
};

const SAMPLE_EVENTS: CalendarEvent[] = [
  {
    id: "1",
    title: "Hackathon",
    dateLabel: "23 de abril de 2026",
    at: new Date(2026, 3, 23),
    dotColor: "#E53935",
    icon: "code",
  },
  {
    id: "2",
    title: "Palestra de TI",
    dateLabel: "15 de maio de 2026",
    at: new Date(2026, 4, 15),
    dotColor: "#1976D2",
    icon: "computer",
  },
  {
    id: "3",
    title: "Palestra de Psicologia",
    dateLabel: "20 de maio de 2026",
    at: new Date(2026, 4, 20),
    dotColor: "#7B1FA2",
    icon: "psychology",
  },
];

function sameDay(a: Date, b: Date) {
  return (
    a.getDate() === b.getDate() &&
    a.getMonth() === b.getMonth() &&
    a.getFullYear() === b.getFullYear()
  );
}

function generateCalendarMatrix(year: number, monthIndex: number): Date[][] {
  const first = new Date(year, monthIndex, 1);
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
  const pad = (first.getDay() + 6) % 7;

  const cells: Date[] = [];
  const prevMonthLast = new Date(year, monthIndex, 0);
  const daysInPrev = prevMonthLast.getDate();
  const prevMonth = prevMonthLast.getMonth();
  const prevYear = prevMonthLast.getFullYear();

  for (let i = 0; i < pad; i++) {
    const d = daysInPrev - pad + i + 1;
    cells.push(new Date(prevYear, prevMonth, d));
  }
  for (let d = 1; d <= daysInMonth; d++) {
    cells.push(new Date(year, monthIndex, d));
  }
  let next = 1;
  const nextMonth = monthIndex === 11 ? 0 : monthIndex + 1;
  const nextYear = monthIndex === 11 ? year + 1 : year;
  while (cells.length < 42) {
    cells.push(new Date(nextYear, nextMonth, next++));
  }

  const rows: Date[][] = [];
  for (let i = 0; i < 42; i += 7) {
    rows.push(cells.slice(i, i + 7));
  }
  return rows;
}

function formatDateHeader(d: Date) {
  const s = d.toLocaleDateString("pt-BR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export default function DateScreen() {
  const [fontsLoaded] = useFonts({ Anta_400Regular });
  const insets = useSafeAreaInsets();
  const [year, setYear] = useState(2026);
  const [monthIndex, setMonthIndex] = useState(4);
  const [selectedDate, setSelectedDate] = useState(
    () => new Date(2026, 4, 20)
  );

  const calendarRows = useMemo(
    () => generateCalendarMatrix(year, monthIndex),
    [year, monthIndex]
  );

  const eventDays = useMemo(() => {
    const set = new Set<number>();
    SAMPLE_EVENTS.forEach((e) => {
      if (e.at.getMonth() === monthIndex && e.at.getFullYear() === year) {
        set.add(e.at.getDate());
      }
    });
    return set;
  }, [year, monthIndex]);

  const eventsOnSelected = useMemo(
    () => SAMPLE_EVENTS.filter((e) => sameDay(e.at, selectedDate)),
    [selectedDate]
  );

  const monthYearLabel = `${MONTH_NAMES[monthIndex].toUpperCase()} ${year}`;

  function goPrevMonth() {
    if (monthIndex === 0) {
      setMonthIndex(11);
      setYear((y) => y - 1);
    } else {
      setMonthIndex((m) => m - 1);
    }
  }

  function goNextMonth() {
    if (monthIndex === 11) {
      setMonthIndex(0);
      setYear((y) => y + 1);
    } else {
      setMonthIndex((m) => m + 1);
    }
  }

  if (!fontsLoaded) return null;

  return (
    <View style={styles.root}>
      {/* Header fora do ScrollView: evita que o SideMenu (fixed) fique abaixo do card/rodapé (stacking context) */}
      <Header variant="calendar" />
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={{
          paddingBottom: FOOTER_CLEARANCE + insets.bottom + 12,
        }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.blueSection}>
          <View style={styles.monthNav}>
            <TouchableOpacity
              style={styles.monthChevron}
              onPress={goPrevMonth}
              hitSlop={8}
            >
              <MaterialIcons name="chevron-left" size={26} color="#fff" />
            </TouchableOpacity>
            <Text style={[styles.monthTitle, styles.fontAnta]}>
              {monthYearLabel}
            </Text>
            <TouchableOpacity
              style={styles.monthChevron}
              onPress={goNextMonth}
              hitSlop={8}
            >
              <MaterialIcons name="chevron-right" size={26} color="#fff" />
            </TouchableOpacity>
          </View>

          <View style={styles.weekRow}>
            {DAYS_OF_WEEK.map((label) => (
              <Text key={label} style={[styles.weekDayLabel, styles.fontAnta]}>
                {label}
              </Text>
            ))}
          </View>

          {calendarRows.map((week, wi) => (
            <View key={wi} style={styles.weekRow}>
              {week.map((date, di) => {
                const inViewMonth =
                  date.getMonth() === monthIndex &&
                  date.getFullYear() === year;
                const isSelected = sameDay(date, selectedDate);
                const hasEvent =
                  inViewMonth &&
                  eventDays.has(date.getDate()) &&
                  !isSelected;

                const dayInner = (
                  <View
                    style={[
                      styles.dayInner,
                      isSelected && inViewMonth && styles.dayInnerSelected,
                    ]}
                  >
                    <Text
                      style={[
                        styles.dayNum,
                        styles.fontAnta,
                        !inViewMonth && styles.dayNumMuted,
                        inViewMonth && styles.dayNumActive,
                        isSelected && inViewMonth && styles.dayNumSelected,
                      ]}
                    >
                      {date.getDate()}
                    </Text>
                    {isSelected && inViewMonth && (
                      <View style={styles.selectedDot} />
                    )}
                    {hasEvent && !isSelected && (
                      <View style={styles.eventDot} />
                    )}
                  </View>
                );

                if (!inViewMonth) {
                  return (
                    <View
                      key={`${wi}-${di}`}
                      style={styles.dayCell}
                      pointerEvents="none"
                      accessibilityElementsHidden
                      importantForAccessibility="no-hide-descendants"
                    >
                      {dayInner}
                    </View>
                  );
                }

                return (
                  <TouchableOpacity
                    key={`${wi}-${di}`}
                    style={styles.dayCell}
                    onPress={() => setSelectedDate(date)}
                    activeOpacity={0.7}
                    accessibilityRole="button"
                    accessibilityLabel={`Dia ${date.getDate()}`}
                  >
                    {dayInner}
                  </TouchableOpacity>
                );
              })}
            </View>
          ))}
        </View>

        <View style={styles.sheet}>
          <View style={styles.dateHeaderRow}>
            <View style={styles.dateAccentBar} />
            <Text style={[styles.dateHeaderText, styles.fontAnta]}>
              {formatDateHeader(selectedDate)}
            </Text>
          </View>

          <View style={styles.eventCard}>
            <View style={styles.cardTitleRow}>
              <MaterialIcons name="calendar-today" size={22} color={NAVY} />
              <Text style={[styles.cardTitle, styles.fontAnta]}>
                Eventos Próximos
              </Text>
            </View>
            {SAMPLE_EVENTS.map((ev, idx) => (
              <View key={ev.id}>
                {idx > 0 && <View style={styles.itemDivider} />}
                <View style={styles.eventRow}>
                  <View style={styles.eventIconBox}>
                    <MaterialIcons
                      name={ev.icon}
                      size={22}
                      color={ev.dotColor}
                    />
                  </View>
                  <View style={styles.eventTextCol}>
                    <Text style={[styles.eventName, styles.fontAnta]}>
                      {ev.title}
                    </Text>
                    <Text style={styles.eventMeta}>{ev.dateLabel}</Text>
                  </View>
                  <View
                    style={[
                      styles.eventDotRight,
                      { backgroundColor: ev.dotColor },
                    ]}
                  />
                </View>
              </View>
            ))}
          </View>

          <View style={styles.eventCard}>
            <View style={styles.cardTitleRow}>
              <MaterialIcons name="event" size={22} color={NAVY} />
              <Text style={[styles.cardTitle, styles.fontAnta]}>
                Eventos Nessa Data
              </Text>
            </View>
            {eventsOnSelected.length === 0 ? (
              <Text style={[styles.emptyDay, styles.fontAnta]}>
                Nenhum evento nesta data.
              </Text>
            ) : (
              eventsOnSelected.map((ev, idx) => (
                <View key={ev.id}>
                  {idx > 0 && <View style={styles.itemDivider} />}
                  <View style={styles.eventRow}>
                    <View style={styles.eventIconBox}>
                      <MaterialIcons
                        name={ev.icon}
                        size={22}
                        color={ev.dotColor}
                      />
                    </View>
                    <View style={styles.eventTextCol}>
                      <Text style={[styles.eventName, styles.fontAnta]}>
                        {ev.title}
                      </Text>
                      <Text style={styles.eventMeta}>{ev.dateLabel}</Text>
                    </View>
                    <View
                      style={[
                        styles.eventDotRight,
                        { backgroundColor: ev.dotColor },
                      ]}
                    />
                  </View>
                </View>
              ))
            )}
          </View>
        </View>
      </ScrollView>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: SCREEN_BG,
  },
  scroll: {
    flex: 1,
    backgroundColor: SCREEN_BG,
  },
  fontAnta: {
    fontFamily: "Anta_400Regular",
  },
  blueSection: {
    backgroundColor: NAVY,
    paddingBottom: 28,
  },
  monthNav: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    marginTop: 4,
    marginBottom: 8,
  },
  monthChevron: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(255,255,255,0.12)",
    justifyContent: "center",
    alignItems: "center",
  },
  monthTitle: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "700",
    letterSpacing: 0.5,
    flex: 1,
    textAlign: "center",
  },
  weekRow: {
    flexDirection: "row",
    paddingHorizontal: 4,
    marginBottom: 4,
  },
  weekDayLabel: {
    flex: 1,
    textAlign: "center",
    color: "rgba(255,255,255,0.95)",
    fontSize: 13,
    fontWeight: "600",
  },
  dayCell: {
    flex: 1,
    alignItems: "center",
  },
  dayInner: {
    width: 40,
    height: 44,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 4,
  },
  dayInnerSelected: {
    backgroundColor: YELLOW,
    borderRadius: 20,
    height: 44,
    width: 40,
    justifyContent: "center",
    paddingTop: 0,
  },
  dayNum: {
    fontSize: 15,
    fontWeight: "600",
  },
  dayNumMuted: {
    color: "rgba(255,255,255,0.38)",
  },
  dayNumActive: {
    color: "#fff",
  },
  dayNumSelected: {
    color: NAVY,
  },
  selectedDot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: NAVY,
    marginTop: 2,
  },
  eventDot: {
    width: 5,
    height: 5,
    borderRadius: 2.5,
    backgroundColor: YELLOW,
    marginTop: 2,
  },
  sheet: {
    backgroundColor: SCREEN_BG,
    marginTop: -24,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    paddingHorizontal: 20,
    paddingTop: 28,
    paddingBottom: 8,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: -4 },
        shadowOpacity: 0.06,
        shadowRadius: 8,
      },
      android: { elevation: 4 },
      web: {
        boxShadow: "0 -4px 16px rgba(0,0,0,0.06)",
      } as object,
    }),
  },
  dateHeaderRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    paddingRight: 8,
  },
  dateAccentBar: {
    width: 4,
    height: 36,
    backgroundColor: NAVY,
    borderRadius: 2,
    marginRight: 12,
  },
  dateHeaderText: {
    flex: 1,
    color: NAVY,
    fontSize: 16,
    fontWeight: "700",
    lineHeight: 22,
  },
  eventCard: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    borderLeftWidth: 4,
    borderLeftColor: YELLOW,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 8,
      },
      android: { elevation: 3 },
      web: {
        boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
      } as object,
    }),
  },
  cardTitleRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 14,
  },
  cardTitle: {
    fontSize: 17,
    fontWeight: "700",
    color: NAVY,
  },
  itemDivider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: "#E5E7EB",
    marginVertical: 12,
  },
  eventRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  eventIconBox: {
    width: 44,
    height: 44,
    borderRadius: 10,
    backgroundColor: "#F3F4F6",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  eventTextCol: {
    flex: 1,
  },
  eventName: {
    fontSize: 15,
    fontWeight: "700",
    color: NAVY,
    marginBottom: 4,
  },
  eventMeta: {
    fontSize: 13,
    color: "#6B7280",
  },
  eventDotRight: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  emptyDay: {
    textAlign: "center",
    color: "#9CA3AF",
    fontSize: 14,
    paddingVertical: 8,
  },
});
