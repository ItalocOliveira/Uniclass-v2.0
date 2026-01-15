import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { IconArrowLeft, IconMenu2 } from "@tabler/icons-react";
import { useFonts, Anta_400Regular } from "@expo-google-fonts/anta";

export default function Date() {
    const [fontsLoaded] = useFonts({
        Anta_400Regular,
    });

    if (!fontsLoaded) {
        return null;
    }

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
                <Text style={[styles.uniclass, styles.fontAnta]}>Uniclass</Text>
                <IconMenu2 color="#fff" size={32} />
            </View>

            <View style={styles.weekRow}>
                {daysOfWeek.map((day, index) => (
                    <Text key={index} style={[styles.weekDay, styles.fontAnta]}>
                        {day}
                    </Text>
                ))}
            </View>

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
                                    styles.fontAnta,
                                    day === selectedDay && styles.selectedDayText,
                                ]}
                            >
                                {day}
                            </Text>
                        </View>
                    ))}
                </View>
            ))}

            <View style={styles.eventSection}>
                <Text style={[styles.eventTitle, styles.fontAnta]}>Eventos Próximos...</Text>
                <Text style={[styles.eventDate, styles.fontAnta]}>
                    Sexta-feira, 9 de janeiro de 2026
                </Text>
                <Text style={[styles.eventDescription, styles.fontAnta]}>Sem Eventos!</Text>
            </View>

            <View style={styles.divider} />

            <View style={styles.eventSection}>
                <Text style={[styles.eventTitle, styles.fontAnta]}>Eventos Nessa Data</Text>
                <Text style={[styles.eventDate, styles.fontAnta]}>
                    Sexta-feira, 9 de janeiro de 2026
                </Text>
                <Text style={[styles.eventDescription, styles.fontAnta]}>Sem Eventos!</Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        paddingBottom: 20,
    },
    fontAnta: {
        fontFamily: "Anta_400Regular", 
    },
    titulo: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#03366A",
        padding: 10,
    },
    uniclass: {
        color: "#fff",
        fontSize: 20,
    },
    weekRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 5,
        paddingHorizontal: 10,
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
    divider: {
        height: 1,
        backgroundColor: "#ccc",
        marginVertical: 20,
    },
});
