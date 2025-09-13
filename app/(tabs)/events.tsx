// app/(tabs)/events.tsx
import React from 'react';
import { StyleSheet, FlatList, View, Text } from 'react-native';

/**
 * イベント情報の型定義
 */
export type Event = {
  id: string;
  name: string;
  date: string; // ISO8601形式
  location: string;
  detail: string;
};

/**
 * ダミーイベントデータ
 * ※本番ではSupabase等のDBから取得することを推奨
 */
const events: Event[] = [
  {
    id: '1',
    name: 'React Native 勉強会',
    date: '2025-09-20T19:00:00+09:00',
    location: '渋谷ヒカリエ 8F',
    detail: 'React Nativeの最新動向や実践ノウハウを共有します。',
  },
  {
    id: '2',
    name: 'オンラインサロン交流会',
    date: '2025-10-05T20:00:00+09:00',
    location: 'Zoom',
    detail: 'メンバー同士の交流を深めるオンラインイベントです。',
  },
];

/**
 * イベント一覧ページ
 */
const EventsScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>イベント一覧</Text>
      <FlatList
        data={events}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.eventCard}>
            <Text style={styles.eventName}>{item.name}</Text>
            <Text style={styles.eventDate}>
              開催日時: {new Date(item.date).toLocaleString('ja-JP')}
            </Text>
            <Text style={styles.eventLocation}>開催場所: {item.location}</Text>
            <Text style={styles.eventDetail}>{item.detail}</Text>
          </View>
        )}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    alignSelf: 'center',
  },
  listContent: {
    paddingBottom: 32,
  },
  eventCard: {
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  eventName: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 8,
  },
  eventDate: {
    fontSize: 16,
    marginBottom: 4,
    color: '#555',
  },
  eventLocation: {
    fontSize: 16,
    marginBottom: 4,
    color: '#555',
  },
  eventDetail: {
    fontSize: 15,
    color: '#333',
  },
});

export default EventsScreen;
