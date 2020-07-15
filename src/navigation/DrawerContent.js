import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {
  Drawer,
  Switch,
  TouchableRipple,
  Text,
  Avatar,
  Title,
  Caption,
  Paragraph,
} from 'react-native-paper';
import usePreference from '../hooks/usePreferences';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function DrawerContent(props) {
  const {navigation} = props;
  const [active, setActive] = useState('home');
  const {theme, toggleTheme} = usePreference();

  const onChangeScreen = (screen) => {
    setActive(screen);
    navigation.navigate(screen);
  };

  return (
    <DrawerContentScrollView>
      <Drawer.Section title="peliculas">
        <Drawer.Item
          label="peliculas"
          icon={({color, size}) => (
            <Icon name="movie" color={color} size={size} />
          )}
          active={active === 'home'}
          onPress={() => onChangeScreen('home')}
        />
        <Drawer.Item
          label="Películas populares"
          icon={({color, size}) => (
            <Icon name="heart-outline" color={color} size={size} />
          )}
          active={active === 'popular'}
          onPress={() => onChangeScreen('popular')}
        />
        <Drawer.Item
          label="Nuevas películas"
          icon={({color, size}) => (
            <Icon name="new-box" color={color} size={size} />
          )}
          active={active === 'news'}
          onPress={() => onChangeScreen('news')}
        />
      </Drawer.Section>
      <Drawer.Section title="programas de televicion">
        <Drawer.Item
          label="series de tv"
          icon={({color, size}) => (
            <Icon name="monitor" color={color} size={size} />
          )}
          active={active === 'tv'}
          onPress={() => onChangeScreen('tv')}
        />
      </Drawer.Section>
      <Drawer.Section title="Preferencias">
        <TouchableRipple>
          <View style={styles.preference}>
            <Text>Tema Oscuro</Text>
            <Switch value={theme === 'dark'} onValueChange={toggleTheme} />
          </View>
        </TouchableRipple>
      </Drawer.Section>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
