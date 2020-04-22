import React from 'react';
import {
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';
import styles from './styles';

export default class ProfileScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
           <View style={styles.header}>
           <Image style={styles.avatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
           <Text style={styles.name}>Dzyuba Yevhen</Text>
           </View>
           <View style={styles.body}>
           <Text style={styles.phone}>Phone:</Text>
            <Text style={styles.phoneinfo}>+38(063)03 45 676</Text>
           <Text style={styles.email}>E-mail:</Text>
             <Text style={styles.emailinfo}>fednyakillya12072001@gmail.com</Text>
             <Text style={styles.city}>Location:</Text>
             <Text style={styles.cityinfo}>Lviv, Ukraine</Text>
             </View>
            <View style={styles.buttons}>
               <TouchableOpacity style={styles.buttonContainer}>
                 <Text>Logout</Text>
               </TouchableOpacity>
         </View>
       </View>

        );
    }
}
