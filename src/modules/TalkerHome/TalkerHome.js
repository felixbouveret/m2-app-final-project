import { StyleSheet, View } from 'react-native';

import Background from '@/components/Background';
import Role from '@/components/RoleBlock';

import AvailableUsers from './components/AvailableUsers';
import WaitingList from './components/WaitingList';

function TalkerHome({ navigation }) {
  const styles = StyleSheet.create({
    loader: {
      flex: 1,
      width: '100%',
      height: '100%',
    },
  });

  return (
    <Background style={styles.background} noScroll={true}>
      <Role />
      <View>
        <AvailableUsers />
        <WaitingList navigation={navigation} />
      </View>
    </Background>
  );
}

export default TalkerHome;
