import Icon from '@expo/vector-icons/Entypo';
import { useState } from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { useSelector } from 'react-redux';

import Colors from '@/constants/Colors';
import useRepository from '@/database/Model';

export default function RoomInput({ roomUid }) {
  const { messages } = useRepository();
  const currentUser = useSelector(state => state.user);
  const [inputText, setInputText] = useState();

  const handlePost = () => {
    if (!inputText) return;
    messages.postRoomMessage(roomUid, {
      content: inputText,
      userUid: currentUser.uid,
      createdAt: new Date().getTime(),
    });
    setInputText('');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={88}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <TextInput
            placeholder="Envoyer un message..."
            style={[styles.input]}
            onChangeText={setInputText}
            value={inputText}
          />
          <TouchableOpacity
            style={[styles.submit, !inputText ? styles.submitDisabled : null]}
            onPress={handlePost}>
            <Icon size={24} color={Colors.orange[1000]} name="paper-plane" />
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    padding: 10,
    paddingBottom: 48,
    backgroundColor: Colors.orange[100],
  },
  input: {
    flex: 1,
    borderColor: Colors.orange[1000],
    borderWidth: 2,
    padding: 16,
    borderRadius: 32,
    backgroundColor: 'white',
  },
  submit: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.orange[200],
    padding: 8,
    height: 54,
    width: 54,
    borderRadius: 32,
    marginLeft: 10,
  },
});
