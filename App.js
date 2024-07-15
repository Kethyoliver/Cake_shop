import {useFonts, SpaceGrotesk_300Light, SpaceGrotesk_700Bold} from '@expo-google-fonts/space-grotesk';
import {View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Produto from './src/telas/Produtos/';
import mocks from './src/mocks/produto';

import Sobre from './src/telas/Sobre';
import mock_sobre from './src/mocks/sobre';

import Cardapio from './src/telas/Cardapio'
import mock_menu from './src/mocks/cardapio'

import Lista from './src/telas/Lista'
import mock_lista from './src/mocks/lista'


function MenuSobre () {
  return <Sobre {...mock_sobre}/>
}

function MenuKit (){
  return <Produto {...mocks}/>

}

function MenuCardapio () {
  return <Cardapio {...mock_menu}/>
}

function MenuLista () {
  return <Lista {...mock_lista}/>
}

const Tab = createBottomTabNavigator();

function TabsMenu(){
  return <Tab.Navigator 
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName;

              if(route.name === "Kit de Festa"){
                iconName = focused
                ? 'storefront'
                : 'storefront-outline';
              } else if (route.name === "Sobre nós"){
                iconName = focused
                ? 'apps'
                : 'apps-outline';
              } else if (route.name === "Cardápio"){
                iconName = focused
                ? 'list'
                : 'list-outline';
              }else if (route.name === "Lista de Desejos"){
                iconName = focused
                ? 'heart-half' 
                : 'heart-half-outline';
              }

              return <Ionicons name={iconName} size={size} color={color}/>
            },
            tabBarActiveTintColor: '#C7830D',
            tabBarInactiveTintColor: 'gray',
            tabBarHideOnKeyboard: true,
            headerShown: false,
          })}>
            <Tab.Screen name="Sobre nós" component={MenuSobre} />
            <Tab.Screen name= "Kit de Festa" component={MenuKit} />
            <Tab.Screen name="Cardápio" component={MenuCardapio} />
            <Tab.Screen name="Lista de Desejos" component={MenuLista} />
          </Tab.Navigator>
}

export default function App() {

// Carrega fonte para o projeto
const [fonteCarregada] = useFonts({
  "SpaceGRegular" : SpaceGrotesk_300Light,
  "SpaceGBold" : SpaceGrotesk_700Bold,
})

  //Checa se as fontes já foram carregadas
  if(!fonteCarregada){
    return <View/>
  }

  return <NavigationContainer>
            <TabsMenu/>
         </NavigationContainer>
}


