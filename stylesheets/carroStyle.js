import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    inputSection: {
        paddingTop: 35,
        alignItems: 'center'
    },

    Remove: {
    backgroundColor:'red',
	width: 35,
	height: 35,
   	borderRadius: 5,
	alignItems: 'center',
	borderWidth:1,
	borderColor: 'white',
	marginLeft: 5, 
    },

    Edit: {
    backgroundColor: 'green',
	width: 35,
	height: 35,
   	borderRadius: 5,
	alignItems: 'center',
	borderWidth:1,
	borderColor: 'white'
    },
	
    View: {
    backgroundColor:'#6498ed',
	width: 35,
	height: 35,
   	borderRadius: 5,
	alignItems: 'center',
	borderWidth:1,
	borderColor: 'white',
	marginLeft: 5, 
    },
	
	Title: {
		paddingTop: 5,
		flexGrow: 1,
		color: 'black',
		fontSize: 17,
		fontWeight: '700',
		textAlign: 'left'
	},
	
	Text: {
		paddingTop: 5,
		flexGrow: 1,
		color: 'black',
		fontSize: 15,
		textAlign: 'left'
	},
	
	List: {
		paddingLeft: 10,
		paddingBottom: 15,
		paddingTop: 10,
		backgroundColor: '#eee',
		borderBottomColor: 'white',
        borderBottomWidth: 2,
		borderTopColor: 'white',
        borderTopWidth: 2,
	}

    


});