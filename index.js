/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import YaMap from 'react-native-yamap';
import 'react-native-gesture-handler';

const MAP_KEY = 'bf0e3592-f90f-481c-9211-793b71bddf7c';
YaMap.init(MAP_KEY);
YaMap.setLocale('en_US');

AppRegistry.registerComponent(appName, () => App);
