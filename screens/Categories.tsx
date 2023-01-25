import { View, Text, TextInput, Button, KeyboardAvoidingView } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

import { ListItem } from '../components/ListItem';
import { theme } from '../theme';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const Categories = ({ navigation }: any) => {
  return (
    <KeyboardAvoidingView
      behavior='height'
      // behavior='padding'
      keyboardVerticalOffset={125}
      style={{ flex: 1, justifyContent: 'space-between', margin: 16, }}
    >
      <View style={{ flexDirection: 'column', borderRadius: 11, overflow: 'hidden' }}>
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
      <View style={{ flex: 1 }} />
      <View style={{ display: 'flex', flexDirection: 'row', paddingVertical: 8, alignItems: 'center' }}>
        <Button
          onPress={() => { }}
          title="Color"
          accessibilityLabel=""
        />
        <TextInput
          placeholder='Category name'
          style={{ color: 'white', borderColor: theme.colors.border, borderWidth: 1, flex: 1, borderRadius: 8, paddingLeft: 8, height: 40 }}
        />
        <TouchableOpacity style={{ padding: 12 }}>
          <FontAwesome name="send" size={24} color={theme.colors.primary} />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>

  )
}