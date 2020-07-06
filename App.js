import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, } from 'react-native';

import ScreenTemplate from "./app/screens/ScreenTemplate"
import MainScreen from "./app/screens/MainScreen"
import DetailScreen from "./app/screens/DetailScreen"

import SwitchLogin from "./routes/SwitchLogin"

const sampleData = '{"Dasar-dasar Pemrograman 1": {"Nilai Akhir": 99.83}, "Fisika Dasar": {"KUIS 1": 92.9, "TUGAS 1": 98.0, "TUGAS 2": 100.0, "UTS": 82.0, "KUIS 2": 100.0, "TUGAS 3": 100.0, "UAS": 78.0}, "Matematika Diskret 1": {"Tugas 1": 98.0, "Tugas 2": 100.0, "Tugas 3": 100.0, "Tutorial": 81.17, "Ujian 1 (UTS)": 97.0, "Ujian 2": 86.0, "Ujian 3 (UAS)": 95.0, "Partisipasi": 100.0}, "MPK Bahasa Inggris": {}, "MPK Olahraga Tenis": {"ABSEN": 10.0, "TUGAS": 20.0, "UTS": 30.0, "UAS": 29.0}, "MPK Terintegrasi B": {"Ujian Akhir Semester": 85.0, "Ujian Tengah Semeste": 85.0, "Keaktifan Mahasiswa": 86.5, "Makalah Kelompok": 87.5, "Ltm Tugas": 87.0, "Borang C2": 86.5, "Borang C1": 86.5, "Borang B1": 90.0}, "Dasar-dasar Pemrograman 2": {"Tugas pemrograman 1": 105.0, "Tugas Pemrograman 2": 105.0, "Tugas pemrograman 3": 110.0, "Tutorial Lab": 99.3, "Kuis 1": 86.0, "Bonus (pre UTS)": 100.0, "UTS": 89.5, "Kuis 2": 96.0, "Bonus (post UTS)": 100.0, "UAS": 90.5}, "Matematika Dasar 1": {"Kuis 2": "Not published", "Kuis 3": "Not published", "Kuis 1": "Not published", "Kuis 4": "Not published"}, "Matematika Diskret 2": {}, "MPK Terintegrasi A": {"LTM": "Not published", "Presentasi+ B1": "Not published", "Makalah+ B2": "Not published", "UTS": "Not published", "UAS": "Not published", "Proyek Akhir": "Not published"}, "Pengantar Sistem Dijital": {"UTS": "Not published", "UAS": "Not published", "Tugas Mandiri": "Not published", "Praktikum": "Not published", "Quiz": "Not published"}, "Perancangan & Pemrograman Web": {"Tugas Kelompok 1": 98.31, "Story": 99.42, "Tugas Kelompok 2": 91.25, "UTS": "Not published", "Kuis 2": 73.33, "UAS": "Not published", "Partisipasi": "Not published", "Kuis 1": 78.5}}'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <SwitchLogin />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
