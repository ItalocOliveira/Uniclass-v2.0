import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Titulo } from "@/components/HeaderText";
import { IconArrowLeft, IconMenu2 } from '@tabler/icons-react';

export default function Date() {
    const daysOfWeek = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sab", "Dom"];
    const calendarDays = [
        [28, 29, 30, 31, 1, 2, 3],
        [4, 5, 6, 7, 8, 9, 10],
        [11, 12, 13, 14, 15, 16, 17],
        [18, 19, 20, 21, 22, 23, 24],
        [25, 26, 27, 28, 29, 30, 31],
    ];

    const selectedDay = 9;

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.titulo}>
                <Titulo />
                <IconMenu2 color="black" size={32} />
            </View>

            <br />

            {/* Dias da semana */}
            <View style={styles.weekRow}>
                {daysOfWeek.map((day, index) => (
                    <Text key={index} style={styles.weekDay}>
                        {day}
                    </Text>
                ))}
            </View>

            {/* Dias do calendário */}
            {calendarDays.map((week, i) => (
                <View key={i} style={styles.weekRow}>
                    {week.map((day, j) => (
                        <View
                            key={j}
                            style={[
                                styles.dayBox,
                                day === selectedDay && styles.selectedDayBox,
                            ]}
                        >
                            <Text
                                style={[
                                    styles.dayText,
                                    day === selectedDay && styles.selectedDayText,
                                ]}
                            >
                                {day}
                            </Text>
                        </View>
                    ))}
                </View>
            ))}

            {/* Eventos */}
            <View style={styles.eventSection}>
                <Text style={styles.eventTitle}>Eventos Próximos...</Text>
                <Text style={styles.eventDate}>Sexta-feira, 9 de janeiro de 2026</Text>
                <Text style={styles.eventDescription}>Sem Eventos!</Text>
            </View>

            <hr />

            <View style={styles.eventSection}>
                <Text style={styles.eventTitle}>Eventos Nessa Data</Text>
                <Text style={styles.eventDate}>Sexta-feira, 9 de janeiro de 2026</Text>
                <Text style={styles.eventDescription}>Sem Eventos!</Text>
            </View>
        </ScrollView>
    );
}


// style do css 


const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: "#fff",
    },
    titulo: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",

    },
    weekRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 5,
    },
    weekDay: {
        fontWeight: "bold",
        fontSize: 14,
        color: "#333",
        width: 40,
        textAlign: "center",
    },
    dayBox: {
        width: 40,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
        backgroundColor: "#f0f0f0",
    },
    selectedDayBox: {
        backgroundColor: "#007AFF",
    },
    dayText: {
        fontSize: 14,
        color: "#333",
    },
    selectedDayText: {
        color: "#fff",
        fontWeight: "bold",
    },
    eventSection: {
        marginTop: 30,
        padding: 15,
        backgroundColor: "#f9f9f9",
        borderRadius: 10,
    },
    eventTitle: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 5,
    },
    eventDate: {
        fontSize: 14,
        color: "#666",
        marginBottom: 5,
    },
    eventDescription: {
        fontSize: 14,
        color: "#999",
    },
});
