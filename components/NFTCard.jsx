import { View, Text, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import {COLORS, SIZES, SHADOWS, assets} from '../constants';

import { CircleButton, RectButton } from './Button';

import { SubInfo, NFTTitle, EthPrice } from './SubInfo';

const NFTCard = ({data}) => {
  const navigation = useNavigation();

  return (
    <View style={{
      backgroundColor: COLORS.white,
      borderRadius: SIZES.regular,
      marginBottom: SIZES.extraLarge,
      margin: SIZES.base,
      ...SHADOWS.dark
    }}>
      <View style={{width: '100%', height: 250, }}>
        <Image 
          source={data.image}
          resizeMode="cover"
          style={{
            width: '100%',
            height: '100%',
            borderTopLeftRadius: SIZES.regular,
            borderTopRightRadius: SIZES.regular,
          }}
        />

          {/* Heart Button... */}
        <CircleButton imgUrl={assets.heart} right={10} top={10} />
      </View>

      <SubInfo />

      <View style={{ width: '100%', padding: SIZES.regular }}>
        <NFTTitle 
        title={data.name}
        subtitle={data.creator}
        titleSize={SIZES.large}
        subtitleSize={SIZES.small}
        />

        <View style={{
          marginTop: SIZES.regular,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <EthPrice price={data.price} />

          <RectButton 
            minWidth={120}
            fontSize={SIZES.regular}
            handlePress={() => navigation.navigate("Details", { data })}
          />

        </View>
      </View>
    </View>
  )
}

export default NFTCard