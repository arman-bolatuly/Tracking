import { useCallback, useState } from 'react';
import { View, Modal, TextInput, Button, KeyboardAvoidingView, TouchableOpacity, TouchableWithoutFeedback, Animated } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { ColorPicker, fromHsv } from 'react-native-color-picker';
import { Keyboard } from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { EvilIcons } from '@expo/vector-icons';

import { ListItem } from '../components/ListItem';
import { theme } from '../theme';
import { Category } from '../types/category';
import { CategoryRow } from '../components/CategoryRow';
import { RectButton } from 'react-native-gesture-handler';

export const Categories = ({ navigation }: any) => {
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [selectedcolor, setSelectedColor] = useState(theme.colors.primary);
  const [newName, setNewName] = useState('');
  const [categories, setCategories] = useState<Category[]>([
    {
      id: '1',
      name: 'Work',
      color: theme.colors.primary,
    },
    {
      id: '2',
      name: 'Home',
      color: theme.colors.card,
    }
  ]);

  // const deleteCategory = useCallback((id: string) => {
  //   setCategories(categories.filter((category) => category.id !== id));
  // }, [])

  const onSelectColor = ({ hex }: any) => {
    setSelectedColor(hex);
  };

  const createCategory = () => {
    if (newName === '') return;
    setCategories([...categories, { id: Math.random().toString(), name: newName, color: selectedcolor }]);
    setNewName('');
    setSelectedColor(theme.colors.primary);
  }


  return (
    <>
      <KeyboardAvoidingView
        behavior='height'
        // behavior='padding'
        keyboardVerticalOffset={125}
        style={{ flex: 1, justifyContent: 'space-between', margin: 16, }}
      >
        <View style={{ flexDirection: 'column', borderRadius: 11, overflow: 'hidden' }}>
          {categories.map(({ id, color, name }) => (
            <Swipeable key={id.toString()}
              renderRightActions={() => {
                return (
                  <View
                    style={{
                      backgroundColor: theme.colors.error,
                      width: 75,
                    }}
                  >
                    <RectButton
                      style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                      onPress={() => setCategories(categories.filter((category) => category.id !== id))}
                    >
                      <EvilIcons name='trash' size={40} color='white' />
                    </RectButton>
                  </View>
                );
              }}>
              <CategoryRow color={color} name={name} />
            </Swipeable>
          ))
          }

        </View>
        <View style={{ flex: 1 }} />
        <View style={{ display: 'flex', flexDirection: 'row', paddingVertical: 8, alignItems: 'center' }}>
          <TouchableOpacity style={{ padding: 12 }} onPress={() => setShowColorPicker(!showColorPicker)}>
            <View style={{ backgroundColor: selectedcolor, width: 24, height: 24, borderRadius: 12, borderWidth: 3, borderColor: 'white' }} />
          </TouchableOpacity>
          <TextInput
            placeholder='Category name'
            onChange={(e) => setNewName(e.nativeEvent.text)}
            value={newName}
            style={{ color: 'white', borderColor: theme.colors.border, borderWidth: 1, flex: 1, borderRadius: 8, paddingLeft: 8, height: 40, marginLeft: 8 }}
          />
          <TouchableOpacity style={{ padding: 12 }} onPress={() => createCategory()} >
            <FontAwesome name="send" size={24} color={theme.colors.primary} />
          </TouchableOpacity>
          {/* <TouchableWithoutFeedback style={{ padding: 12 }} onPress={() => { createCategory(); Keyboard.dismiss(); }} >
            <FontAwesome name="send" size={24} color={theme.colors.primary} />
          </TouchableWithoutFeedback> */}
        </View>
      </KeyboardAvoidingView >

      <Modal transparent visible={showColorPicker} animationType='fade' onRequestClose={() => setShowColorPicker(false)}>
        <View style={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 24,
        }}>
          <View style={{
            padding: 24, width: '100%', justifyContent: 'center', alignItems: 'center',
            backgroundColor: theme.colors.card, overflow: 'hidden', borderRadius: 12
          }}>
            <ColorPicker
              color={selectedcolor}
              hideSliders
              onColorChange={(color) => onSelectColor({ hex: fromHsv(color) })}
              onColorSelected={color => alert(`Color selected: ${color}`)}
              style={{ height: 250, width: '100%' }}
            />
            <Button title='Select' onPress={() => setShowColorPicker(false)} />
          </View>
        </View>
      </Modal>
    </>
  )
}