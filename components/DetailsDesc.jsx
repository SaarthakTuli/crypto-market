import { View, Text } from 'react-native'
import React, { useState } from 'react'

import { EthPrice, NFTTitle } from './SubInfo'
import {COLOR, SIZES, FONTS, COLORS} from '../constants'

const DetailsDesc = ({data}) => {
  const [text, setText] = useState(data.description.slice(0, 100));
  const [readmore, setReadmore] = useState(false);

  return (
    <>
    <View style={{
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <NFTTitle 
        title={data.name} 
        subtitle={data.creator} 
        titleSize={SIZES.extraLarge} 
        subtitleSize={SIZES.regular} 
      />

      <EthPrice price={data.price} />
    </View>

    <View style={{ marginVertical: SIZES.extraLarge * 1.5 }}>
      <Text style={{
          fontSize: SIZES.regular, 
          fontFamily: FONTS.semiBold, 
          color: COLORS.primary
          }}>Description: </Text>

      <View style={{ marginTop: SIZES.base }}>
         <Text style={{
            fontSize: SIZES.small, 
            fontFamily: FONTS.regular, 
            color: COLORS.secondary, 
            lineHeight: SIZES.large
            }}> {text} 
            
            { !readmore && '...' }

            <Text 
            onPress={() => {
              if (!readmore) {
                setText(data.description)
                setReadmore(true)
              }
              else {
                setText(data.description.slice(0, 100))
                setReadmore(false)
              }
            }}
            style={{
              fontSize: SIZES.small, 
              fontFamily: FONTS.semiBold, 
              color: COLORS.primary, 
            }}>{readmore ? '  Show less' : "  Read More"}</Text>
            
            </Text>

      </View>

    </View>
    </>
  )
}

export default DetailsDesc