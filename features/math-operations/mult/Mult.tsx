import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from './../MathOperations.styles'
import { DefaultButton } from '../../../common/components/buttons/DefaultButton'
import { PATHS } from '../../../common/constants/paths'
import { useTranslation } from 'react-i18next'
import { AppLayout } from '../../../common/components/layouts/AppLayout'

export const Mult = ({ navigation }) => {
  const { t } = useTranslation('translation')

  const digits: Array<number> = [2, 3, 4, 5, 6, 7, 8, 9]

  return (
    <AppLayout title={t('mathOperations.multTable')}>
      <View>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate(PATHS.MULT_CHECK)}>
          <Text style={styles.buttonText}>{t('mathOperations.multCheck')}</Text>
        </TouchableOpacity>
        <View style={styles.digitsWrapper}>
          {digits.map(digit => (
            <TouchableOpacity
              key={digit}
              style={styles.button} 
              onPress={() => navigation.navigate(PATHS.MULT_DIGIT, { digit: digit })}
            >
              <Text style={styles.digit}>{digit}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </AppLayout>
  )
}