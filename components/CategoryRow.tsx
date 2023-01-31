import { View, Text } from 'react-native'
import { theme } from '../theme'
import { Category } from '../types/category'

export const CategoryRow = ({ color, name }: Omit<Category, 'id'>) => {
  return (
    <View style={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      width: '100%',
      justifyContent: 'flex-start',
      minHeight: 44,
      paddingHorizontal: 12,
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.border,
      backgroundColor: theme.colors.card,
    }}>
      <View style={{ backgroundColor: color, width: 18, height: 18, borderRadius: 9, borderWidth: 3, borderColor: 'white' }} />
      <Text style={{ color: 'white', marginLeft: 8, fontSize: 16 }}>{name}</Text>
    </View>
  )
}