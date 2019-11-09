import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    inputSection: {
        paddingTop: 35,
        alignItems: 'center'
    },
	
	buttonView: {
		position: 'absolute',
		bottom: 95,
		width: 120,
		right: -10 
	},

    Button: {
        marginRight:40,
        marginLeft:40,
        backgroundColor:'#eea849',
		width: 60,
		height: 60,
		borderRadius: 60/2,
		alignItems: 'center',

    },

    Title: {
        textAlign: 'center',
        fontSize: 22,
        color: 'white',
        paddingBottom: 15
    },
	
	Empty: {
		paddingTop: 15,
		textAlign: 'center',
		color: 'white',
		fontSize: 17
	},
	
	Icon: {
		paddingTop: 16,
		alignItems: 'center'
	}

});