import React from 'react';
import {
    StyleSheet,
    TouchableHighlight,
    Dimensions,
    View,
    Text
} from 'react-native';
 
import Pdf from 'react-native-pdf';

export default class App extends React.Component {
  render() {
    let source = {uri:'http://samples.leanpub.com/thereactnativebook-sample.pdf',cache:true};
    return (
      <View style={styles.container}>
                <Pdf
                    source={source}
                    horizontal={true}
                    fitWidth={true}
                    onLoadComplete={(pageCount)=>{
                        console.log(`total page count: ${pageCount}`);
                    }}
                    onPageChanged={(page,pageCount)=>{
                        console.log(`current page: ${page}`);
                    }}
                    onError={(error)=>{
                        console.log(error);
                    }}
                    style={styles.pdf}/>
            </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      marginTop: 25,
  },
  pdf: {
      flex:1,
      width:Dimensions.get('window').width,
  }
});