import React from 'react';
import { View, Text } from 'react-native';
import { Entypo } from '@expo/vector-icons';

import { ListItem } from '../components/ListItem';
import { theme } from '../theme';

export const Settings = () => (
  <View style={{ flexDirection: 'column', margin: 16, borderRadius: 11, overflow: 'hidden' }}>
    <ListItem
      label="Categories"
      detail={
        <Entypo
          name="chevron-thin-right"
          size={20}
          color='white'
          style={{ opacity: 0.3 }}
        />
      }
    />
    <ListItem
      label="Report a bug"
      detail={
        <Entypo
          name="chevron-thin-right"
          size={20}
          color="white"
          style={{ opacity: 0.3 }}
        />
      }
    />
    <ListItem
      label="Erase all data"
      isDestructive
      onClick={() => { }}
    />
  </View>
)