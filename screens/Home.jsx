import { useState } from "react"
import { View, Text, SafeAreaView, FlatList } from "react-native"

import {COLORS, NFTData, SIZES} from '../constants'

import {HomeHeader, NFTCard, FocusedStatusBar} from '../components';

const Home = () => {
  return (
    <View style={{flex: 1}}>
      <FocusedStatusBar background={COLORS.primary} />

      <View style={{flex: 1}}>
        <View style={{zIndex: 0 , marginVertical: SIZES.extraLarge}}>
          <FlatList 
            data={NFTData}
            renderItem={({item}) => <NFTCard data={item} />}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader onSearch={() => {}} />}
          />
        </View>

        {/* Background Colors... */}      
        <View style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          zIndex: -1,
        }}>

          
          <View style={{height: 300, backgroundColor: COLORS.primary}} />

          <View style={{flex: 1, backgroundColor: COLORS.white}} />

        </View>

      </View>

    </View>
  )
}

export default Home