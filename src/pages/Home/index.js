import { Alert, StyleSheet, Text, View, Image, FlatList, ActivityIndicator, Dimensions, ImageBackground, TouchableWithoutFeedback, TouchableNativeFeedback, Linking, BackHandler } from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { apiURL, getData, MYAPP, storeData } from '../../utils/localStorage';
import { MyDimensi, colors, fonts, windowHeight, windowWidth } from '../../utils';
import { NavigationRouteContext, useIsFocused } from '@react-navigation/native';
import axios from 'axios';
import 'intl';
import 'intl/locale-data/jsonp/en';
import 'moment/locale/id';
import { MyGap, MyHeader } from '../../components';
import { ScrollView } from 'react-native-gesture-handler';

export default function Home({ navigation, route }) {
  const [user, setUser] = useState({});
  const isFocus = useIsFocused();
  const [data, setData] = useState([
    {
      "halaman": "AsupanMpasi",
      "id": "1",
      "image": "https://simonev.okeadmin.com/datafoto/a0003ce4349b2c7d4eff29b6d51a37075a774c47.png",
      "judul": "Asupan  MPASI",
      "warna": "#FE9A3B33"
    },
    {
      "halaman": "AsupanAsi",
      "id": "2",
      "image": "https://simonev.okeadmin.com/datafoto/4f8b42e79f74f6c6d5a45865b9d5d9ca20a2a33e.png",
      "judul": "Asupan ASI",
      "warna": "#FF96A533"
    },
    {
      "halaman": "StatusGizi",
      "id": "3",
      "image": "https://simonev.okeadmin.com/datafoto/43f86c8c8d15892eb4fbbd6466051168022d3918.png",
      "judul": "Status Gizi",
      "warna": "#FFA72633"
    },
    {
      "halaman": "TanyaJawab",
      "id": "4",
      "image": "https://simonev.okeadmin.com/datafoto/abf1442b27cc406e0320e251e6ac57ba62d2128a.png",
      "judul": "Tanya Jawab",
      "warna": "#FFE29433"
    },
    {
      "halaman": "Artikel",
      "id": "5",
      "image": "https://simonev.okeadmin.com/datafoto/655b4e3a81f3c760a001b1199ccb38aa6c1e63c4.png",
      "judul": "Artikel",
      "warna": "#CCE0F133"
    },
    {
      "halaman": "Video",
      "id": "6",
      "image": "https://simonev.okeadmin.com/datafoto/9c25ee17076411e53acbefd97c3a40240642013a.png",
      "judul": "Video",
      "warna": "#C92B7433"
    },
    {
      "halaman": "Resep",
      "id": "7",
      "image": "https://simonev.okeadmin.com/datafoto/30eea7e269ad623a515074c7b6ef65680b2bed84.png",
      "judul": "Resep MPASI",
      "warna": "#FFCDBC33"
    },
    {
      "halaman": "Faq",
      "id": "8",
      "image": "https://simonev.okeadmin.com/datafoto/87a8a923f8334cde6a8fab507ea83964a76248d1.png",
      "judul": "FAQ",
      "warna": "#9CC44533"
    },
    {
      "halaman": "GameKuis",
      "id": "9",
      "image": "https://simonev.okeadmin.com/datafoto/98b60a5ebe438acf92a114070e89ed0a52d11754.png",
      "judul": "Game Kuis",
      "warna": "#56D8D833"
    }
  ]);
  const [open, setOpen] = useState(false);
  const [comp, setComp] = useState({});

  const _getTransaction = async () => {
    await getData('user').then(u => {
      setUser(u);
    });

    await axios.post(apiURL + 'company').then(res => {
      setComp(res.data.data);
    });
  }

  useEffect(() => {
    if (isFocus) {
      _getTransaction();
    }
  }, [isFocus]);

  const __renderItem = ({ item }) => {
    return (
      <TouchableWithoutFeedback onPress={() => navigation.navigate(item.modul, item)}>
        <View style={{
          flex: 1,
          padding: 10,
          borderWidth: 1,
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
          borderColor: colors.secondary,
          margin: 5,
          height: windowHeight / 8,
        }}>
          <Image source={{ uri: item.image }} style={{ width: 40, height: 40, resizeMode: 'contain' }} />
          <Text style={{
            marginTop: 10,
            fontFamily: fonts.secondary[600],
            fontSize: 8,
            color: colors.secondary,
            textAlign: 'center'
          }}>{item.judul}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }

  return (
    <ImageBackground source={require('../../assets/bghome.png')} style={{ flex: 1, width: "100%", height: "100%" }}>
      <ScrollView>
        <View style={{ padding: 10 }}>
          <View style={{ alignItems: "center", marginTop: 20 }}>
            <Image source={require('../../assets/logo.png')} style={{ width: 281, height: 66 }} />
          </View>

          {/* MAIN CONTENT */}
          <View style={{ padding: 10, top: 0, marginTop: 20 }}>
            {/* DESAIN TUMBUHANMU */}
            <TouchableNativeFeedback onPress={() => navigation.navigate('Tumbuhanmu')}>
              <View style={{
                padding: 10,
                borderWidth: 2.5,
                borderRadius: 20,
                borderColor: '#dededede',
                flexDirection: "row",
                justifyContent: 'space-around',
                backgroundColor: 'white'
              }}>
                <View style={{ justifyContent: 'center', alignItems: 'flex-end' }}>
                  <Text style={{
                    fontFamily: fonts.primary[700],
                    fontSize: 20,
                    color: colors.primary,
                    textAlign: "right"
                  }}>DESAIN {'\n'}TUMBUHANMU</Text>
                </View>
                <View>
                  <Image source={require('../../assets/tumbuhan.png')} style={{ width: 93, height: 109 }} />
                </View>
              </View>
            </TouchableNativeFeedback>
            <MyGap jarak={15} />
            
            {/* QUIZ MENARIK */}
            <TouchableNativeFeedback onPress={() => navigation.navigate('Quiz')}>
              <View style={{
                padding: 10,
                borderWidth: 2.5,
                borderRadius: 20,
                borderColor: '#dededede',
                flexDirection: "row",
                justifyContent: 'space-between',
                backgroundColor: 'white'
              }}>
                <View style={{ justifyContent: 'center' }}>
                  <Text style={{
                    fontFamily: fonts.primary[700],
                    fontSize: 20,
                    color: colors.primary,
                    textAlign: "right"
                  }}>YUK COBA{'\n'}QUIZ MENARIK!</Text>
                </View>
                <View style={{ right: 20 }}>
                  <Image source={require('../../assets/quiz.png')} style={{ width: 102, height: 102 }} />
                </View>
              </View>
            </TouchableNativeFeedback>
            <MyGap jarak={15} />
            
            {/* MY NOTES */}
            <TouchableNativeFeedback onPress={() => navigation.navigate('Notes')}>
              <View style={{
                padding: 10,
                borderWidth: 2.5,
                borderRadius: 20,
                borderColor: '#dededede',
                flexDirection: "row",
                justifyContent: 'space-between',
                backgroundColor: 'white'
              }}>
                <View style={{ justifyContent: 'center', left: 50 }}>
                  <Text style={{
                    fontFamily: fonts.primary[600],
                    fontSize: 20,
                    color: colors.primary
                  }}>MY NOTES</Text>
                </View>
                <View style={{ right: 30 }}>
                  <Image source={require('../../assets/note.png')} style={{ width: 94, height: 99 }} />
                </View>
              </View>
            </TouchableNativeFeedback>
            <MyGap jarak={15} />
          </View>
        </View>
      </ScrollView>
      <View style={{ padding: 20, backgroundColor: "white", flexDirection: "row", justifyContent: 'space-around' ,
      marginBottom:0, borderTopRightRadius:10, borderTopLeftRadius:10}}>
        <View>
          <TouchableWithoutFeedback onPress={() => navigation.navigate('Home')}>
            <Image source={require('../../assets/homeicon.png')} style={{ width: 20, height: 19 }} />
          </TouchableWithoutFeedback>
        </View>
        <View>
          <TouchableWithoutFeedback onPress={() => {
            Alert.alert(
              "Konfirmasi Logout",
              "Apakah Anda ingin keluar dari aplikasi?",
              [
                {
                  text: "Tidak",
                  style: "cancel"
                },
                {
                  text: "Iya",
                  onPress: () => BackHandler.exitApp()
                }
              ],
              { cancelable: false }
            );
          }}>
            <Image source={require('../../assets/logouticon.png')} style={{ width: 19, height: 20 }} />
          </TouchableWithoutFeedback>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  tulisan: {
    fontSize: 14,
    marginBottom: 10,
    fontFamily: fonts.secondary[600],
    color: colors.black,
    textAlign: 'justify'
  },
  tulisanJudul: {
    fontSize: 16,
    marginBottom: 10,
    fontFamily: fonts.secondary[800],
    color: colors.black,
    textAlign: 'justify'
  }
});
