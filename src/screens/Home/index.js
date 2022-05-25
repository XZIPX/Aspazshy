import React from 'react';
import {
  View,
  Text,
  useColorScheme,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {
  BoxItemCategories,
  BoxItemTopProduct,
  Gap,
  Header,
} from '../../components';
import {
  colors,
  fonts,
  IC_Bakery,
  IC_Bakery2,
  IC_Drinks,
  IC_Fruits,
  IC_Search,
  IC_Vegetables,
  IL_Cauliflawer_PNG,
  IL_Baursaq_PNG,
  IL_Greentea_PNG,
  IL_Tomato_PNG,
  IL_Besh, 
  IL_Kuyrdak
} from '../../res';

const Home = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const dataTopProducts = [
    {
      name: 'Baursaq',
      icon: IL_Baursaq_PNG,
      bgColor: 'rgba(227,206,243,0.5)',
      price: 1.53,
      desc: " Kazakh baursak is served often with tea, either as a appetizer or dessert.  Fried dough is loved in nearly every nation on earth and Kazakhstan is no exception.  They can be made as either triangles or spheres.  Sometimes they will spread them all around the Darstakan (low table or covering) to show an abundance of food.  We made ours in spheres and then sprinkled them with sugar.  Fried dough is best enjoyed right out of the fryer and with a cup of Kazakh chai!",
    },
    {
      name: 'Besbarmaq',
      icon: IL_Besh,
      bgColor: 'rgba(255, 234, 232, 0.5)',
      price: 1.53,
      desc: "Kazakh Beshbarmak basically means “five fingers” in Kazakhstan.  It is probably the most popular dish in the land. The name five fingers is what is required to enjoy it, all five of them.  Typically this dish is made with either horse meat or mutton.  Beef is sometimes used but the others are much more common.  In fact horse meat is so common in Kazakhstan that Olympians had to beg the Olympic committee to allow them to bring it the games so that they could maintain their normal diet. Needless to say, you can certainly enjoy this dish made with beef or lamb and be authentic",
    },
    {
      name: 'Kuyrdaq',
      icon: IL_Kuyrdak,
      bgColor: 'rgba(187, 208, 136, 0.5)',
      price: 1.53,
      desc: "Kazakh Beshbarmak basically means “five fingers” in Kazakhstan.  It is probably the most popular dish in the land. The name five fingers is what is required to enjoy it, all five of them.  Typically this dish is made with either horse meat or mutton.  Beef is sometimes used but the others are much more common.  In fact horse meat is so common in Kazakhstan that Olympians had to beg the Olympic committee to allow them to bring it the games so that they could maintain their normal diet. Needless to say, you can certainly enjoy this dish made with beef or lamb and be authentic",
    },
    {
      name: 'Zhaima',
      icon: IL_Baursaq_PNG,
      bgColor: 'rgba(140, 250, 145,0.5)',
      price: 1.53,
      desc: "Kazakh baursak is served often with tea, either as a appetizer or dessert.  Fried dough is loved in nearly every nation on earth and Kazakhstan is no exception.  They can be made as either triangles or spheres.  Sometimes they will spread them all around the Darstakan (low table or covering) to show an abundance of food.  We made ours in spheres and then sprinkled them with sugar.  Fried dough is best enjoyed right out of the fryer and with a cup of Kazakh chai!",
    },
    /* {
      name: 'Grapes',
      icon: IL_Grapes_PNG,
      bgColor: 'rgba(227,206,243,0.5)',
      price: 1.53,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      name: 'Tometo',
      icon: IL_Tomato_PNG,
      bgColor: 'rgba(255, 234, 232, 0.5)',
      price: 1.53,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      name: 'Drinks',
      icon: IL_Greentea_PNG,
      bgColor: 'rgba(187, 208, 136, 0.5)',
      price: 1.53,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      name: 'Cauliflower',
      icon: IL_Cauliflawer_PNG,
      bgColor: 'rgba(140, 250, 145,0.5)',
      price: 1.53,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },*/
  ];
  return (
    <SafeAreaView style={styles.flex1}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={styles.flex1}>
        {/* Header */}
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* search */}
          <View style={{paddingHorizontal: 20}}>
            <View style={styles.wrapperSearch}>
              <TextInput placeholder="Search" style={styles.textInputSearch} />
              <IC_Search />
            </View>
          </View>
          {/* categories */}
          <View>
            <Text style={styles.titleCategories}>Categories</Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.scrollViewCategories}>
              <BoxItemCategories
                icon={<IC_Fruits />}
                color="rgba(169, 178, 169, 0.5)"
                text="Starter"
                onPress={() => navigation.navigate('Categories', 'Fruits')}
              />
              <BoxItemCategories
                icon={<IC_Vegetables />}
                color="rgba(233, 255, 210, 0.5)"
                text="Main course"
                onPress={() => navigation.navigate('Categories', 'Fruits')}
              />
              <BoxItemCategories
                icon={<IC_Drinks />}
                color="rgba(140, 175, 53, 0.5)"
                text="Drinks"
                onPress={() => navigation.navigate('Categories', 'Fruits')}
              />
            </ScrollView>
          </View>
          <Gap height={24} />
          {/* top products */}
          <View>
            <View style={styles.wrapperHeadTopProducts}>
              <Text style={styles.tittleTopProducts}>Top Recipes</Text>
              <TouchableOpacity>
                <Text style={styles.textSeeAll}>See All</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.sectionBoxTopProduct}>
              {dataTopProducts.map((item, index) => {
                return (
                  <BoxItemTopProduct
                    key={index}
                    bgColor={item.bgColor}
                    icon={item.icon}
                    text={item.name}
                    // price={item.price}
                    onPress={() => navigation.navigate('Detail', item)}
                  />
                );
              })}
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  flex1: {flex: 1},
  wrapperSearch: {
    height: 40,
    backgroundColor: colors.lightGrey,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 25,
  },
  titleCategories: {
    fontSize: 18,
    fontFamily: fonts.SemiBold,
    color: colors.primary,
    padding: 20,
  },
  scrollViewCategories: {
    paddingLeft: 20,
  },
  wrapperHeadTopProducts: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  tittleTopProducts: {
    color: colors.primary,
    fontFamily: fonts.SemiBold,
    fontSize: 20,
  },
  textSeeAll: {
    color: colors.black,
    fontFamily: fonts.Medium,
    fontSize: 12,
  },
  sectionBoxTopProduct: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});