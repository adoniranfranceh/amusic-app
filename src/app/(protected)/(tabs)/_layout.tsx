import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
      headerShown: false,
      tabBarButton: HapticTab,
      tabBarBackground: TabBarBackground,
      tabBarStyle: Platform.select({
        ios: {
        position: 'absolute',
        },
        default: {},
      }),
      }}>
      <Tabs.Screen
      name="index"
      options={{
        title: 'Home',
        tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
      }}
      />
      <Tabs.Screen
      name="explore"
      options={{
        title: 'Explore',
        tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
      }}
      />
      <Tabs.Screen
      name="search"
      options={{
        title: 'Pesquisar',
        tabBarIcon: ({ color }) => <IconSymbol size={28} name="ear.fill" color={color} />,
      }}
      />
    </Tabs>
  );
}
