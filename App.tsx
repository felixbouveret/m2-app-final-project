import '@/database/firebase';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';

import BabbleErrorPopin from '@/components/BabbleErrorPopin';
import BabbleInfoPopin from '@/components/BabbleInfoPopin';
import useCachedResources from '@/hooks/useCachedResources';
import useColorScheme from '@/hooks/useColorScheme';
import Navigation from '@/navigation';
import store from '@/store';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <Provider store={store}>
        <SafeAreaProvider>
          <Navigation colorScheme={colorScheme} />
          <BabbleErrorPopin />
          <BabbleInfoPopin />
        </SafeAreaProvider>
      </Provider>
    );
  }
}
