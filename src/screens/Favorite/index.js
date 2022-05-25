import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {BoxItemTopProduct, Gap, Header} from '../../components';
import {
  colors,
  fonts,
  IL_Brinjal,
  IL_Brokoli,
  IL_Cauliflawer_PNG,
  IL_Pumpkin,
  IL_RedOnion,
  IL_Tomato_PNG,
  IL_Besh, 
  IL_Baursaq_PNG, 
  IL_Kuyrdak
} from '../../res';

const Categories = ({route, navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const dataCategories = [
    {
      name: 'Besbarmak',
      icon: IL_Besh,
      bgColor: 'rgba(255, 234, 232, 0.5)',
      price: 1.53,
      desc: "Kazakh Beshbarmak basically means “five fingers” in Kazakhstan.  It is probably the most popular dish in the land. The name five fingers is what is required to enjoy it, all five of them.  Typically this dish is made with either horse meat or mutton.  Beef is sometimes used but the others are much more common.  In fact horse meat is so common in Kazakhstan that Olympians had to beg the Olympic committee to allow them to bring it the games so that they could maintain their normal diet. Needless to say, you can certainly enjoy this dish made with beef or lamb and be authentic",
    },
    {
      name: 'Baursak',
      icon: IL_Baursaq_PNG,
      bgColor: 'rgba(238, 224, 248, 0.5)',
      price: 1.53,
      desc: "The size of Zhaima square noodles is 82 х 72 mm. This type of beshbarmak is usually cooked in the south regions of Kazakhstan. Egg yolk as a part of recipe allows to increase nutritional value of the product, make the taste and colour more intense. Egg yolk improves the noodle elasticity, which is very important for cooking process.",
    },
  ];

  return (
    <SafeAreaView style={styles.flex1}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={styles.flex1}>
        {/* header */}
        <Header back cart onPress={() => navigation.goBack()} />
        <View style={styles.wrapperTittle}>
          <Text style={styles.tittle}>Favorites</Text>
        </View>
        <Gap height={10} />
        {/* Content */}
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.sectionBoxTopProduct}>
            {dataCategories.map((item, index) => {
              return (
                <BoxItemTopProduct
                  key={index}
                  bgColor={item.bgColor}
                  icon={item.icon}
                  text={item.name}
                  onPress={() => navigation.navigate('Detail', item)}
                />
              );
            })}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Categories;

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  wrapperTittle: {
    paddingHorizontal: 20,
  },
  tittle: {
    fontSize: 20,
    fontFamily: fonts.SemiBold,
    color: colors.primary,
  },
  sectionBoxTopProduct: {
    flex1: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});