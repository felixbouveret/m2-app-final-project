import { StyleSheet, View } from 'react-native';
import Modal from 'react-native-modal';

function BabbleModal({
  children,
  isVisible,
  onClose,
  style,
  canBeSwiped = true,
}) {
  const styles = StyleSheet.create({
    modal: {
      margin: 0,
    },
    container: {
      backgroundColor: 'white',
      width: '100%',
      top: 128,
      padding: 24,
      borderRadius: 32,
      height: '100%',
    },
  });

  return (
    <Modal
      style={styles.modal}
      isVisible={isVisible}
      swipeDirection={canBeSwiped ? 'down' : null}
      propagateSwipe={true}
      swipeThreshold={50}
      onSwipeComplete={onClose}
      onRequestClose={onClose}
      onBackdropPress={onClose}>
      <View style={[styles.container, style]}>{children}</View>
    </Modal>
  );
}

export default BabbleModal;
