import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { CreditCardInput } from 'react-native-credit-card-input';

import { FontAwesome } from '@expo/vector-icons';

export default class SubscriptionCardFormView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cardInfo: { valid: false } };
  }

  render() {
    const { onSubmit, submitting, error } = this.props;

    return (
      <View>
        <View>
          <CreditCardInput requiresName onChange={(cardInfo) => this.setState({ cardInfo })} />
        </View>
        <View style={styles.buttonWrapper}>
          <Button
            title='Add subscription'
            disabled={!this.state.cardInfo.valid || submitting}
            onPress={() => onSubmit(this.state.cardInfo)}
          />
          {error && (
            <View style={styles.alertWrapper}>
              <View style={styles.alertIconWrapper}>
                <FontAwesome name="exclamation-circle" size={20} style={{ color: '#c22' }} />
              </View>
              <View style={styles.alertTextWrapper}>
                <Text style={styles.alertText}>{error}</Text>
              </View>
            </View>
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  buttonWrapper: {
    padding: 10,
    zIndex: 100
  },
  alertTextWrapper: {
    flex: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  alertIconWrapper: {
    padding: 5,
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center'
  },
  alertText: {
    color: '#c22',
    fontSize: 16,
    fontWeight: '400'
  },
  alertWrapper: {
    backgroundColor: '#ecb7b7',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderRadius: 5,
    paddingVertical: 5,
    marginTop: 10
  }
});
