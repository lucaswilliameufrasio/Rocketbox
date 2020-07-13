import {StyleSheet, Platform} from 'react-native';
import {getBottomSpace, getStatusBarHeight} from 'react-native-iphone-x-helper';

const styles = StyleSheet.create({
  container: {
    ...Platform.select({
      ios: {
        paddingHorizontal: 20,
        paddingTop: getStatusBarHeight(),
        paddingTop: 0,
        flex: 1,
      },
      android: {
        paddingHorizontal: 7,
        paddingTop: 0,
        flex: 1,
      },
    }),
  },

  boxTitle: {
    marginTop: 50,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },

  list: {
    marginTop: 30,
  },

  file: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
  },

  separator: {
    height: 1,
    backgroundColor: '#EEE',
  },

  fileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  fileTitle: {
    fontSize: 14,
    color: '#333',
    marginLeft: 7,
  },

  fileDate: {
    fontSize: 14,
    color: '#666',
  },

  fab: {
    ...Platform.select({
      ios: {
        position: 'absolute',
        right: 30,
        bottom: 30 + getBottomSpace(),
        bottom: 30,
        width: 60,
        height: 60,
        backgroundColor: '#7159c1',
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
      },
      android: {
        position: 'absolute',
        right: 30,
        bottom: 30,
        width: 60,
        height: 60,
        backgroundColor: '#7159c1',
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
      },
    }),
  },
});

export default styles;
